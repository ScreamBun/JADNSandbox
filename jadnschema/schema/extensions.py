"""
JADN Schema Extension removal functions
"""
import os
import inflect

from dataclasses import dataclass, field
from typing import Dict, Generator, List, NoReturn, Optional, Set, Tuple, Union
from .definitions import Options
from .consts import CORE_TYPES, DEF_ORDER_FILE_NAMES, EXTENSIONS, ID_OPTIONS, OPTION_ID
from ..exceptions import SchemaException
__all__ = ["unfold_extensions"]


@dataclass
class EnumField:
    id: int
    value: str
    description: str = ""

    def list(self) -> list:
        return [self.id, self.value, self.description]


@dataclass
class DefField:
    id: int
    name: str
    type: str
    options: Options = field(default_factory=Options)
    description: str = ""

    def __post_init__(self):
        self.options = Options(self.options)

    def enum(self) -> EnumField:
        return EnumField(id=self.id, value=self.name, description=self.description)

    def list(self) -> list:
        return [self.id, self.name, self.type, self.options, self.description]


@dataclass
class DefType:
    name: str
    type: str
    options: Options = field(default_factory=Options)
    description: str = ""
    fields: Optional[Union[List[DefField], List[EnumField]]] = field(default_factory=list)

    def __post_init__(self):
        self.options = Options(self.options)
        Field = EnumField if self.type == "Enumerated" else DefField
        fields = []
        for f in self.fields:
            if isinstance(f, Field):
                fields.append(f)
            else:
                fields.append(Field(*f))
        self.fields = fields

    def enumerated(self) -> "DefType":
        if self.type == "Enumerated":
            return self
        return DefType(self.name, self.type, self.options, self.description, [f.enum() for f in self.fields])

    def list(self) -> list:
        return [self.name, self.type, self.options, self.description, [f.list() for f in self.fields]]


# Types
DefinitionDict = Dict[str, DefType]
# Consts
ENUM_ID = OPTION_ID["enum"]


# Helpers
def epx(opts: Options) -> Union[str, None]:
    ex = opts.enum
    return ex if ex is not None else opts.pointer


def enum_pointer_name(opts: Options, sys: str) -> Union[str, None]:
    val = epx(opts)
    if val is None:
        return None
    oname = "Enum" if opts.enum else "Pointer"
    return f"{val}{sys}{oname}{'-Id' if opts.id else ''}"


def get_def_order(basedir: str = os.path.curdir) -> Tuple[str, ...]:
    for fName in DEF_ORDER_FILE_NAMES:
        fPath = os.path.join(basedir, fName)
        if os.path.isfile(fPath):
            with open(fPath, "r", encoding="UTF-8") as f:
                return tuple(map(str.strip, f.readlines()))
    return ()


# Extension unfolding/simplify
def unfold_link(defs: DefinitionDict, sys: str) -> NoReturn:
    """
    Replace Key and Link options with explicit types
    :param defs:
    :param sys:
    :return:
    """
    ltypes = []     # Types that have links
    keys = {}       # Key names for types that have keys

    for type_def in tuple(defs.values()):
        if len(type_def.fields) > 0 and type_def.type != "Enumerated":
            for field_def in type_def.fields:
                field_opts, type_opts = field_def.options.split()
                if field_opts.key:
                    delattr(field_opts, "key")
                    new_name = f"{type_def.name}{sys}{field_def.name}"
                    if new_name not in defs:
                        defs[new_name] = DefType(
                            name=new_name,
                            type=field_def.type,
                            options=type_opts,
                            description=field_def.description
                        )
                    # Redirect field to explicit type definition
                    field_def = DefType(
                        name=new_name,
                        type=new_name,
                        options=field_opts
                    )
                    keys.update({type_def.name: new_name})
                elif field_opts.link and type_def.name not in ltypes:
                    ltypes.append(type_def.name)

    for type_name in ltypes:
        type_def = defs.get(type_name)
        for field_def in type_def.fields:
            field_opts, type_opts = field_def.options.split()
            if field_opts.link:
                delattr(field_def.options, "link")
                if key_type := keys.get(field_def.type):
                    field_def.type = key_type
                else:
                    raise SchemaException(f'{type_def.name}/{field_def.name}: "{field_def.type}" has no primary key')


def unfold_multiplicity(defs: DefinitionDict, sys: str) -> NoReturn:
    """
    Replace field multiplicity with explicit ArrayOf type definitions
    :param defs:
    :param sys:
    :return:
    """
    p = inflect.engine()
    for type_def in tuple(defs.values()):
        if len(type_def.fields) > 0 and type_def.type != "Enumerated":
            for field_def in type_def.fields:
                field_opts, type_opts = field_def.options.split()
                if field_opts.maxc is not None and field_opts.maxc != 1:
                    minc = field_opts.get("minc", 1) or 1
                    new_name = [type_def.name, sys, p.plural(field_def.name) if p.get_count(field_def.name) == 1 else field_def.name]
                    new_name = "".join(map(str.capitalize, new_name))
                    # Point existing field to new ArrayOf
                    if new_name not in defs:
                        defs[new_name] = DefType(
                            name=new_name,
                            type="ArrayOf",
                            options=Options(
                                vtype=field_def.type if field_def.type != "ArrayOf" else type_opts.vtype,
                                minv=max(minc, 1),  # Don't allow empty ArrayOf
                                **({"maxv": field_opts.maxc} if field_opts.maxc > 1 else {}),  # maxv defaults to 0
                                **({"unique": True} if type_opts.unique else {})  # Move unique option to ArrayOf
                            ),
                            description=field_def.description
                        )
                    delattr(field_opts, "maxc")
                    field_def.type = new_name
                    field_def.options = field_opts


def unfold_anonymous_types(defs: DefinitionDict, sys: str) -> NoReturn:
    """
    Replace anonymous types in fields with explicit type definitions
    :param defs:
    :param sys:
    :return:
    """
    for type_def in tuple(defs.values()):
        if len(type_def.fields) > 0 and type_def.type != "Enumerated":
            for field_def in type_def.fields:
                # If FieldOptions contains a type option, create an explicit type
                field_opts, type_opts = field_def.options.split()
                if type_opts.dict(exclude_unset=True):
                    # Move all type options to new type
                    name = enum_pointer_name(type_opts, sys)  # If enum/pointer option, use derived enum typename
                    new_name = [name] if name else [type_def.name, sys, field_def.name]
                    new_name = "".join(map(str.capitalize, new_name)).replace("_", "-")
                    if new_name not in defs:
                        new_type = field_def.type if epx(type_opts) is None else "Enumerated"
                        if new_type not in CORE_TYPES:  # Don't create a bad type definition
                            raise SchemaException(f"{type_def.name}.{field_def.name} -> {new_type} is not a built in type")
                        defs[new_name] = DefType(
                            name=new_name,
                            type=new_type,
                            options=type_opts,
                            description=field_def.description
                        )
                    # Redirect field to explicit type definition
                    field_def.type = new_name
                    field_def.options = field_opts


def unfold_derived_enum(defs: DefinitionDict, sys: str) -> NoReturn:
    """
    Generate Enumerated list of fields or JSON Pointers
    :param defs:
    :param sys:
    :return:
    """
    def enum_items(def_name: str) -> List[EnumField]:
        if (def_type := defs.get(def_name)) and len(def_type.fields) > 0:
            return [f.enum_field() for f in def_type.fields]
        return []

    def pointer_items(def_name: str) -> List[EnumField]:
        def pathnames(d_name: str, base="") -> Generator[list, None, None]:  # Walk subfields of referenced type
            if def_type := defs.get(d_name):
                if len(def_type.fields) > 0:
                    for f in def_type.fields:
                        if f.options.dir:
                            yield from pathnames(f.type, f"{f.name}/")
                        else:
                            yield [f.id, f"{base}{f.name}", f.description]
            else:
                raise SchemaException(f"{d_name} does not exists within the schema")
        return [EnumField(*f) for f in pathnames(def_name)]

    def update_eref(enums: dict, opts: Options, optname: str) -> NoReturn:
        if optVal := getattr(opts, optname):
            tmp_opts = Options([optVal] if optVal[0] in ID_OPTIONS else [])
            if name := enum_pointer_name(tmp_opts, sys):
                if name in enums:  # Reference existing Enumerated type
                    setattr(opts, optname, enums[name])
                else:  # Make new Enumerated type
                    make_items = enum_items if opts.enum else pointer_items
                    setattr(opts, optname, name)
                    defs[name] = DefType(
                        name=name,
                        type="Enumerated",
                        description="",
                        fields=make_items(name.rsplit(sys, maxsplit=1)[0])
                    )

    new_enums = {}
    # Replace enum/pointer options in Enumerated types with explicit items
    for type_def in tuple(defs.values()):
        if type_def.type == "Enumerated":
            if ep_name := enum_pointer_name(type_def.options, sys):
                optx = type_def.options.enum or type_def.options.pointer
                items = enum_items if type_def.options.enum else pointer_items
                type_def.fields = items(optx)
                delattr(type_def.options, "enum")
                delattr(type_def.options, "pointer")
                new_enums[ep_name] = type_def.name

    # Create new Enumerated enum/pointer types if they don't already exist
    for type_def in tuple(defs.values()):
        if type_def.type in ("ArrayOf", "MapOf"):
            update_eref(new_enums, type_def.options, "vtype")
            update_eref(new_enums, type_def.options, "ktype")


def unfold_mapOf_enum(defs: DefinitionDict) -> NoReturn:
    """
    Replace MapOf(enumerated key) with explicit Map
    :param defs:
    :return:
    """
    for type_name, type_def in tuple(defs.items()):
        if type_def.type == "MapOf":
            ktype = type_def.options.ktype
            ktype = ktype[1:] if ktype.startswith(ENUM_ID) else ktype
            if key_type := defs.get(ktype):
                key_type = key_type.enumerated()
                value_type = type_def.options.vtype
                if key_type.type == "Enumerated":
                    delattr(type_def.options, "ktype")
                    delattr(type_def.options, "vtype")
                    defs[type_name] = DefType(
                        name=type_def.name,
                        type="Map",
                        options=type_def.options,
                        description=type_def.description,
                        fields=[DefField(id=f.id, name=f.value, type=value_type, options=Options(minc=0), description=f.description) for f in key_type.fields]
                    )


def unfold_extensions(types: list, sys: str, extensions: Set[str] = None) -> list:
    """
    Return a schema with listed extensions or all extensions removed
    :param types: list of type definitions  to unfold
    :param sys: character used to denote a system defined definition
    :param extensions: the options to simplify
        * AnonymousType:   Replace all anonymous type definitions with explicit
        * Multiplicity:    Replace all multi-value fields with explicit ArrayOf type definitions
        * DerivedEnum:     Replace all derived and pointer enumerations with explicit Enumerated type definitions
        * MapOfEnum:       Replace all MapOf types with listed keys with explicit Map type definitions
        * Link:            Replace Key and Link fields with explicit types
    :return: simplified type definitions
    """
    exts = EXTENSIONS.union(extensions) if extensions else EXTENSIONS
    defs = {val[0]: DefType(*val) for val in types}

    if "Link" in exts:  # Replace Key and Link options with explicit types
        unfold_link(defs, sys)
    if "Multiplicity" in exts:  # Expand repeated types into ArrayOf definitions
        unfold_multiplicity(defs, sys)
    if "AnonymousType" in exts:  # Expand inline definitions into named type definitions
        unfold_anonymous_types(defs, sys)
    if "DerivedEnum" in exts:  # Generate Enumerated list of fields or JSON Pointers
        unfold_derived_enum(defs, sys)
    if "MapOfEnum" in exts:  # Generate explicit Map from MapOf
        unfold_mapOf_enum(defs)
    return [d.list() for d in defs.values()]
