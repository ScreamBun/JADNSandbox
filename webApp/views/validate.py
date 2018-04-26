import json
import logging

from flask import Blueprint, current_app, redirect, render_template, Response
from flask_restful import Api, Resource, reqparse

logger = logging.getLogger()
validate = Blueprint('validate', __name__)
api = Api(validate)

parser = reqparse.RequestParser()
parser.add_argument('schema', type=str)
parser.add_argument('schema-text', type=str)
parser.add_argument('message', type=str)
parser.add_argument('message-text', type=str)
parser.add_argument('decode', type=str)


class VerifyMessage(Resource):
    """
    Endpoint for /validate
    """
    def get(self):
        return redirect('/')

    def post(self):
        args = parser.parse_args()

        val = current_app.validator.validateMessage(args['schema-text'], args['message-text'], args['decode'])

        page_data = {
            "schema": json.dumps(json.loads(args['schema-text']), indent=4, sort_keys=True),
            "message": json.dumps(json.loads(args['message-text']), indent=4, sort_keys=True),
            "message_type": args['decode'],
            "valid_bool": val[0],
            "valid_msg": val[1]
        }

        return Response(render_template("validate.html", page_title="Message Validation", page_data=page_data))


class VerifySchema(Resource):
    """
    Endpoint for /validate/schema
    """
    def get(self):
        return redirect('/')

    def post(self):
        args = parser.parse_args()

        val = current_app.validator.validateSchema(args['schema-text'])
        data = {
            "valid_bool": val[0],
            "valid_msg": val[1]
        }

        return data, 200


# Register resources
api.add_resource(VerifyMessage, '/')
api.add_resource(VerifySchema, '/schema')
