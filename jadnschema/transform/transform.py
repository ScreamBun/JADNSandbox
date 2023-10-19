import copy

from typing import Generator, List, NoReturn, Set, Union
from jadn.definitions import (
    TypeName, BaseType, TypeDesc, Fields, ItemID, ItemValue, ItemDesc, FieldName, FieldOptions, FieldDesc, OPTION_ID,
    EXTENSIONS, OPTION_TYPES, is_builtin, has_fields, TypeDefinition, EnumFieldDefinition, GenFieldDefinition)
from jadn.utils import (
    del_opt, ftopts_s2d, get_optx, list_type_schema, opts_d2s, object_type_schema, topts_s2d, etrunc, raise_error)


def strip_comments(schema: dict, width=0) -> dict:  # Strip or truncate comments from schema
    sc = copy.deepcopy(schema)
    for tdef in sc['types']:
        tdef[TypeDesc] = etrunc(tdef[TypeDesc], width)
        if len(tdef) > Fields:
            fd = ItemDesc if tdef[BaseType] == 'Enumerated' else FieldDesc
            for fdef in tdef[Fields]:
                fdef[fd] = etrunc(fdef[fd], width)
    return sc


# Remove extensions from schema

# Replace Key and Link options with explicit types
def unfold_link(schema: dict, sys: str) -> NoReturn:
    ltypes = []     # Types that have links
    keys = {}       # Key names for types that have keys
    typex = {t[TypeName]: n for n, t in enumerate(schema['types'])}       # Build type index
    for tdef in list(schema['types']):
        if tdef.BaseType == 'MapOf':
            to = topts_s2d(tdef.TypeOptions)
            keys.update({tdef.TypeName: to['ktype']})
        if has_fields(tdef.BaseType):
            for fdef in tdef.Fields:
                fo, fto = ftopts_s2d(fdef.FieldOptions)
                if 'key' in fo:
                    if (newname := fdef.FieldType) not in typex:
                        newname = f'{tdef.TypeName}{sys}{fdef.FieldName}'
                        newopts = [fdef.FieldOptions.pop(get_optx(fdef.FieldOptions, o)) for o in fto]
                        schema['types'].append(TypeDefinition(newname, fdef.FieldType, newopts, fdef.FieldDesc))
                        fdef.FieldType = newname           # Redirect field to explicit type definition
                    keys.update({tdef.TypeName: newname})
                    del_opt(fdef.FieldOptions, 'key')
                elif 'link' in fo and tdef not in ltypes:
                    ltypes.append(tdef)
    for tdef in ltypes:
        for fdef in tdef.Fields:
            fo, fto = ftopts_s2d(fdef.FieldOptions)
            if 'link' in fo:
                del_opt(fdef.FieldOptions, 'link')
                try:
                    fdef.FieldType = keys[fdef.FieldType]
                except KeyError:
                    raise_error(f'{tdef.TypeName}/{fdef.FieldName}: "{fdef.FieldType}" has no primary key')


# Return option array index of enum or pointer option
def epx(topts: List[OPTION_TYPES]) -> Union[int, float, str, None]:
    ex = get_optx(topts, 'enum')
    return ex if ex is not None else get_optx(topts, 'pointer')


def epname(topts: List[OPTION_TYPES], sys: str) -> Union[str, None]:
    x = epx(topts)
    if x is None:
        return None
    oname = 'Enum' if topts[x][0] == OPTION_ID['enum'] else 'Pointer'
    return f"{topts[x][1:]}{sys}{oname}{'-Id' if get_optx(topts, 'id') else ''}"


# Replace field multiplicity with explicit ArrayOf type definitions
def unfold_multiplicity(schema: dict, sys: str) -> NoReturn:
    for tdef in list(schema['types']):
        if has_fields(tdef.BaseType):
            for fdef in tdef.Fields:
                fo, fto = ftopts_s2d(fdef.FieldOptions)
                if 'maxc' in fo and fo['maxc'] != 1:
                    minc = fo.get('minc', 1)
                    newopts = {
                        'vtype': fdef.FieldType,
                        'minv': max(minc, 1),  # Don't allow empty ArrayOf
                        **({'maxv': fo['maxc']} if fo['maxc'] > 1 else {}),  # maxv defaults to 0
                        **({'unique': True} if 'unique' in fto else {})  # Move unique option to ArrayOf
                    }
                    # Point existing field to new ArrayOf
                    fdef.FieldType = f'{tdef.TypeName}{sys}{fdef.FieldName}'
                    schema['types'].append(TypeDefinition(fdef.FieldType, 'ArrayOf', opts_d2s(newopts), fdef.FieldDesc))
                    # Remove unused FieldOptions
                    del_opt(fdef.FieldOptions, 'maxc')
                    if minc != 0:
                        del_opt(fdef.FieldOptions, 'minc')
                    del_opt(fdef.FieldOptions, 'unique')


# Replace anonymous types in fields with explicit type definitions
def unfold_anonymous_types(schema: dict, sys: str) -> NoReturn:
    for tdef in list(schema['types']):
        if has_fields(tdef.BaseType):
            for fdef in tdef.Fields:
                # If FieldOptions contains a type option, create an explicit type
                if fto := ftopts_s2d(fdef.FieldOptions)[1]:
                    # Move all type options to new type
                    newopts = [fdef.FieldOptions.pop(get_optx(fdef.FieldOptions, o)) for o in fto]
                    name = epname(newopts, sys)              # If enum/pointer option, use derived enum typename
                    newname = name if name else f'{tdef.TypeName}{sys}{fdef.FieldName}'
                    if newname not in [t.TypeName for t in schema['types']]:
                        newtype = 'Enumerated' if epx(newopts) is not None else fdef.FieldType
                        assert is_builtin(newtype), f'{newname} ({newtype})'   # Don't create a bad type definition
                        schema['types'].append(TypeDefinition(newname, newtype, newopts, fdef.FieldDesc))
                    fdef.FieldType = newname           # Redirect field to explicit type definition


# Generate Enumerated list of fields or JSON Pointers
def unfold_derived_enum(schema: dict, sys: str) -> NoReturn:
    typex = {t[TypeName]: n for n, t in enumerate(schema['types'])}       # Build type index

    def update_eref(enums: dict, opts: List[OPTION_TYPES], optname: str) -> NoReturn:
        n = get_optx(opts, optname)
        if n is not None:
            if name := epname([opts[n][1:]], sys):
                if name in enums:       # Reference existing Enumerated type
                    opts[n] = f'{opts[n][:1]}{enums[name]}'
                else:                   # Make new Enumerated type
                    make_items = enum_items if opts[n][1:2] == OPTION_ID['enum'] else pointer_items
                    opts[n] = f'{opts[n][:1]}{name}'
                    schema['types'].append(TypeDefinition(name, 'Enumerated', [], '', [EnumFieldDefinition(*f) for f in make_items(name.rsplit(sys, maxsplit=1)[0])]))

    def enum_items(rtype: str) -> list:
        tdef = schema['types'][typex[rtype]]
        if tdef.BaseType == 'Enumerated':
            return [[f.ItemID, f.ItemValue, f.ItemDesc] for f in tdef.Fields]
        fields = tdef.Fields if has_fields(tdef.BaseType) else []
        return [[f.FieldID, f.FieldName, f.FieldDesc] for f in fields]

    def pointer_items(rtype: str) -> list:
        def pathnames(rtype: str, base='') -> Generator[list, None, None]:  # Walk subfields of referenced type
            tdef = schema['types'][typex[rtype]]  # TODO: proper error handling for built-in or non-existing reference
            if has_fields(tdef.BaseType):
                for f in tdef.Fields:
                    if OPTION_ID['dir'] in f.FieldOptions:
                        if f.FieldType in typex:
                            yield from pathnames(f.FieldType, f'{f.FieldName}/')
                    else:
                        yield [base + f.FieldName, f.FieldDesc]
        return [[n+1] + f for n, f in enumerate(pathnames(rtype))]

    enums = {}
    for tdef in list(schema['types']):  # Replace enum/pointer options in Enumerated types with explicit items
        if tdef.BaseType == 'Enumerated':
            to = tdef.TypeOptions
            if rname := epname(to, sys):
                optx = get_optx(to, 'enum')
                optx = optx if optx is not None else get_optx(to, 'pointer')
                items = enum_items if to[optx][:1] == OPTION_ID['enum'] else pointer_items
                tdef.Fields = items(to[optx][1:])
                del to[optx]
                enums.update({rname: tdef.TypeName})

    # Create new Enumerated enum/pointer types if they don't already exist
    for tdef in list(schema['types']):
        if tdef.BaseType in ('ArrayOf', 'MapOf'):
            update_eref(enums, tdef.TypeOptions, 'vtype')
            update_eref(enums, tdef.TypeOptions, 'ktype')


def unfold_map_of_enum(schema: dict) -> NoReturn:
    """
    Replace MapOf(enumerated key) with explicit Map
    """
    typex = {t[TypeName]: n for n, t in enumerate(schema['types'])}       # Build type index
    for n, tdef in enumerate(schema['types']):
        to = topts_s2d(tdef.TypeOptions)
        if tdef.BaseType == 'MapOf' and schema['types'][typex[to['ktype']]][BaseType] == 'Enumerated':
            newfields = [GenFieldDefinition(f[ItemID], f[ItemValue], to['vtype'], [], f[ItemDesc]) for f in schema['types'][typex[to['ktype']]][Fields]]
            schema['types'][n] = TypeDefinition(tdef.TypeName, 'Map', [], tdef.TypeDesc, newfields)


def unfold_extensions(schema: dict, extensions: Set[str] = None) -> dict:  # Remove schema extensions
    """
    Return a schema with listed extensions or all extensions removed.

    extensions = set of extension names to process:
        AnonymousType:   Replace all anonymous type definitions with explicit
        Multiplicity:    Replace all multi-value fields with explicit ArrayOf type definitions
        DerivedEnum:     Replace all derived and pointer enumerations with explicit Enumerated type definitions
        MapOfEnum:       Replace all MapOf types with listed keys with explicit Map type definitions
        Link:            Replace Key and Link fields with explicit types
    """
    extensions = extensions or EXTENSIONS
    assert extensions - EXTENSIONS == set()
    sys = '$'  # Character reserved for tool-generated TypeNames
    sc = object_type_schema(copy.deepcopy(schema))  # Don't modify original schema

    if 'Link' in extensions:                    # Replace Key and Link options with explicit types
        unfold_link(sc, sys)
    if 'Multiplicity' in extensions or 'AnonymousType' in extensions:   # Expand repeated types into ArrayOf defintions
        unfold_multiplicity(sc, sys)
    if 'AnonymousType' in extensions:           # Expand inline definitions into named type definitions
        unfold_anonymous_types(sc, sys)
    if 'DerivedEnum' in extensions:             # Generate Enumerated list of fields or JSON Pointers
        unfold_derived_enum(sc, sys)
    if 'MapOfEnum' in extensions:               # Generate explicit Map from MapOf
        unfold_map_of_enum(sc)
    return list_type_schema(sc)


def get_enum_items(tdef: list, topts: dict, types: dict) -> list:
    def ptr(fdef: list):
        if OPTION_ID['dir'] in fdef[FieldOptions]:
            return f'{fdef[FieldName]}^'
        return fdef[FieldName]

    if 'enum' in topts:
        return types[topts['enum']][Fields]
    if 'pointer' in topts:
        return [(n, ptr(f), '') for n, f in enumerate(types[topts['pointer']][Fields])]
    return tdef[Fields]


__all__ = [
    'get_enum_items',
    'strip_comments',
    'unfold_extensions'
]