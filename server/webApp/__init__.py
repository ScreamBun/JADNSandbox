from .config import DefaultConfig
from .validator import Validator
from flask import Flask
from werkzeug.routing import BaseConverter


class RegexConverter(BaseConverter):
    def __init__(self, url_map, *items):
        super(RegexConverter, self).__init__(url_map)
        self.regex = items[0]


# Initialize the app
app = Flask(__name__, static_url_path="/static")
app.config.from_object(DefaultConfig)

app.url_map.converters["regex"] = RegexConverter
app.url_map.strict_slashes = False

print("Starting OpenC2 Flask Server")

app.validator = Validator()

from .views import *
register_all(app)
