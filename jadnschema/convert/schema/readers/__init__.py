"""
JADN conversion readers
"""
from .baseReader import BaseReader
# from .cddl import cddl_load, cddl_loads
# from .graphviz import dot_load, dot_loads
# from .html import html_load, html_loads
from .jadn import jadn_load, jadn_loads
# from .jadn_idl import jidl_load, jidl_loads
# from .jas import jas_load, jas_loads
from .json_schema import json_load, json_loads
# from .markdown import md_load, md_loads
# from .proto import proto_load, proto_loads
# from .relax_ng import relax_load, relax_loads
# from .thrift import thrift_load, thrift_loads
# from .xsd import xsd_load, xsd_loads

__all__ = [
    "BaseReader",
    # Convert Functions
    # "cddl_load", "cddl_loads",
    # "dot_load", "dot_loads",
    # "html_load", "html_loads",
    "jadn_load", "jadn_loads",
    # "jidl_load", "jidl_loads",
    # "jas_load", "jas_loads",
    "json_load", "json_loads",
    # "md_load", "md_loads",
    # "proto_load", "proto_loads",
    # "relax_load", "relax_loads",
    # "thrift_load", "thrift_loads",
    # "xsd_load", "xsd_loads"
]
