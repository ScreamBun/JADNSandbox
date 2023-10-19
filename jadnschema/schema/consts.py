"""
JADN schema formatting consts.py
"""
import re
from ..utils import FrozenDict
__all__ = [
    "PRIMITIVE_TYPES", "SELECTOR_TYPES", "STRUCTURED_TYPES", "FIELD_TYPES", "CORE_TYPES",
    "TYPE_OPTIONS", "FIELD_OPTIONS", "OPTIONS", "OPTION_ID", "ID_OPTIONS", "TYPE_OPTION_KEYS", "FIELD_OPTION_KEYS",
    "REQUIRED_TYPE_OPTIONS", "ALLOWED_TYPE_OPTIONS", "EXTENSIONS", "DEF_ORDER_FILE_NAMES", "SysAlias", "FieldAlias",
    "ValidName"
]

# Core datatypes
PRIMITIVE_TYPES = ("Binary", "Boolean", "Integer", "Number", "String")
SELECTOR_TYPES = ("Enumerated", "Choice")
STRUCTURED_TYPES = ("Array", "ArrayOf", "Map", "MapOf", "Record")
FIELD_TYPES = ("Enumerated", "Choice", "Array", "Map", "Record")  # Types that have defined fields
CORE_TYPES = PRIMITIVE_TYPES + SELECTOR_TYPES + STRUCTURED_TYPES

# Option Tags/Keys
#   JADN TypeOptions and FieldOptions contain a list of strings, each of which is an option.
#   The first character of an option string is the type ID; the remaining characters are the value.
#   The option string is converted into a Name: Value pair before use.
#   The tables list the unicode codepoint of the ID and the corresponding Name and value type.
TYPE_OPTIONS = FrozenDict({        # Option ID: (name, value type, canonical order) # ASCII ID
    61: ("id", lambda x: True, 1),          # "=", Enumerated type and Choice/Map/Record keys are ID not Name
    42: ("vtype", lambda x: x, 2),          # "*", Value type for ArrayOf and MapOf
    43: ("ktype", lambda x: x, 3),          # "+", Key type for MapOf
    35: ("enum", lambda x: x, 4),           # "#", enumeration derived from Array/Choice/Map/Record type
    62: ("pointer", lambda x: x, 5),        # ">", enumeration of pointers derived from Array/Choice/Map/Record type
    47: ("format", lambda x: x, 6),         # "/", semantic validation keyword, may affect serialization
    37: ("pattern", lambda x: x, 7),        # "%", regular expression that a string must match
    121: ("minf", float, 8),                # "y", minimum Number value
    122: ("maxf", float, 9),                # "z", maximum Number value
    123: ("minv", int, 10),                 # "{", minimum byte or text string length, Integer value, element count
    125: ("maxv", int, 11),                 # "}", maximum byte or text string length, Integer value, element count
    113: ("unique", lambda x: True, 12),    # "q", ArrayOf instance must not contain duplicates
    115: ("set", lambda x: True, 13),       # "s", ArrayOf instance is unordered and unique
    98: ("unordered", lambda x: True, 14),  # "b", ArrayOf instance is unordered and not unique (bag)
    88: ("extend", lambda x: True, 15),     # "X", Type has an extension point where fields may be appended
    33: ("default", lambda x: x, 16),       # "!", Default or constant value of instances of this type
})

FIELD_OPTIONS = FrozenDict({
    91: ("minc", int, 19),                  # "[", minimum cardinality, default = 1, 0 = field is optional
    93: ("maxc", int, 20),                  # "]", maximum cardinality, default = 1, 0 = inherited max, not 1 = array
    38: ("tagid", int, 21),                 # "&", field that specifies the type of this field
    60: ("dir", lambda x: True, 22),        # "<", pointer enumeration treats field as a collection
    75: ("key", lambda x: True, 23),        # "K", field is a primary key for this type
    76: ("link", lambda x: True, 24)        # "L", field is a link (foreign key) to an instance of FieldType
})

OPTIONS = FrozenDict({**TYPE_OPTIONS, **FIELD_OPTIONS})
# Pre-computed reverse index - MUST match TYPE_OPTIONS and FIELD_OPTIONS
OPTION_ID = FrozenDict({v[0]: chr(k) for k, v in OPTIONS.items()})
ID_OPTIONS = FrozenDict({v: k for k, v in OPTION_ID.items()})

# Option Keys
TYPE_OPTION_KEYS = tuple(v[0] for v in TYPE_OPTIONS.values())
FIELD_OPTION_KEYS = tuple(v[0] for v in FIELD_OPTIONS.values())

REQUIRED_TYPE_OPTIONS = FrozenDict(
    # Primitives
    Binary=(),
    Boolean=(),
    Integer=(),
    Number=(),
    String=(),
    # Structures
    Array=(),
    ArrayOf=("vtype", ),
    Choice=(),
    Enumerated=(),
    Map=(),
    MapOf=("ktype", "vtype"),
    Record=()
)

ALLOWED_TYPE_OPTIONS = FrozenDict(
    # Primitives
    Binary=("minv", "maxv", "format"),
    Boolean=(),
    Integer=("minv", "maxv", "format"),
    Number=("minf", "maxf", "format"),
    String=("minv", "maxv", "format", "pattern"),
    # Structures
    Array=("extend", "format", "minv", "maxv"),
    ArrayOf=("vtype", "minv", "maxv", "unique", "set", "unordered"),
    Choice=("id", "extend"),
    Enumerated=("id", "enum", "pointer", "extend"),
    Map=("id", "extend", "minv", "maxv"),
    MapOf=("ktype", "vtype", "minv", "maxv"),
    Record=("extend", "minv", "maxv")
)

EXTENSIONS = {
    "AnonymousType",            # TYPE_OPTIONS included in FieldOptions
    "Multiplicity",             # maxc other than 1, or minv other than 0 (optional) or 1 (required)
    "DerivedEnum",              # enum and pointer/dir options, create Enumerated type of fields or JSON Pointers
    "MapOfEnum",                # ktype option specifies an Enumerated type
    "Pointers",                 # TBD
    "Link"                      # key and link options
}

# Schema Definition Order
DEF_ORDER_FILE_NAMES = ("def_order.txt", "def-order.txt", "definition_order.txt", "definition-order.txt",
                        "defOrder.txt", "definitionOrder.txt")

# Pydantic Helper
ValidName = re.compile(r"^[A-Za-z_][A-Za-z0-9_]_")
SysAlias = re.compile(r"[:$?&|!{}\[\]()^~*\"'+\-\s]")

FieldAlias = FrozenDict({
    "assert": "assert_",
    "break": "break_",
    "class": "class_",
    "continue": "continue_",
    "copy": "copy_",
    "finally": "finally_",
    "global": "global_",
    "name": "name_",
    "raise": "raise_",
    "update": "update_",
    "yield": "yield_",
    "value": "value_",
    "values": "values_",
    "schema": "schema_",
    "description": "description_"
})
