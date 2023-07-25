import logging

from io import BytesIO
import traceback
import jadn
from flask import current_app, jsonify, Response, request
from flask_restful import Resource, reqparse
from jadnschema.convert import SchemaFormats, dumps, html_dumps, plant_dumps
from jadn.translate import json_schema_dumps
from weasyprint import HTML


logger = logging.getLogger(__name__)

parser = reqparse.RequestParser()
parser.add_argument("schema", type=dict)
parser.add_argument("schema-list", type=str)
parser.add_argument("convert", type=str)
parser.add_argument("convert-to", type=str)


class Convert(Resource):
    """
    Endpoint for api/convert
    """

    def get(self):
        return jsonify({
            "conversions": current_app.config.get("VALID_SCHEMA_CONV")
        })

    def post(self):
        args = parser.parse_args()
        conv = "Valid Base Schema"
        request_json = request.json

        is_valid, schema = current_app.validator.validateSchema(request_json["schema"], False)
        if is_valid:
            try:
                conv_fmt = SchemaFormats(args["convert-to"])
            
            except Exception:  
                return "Invalid Conversion Type", 500
            
            else:
                kwargs = {
                    "fmt": conv_fmt,
                }

                if conv_fmt == "html":
                    kwargs["styles"] = current_app.config.get("OPEN_C2_SCHEMA_THEME", "")
                
                try:
                    if conv_fmt == "json":
                        data = request_json["schema"]
                        schema_checked = jadn.check(data) 
                        conv = json_schema_dumps(schema_checked)
                    elif conv_fmt == "jadn":
                        data = request_json["schema"]
                        schema_checked = jadn.check(data) 
                        conv = dumps(schema_checked, **kwargs)
                    elif conv_fmt == "puml":
                        data = request_json["schema"]
                        schema_checked = jadn.check(data) 
                        conv = plant_dumps(schema_checked, style={'links': True, 'detail': 'information'})                                      
                    else:
                        conv = dumps(schema, **kwargs)
                        
                except:
                    tb = traceback.format_exc()
                    print(tb)
                    return "Failed to Convert", 500

        else:
            return "Schema is not valid", 500

        return jsonify({
            "schema": {
                "base": args["schema"],
                "convert": conv,
                "fmt": args["convert-to"]
            }
        })
    
class ConvertToAll(Resource):
    """
    Endpoint for api/convert/all
    """

    def post(self):
        args = parser.parse_args()
        conv = "Valid Base Schema"
        request_json = request.json

        is_valid, schema = current_app.validator.validateSchema(request_json["schema"], False)
        if is_valid:
            convertedData = []
            visualizeFmt = ['gv', 'html', 'jidl', 'md', 'puml']
            translateFmt = ['json', 'rng']

            if request_json['convertType'] == 'translation':
                validFmt = translateFmt
            else: 
                validFmt = visualizeFmt

            for i in validFmt:
                try:
                    conv_fmt = SchemaFormats(i)
                except Exception:  
                    return "Invalid Conversion Type", 500
    
                kwargs = {
                    "fmt": conv_fmt,
                }

                if conv_fmt == "html":
                    kwargs["styles"] = current_app.config.get("OPEN_C2_SCHEMA_THEME", "")
                
                try:
                    data = request_json["schema"]
                    schema_checked = jadn.check(data) 
                    if conv_fmt == "puml":
                        convertedSchema = plant_dumps(schema_checked, style={'links': True, 'detail': 'information'})
                    elif conv_fmt == "json":
                        convertedSchema = json_schema_dumps(schema_checked)
                    elif conv_fmt == "jadn":
                        convertedSchema = dumps(schema_checked, **kwargs)
                    else:
                        convertedSchema = dumps(schema, **kwargs)
                        
                    convertedData.append({'fmt': conv_fmt.name, 'schema': convertedSchema})
                            
                except:
                    tb = traceback.format_exc()
                    print(tb)
                    return "Failed to Convert", 500
        else:
            return "Schema is not valid", 500

        return jsonify({
            "schema": {
                "base": args["schema"],
                "convert": convertedData
            }
        })

class ConvertPDF(Resource):
    """
    Endpoint for api/convert/pdf
    """

    def post(self):
        args = parser.parse_args()
        pdf = BytesIO()
        print("convert to pdf")
        val, schema = current_app.validator.validateSchema(args["schema"], False)
        if val:  # Valid Schema
            html = html_dumps(schema, styles=current_app.config.get("OPEN_C2_SCHEMA_THEME", ""))
        else:  # Invalid Schema
            html = "<h1>ERROR: Invalid Schema. Fix the base schema errors before converting...</h1>"
            
        pdf_obj = HTML(string=html)  # the HTML to convert
        pdf_obj.write_pdf(target=pdf)  # file handle to receive result
        return Response(pdf.getvalue(), mimetype="application/pdf")


resources = {
    Convert: {"urls": ("/", )},
    ConvertToAll: {"urls": ("/all", )},
    ConvertPDF: {"urls": ("/pdf",)}
}


def add_resources(bp, url_prefix=""):
    for cls, opts in resources.items():
        args = [f"{url_prefix}{url}" for url in opts["urls"]] + opts.get("args", [])
        bp.add_resource(cls, *args, **opts.get("kwargs", {}))
