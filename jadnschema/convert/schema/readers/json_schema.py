"""
JADN to JADN
"""
import json
from pathlib import Path
from typing import Union
from .baseReader import BaseReader
from ..helpers import register_reader
from ....schema import Schema
__pdoc__ = {
    "JSONtoJADN.format": "File extension of the given format"
}


# Conversion Class
@register_reader
class JSONtoJADN(BaseReader):  # pylint: disable=abstract-method
    format = "json"

    def parse_schema(self, **kwargs) -> Schema:
        return json.loads(self._schema)


# Writer Functions
def json_load(schema: Union[str, Path], **kwargs) -> Schema:
    """
    Convert the JSON schema to JADN and write it to the given file
    :param schema: Schema to convert
    :param kwargs: key/value args for the conversion
    """
    return JSONtoJADN.load(schema).parse_schema(**kwargs)


def json_loads(schema: Union[bytes, bytearray, str], **kwargs) -> Schema:
    """
    Convert the JSON schema to JADN
    :param schema: Schema to convert
    :param kwargs: key/value args for the conversion
    :return: JADN schema string
    """
    return JSONtoJADN.loads(schema).parse_schema(**kwargs)
