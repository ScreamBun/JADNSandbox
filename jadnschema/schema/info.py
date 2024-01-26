"""
JADN Schema Meta/Info
"""
import re

from typing import Any, Dict, List, Optional
from pydantic import Field, PrivateAttr, validator
from .baseModel import BaseModel


class Namespaces(BaseModel):
    """Packages with referenced type defs"""
    # keyType = NSID
    # valueType = String
    __root__: Dict[str, str]

    def schema(self) -> Dict[str, str]:
        """
        Format this data into valid JADN format
        :return: JADN formatted data
        """
        return self.__root__


class Exports(BaseModel):
    """Type defs intended to be referenced"""
    __root__: List[str]

    def schema(self) -> List[str]:
        """
        Format this data into valid JADN format
        :return: JADN formatted data
        """
        return self.__root__


class Config(BaseModel):
    """Config vars override JADN defaults"""
    #: Schema default max octets
    MaxBinary: Optional[int] = Field(255, alias="$MaxBinary", gt=1)
    #: Schema default max characters
    MaxString: Optional[int] = Field(255, alias="$MaxString", gt=1)
    #: Schema default max items/properties
    MaxElements: Optional[int] = Field(100, alias="$MaxElements", gt=1)
    #: System character for TypeName
    Sys: Optional[str] = Field("$", alias="$Sys", min_length=1, max_length=1)
    #: TypeName regex
    TypeName: Optional[str] = Field(r"^[A-Z][-$A-Za-z0-9]{0,63}$", alias="$TypeName", min_length=1, max_length=127)
    #: FieldName regex
    FieldName: Optional[str] = Field(r"^[a-z][_A-Za-z0-9]{0,63}$", alias="$FieldName", min_length=1, max_length=127)
    #: Namespace Identifier regex
    NSID: Optional[str] = Field(r"^[A-Za-z][A-Za-z0-9]{0,7}$", alias="$NSID", min_length=1, max_length=127)

    def schema(self) -> Dict[str, Any]:
        """
        Format this data into valid JADN format
        :return: JADN formatted data
        """
        schema = {}
        for name, conf in self.__fields__.items():
            if (val := getattr(self, name, None)) and val is not None:
                schema[conf.alias] = val
        return schema

    @validator("TypeName", "FieldName", "NSID")
    def regex_check(cls, val: str):  # pylint: disable=no-self-argument
        """
        Pydantic Validator - Verify the value of `TypeName`, `FieldName`, & `NSID` as a regex
        :param val: value to validate
        :raises ValueError: invalid value, not valid as  a regex
        :return: original value
        """
        try:
            re.compile(val)
        except Exception as err:
            raise ValueError from err
        return val

    class Config:
        allow_population_by_field_name = True


class Information(BaseModel):
    package: Optional[str]            #: Unique name/version of this package
    version: Optional[str]            #: Incrementing version within package
    title: Optional[str]              #: Title
    description: Optional[str]        #: Description
    comment: Optional[str]            #: Comment
    copyright: Optional[str]          #: Copyright notice
    license: Optional[str]            #: SPDX licenseId (e.g., 'CC0-1.0')
    namespaces: Optional[Namespaces]  #: Referenced packages
    exports:  Optional[Exports]       #: Type defs exported by this package
    config:  Optional[Config]         #: Configuration variables
    _config: bool = PrivateAttr(False)

    def __init__(self, **data: Any) -> None:
        super().__init__(**data)
        self._config = "config" in data
        if not self._config:
            self.config = Config() #TODO: fix -- empty object

    def schema(self) -> Dict[str, Any]:
        """
        Format this data into valid JADN format
        :return: JADN formatted data
        """
        schema = {}
        for field in self.__fields__:
            if (val := getattr(self, field, None)) and val is not None:
                schema[field] = val.schema() if hasattr(val, "schema") else val
        if not self._config:
            del schema["config"]
        return schema
