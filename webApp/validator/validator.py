import cbor2
import random

from oc2.codec import Codec, jadn_loads
from oc2.load import CBOR, JSON, ProtoBuf, XML


class Validator(object):
    """
    Validate messages against a given schema
    """
    def __init__(self):
        self._formats = {
            'cbor': CBOR,
            'json': JSON,
            'proto': ProtoBuf,
            'xml': XML
        }

        self.validMsgs = [
            'Success',
            'It\'s Gonna do the thing!!',
            'Whoot! It works'
        ]

        self.invalidMsgs = [
            'Fail',
            'It\'s Broken',
            'That\'s not right'
        ]

    def validateSchema(self, s, m=True):
        """
        Validate the given schema
        :param s: (JSON String) schema to validate against
        :param m: (bool) return success message or schema
        :return: (tuple) valid/invalid bool, message/schema
        """
        try:
            j = jadn_loads(s)
            return True, random.choice(self.validMsgs) if m else j

        except Exception as e:
            return False, "Schema Invalid - {}".format(e)

    def validateMessage(self, s, m, d, f='json'):
        """
        Validate messages against the given schema
        :param s: (JSON String) schema to validate against
        :param m: (JSON String) message to validate against the schema
        :return: (tuple) valid/invalid bool, message
        """

        v, schema = self.validateSchema(s, False)

        if not v:
            return False, schema

        err = random.choice(self.invalidMsgs)

        if f in self._formats:
            try:
                m = ''.join([mp[:2].decode('hex') + mp[2:] for mp in m.split('\\x')]) if '\\x' in m else m
                message = self._formats[f](m)
            except Exception as e:
                return False, "Message Invalid - {}".format(e)
        else:
            return False, err

        tc = Codec(schema, True, True)
        records = [t[0] for t in schema['types']]

        if d in records:
            try:
                msg = tc.decode(d, message.json_dump())
                return True, random.choice(self.validMsgs)

            except (ValueError, TypeError) as e:
                err = str(e)
                return False, err

        return False, err

