"""
JADN Schema Class
"""
import json
import os

from io import BufferedIOBase, TextIOBase
from numbers import Number
from pathlib import Path
from typing import Any, Callable, Dict, List, NoReturn, Optional, Set, Union, get_args
from pydantic import Field, root_validator
from pydantic.main import ModelMetaclass, PrivateAttr  # pylint: disable=no-name-in-module
from .baseModel import BaseModel
from .consts import EXTENSIONS, OPTION_ID
from .info import Exports, Information
from .definitions import DefTypes, Definition, DefinitionBase, make_def
from .definitions.field import getFieldType
from .extensions import unfold_extensions
from .formats import ValidationFormats
from ..exceptions import FormatError, SchemaException
__pdoc__ = {
    "Schema.info": "Information about this package",
    "Schema.types": "Types defined in this package"
}


def update_types(types: Union[dict, list], formats: Dict[str, Callable] = None, namespace: Set = None) -> dict:
    if isinstance(types, list):
        def_types = {td[0]: make_def(td, formats) for td in types}
        cls_defs = {d.__name__: d for d in def_types.values()}
        cls_defs.update(DefTypes)
        for def_cls in def_types.values():
            try:
                def_cls.update_forward_refs(**cls_defs)
            except Exception as err:
                # Schema is unresolved
                if namespace and err.name.split('__')[0] in namespace:
                   continue
                else:
                    raise Exception(err)
        return def_types
    return types


class SchemaMeta(ModelMetaclass):
    def __new__(mcs, name, bases, attrs, **kwargs):  # pylint: disable=bad-classmethod-argument
        new_namespace = {
            **attrs,
            "_info": "info" in attrs
        }
        if types := attrs.get("types", None):
            new_namespace["types"] = update_types(types, attrs.get("validation"))

        return super().__new__(mcs, name, bases, new_namespace, **kwargs)  # pylint: disable=too-many-function-args


class Schema(BaseModel, metaclass=SchemaMeta):  # pylint: disable=invalid-metaclass
    """
    JADN Schema
    """
    info: Optional[Information] = Field(default_factory=Information)
    types: dict = Field(default_factory=dict)  # Dict[str, Definition]
    _info: bool = PrivateAttr(False)
    __formats__: Dict[str, Callable] = ValidationFormats

    def __init__(self, **kwargs):
        if "info" in kwargs and "namespaces" in kwargs["info"]:
            nms = set(kwargs["info"]["namespaces"])
        else: 
            nms = None
        
        if "info" in kwargs and "config" in kwargs["info"]:
            DefinitionBase.__config__.info = kwargs["info"]["config"]
    
        if "types" in kwargs:
            kwargs["types"] = update_types(kwargs["types"], self.__formats__, nms)
        super().__init__(**kwargs)
        DefinitionBase.__config__.types = self.types

    # Pydantic Overrides
    def schema(self) -> Dict[str, Any]:
        """
        Format this schema into valid JADN format
        :return: JADN formatted schema
        """
        schema = {}
        if self._info:
            schema["info"] = self.info.schema()
        schema.update(types=[d.schema() for d in self.types.values()])
        return schema

    # Validation
    def validate(self, value: Any) -> Definition:
        """
        Validate the given data against the exported types
        :param value: data to validate
        :return: validated data as an instance of the exported type
        """
        if self.info:
            if self.info.exports:
                for export in self.info.exports:
                    return self.validate_as(export[0], value)
        raise SchemaException("Value is not a valid exported type")

    def validate_as(self, type_: str, value: Any) -> Definition:
        """
        Validate the given data against a specific type
        :param type_: name of the type
        :param value: data to validate
        :return: validated data as an instance of the exported type
        """
        if self.info and self.info.exports:
            if type_ not in self.info.exports.json():
                print("Type is not a valid exported definition")
        if cls := self.types.get(type_):
            if isinstance(value, dict) and all(str(k).isdigit() for k in value.keys()):
                value = cls.expandCompact(value)

            return cls.validate(value)
        raise SchemaException(f"{type_} is not a valid type within the schema")
    
    @root_validator
    def validate_exports(cls, v):
        invalid_exports=[]
        #check if info and info.exports exist
        if v is not None and v.get("info") is not None and v.get("info").get("exports") is not None:
            if exports := Exports.schema(v.get("info").get("exports")):
                for export in exports:
                    if not v.get("types").get(export):
                        invalid_exports.append(export)
                if len(invalid_exports) != 0:
                    raise SchemaException(f"Invalid exports within the schema: {invalid_exports}")  
        return v          
    
    @root_validator
    def validate_dependencies(cls, v): # Validate ktype and vtype
        jadnType = [i.data_type for i in get_args(Definition)]
        if v is not None and v.get("types") is not None:  
            ktype = None
            vtype = None
            for k in v.get("types").values():
                if k.data_type == "ArrayOf":
                    typeName = k.name
                    vtype = k.__options__.vtype
            
                if k.data_type == "MapOf":
                    typeName = k.name
                    ktype = k.__options__.ktype
                    vtype = k.__options__.vtype

                    if ktype is not None:
                        if ktype in jadnType:
                            return v
                        for t in v.get("types"):
                            if t == ktype:
                                return v
                        raise SchemaException(f"Invalid ktype for {typeName}: {ktype}")  
                
                if vtype is not None:
                    if vtype in jadnType:
                        return v
                    for t in v.get("types"):
                        if t == vtype:
                            return v
                    raise SchemaException(f"Invalid vtype for {typeName}: {vtype}")  
            
            return v
            
    # Helpers
    def _dumps(self, val: Union[dict, float, int, str, tuple, Number], indent: int = 2, _level: int = 0) -> str:
        """
        Properly format a JADN schema
        :param val: value to format
        :param indent: spaces to indent
        :param _level: current indent level
        :return: Formatted JADN schema
        """
        if isinstance(val, (Number, str)):
            return json.dumps(val)

        _indent = indent - 1 if indent % 2 == 1 else indent
        _indent += (_level * 2)
        ind, ind_e = " " * _indent, " " * (_indent - 2)

        if isinstance(val, dict):
            lines = ",\n".join(f"{ind}\"{k}\": {self._dumps(v, indent, _level+1)}" for k, v in val.items())
            return f"{{\n{lines}\n{ind_e}}}"

        if isinstance(val, (list, tuple)):
            nested = val and isinstance(val[0], (list, tuple))  # Not an empty list
            lvl = _level+1 if nested and isinstance(val[-1], (list, tuple)) else _level
            lines = [self._dumps(v, indent, lvl) for v in val]
            if nested:
                return f"[\n{ind}" + f",\n{ind}".join(lines) + f"\n{ind_e}]"
            return f"[{', '.join(lines)}]"
        return "???"

    def _dependencies(self) -> Dict[str, Set[str]]:
        """
        Determine the dependencies for each type within the schema
        :return: dictionary of dependencies
        """
        base_deps = {a.name for a in get_args(Definition)}
        base_deps.update({None, ""})
        deps = {}
        for def_cls in self.types.values():
            if def_cls.data_type in ("ArrayOf", "MapOf"):
                deps[def_cls.name] = {
                    def_cls.__options__.get("ktype", "String"),
                    def_cls.__options__.get("vtype", "String")
                } - base_deps
            elif def_cls.has_fields():
                fields = def_cls.__fields__
                if "__root__" in fields:
                    deps[def_cls.name] = {
                        def_cls.__options__.get("ktype", "String"),
                        def_cls.__options__.get("vtype", "String")
                    } - base_deps
                else:
                    field_deps = set()
                    for f in fields.values():
                        field_deps.add(getFieldType(f))
                        if f.field_info.extra["type"] in ("ArrayOf", "MapOf"):
                            field_deps.update({
                                f.field_info.extra["options"].get("ktype"),
                                f.field_info.extra["options"].get("vtype")
                            })
                    deps[def_cls.name] = field_deps - base_deps
            else:
                deps[def_cls.name] = {def_cls.data_type, } - base_deps

        return deps

    def addFormat(self, fmt: str, fun: Callable[[Any], Optional[List[Exception]]], override: bool = False) -> NoReturn:
        """
        Add a format validation function
        :param fmt: format to validate
        :param fun: function that performs the validation
        :param override: override the format if it exists
        :return: None
        """
        if fmt in self.__formats__ and not override:
            raise FormatError(f"format {fmt} is already defined, use `override=True` to override format validation")
        self.__formats__[fmt] = fun

    def analyze(self) -> dict:
        """
        Analyze the given schema for unreferenced and undefined types
        :return: analysis results
        """
        def ns(name: str, nsids: dict) -> str:
            # Return namespace if name has a known namespace, otherwise return full name
            nsp = name.split(':')[0]
            return nsp if nsp in nsids else name

        type_deps = self._dependencies()
        imports = getattr(self.info.namespaces, "value", lambda: {})()
        exports = getattr(self.info.exports, "value", lambda: [])()

        defs = set(type_deps) | set(imports)
        refs = {ns(r, imports) for d in type_deps.values() for r in d} | set(exports)
        oids = (OPTION_ID['enum'], OPTION_ID['pointer'])
        refs = {r[1:] if r[0] in oids else r for r in refs}  # Reference base type for derived enums/pointers
        return {
            "unreferenced": list(map(str, defs - refs)),
            "undefined": list(map(str, refs - defs)),
            "cycles": [],
        }

    def dump(self, fname: Union[str, Path, BufferedIOBase, TextIOBase], indent: int = 2) -> NoReturn:
        """
        Write the JADN to a file
        :param fname: file to write to
        :param indent: spaces to indent
        :return: Formatted JADN schema in the given file
        """
        if isinstance(fname, (BufferedIOBase, TextIOBase)):
            fname.write(self.dumps(indent))
        else:
            output = fname if fname.endswith(".jadn") else f"{fname}.jadn"
            with open(output, "w", encoding="UTF-8") as f:
                f.write(self.dumps(indent))

    def dumps(self, indent: int = 2) -> str:
        """
        Properly format a JADN schema
        :param indent: spaces to indent
        :return: Formatted JADN schema in string format
        """
        return self._dumps(self.schema(), indent=indent)

    @classmethod
    def load(cls, fname: Union[str, BufferedIOBase, TextIOBase]) -> "Schema":
        """
        Load a JADN schema from a file
        :param fname: JADN schema file to load
        :return: Loaded schema
        """
        if isinstance(fname, (BufferedIOBase, TextIOBase)):
            return cls.parse_raw(fname.read())

        if isinstance(fname, str):
            if os.path.isfile(fname):
                return cls.parse_file(fname)
            raise FileNotFoundError(f"Schema file not found - '{fname}'")
        raise TypeError("fname is not valid")

    @classmethod
    def loads(cls, schema: Union[bytes, bytearray, dict, str]) -> "Schema":
        """
        load a JADN schema from a string
        :param schema: JADN schema to load
        :return: Loaded schema
        """
        if isinstance(schema, dict):
            return cls.parse_obj(schema)
        return cls.parse_raw(schema)

    def simplify(self, extensions: Set[str] = None) -> "Schema":
        """
        Simplify the schema with schema extensions removed
        :param extensions: the options to simplify
            * AnonymousType:   Replace all anonymous type definitions with explicit
            * Multiplicity:    Replace all multi-value fields with explicit ArrayOf type definitions
            * DerivedEnum:     Replace all derived and pointer enumerations with explicit Enumerated type definitions
            * MapOfEnum:       Replace all MapOf types with listed keys with explicit Map type definitions
            * Link:            Replace Key and Link fields with explicit types
        :return: simplified schema
        """
        schema = self.schema()
        exts = EXTENSIONS.union(extensions) if extensions else EXTENSIONS
        schema["types"] = unfold_extensions(schema["types"], self.info.config.Sys, exts)
        return Schema(**schema)
