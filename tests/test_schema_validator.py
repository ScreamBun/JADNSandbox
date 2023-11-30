from unittest import TestCase
from jadnschema.convert.schema.writers.json_schema.schema_validator import validate_schema

class BasicTypes(TestCase):
    
    def setUp(self):
        self.valid_schema_json = {
            "$id": "https://example.com/person.schema.json",
            "$schema": "https://json-schema.org/draft/2020-12/schema",
            "title": "Person",
            "type": "object",
            "properties": {
                "firstName": {
                "type": "string",
                "description": "The person's first name."
                },
                "lastName": {
                "type": "string",
                "description": "The person's last name."
                },
                "age": {
                "description": "Age in years which must be equal to or greater than zero.",
                "type": "integer",
                "minimum": 0
                }
            }
        }
        self.invalid_schema_json = {
            "$schema": "http://json-schema.org/draft-04/schema#",
            "title": "my json api",
            "description": "my json api",
            "type": "object",
            "properties": {
                "my_api_response": {
                "type": "object",
                    "properties": {
                        "MailboxInfo": {
                            "type": "array",
                            "items": {
                                "type": "object",
                                "properties": {
                                    "ADSyncLinkEnabled": {
                                        "type": "any"
                                    }
                                }
                            }
                        }
                    }
                }
            },
            "required": ["response"]
        }
        
    
    def test_validate_schema(self):
        
        response = validate_schema(self.valid_schema_json)
        self.assertTrue(response)
        
        response = validate_schema(self.invalid_schema_json)
        is_invalid = isinstance(response, str)
        print(response)
        self.assertTrue(is_invalid)