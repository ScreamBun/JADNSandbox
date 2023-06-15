"""
JADN Structure Types
"""
from enum import Enum, EnumMeta
from typing import Any, ClassVar, Optional, Union
from pydantic import Extra, ValidationError, root_validator
from pydantic.utils import GetterDict
from .definitionBase import DefinitionBase, DefinitionMeta
from .options import Options  # pylint: disable=unused-import
from .primitives import validate_format

__all__ = ["Array", "ArrayOf", "Choice", "Enumerated", "Map", "MapOf", "Record"]


# Meta Classes
class OptionalFieldsMeta(DefinitionMeta):
    def __new__(mcs, name, bases, attrs, **kwargs):  # pylint: disable=bad-classmethod-argument
        annotations = attrs.get('__annotations__', {})
        for base in bases:
            annotations.update(base.__annotations__)
        for field in annotations:
            if not field.startswith('__'):
                annotations[field] = Optional[annotations[field]]
        new_namespace = {
            **attrs,
            "__annotations__": annotations
        }
        return super().__new__(mcs, name, bases, new_namespace, **kwargs)


class EnumeratedMeta(DefinitionMeta):
    def __new__(mcs, name, bases, attrs, **kwargs):  # pylint: disable=bad-classmethod-argument
        base_enums = list(filter(None, [
            *[getattr(b, "__enums__", None) for b in reversed(bases) if issubclass(b, DefinitionBase) and b != DefinitionBase],
            attrs.pop("__enums__", None), attrs.pop("Values", None),
            kwargs.pop("__enums__", None), kwargs.pop("Values", None),
            getattr(mcs, "__enums__", None), getattr(mcs, "Values", None),
        ]))
        enums = {}
        for enum in base_enums:
            if isinstance(enum, (Enum, EnumMeta)):
                enums.update({e.name: e.value for e in enum})
            else:
                enums.update({k: getattr(enum, k) for k in vars(enum) if not k.startswith("_")})
        new_namespace = {
            **attrs,
            "__enums__": Enum(name, enums)
        }
        return super().__new__(mcs, name, bases, new_namespace, **kwargs)


# Structure Classes
class Array(DefinitionBase):
    """
    An ordered list of labeled fields with positionally-defined semantics.
    Each field has a position, label, and type.
    """
    # __root__: Union[set, str, tuple]
    __options__ = Options(data_type="Array")  # pylint: disable=used-before-assignment

    @root_validator(pre=True)
    def validate_data(cls, value: dict) -> dict:  # pylint: disable=no-self-argument
        """
        Pydantic validator - validate the data as an Array type
        :param value: data to validate
        :raise ValueError: invalid data given
        :return: original data
        """

        if isinstance(value, (GetterDict)):
            value = value._obj

            if fmt := cls.__options__.format:
                print(f"Array format: {value}")
                validate_format(cls, fmt, value)

            value = {k:v for k,v in zip(cls.__fields__.keys(), value)}

        return value

    class Options:
        data_type = "Array"


class ArrayOf(DefinitionBase):
    """
    A collection of fields with the same semantics.
    Each field has type vtype.
    Ordering and uniqueness are specified by a collection option.
    """
    __root__: Union[set, str, tuple]
    __options__ = Options(data_type="ArrayOf")  # pylint: disable=used-before-assignment

    @root_validator(pre=True)
    def validate_data(cls, value: dict) -> dict:  # pylint: disable=no-self-argument
        """
        Pydantic validator - validate the data as an ArrayOf type
        :param value: data to validate
        :raise ValueError: invalid data given
        :return: original data
        """
        val = value.get("__root__", None)
        vtype = cls.__options__.vtype
        if val_cls := cls.__config__.types.get(vtype):
            return {"__root__": [val_cls.validate(v) for v in val]}
        raise ValueError(f"ValueType of `{vtype}` is not valid within the schema")

    # Helpers
    @classmethod
    def expandCompact(cls, value: Any) -> Any:
        if all(str(v).isdigit() for v in value):
            vtype = cls.__options__.vtype
            if val_cls := cls.__config__.types.get(vtype):
                return [val_cls.expandCompact(v) for v in value]
            raise ValueError(f"ValueType of `{vtype}` is not valid within the schema")
        return value

    class Options:
        data_type = "ArrayOf"


class Choice(DefinitionBase, metaclass=OptionalFieldsMeta):
    """
    A discriminated union: one type selected from a set of named or labeled types.
    """
    # __root__: dict
    __options__ = Options(data_type="Choice")  # pylint: disable=used-before-assignment

    @root_validator(pre=True)
    def validate_data(cls, value: dict) -> dict:  # pylint: disable=no-self-argument
        """
        Pydantic validator - validate the data as an Choice type
        :param value: data to validate
        :raise ValueError: invalid data given
        :return: original data
        """
        # TODO: finish validation ?
        if len(value.keys()) != 1:
            raise ValidationError(f"Choice type should only have one field, not {len(value.keys())}")
        
        #check if selection is valid
        val = list(value.keys())[0]
        for v in cls.__fields__.keys():
            if val == v:
                return value
        
        raise ValidationError(f"Value `{val}` is not valid for {cls.name}")

    class Options:
        data_type = "Choice"

    class Config:
        extra = Extra.allow


class Enumerated(DefinitionBase, metaclass=EnumeratedMeta):  # pylint: disable=invalid-metaclass
    """
    A vocabulary of items where each item has an id and a string value.
    """
    __root__: Union[int, str]
    __options__ = Options(data_type="Enumerated")  # pylint: disable=used-before-assignment
    __enums__: ClassVar[Enum]

    # Pydantic overrides
    @classmethod
    def schema(cls) -> list:
        mro = [c for c in cls.__mro__ if not c.__name__ == cls.__name__][0]
        return [cls.name, mro.__name__, cls.__options__.schema(), (cls.__doc__ or "").strip(),
                [[v.value.extra["id"], v.value.default, v.value.description or ""] for v in cls.__enums__]]

    # Validation
    @root_validator(pre=True)
    def validate_data(cls, value: dict) -> dict:  # pylint: disable=no-self-argument
        """
        Pydantic validator - validate the value as an Enumerated type
        :param value: value to validate
        :raise ValueError: invalid data given
        :return: original value
        """
        val = value.get("__root__", None)
        if cls.__options__.id:
            for v in cls.__enums__:
                if val == v.value.extra.get("id", None):
                    return value
        else:
            for v in cls.__enums__:
                if val == v.name:
                    return value
        raise ValidationError(f"Value `{val}` is not valid for {cls.name}")

    # Helpers
    @classmethod
    def expandCompact(cls, value: int) -> str:
        if isinstance(value, int) and cls.__enums__:
            for field in cls.__enums__:
                if field.value.extra["id"] == value:
                    return field.value.default
        return str(value)

    class Options:
        data_type = "Enumerated"


class Map(DefinitionBase):
    """
    An unordered map from a set of specified keys to values with semantics bound to each key.
    Each key has an id and name or label, and is mapped to a value type.
    """
    # __root__: dict
    __options__ = Options(data_type="Map")  # pylint: disable=used-before-assignment

    # Validation
    @root_validator(pre=True)
    def validate_data(cls, value: dict):  # pylint: disable=no-self-argument
        if (minProps := cls.__options__.minv) and isinstance(minProps, int):
            if len(value) < minProps:
                raise ValidationError("minimum property count not met")

        if (maxProps := cls.__options__.maxv) and isinstance(maxProps, int):
            if len(value) > maxProps:
                raise ValidationError("maximum property count exceeded")

        return value

    class Config:
        extra = Extra.allow

    class Options:
        data_type = "Map"
        minv = 1


class MapOf(DefinitionBase):
    """
    An unordered map from a set of keys of the same type to values with the same semantics.
    Each key has key type ktype, and is mapped to value type vtype.
    """
    # __root__: dict
    __options__ = Options(data_type="MapOf")  # pylint: disable=used-before-assignment

    @root_validator(pre=True)
    def validate_data(cls, value: dict) -> dict:  # pylint: disable=no-self-argument
        """
        Pydantic validator - validate the data as a MapOf type
        :param value: data to validate
        :raise ValueError: invalid data given
        :return: original data
        """
        # TODO: finish validation
        # check ktype/vtype
        # invalid if any of its elements is not an instance of vtype.
        # invalid if any of its keys is not an instance of ktype.
        # invalid if its number of elements is less than minv or greater than maxv.
        return value

    # Helpers
    @classmethod
    def expandCompact(cls, value: dict) -> dict:
        # TODO: finish compact to verbose
        return value

    class Config:
        extra = Extra.allow

    class Options:
        data_type = "MapOf"


class Record(DefinitionBase):
    """
    An ordered map from a list of keys with positions to values with positionally-defined semantics.
    Each key has a position and name, and is mapped to a value type. Represents a row in a spreadsheet or database table.
    """
    # __root__: dict
    __options__ = Options(data_type="Record")  # pylint: disable=used-before-assignment

    @root_validator(pre=True)
    def validate_data(cls, value: dict) -> dict:  # pylint: disable=no-self-argument
        """
        Pydantic validator - validate the data as a Record type
        :param value: data to validate
        :raise ValueError: invalid data given
        :return: original data
        """
        if (minProps := cls.__options__.minv) and isinstance(minProps, int):
            if len(value) < minProps:
                raise ValidationError("minimum property count not met")

        if (maxProps := cls.__options__.maxv) and isinstance(maxProps, int):
            if len(value) > maxProps:
                raise ValidationError("maximum property count exceeded")

        return value

    class Config:
        extra = Extra.forbid

    class Options:
        data_type = "Record"
