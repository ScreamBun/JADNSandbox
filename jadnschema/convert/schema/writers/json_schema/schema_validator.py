import json
import traceback
from jsonschema import Draft3Validator


def validate_schema(schema: dict):
    is_valid: bool = False
    
    try:
        # if isinstance(schema, dict):
        #     schema = json.dumps(schema, indent = 4) 
        
        Draft3Validator.check_schema(schema)
        is_valid = True
    except BaseException as e:
        # Full Error
        # is_valid = traceback.format_exc()
        is_valid = e.message

    
    return is_valid