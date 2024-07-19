import json
import random
import cbor_json
import binascii

from typing import Tuple, Union
from jadnschema import jadn
from jadnschema.schema import Schema
from jadnschema.convert.message import Message, SerialFormats, decode_msg
from pydantic import ValidationError

from webApp.utils import constants
from webApp.validator.utils import getValidationErrorMsg, getValidationErrorPath


class Validator:
    """
    Validate messages against a given schema
    """
    validMsgs = [
        "Valid",
        "Validation passed",
        "Validation success"
    ]
    invalidMsgs = [
        "Invalid",
        "Validation failed",
        "Validation error"
    ]

    def validateSchema(self, schema: Union[bytes, dict, str], sm: bool = True) -> Tuple[bool, Union[str, Schema]]:
        """
        Validate the given schema
        :param schema: (JSON String) schema to validate against
        :param sm: (bool) return success message or schema
        :return: (tuple) valid/invalid bool, message/schema
        """
        try:
            j = jadn.loads(schema)
            return True, "Schema is Valid" if sm else j
        except Exception as e:  # pylint: disable=broad-except
            # TODO: pick better exception
            return False, f"Schema Invalid - {e}"

    def validateMessage(self, schema: Union[bytes, dict, str], msg: Union[str, bytes, dict], fmt: str, decode: str) -> Tuple:
        """
        Validate messages against the given schema
        :param schema: schema to validate against
        :param msg: message to validate against the schema
        :param fmt: format of the message to decode
        :param decode: format to decode the message as
        :return: valid/invalid bool, message
        """
        v, s = self.validateSchema(schema, False)
        if not v:
            return False, s, "", msg

        if isinstance(s, str):
            return False, "Schema Invalid - The schema failed to load", "", msg

        if fmt not in SerialFormats:
            return False, "Serialization Format not found", "", msg
        
        
        serial = SerialFormats(fmt)
        match serial:
            case constants.JSON:
                try:
                    data_serialized = Message.oc2_loads(msg, serial)
                except Exception as e: 
                    err_msg = e
                    return False, f"Invalid Data: {err_msg}", "", msg     

            case constants.XML:
                try:
                    data_serialized = decode_msg(msg, serial, root=decode)
                except Exception as e: 
                    err_msg = e
                    return False, f"Invalid Data: {err_msg}", "", msg

            case constants.CBOR:
                try:
                    msg_hex_string = msg
                    msg_binary_string = binascii.unhexlify(msg_hex_string)
                    msg_native_json = cbor_json.native_from_cbor(msg_binary_string)

                    serial = SerialFormats('json')
                    data_serialized = Message.oc2_loads(msg_native_json, serial)
                except Exception as e:
                    return False, f"Invalid Data: {e}", "", msg
            
            case _:
                return False, "Unknown format selected", "", msg       
            
            
        records = list(s.types.keys())
        if decode in records:

            try:
                if fmt == constants.XML:
                    s.validate_as(decode, data_serialized)
                else:
                    s.validate_as(decode, data_serialized.content)
                    
                return True, random.choice(self.validMsgs), json.dumps(msg), msg

            except Exception as err: 
                errorMsgs=[]
                if isinstance(err, ValidationError):
                    for error in err.errors():
                        err_msg = getValidationErrorMsg(error)
                        err_path = getValidationErrorPath(error)

                        path = [i for i in err_path.split('/') if i != '__root__'] 
                        new_path = '/'.join(path)
                        
                        if err_path:
                            errorMsgs.append(err_msg + " at " +  new_path)
                        else:
                            errorMsgs.append(err_msg)
                    return False, errorMsgs, "", msg
                elif isinstance(err, AttributeError):
                    for error in err.args:
                        errorMsgs.append(error)
                    return False, errorMsgs, "", msg
                else:
                    return False, err, "", msg

        else:
            return False, "Invalid Export: The decode message type was not found in the schema", "", msg

