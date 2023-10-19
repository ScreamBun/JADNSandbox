import copy
import json
import os

from collections import defaultdict
from typing import Dict, Optional, List, NoReturn, Set, TextIO, Tuple, Union
from jadn import check, load_any
from jadn.definitions import (
    TypeName, BaseType, TypeOptions, TypeDesc, Fields, FieldType, FieldOptions, OPTION_ID, is_builtin
)
from jadn.utils import build_deps, raise_error


class SchemaPackage:
    source: str                           # Filename or URL
    package: str                          # Namespace unique name
    schema: dict                          # JADN data
    namespaces: dict                      # Copy of meta['namespaces'] or empty {}
    tx: Dict[str, list]                   # Type index: {type name: type definition in schema}
    deps: Dict[str, Set[str]]            # Internal dependencies: {type1: {t2, t3}, type2: {t3, t4, t5}}
    refs: Dict[str, Dict[str, Set[str]]]  # External references {namespace1: {type1: {t2, t3}, ...}}
    used: Set[str]                        # Types from this package that have been referenced {t2, t3}

    def __init__(self, source: Union[dict, TextIO]):     # Read schema data, get package name
        if isinstance(source, dict):      # If schema is provided, save data
            self.schema = source
            self.source = ''
        else:
            self.schema = load_any(source)
            self.source = source.name

        try:
            self.package = self.schema['info']['package']
        except KeyError:
            raise_error(f'Schema package {self.source} must have a package ID')

        self.namespaces = self.schema['info']['namespaces'] if 'namespaces' in self.schema['info'] else {}
        self.clear()

    def load(self) -> NoReturn:     # Validate schema, build type dependencies and external references
        if hasattr(self, 'deps'):           # Ignore if already loaded
            return
        check(self.schema)
        self.tx = {t[TypeName]: t for t in self.schema['types']}
        self.deps = build_deps(self.schema)
        self.refs = defaultdict(lambda: defaultdict(set))
        for tn in self.deps:
            for dn in list(self.deps[tn]):     # Iterate over copy so original can be modified safely
                if ':' in dn:
                    self.deps[tn].remove(dn)
                    nsid, typename = dn.split(':', maxsplit=1)
                    try:
                        self.refs[self.namespaces[nsid]][tn].add(typename)
                    except KeyError as e:
                        raise_error(f'Resolve: no namespace defined for {e}')

    def clear(self) -> NoReturn:
        self.used = set()

    def add_used(self, t) -> NoReturn:
        self.used.add(t)


# Resolve util functions
def merge_tname(tref: str, package: str, namespaces: Dict[str, str], nsids: dict, sys: str = '$') -> str:
    """
    Convert reference to an imported type (nsid:TypeName) to a local type. Return unchanged if local.
    :param tref: Type name to be merged into the base package
    :param package: Namespace (unique name) of base package
    :param namespaces: Dict that maps base package's namespace ids to namespaces
    :param nsids: Dict that maps each namespace to a namespace id. If blank, do not append $nsid qualifier
    :param sys: single character system generated type delimiter
    :return: Local type name, qualified (TypeName$nsid) or unqualified (TypeName)
    """
    nsid, tname = tref.split(':', maxsplit=1) if ':' in tref else ('', tref)
    ns_id = nsids[namespaces[nsid] if nsid else package][0]
    return f'{tname}{sys}{ns_id}' if ns_id and not is_builtin(tname) else tname


def merge_typedef(tdef: list, package: str, namespaces: Dict[str, str], nsids: dict, sys: str = '$') -> list:
    oids = [OPTION_ID['ktype'], OPTION_ID['vtype'], OPTION_ID['enum'], OPTION_ID['pointer'], OPTION_ID['and']]  # Options whose value is/has a type name

    def update_opts(opts: List[str]) -> List[str]:
        return [f'{x[0]}{merge_tname(x[1:], package, namespaces, nsids, sys)}' if x[0] in oids else x for x in opts]

    td = [
        merge_tname(tdef[TypeName], package, namespaces, nsids, sys),
        tdef[BaseType],
        update_opts(tdef[TypeOptions]),
        tdef[TypeDesc]
    ]
    if len(tdef) > Fields:
        new_fields = copy.deepcopy(tdef[Fields])
        if td[BaseType] != 'Enumerated':
            for f in new_fields:
                f[FieldOptions] = update_opts(f[FieldOptions])
                f[FieldType] = merge_tname(f[FieldType], package, namespaces, nsids, sys)
        td.append(new_fields)
    return td


def make_enum(sm: SchemaPackage, tname: str, sys: str = '$') -> bool:
    if tname[0] in (OPTION_ID['enum'], OPTION_ID['pointer']):
        tn = tname[1:]
        if tn not in sm.used and tn in sm.tx:
            etype = 'Enum' if tname[0] == OPTION_ID['enum'] else 'Point'
            sm.schema['types'].append([f'{tn}{sys}{etype}', 'Enumerated', [], '', [[f[0], f[1], ''] for f in sm.tx[tn][Fields]]])
        return True
    return False


# add referenced typenames in this package to used list
def add_types(sm: SchemaPackage, tname: str, sys: str = '$') -> NoReturn:
    if {tname} - sm.used:
        sm.add_used(tname)
    try:
        for tn in sm.deps[tname]:
            add_types(sm, tn, sys)
    except KeyError as e:
        if not make_enum(sm, tname, sys):
            raise_error(f'Resolve: {e} not defined in {sm.package} ({sm.source})')


# add referenced types from other packages to used list
def resolve(sm: SchemaPackage, types: Set[str], packages: dict, sys: str = '$') -> NoReturn:
    if set(types) - sm.used:
        sm.load()
    for tn in types:
        add_types(sm, tn, sys)
    for pkg in sm.refs:
        if pkg in packages:
            print(f'  Resolve {pkg} into {sm.package}')
            resolve(packages[pkg], {t for k, v in sm.refs[pkg].items() if k in sm.used for t in v}, packages)
        else:
            print(f'* Resolve: package {pkg} not found.')


# Add referenced types to schema. dirname => other schema files
def resolve_imports(schema: dict, schema_list: list, no_nsid: Tuple[str, ...] = ()):
    sys = '$'  # Character reserved for use in tool-generated type names
    # if 'namespaces' not in schema['info']:
    #    return schema
    root = SchemaPackage(schema)
    packages = {root.package: root}
    nsids = defaultdict(list)

    for fn in schema_list:  
        sm = SchemaPackage(fn)
        if sm.package not in packages:            # Add new package to list
            packages.update({sm.package: sm})
        elif root.package == sm.package and root.schema == sm.schema:     # Update source of root schema if found
            packages[sm.package].source = fn
        elif packages[sm.package].source != fn:                   # Flag multiple files with same package name
            print(f'* Duplicate package {sm.package}, Using: {packages[sm.package].source}, Ignoring: {fn}')
        for i, m in sm.namespaces.items():
            nsids[m].append('' if i in no_nsid else i)
        resolve(root, root.schema['info']['exports'] if 'exports' in root.schema['info'] else set(), packages)

    for t in root.used.copy():
        if t[0] in (OPTION_ID['enum'], OPTION_ID['pointer']):
            if t[1:] not in root.used:
                raise_error(f'Resolve: no base type for {t}')
            root.used.remove(t)     # Don't need explicit type if base type is present

    # Copy all needed types from other packages into root
    nsids[root.package] = ['']
    sc = {'info': {k: v for k, v in root.schema['info'].items() if k != 'namespaces'}, 'types': []}    # Remove namespaces
    for sm in [root] + [m for m in packages.values() if m.package != root.package]:
        sc['types'] += [merge_typedef(t, sm.package, sm.namespaces, nsids, sys) for t in sm.schema['types'] if t[TypeName] in sm.used]
    return sc