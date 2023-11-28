"""
JADN conversion enumerated types
"""
from ...utils import EnumBase



class SchemaFormats(str, EnumBase):
    """Valid Schema Formats for conversion"""
    # CDDL = "cddl"      #: Convert to [CDDL Format](https://www.rfc-editor.org/rfc/rfc8610)
    GraphViz = "gv"    #: Convert to [GraphViz Format](https://graphviz.org/doc/info/lang.html)
    HTML = "html"      #: Convert to HTML Format
    JIDL = "jidl"      #: Convert to [JIDL Format]()
    JADN = "jadn"      #: Convert to [JADN Format](https://docs.oasis-open.org/openc2/jadn/v1.0/csd01/jadn-v1.0-csd01.html)
    # JAS = "jas"        #: Convert to [JAS Format]()
    MarkDown = "md"    #: Convert to MarkDown Format
    # Proto = "proto"    #: Convert to [ProtoBuf Format](https://developers.google.com/protocol-buffers/docs/proto3)
    Relax = "rng"      #: Convert to [RelaxNG Format](https://relaxng.org/spec-20011203.html)
    # Thrift = "thrift"  #: Convert to [Thrift Format](https://thrift.apache.org/)
    JSON = "json"        #: Using JADN PyPkg, no logic in JADN Schema 
    PlantUML = "puml"    #: Using JADN PyPkg, no logic in JADN Schema
    XSD = "xsd"

class SchemaVisualizationFormats(str, EnumBase):
    """Valid Schema Formats for conversion/visualization"""
    # CDDL = "cddl"      #: Convert to [CDDL Format](https://www.rfc-editor.org/rfc/rfc8610)
    GraphViz = "gv"    #: Convert to [GraphViz Format](https://graphviz.org/doc/info/lang.html)
    HTML = "html"      #: Convert to HTML Format
    JIDL = "jidl"      #: Convert to [JIDL Format]()
    # JAS = "jas"        #: Convert to [JAS Format]()
    MarkDown = "md"    #: Convert to MarkDown Format
    # Proto = "proto"    #: Convert to [ProtoBuf Format](https://developers.google.com/protocol-buffers/docs/proto3)
    # Thrift = "thrift"  #: Convert to [Thrift Format](https://thrift.apache.org/)
    PlantUML = "puml"    #: Using JADN PyPkg, no logic in JADN Schema

class SchemaTranslationFormatsForJADN(str, EnumBase):
    """Valid Schema Formats for JADN conversion/translation"""
    Relax = "rng"      #: Convert to [RelaxNG Format](https://relaxng.org/spec-20011203.html)
    JSON = "json"        #: Using JADN PyPkg, no logic in JADN Schema 
    XSD = "xsd"

class SchemaTranslationFormatsForJSON(str, EnumBase):
    """Valid Schema Formats for JSON conversion/translation"""
    JADN = "jadn"

class CommentLevels(str, EnumBase):
    """Conversion Comment Level"""
    ALL = "all"    #: Include all comments from the schema
    NONE = "none"  #: Include no comments from the schema


# Conversion
class JsonRootStyle(str, EnumBase):
    Property = "property"  #: Generate root properties for each exported type
    OneOf = "oneOf"        #: Generate a oneOf for each exported type


class JsonEnumStyle(str, EnumBase):
    Const = "const"  #: Generate oneOf keyword with const for each item
    Enum = "enum"    #: Generate an enum keyword containing all items
    Regex = "regex"  #: Generate a regular expression that matches each item


class JsonImportStyle(str, EnumBase):
    Any = "any"  #: Ignore types defined in other modules, validate anything
    Ref = "ref"  #: Generate $ref keywords that must be resolved before the JSON Schema can validate referenced types
