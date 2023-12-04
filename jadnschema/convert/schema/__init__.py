"""
JADN conversions
"""
from .enums import SchemaFormats, SchemaTranslationFormatsForJADN, SchemaTranslationFormatsForJSON, SchemaVisualizationFormats, CommentLevels, JsonEnumStyle, JsonImportStyle, JsonRootStyle
from .readers import (
    # Conversion Functions
    # cddl_load, cddl_loads,
    # dot_load, dot_loads,
    # html_load, html_loads,
    jadn_load, jadn_loads,
    # jidl_load, jidl_loads,
    # jas_load, jas_loads,
    json_load, json_loads,
    # md_load, md_loads,
    # proto_load, proto_loads,
    # relax_load, relax_loads,
    # thrift_load, thrift_loads
    # xsd_load, xsd_loads
)
from .writers import (
    # Conversion Functions
    cddl_dump, cddl_dumps,
    dot_dump, dot_dumps,
    html_dump, html_dumps,
    jadn_dump, jadn_dumps,
    jidl_dump, jidl_dumps,
    # jas_dump, jas_dumps,
    json_dump, json_dumps,
    json_to_jadn_dump,json_to_jadn_dumps,
    md_dump, md_dumps,
    plant_dump, plant_dumps,
    proto_dump, proto_dumps,
    relax_dump, relax_dumps,
    thrift_dump, thrift_dumps,
    validate_schema
    # xsd_dump, xsd_dumps
)
from .helpers import register, register_reader, register_writer, dump, dumps, load, loads


__all__ = [
    # Enums
    "SchemaFormats",
    "CommentLevels",
    "JsonEnumStyle",
    "JsonImportStyle",
    "JsonRootStyle",
    # Helpers
    "register", "register_reader", "register_writer",
    # Convert to ...
    "cddl_dump", "cddl_dumps",
    "dot_dump", "dot_dumps",
    "html_dump", "html_dumps",
    "jadn_dump", "jadn_dumps",
    # "jas_dump", "jas_dumps",
    "jidl_dump", "jidl_dumps",
    "json_dump", "json_dumps",
    "md_dump", "md_dumps",
    "proto_dump", "proto_dumps",
    "relax_dump", "relax_dumps",
    "thrift_dump", "thrift_dumps",
    "plant_dump", "plant_dumps",
    # "xsd_dump", "xsd_dumps"
    # Load From ...
    # "cddl_load", "cddl_loads",
    "jadn_load", "jadn_loads",
    # "jas_load", "jas_loads",
    # "jidl_load", "jidl_loads",
    "json_load", "json_loads",
    "json_to_jadn_dump", "json_to_jadn_dumps",
    # "proto_load", "proto_loads",
    # "relax_load", "relax_load",
    # "thrift_load", "thrift_loads",
    "validate_schema",
    # Dynamic
    "dump", "dumps",
    "load", "loads",
    "SchemaTranslationFormatsForJADN",
    "SchemaTranslationFormatsForJSON",
    "SchemaVisualizationFormats"
]
