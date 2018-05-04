import logging
import os
import re

from flask import Blueprint, current_app, url_for, render_template, Response, send_from_directory
from flask_restful import Api, Resource

logger = logging.getLogger()
root = Blueprint('index', __name__)
api = Api(root)

VALID_SCHEMAS = ['jadn']
VALID_MESSAGES = ['json', 'cbor']


def unquote(url):
    return re.compile('%([0-9a-fA-F]{2})', re.M).sub(lambda m: chr(int(m.group(1), 16)), url)


class Info(Resource):
    """
    Endpoint for /
    """
    def get(self):
        schemas = re.compile('\.(' + '|'.join(VALID_SCHEMAS) + ')$')
        messages = re.compile('\.(' + '|'.join(VALID_MESSAGES) + ')$')

        opts = {
            'schemas': [s for s in os.listdir(os.path.join(current_app.config.get('OPEN_C2_DATA'), 'schemas')) if schemas.search(s)],
            'messages': [m for m in os.listdir(os.path.join(current_app.config.get('OPEN_C2_DATA'), 'messages')) if messages.search(m)]
        }

        resp = Response(render_template('index.html', page_title="Message Validator", options=opts), mimetype='text/html')
        resp.status_code = 200
        return resp


class Endpoints(Resource):
    """
    Endpoint for /endpoints
    """
    def get(self):
        routes_by_app = {}

        for rule in current_app.url_map.iter_rules():
            url_app = rule.endpoint.split(".")[0]

            options = {}
            for arg in rule.arguments:
                options[arg] = "[{0}]".format(arg)

            url = url_for(rule.endpoint, **options)

            if not re.match(r'^\/admin\/admin_', unquote(url)):
                if url_app not in routes_by_app:
                    routes_by_app[url_app] = []

                routes_by_app[url_app].append({
                    'url': unquote(url),
                    'endpoint': rule.endpoint,
                    'methods': ", ".join(rule.methods)
                })

        resp = Response(render_template('routes/routes.html', routes=routes_by_app, page_title="App Routes"), mimetype='text/html')
        resp.status_code = 200
        return resp


class CatchAll(Resource):
    """
    Endpoint for /[:content]
    Catch all for non-existant endpoints
    """
    def get(self, content):
        """
        Error message to appear in the event a user navigates to an endpoint that does not exist
        :param content: path that was navigated to
        :return: error message
        """
        current_app.logger.warning("Endpoint Does Not Exist: %s", content)

        err = {
            'message': [
                'The requested URL /{} was not found on the server.'.format(content),
                'If you entered the URL manually please check your spelling and try again.',
            ]
        }

        resp = Response(render_template('error/error.html', error=err, page_title="Error"), mimetype='text/html')
        resp.status_code = 200
        return resp


# Register resources
api.add_resource(Info, '/')
api.add_resource(Endpoints, '/endpoints')
api.add_resource(CatchAll, '/<path:content>')
