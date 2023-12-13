from jsonschema import Draft201909Validator

def validate_schema(schema: dict)-> tuple[bool, str]:
    #TODO: validate by draft $schema

    try:
        Draft201909Validator.check_schema(schema)
        return True, "Schema is Valid"

    except Exception as e:
        raise ValueError(e.message)

def validate_schema_jadn_syntax(schema: dict)-> tuple[bool, str]:
   
    meta = {
        "$schema": "https://json-schema.org/draft/2019-09/schema",
        "$id": "https://oasis-open.org/openc2/jadn/v1.0",
        "description": "Validates structure of a JADN schema, does not check values (required values included)",
        "type": "object",
        "additionalProperties": False,
        "properties": {
            "info": {
            "type": "object",
            "additionalProperties": False,
            "properties": {
                "package": {"type": "string"},
                "version": {"type": "string"},
                "title": {"type": "string"},
                "description": {"type": "string"},
                "comment": {"type":  "string"},
                "copyright": {"type": "string"},
                "license": {"type": "string"},
                "namespaces": {"$ref": "#/definitions/Namespaces"},
                "exports": {"$ref": "#/definitions/Exports"},
                "config": {"$ref": "#/definitions/Config"}
            }
            },
            "types": {
            "type": "array",
            "items": {
                "type": "array",
                "minItems": 1,
                "maxItems": 5,
                "items": [
                {"$ref": "#/definitions/TypeName"},
                {"$ref": "#/definitions/BaseType"},
                {"$ref": "#/definitions/Options"},
                {"$ref": "#/definitions/Description"},
                {"$ref": "#/definitions/Fields"}
                ]
            }
            }
        },
        "definitions": {
            "Namespaces": {
            "type": "object",
            "propertyNames": {"$ref": "#/definitions/NSID"},
            "patternProperties": {
                "": {
                "type": "string",
                "format": "uri"
                }
            }
            },
            "Exports": {
            "type": "array",
            "items": {"type": "string"}
            },
            "Config": {
            "type": "object",
            "additionalProperties": False,
            "properties": {
                "$MaxBinary": {"type": "integer", "minValue": 1},
                "$MaxString": {"type": "integer", "minValue": 1},
                "$MaxElements": {"type": "integer", "minValue": 1},
                "$Sys": {"type": "string", "minLength": 1, "maxLength": 1},
                "$TypeName": {"type": "string", "minLength": 1, "maxLength": 127},
                "$FieldName": {"type": "string", "minLength": 1, "maxLength": 127},
                "$NSID": {"type": "string", "minLength": 1, "maxLength": 127}
            }
            },
            "Fields": {
            "type": "array",
            "items": [
                {"anyOf": [
                {"$ref": "#/definitions/Item"},
                {"$ref": "#/definitions/Field"}
                ]}
            ]
            },
            "Item": {
            "type": "array",
            "minItems": 2,
            "maxItems": 3,
            "items": [
                {"type": "integer"},
                {"type": "string"},
                {"$ref": "#/definitions/Description"}
            ]
            },
            "Field": {
            "type": "array",
            "minItems": 3,
            "maxItems": 5,
            "items": [
                {"type": "integer"},
                {"$ref": "#/definitions/FieldName"},
                {"$ref": "#/definitions/TypeRef"},
                {"$ref": "#/definitions/Options"},
                {"$ref": "#/definitions/Description"}
            ]
            },
            "NSID": {
            "type": "string"
            },
            "TypeName": {
            "type": "string"
            },
            "TypeRef": {
            "type": "string"
            },
            "FieldName": {
            "type": "string"
            },
            "BaseType": {
            "type": "string",
            "enum": ["Binary", "Boolean", "Integer", "Number", "String",
                    "Enumerated", "Choice",
                    "Array", "ArrayOf", "Map", "MapOf", "Record"]
            },
            "Options": {
            "type": "array",
            "items": {"type": "string"}
            },
            "Description": {
            "type": "string"
            }
        }
    }

    try:
        Draft201909Validator(meta).validate(schema)
        return True, "Schema is Valid"

    except Exception as e:
        raise ValueError(e.message)