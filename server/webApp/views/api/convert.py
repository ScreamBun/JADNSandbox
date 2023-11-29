import logging

from io import BytesIO
import traceback
import jadn
from flask import current_app, jsonify, Response, request
from flask_restful import Resource
from jadnschema.convert import SchemaFormats, dumps, html_dumps, plant_dumps
from jadnxml.builder.xsd_builder import convert_xsd_from_dict
from jadn.translate import json_schema_dumps
from weasyprint import HTML


logger = logging.getLogger(__name__)

class Convert(Resource):
    """
    Endpoint for api/convert
    """
        
    def get(self):
        return jsonify({
            "conversions": current_app.config.get("VALID_SCHEMA_CONV"),
            "translations": current_app.config.get("VALID_SCHEMA_TRANSLATIONS"),
            "visualizations": current_app.config.get("VALID_SCHEMA_VISUALIZATIONS")
        })
        

    def post(self):
        conv = "Valid Base Schema"
        request_json = request.json      
        data = request_json["schema"]

        is_valid, schema = current_app.validator.validateSchema(data, False)
        if not is_valid:
            return "Schema is not valid", 500
        
        schema_checked = jadn.check(data) 
        convertedData = []
        if len(request_json["convert-to"]) == 1:
            try:
                lang = request_json["convert-to"][0]
                
                valid_fmt_name, valid_fmt_ext = self.validateConversionType(lang) 
                if not valid_fmt_name:
                    return "Invalid Conversion Type", 500      
                    
            except Exception:  
                return "Invalid Conversion Type", 500
                
            try:
                conv = self.convertTo(schema_checked, lang)
                convertedData.append({'fmt': valid_fmt_name, 'fmt_ext': valid_fmt_ext, 'schema': conv, 'err': False})
            
            except (TypeError, ValueError) as err:
                tb = traceback.format_exc()
                print(tb)
                return f"Failed to Convert: {err}", 500
            
        else:     
            for conv_type in request_json["convert-to"]:
                try:
                    valid_fmt_name, valid_fmt_ext = self.validateConversionType(conv_type)    
                    if not valid_fmt_name:
                        return "Invalid Conversion Type", 500  
                except Exception:  
                    return "Invalid Conversion Type", 500              
                    
                try:
                    conv = self.convertTo(schema_checked, conv_type)
                    convertedData.append({'fmt': valid_fmt_name,'fmt_ext': valid_fmt_ext, 'schema': conv, 'err': False})

                except (TypeError, ValueError) as err:
                    tb = traceback.format_exc()
                    print(tb)
                    convertedData.append({'fmt': valid_fmt_name,'fmt_ext': valid_fmt_ext, 'schema': f"{err}", 'err': True})

                        
        return jsonify({
            "schema": {
                "base": request_json["schema"],
                "convert": convertedData
            }
        })
        
    def validateConversionType(self, type: str):
        valid_conversions = current_app.config.get("VALID_SCHEMA_CONV")
        
        for item in valid_conversions.items():
            if type == item[1]:
                return item    
        return False  
    
    def convertTo(self, schema, lang):
        kwargs = { "fmt": lang,}

        if lang == "html":
            kwargs["styles"] = current_app.config.get("OPEN_C2_SCHEMA_THEME", "")
            
        if lang == "json":
            return json_schema_dumps(schema)
        elif lang == "jadn":
            return dumps(schema, **kwargs)
        elif lang == "puml":
            return plant_dumps(schema, style={'links': True, 'detail': 'information'})                                      
        elif lang == "xsd":
            return convert_xsd_from_dict(schema)
        else:
            return dumps(schema, **kwargs)
        


class ConvertPDF(Resource):
    """
    Endpoint for api/convert/pdf
    """

    def post(self):
        request_json = request.json      
        pdf = BytesIO()
        print("convert to pdf")
        val, schema = current_app.validator.validateSchema(request_json["schema"], False)
        if val:  # Valid Schema
            html = html_dumps(schema, styles=current_app.config.get("OPEN_C2_SCHEMA_THEME", ""))
        else:  # Invalid Schema
            html = "<h1>ERROR: Invalid Schema. Fix the base schema errors before converting...</h1>"
            
        pdf_obj = HTML(string=html)  # the HTML to convert
        pdf_obj.write_pdf(target=pdf)  # file handle to receive result
        
        return Response(pdf.getvalue(), mimetype="application/pdf")


resources = {
    Convert: {"urls": ("/", )},
    ConvertPDF: {"urls": ("/pdf",)}
}


def add_resources(bp, url_prefix=""):
    for cls, opts in resources.items():
        args = [f"{url_prefix}{url}" for url in opts["urls"]] + opts.get("args", [])
        bp.add_resource(cls, *args, **opts.get("kwargs", {}))
