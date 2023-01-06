import ast
import json
import logging
import os
import re

from io import BytesIO
import traceback
from flask import current_app, jsonify, Response, request
from flask_restful import Resource, reqparse
import jadn
# from jadnschema import jadn
from jadnschema.convert import CommentLevels, SchemaFormats, dumps
# from jadnschema.convert import cddl_dumps, proto_dumps, thrift_dumps
from jadnschema.convert import html_dumps, jadn_dumps, md_dumps, relax_dumps
from weasyprint import HTML

logger = logging.getLogger(__name__)

parser = reqparse.RequestParser()
parser.add_argument("schema", type=dict)
parser.add_argument("schema-list", type=str)
parser.add_argument("convert", type=str)
parser.add_argument("convert-to", type=str)
# parser.add_argument("comments", type=str, default=any, choices=any)
parser.add_argument("comments", type=str, default=CommentLevels.ALL, choices=CommentLevels)


class Convert(Resource):
    """
    Endpoint for api/convert
    """

    def get(self):
        schemas = re.compile(fr"\.({'|'.join(current_app.config.get('VALID_SCHEMAS'))})$")

        return jsonify({
            "schemas": [s for s in os.listdir(os.path.join(current_app.config.get("OPEN_C2_DATA"), "schemas")) if schemas.search(s)],
            "conversions": current_app.config.get("VALID_SCHEMA_CONV")
        })

    def post(self):
        args = parser.parse_args()
        conv = "Valid Base Schema"
        raw_schema = args["schema"]

        request_json = request.json
        request_get_json = request.get_json
        request_data = request.data

        is_valid, schema = current_app.validator.validateSchema(args["schema"], False)
        if is_valid:
            try:
                conv_fmt = SchemaFormats(args["convert-to"])
            except Exception:  # pylint: disable=broad-except
                # TODO: pick better exception
                conv = "Invalid Conversion Type"
            else:
                kwargs = {
                    "fmt": conv_fmt
                }

                if args["convert-to"] == "jidl":
                    print('\nSchema (JADN IDL):\n------------------')
                    try:

                        # This is a Python value. Avoiding double quotes reduces chance of confusion with JSON strings.
                        # Python values allow comments, single quoted strings, None, True, False.
                        schema_test = {     

                            'info': {
                                'package': 'http://oasis-open.org/openc2/oc2ls/v1.0.1',
                                'version': '0',
                                'title': 'Language schema with errata',
                                'description': 'OpenC2 LS version 1.0 + errata',
                                'exports': [
                                'OpenC2-Command',
                                'OpenC2-Response'
                                ],
                                'config': {
                                '$Sys': ':',
                                '$TypeName': '^[A-Z][-:A-Za-z0-9]{0,31}$',
                                '$FieldName': '^[a-z][-_a-z0-9]{0,31}$'
                                }
                            },

                            'types': [      
                                ["OpenC2-Command", "Record", [], "", [
                                    [1, "action", "Action", [], "The task or activity to be performed (i.e., the 'verb')."],
                                    [2, "target", "Target", [], "The object of the Action. The Action is performed on the Target."],
                                    [3, "args", "Args", ["[0"], "Additional information that applies to the Command."],
                                    [4, "actuator", "Actuator", ["[0"], "The subject of the Action. The Actuator executes the Action on the Target."],
                                    [5, "command_id", "String", ["[0"], "An identifier of this Command."]
                                ]],
                                ["OpenC2-Response", "Map", [], "", [
                                    [1, "status", "Status-Code", [], "An integer status code"],
                                    [2, "status_text", "String", ["[0"], "A free-form human-readable description of the Response status"],
                                    [3, "results", "Results", ["[0"], "Map of key:value pairs that contain additional results based on the invoking Command."]
                                ]],      
                                ["Action", "Enumerated", [], "", [
                                    [1, "scan", "Systematic examination of some aspect of the entity or its environment."],
                                    [2, "locate", "Find an object physically, logically, functionally, or by organization."],
                                    [3, "query", "Initiate a request for information."],
                                    [6, "deny", "Prevent a certain event or action from completion, such as preventing a flow from reaching a destination or preventing access."],
                                    [7, "contain", "Isolate a file, process, or entity so that it cannot modify or access assets or processes."],
                                    [8, "allow", "Permit access to or execution of a Target."],
                                    [9, "start", "Initiate a process, application, system, or activity."],
                                    [10, "stop", "Halt a system or end an activity."],
                                    [11, "restart", "Stop then start a system or an activity."],
                                    [14, "cancel", "Invalidate a previously issued Action."],
                                    [15, "set", "Change a value, configuration, or state of a managed entity."],
                                    [16, "update", "Instruct a component to retrieve, install, process, and operate in accordance with a software update, reconfiguration, or other update."],
                                    [18, "redirect", "Change the flow of traffic to a destination other than its original destination."],
                                    [19, "create", "Add a new entity of a known type (e.g., data, files, directories)."],
                                    [20, "delete", "Remove an entity (e.g., data, files, flows)."],
                                    [22, "detonate", "Execute and observe the behavior of a Target (e.g., file, hyperlink) in an isolated environment."],
                                    [23, "restore", "Return a system to a previously known state."],
                                    [28, "copy", "Duplicate an object, file, data flow, or artifact."],
                                    [30, "investigate", "Task the recipient to aggregate and report information as it pertains to a security event or incident."],
                                    [32, "remediate", "Task the recipient to eliminate a vulnerability or attack point."]
                                ]],     
                                ["Target", "Choice", [], "OpenC2 Target datatypes", [
                                    [1, "artifact", "Artifact", [], "An array of bytes representing a file-like object or a link to that object."],
                                    [2, "command", "String", [], "A reference to a previously issued Command."],
                                    [3, "device", "Device", [], "The properties of a hardware device."],
                                    [7, "domain_name", "Domain-Name", [], "A network domain name."],
                                    [8, "email_addr", "Email-Addr", [], "A single email address."],
                                    [9, "features", "Features", [], "A set of items used with the query Action to determine an Actuator's capabilities."],
                                    [10, "file", "File", [], "Properties of a file."],
                                    [11, "idn_domain_name", "IDN-Domain-Name", [], "An internationalized domain name."],
                                    [12, "idn_email_addr", "IDN-Email-Addr", [], "A single internationalized email address."],
                                    [13, "ipv4_net", "IPv4-Net", [], "An IPv4 address range including CIDR prefix length."],
                                    [14, "ipv6_net", "IPv6-Net", [], "An IPv6 address range including prefix length."],
                                    [15, "ipv4_connection", "IPv4-Connection", [], "A 5-tuple of source and destination IPv4 address ranges, source and destination ports, and protocol"],
                                    [16, "ipv6_connection", "IPv6-Connection", [], "A 5-tuple of source and destination IPv6 address ranges, source and destination ports, and protocol"],
                                    [20, "iri", "IRI", [], "An internationalized resource identifier (IRI)."],
                                    [17, "mac_addr", "MAC-Addr", [], "A Media Access Control (MAC) address - EUI-48 or EUI-64 as defined in [[EUI]](#eui)"],
                                    [18, "process", "Process", [], "Common properties of an instance of a computer program as executed on an operating system."],
                                    [25, "properties", "Properties", [], "Data attribute associated with an Actuator"],
                                    [19, "uri", "URI", [], "A uniform resource identifier (URI)."]
                                ]],      
                                ["Args", "Map", ["{1"], "", [
                                    [1, "start_time", "Date-Time", ["[0"], "The specific date/time to initiate the Command"],
                                    [2, "stop_time", "Date-Time", ["[0"], "The specific date/time to terminate the Command"],
                                    [3, "duration", "Duration", ["[0"], "The length of time for an Command to be in effect"],
                                    [4, "response_requested", "Response-Type", ["[0"], "The type of Response required for the Command: `none`, `ack`, `status`, `complete`."]
                                ]],     
                                ["Results", "Map", ["{1"], "", [
                                    [1, "versions", "ArrayOf", ["*Version", "[0", "]0", "q"], "List of OpenC2 language versions supported by this Actuator"],
                                    [2, "profiles", "ArrayOf", ["[0", "*Nsid"], "List of profiles supported by this Actuator"],
                                    [3, "pairs", "Action-Targets", ["[0"], "List of targets applicable to each supported Action"],
                                    [4, "rate_limit", "Number", ["[0"], "Maximum number of requests per minute supported by design or policy"]
                                ]],       
                                ["Action-Targets", "MapOf", ["{1", "+Action", "*Targets"], "Map of each action supported by this actuator to the list of targets applicable to that action"],
                                ["Targets", "ArrayOf", ["*Target", "{0", "}0", "q"], "List of JSON Pointers to Target types"],
                                ["Status-Code", "Enumerated", ["="], "", [
                                    [102, "Processing", "an interim Response used to inform the Producer that the Consumer has accepted the Command but has not yet completed it."],
                                    [200, "OK", "the Command has succeeded."],
                                    [400, "BadRequest", "the Consumer cannot process the Command due to something that is perceived to be a Producer error (e.g., malformed Command syntax)."],
                                    [401, "Unauthorized", "the Command Message lacks valid authentication credentials for the target resource or authorization has been refused for the submitted credentials."],
                                    [403, "Forbidden", "the Consumer understood the Command but refuses to authorize it."],
                                    [404, "NotFound", "the Consumer has not found anything matching the Command."],
                                    [500, "InternalError", "the Consumer encountered an unexpected condition that prevented it from performing the Command."],
                                    [501, "NotImplemented", "the Consumer does not support the functionality required to perform the Command."],
                                    [503, "ServiceUnavailable", "the Consumer is currently unable to perform the Command due to a temporary overloading or maintenance of the Consumer."]
                                ]],         
                                ["Artifact", "Record", ["{1"], "", [
                                    [1, "mime_type", "String", ["[0"], "Permitted values specified in the IANA Media Types registry, [[RFC6838]](#rfc6838)"],
                                    [2, "payload", "Payload", ["[0"], "Choice of literal content or URL"],
                                    [3, "hashes", "Hashes", ["[0"], "Hashes of the payload content"]
                                ]],
                                ["Device", "Map", ["{1"], "", [
                                    [1, "hostname", "Hostname", ["[0"], "A hostname that can be used to connect to this device over a network"],
                                    [2, "idn_hostname", "IDN-Hostname", ["[0"], "An internationalized hostname that can be used to connect to this device over a network"],
                                    [3, "device_id", "String", ["[0"], "An identifier that refers to this device within an inventory or management system"]
                                ]],
                                ["Domain-Name", "String", ["/hostname"], "[[RFC1034]](#rfc1034), Section 3.5"],
                                ["Email-Addr", "String", ["/email"], "Email address, [[RFC5322]](#rfc5322), Section 3.4.1"],
                                ["Features", "ArrayOf", ["*Feature", "{0", "}10", "q"], "An array of zero to ten names used to query an Actuator for its supported capabilities."],
                                ["File", "Map", ["{1"], "", [
                                    [1, "name", "String", ["[0"], "The name of the file as defined in the file system"],
                                    [2, "path", "String", ["[0"], "The absolute path to the location of the file in the file system"],
                                    [3, "hashes", "Hashes", ["[0"], "One or more cryptographic hash codes of the file contents"]
                                ]],  
                                ["IDN-Domain-Name", "String", ["/idn-hostname"], "Internationalized Domain Name, [[RFC5890]](#rfc5890), Section 2.3.2.3."],
                                ["IDN-Email-Addr", "String", ["/idn-email"], "Internationalized email address, [[RFC6531]](#rfc6531)"],
                                ["IPv4-Net", "Array", ["/ipv4-net"], "", [
                                    [1, "ipv4_addr", "IPv4-Addr", [], "IPv4 address as defined in [[RFC0791]](#rfc0791)"],
                                    [2, "prefix_length", "Integer", ["[0"], "CIDR prefix-length. If omitted, refers to a single host address."]
                                ]],
                                ["IPv4-Connection", "Record", ["{1"], "5-tuple that specifies a tcp/ip connection", [
                                    [1, "src_addr", "IPv4-Net", ["[0"], "IPv4 source address range"],
                                    [2, "src_port", "Port", ["[0"], "source service per [[RFC6335]](#rfc6335)"],
                                    [3, "dst_addr", "IPv4-Net", ["[0"], "IPv4 destination address range"],
                                    [4, "dst_port", "Port", ["[0"], "destination service per [[RFC6335]](#rfc6335)"],
                                    [5, "protocol", "L4-Protocol", ["[0"], "layer 4 protocol (e.g., TCP) - see [Section 3.4.2.10](#34210-l4-protocol)"]
                                ]],
                                ["IPv6-Net", "Array", ["/ipv6-net"], "", [
                                    [1, "ipv6_addr", "IPv6-Addr", [], "IPv6 address as defined in [[RFC8200]](#rfc8200)"],
                                    [2, "prefix_length", "Integer", ["[0"], "prefix length. If omitted, refers to a single host address."]
                                ]],    
                                ["IPv6-Connection", "Record", ["{1"], "5-tuple that specifies a tcp/ip connection", [
                                    [1, "src_addr", "IPv6-Net", ["[0"], "IPv6 source address range"],
                                    [2, "src_port", "Port", ["[0"], "source service per [[RFC6335]](#rfc6335)"],
                                    [3, "dst_addr", "IPv6-Net", ["[0"], "IPv6 destination address range"],
                                    [4, "dst_port", "Port", ["[0"], "destination service per [[RFC6335]](#rfc6335)"],
                                    [5, "protocol", "L4-Protocol", ["[0"], "layer 4 protocol (e.g., TCP) - [Section 3.4.2.10](#34210-l4-protocol)"]
                                ]],
                                ["IRI", "String", ["/iri"], "Internationalized Resource Identifier, [[RFC3987]](#rfc3987)."],
                                ["MAC-Addr", "Binary", ["/eui"], "Media Access Control / Extended Unique Identifier address - EUI-48 or EUI-64 as defined in [[EUI]](#eui)."],
                                ["Process", "Map", ["{1"], "", [
                                    [1, "pid", "Integer", ["[0", "{0"], "Process ID of the process"],
                                    [2, "name", "String", ["[0"], "Name of the process"],
                                    [3, "cwd", "String", ["[0"], "Current working directory of the process"],
                                    [4, "executable", "File", ["[0"], "Executable that was executed to start the process"],
                                    [5, "parent", "Process", ["[0"], "Process that spawned this one"],
                                    [6, "command_line", "String", ["[0"], "The full command line invocation used to start this process, including all arguments"]
                                ]],
                                ["Properties", "ArrayOf", ["*String", "{1", "q"], "A list of names that uniquely identify properties of an Actuator."],
                                ["URI", "String", ["/uri"], "Uniform Resource Identifier, [[RFC3986]](#rfc3986)."],
                                ["Date-Time", "Integer", ["{0"], "Date and Time"],
                                ["Duration", "Integer", ["{0"], "A length of time"],
                                ["Feature", "Enumerated", [], "Specifies the results to be returned from a query features Command", [
                                    [1, "versions", "List of OpenC2 Language versions supported by this Actuator"],
                                    [2, "profiles", "List of profiles supported by this Actuator"],
                                    [3, "pairs", "List of supported Actions and applicable Targets"],
                                    [4, "rate_limit", "Maximum number of Commands per minute supported by design or policy"]
                                ]],
                                    ["Hashes", "Map", ["{1"], "Cryptographic Hash values", [
                                    [1, "md5", "Binary", ["[0", "/x"], "MD5 hash as defined in [[RFC1321]](#rfc1321)"],
                                    [2, "sha1", "Binary", ["[0", "/x"], "SHA1 hash as defined in [[RFC6234]](#rfc6234)"],
                                    [3, "sha256", "Binary", ["[0", "/x"], "SHA256 hash as defined in [[RFC6234]](#rfc6234)"]
                                ]],
                                ["Hostname", "String", ["/hostname"], "Internet host name as specified in [[RFC1123]](#rfc1123)"],
                                ["IDN-Hostname", "String", ["/idn-hostname"], "Internationalized Internet host name as specified in [[RFC5890]](#rfc5890), Section 2.3.2.3."],
                                ["IPv4-Addr", "Binary", ["/ipv4-addr"], "32 bit IPv4 address as defined in [[RFC0791]](#rfc0791)"],
                                ["IPv6-Addr", "Binary", ["/ipv6-addr"], "128 bit IPv6 address as defined in [[RFC8200]](#rfc8200)"],
                                ["L4-Protocol", "Enumerated", [], "Value of the protocol (IPv4) or next header (IPv6) field in an IP packet. Any IANA value, [RFC5237]", [
                                    [1, "icmp", "Internet Control Message Protocol - [[RFC0792]](#rfc0792)"],
                                    [6, "tcp", "Transmission Control Protocol - [[RFC0793]](#rfc0793)"],
                                    [17, "udp", "User Datagram Protocol - [[RFC0768]](#rfc0768)"],
                                    [132, "sctp", "Stream Control Transmission Protocol - [[RFC4960]](#rfc4960)"]
                                ]],
                                    ["Nsid", "String", ["{1", "}16"], "A short identifier that refers to a namespace."],
                                    ["Payload", "Choice", [], "", [
                                    [1, "bin", "Binary", [], "Specifies the data contained in the artifact"],
                                    [2, "url", "URI", [], "MUST be a valid URL that resolves to the un-encoded content"]
                                ]],
                                ["Port", "Integer", ["{0", "}65535"], "Transport Protocol Port Number, [[RFC6335]](#rfc6335)"],
                                ["Response-Type", "Enumerated", [], "", [
                                    [0, "none", "No response"],
                                    [1, "ack", "Respond when Command received"],
                                    [2, "status", "Respond with progress toward Command completion"],
                                    [3, "complete", "Respond when all aspects of Command completed"]
                                ]],
                                ["Version", "String", [], "Major.Minor version number"]                                                                                                                                                                                                                  
                            ]
                        }

                        schema_json = json.dumps(raw_schema, ensure_ascii=False)
                        print('schema_json: ' + schema_json)
                        # schema = jadn.check(schema) 
                        # schema_json = json.load(schema)
                        schema_jidl = jadn.convert.jidl_dumps(request_json)
                        print('schema_test: ' + schema_jidl)
                        print(schema_jidl)
                        conv = schema_jidl
                    except:
                        tb = traceback.format_exc()
                        print(tb)


                # if args["convert-to"] not in ["html", "jadn", "md"]:
                #     kwargs["comm"] = args.comments
                # elif args["convert-to"] == "html":
                #     kwargs["styles"] = current_app.config.get("OPEN_C2_SCHEMA_THEME", "")

                # conv = dumps(schema, **kwargs)

        else:
            conv = "Fix the base schema errors before converting..."

        return jsonify({
            "schema": {
                "base": args["schema"],
                "convert": conv,
                "fmt": args["convert-to"]
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
    ConvertPDF: {"urls": ("/pdf",)}
}


def add_resources(bp, url_prefix=""):
    for cls, opts in resources.items():
        args = [f"{url_prefix}{url}" for url in opts["urls"]] + opts.get("args", [])
        bp.add_resource(cls, *args, **opts.get("kwargs", {}))
