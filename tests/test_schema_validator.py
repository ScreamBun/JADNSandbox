from unittest import TestCase
from jadnschema.convert.schema.writers.json_schema.schema_validator import validate_schema

class BasicTypes(TestCase):
    
    def setUp(self):
        self.oc2lsv11_json = {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "http://oasis-open.org/openc2/oc2ls/v1.1",
  "title": "OpenC2 Language Profile",
  "description": "Language Profile from the OpenC2 Language Specification version 1.1",
  "type": "object",
  "additionalProperties": False,
  "properties": {
    "openc2_command": {
      "$ref": "#/definitions/OpenC2-Command"
    },
    "openc2_response": {
      "$ref": "#/definitions/OpenC2-Response"
    }
  },
  "definitions": {
    "OpenC2-Command": {
      "title": "OpenC2 Command",
      "type": "object",
      "description": "The Command defines an Action to be performed on a Target",
      "additionalProperties": False,
      "required": [
        "action",
        "target"
      ],
      "maxProperties": 100,
      "properties": {
        "action": {
          "$ref": "#/definitions/Action",
          "description": "The task or activity to be performed (i.e., the 'verb')."
        },
        "target": {
          "$ref": "#/definitions/Target",
          "description": "The object of the Action. The Action is performed on the Target."
        },
        "args": {
          "$ref": "#/definitions/Args",
          "description": "Additional information that applies to the Command."
        },
        "actuator": {
          "$ref": "#/definitions/Actuator",
          "description": "The subject of the Action. The Actuator executes the Action on the Target."
        },
        "command_id": {
          "$ref": "#/definitions/Command-ID",
          "description": "An identifier of this Command."
        }
      }
    },
    "OpenC2-Response": {
      "title": "OpenC2 Response",
      "type": "object",
      "additionalProperties": False,
      "required": [
        "status"
      ],
      "maxProperties": 100,
      "properties": {
        "status": {
          "$ref": "#/definitions/Status-Code",
          "description": "An integer status code."
        },
        "status_text": {
          "type": "string",
          "description": "A free-form human-readable description of the Response status.",
          "maxLength": 255
        },
        "results": {
          "$ref": "#/definitions/Results",
          "description": "Map of key:value pairs that contain additional results based on the invoking Command."
        }
      }
    },
    "Action": {
      "title": "Action",
      "type": "string",
      "enum": [
        "scan",
        "locate",
        "query",
        "deny",
        "contain",
        "allow",
        "start",
        "stop",
        "restart",
        "cancel",
        "set",
        "update",
        "redirect",
        "create",
        "delete",
        "detonate",
        "restore",
        "copy",
        "investigate",
        "remediate"
      ]
    },
    "Target": {
      "title": "Target",
      "type": "object",
      "additionalProperties": False,
      "minProperties": 1,
      "maxProperties": 1,
      "properties": {
        "artifact": {
          "$ref": "#/definitions/Artifact",
          "description": "An array of bytes representing a file-like object or a link to that object."
        },
        "command": {
          "$ref": "#/definitions/Command-ID",
          "description": "A reference to a previously issued Command."
        },
        "device": {
          "$ref": "#/definitions/Device",
          "description": "The properties of a hardware device."
        },
        "domain_name": {
          "$ref": "#/definitions/Domain-Name",
          "description": "A network domain name."
        },
        "email_addr": {
          "$ref": "#/definitions/Email-Addr",
          "description": "A single email address."
        },
        "features": {
          "$ref": "#/definitions/Features",
          "description": "A set of items used with the query Action to determine an Actuator's capabilities."
        },
        "file": {
          "$ref": "#/definitions/File",
          "description": "Properties of a file."
        },
        "idn_domain_name": {
          "$ref": "#/definitions/IDN-Domain-Name",
          "description": "An internationalized domain name."
        },
        "idn_email_addr": {
          "$ref": "#/definitions/IDN-Email-Addr",
          "description": "A single internationalized email address."
        },
        "ipv4_net": {
          "$ref": "#/definitions/IPv4-Net",
          "description": "An IPv4 address range including CIDR prefix length."
        },
        "ipv6_net": {
          "$ref": "#/definitions/IPv6-Net",
          "description": "An IPv6 address range including prefix length."
        },
        "ipv4_connection": {
          "$ref": "#/definitions/IPv4-Connection",
          "description": "A 5-tuple of source and destination IPv4 address ranges, source and destination ports, and protocol."
        },
        "ipv6_connection": {
          "$ref": "#/definitions/IPv6-Connection",
          "description": "A 5-tuple of source and destination IPv6 address ranges, source and destination ports, and protocol."
        },
        "iri": {
          "$ref": "#/definitions/IRI",
          "description": "An internationalized resource identifier (IRI)."
        },
        "mac_addr": {
          "$ref": "#/definitions/MAC-Addr",
          "description": "A Media Access Control (MAC) address - EUI-48 or EUI-64 as defined in [EUI]."
        },
        "process": {
          "$ref": "#/definitions/Process",
          "description": "Common properties of an instance of a computer program as executed on an operating system."
        },
        "properties": {
          "$ref": "#/definitions/Properties",
          "description": "Data attribute associated with an Actuator."
        },
        "uri": {
          "$ref": "#/definitions/URI",
          "description": "A uniform resource identifier (URI)."
        }
      }
    },
    "Actuator": {
      "title": "Actuator",
      "type": "object",
      "additionalProperties": False,
      "minProperties": 1,
      "maxProperties": 1,
      "properties": {}
    },
    "Args": {
      "title": "Args",
      "type": "object",
      "additionalProperties": False,
      "minProperties": 1,
      "maxProperties": 100,
      "properties": {
        "start_time": {
          "$ref": "#/definitions/Date-Time",
          "description": "The specific date/time to initiate the Command"
        },
        "stop_time": {
          "$ref": "#/definitions/Date-Time",
          "description": "The specific date/time to terminate the Command"
        },
        "duration": {
          "$ref": "#/definitions/Duration",
          "description": "The length of time for an Command to be in effect"
        },
        "response_requested": {
          "$ref": "#/definitions/Response-Type",
          "description": "The type of Response required for the Command: none, ack, status, complete"
        }
      }
    },
    "Results": {
      "title": "Results",
      "type": "object",
      "description": "Response Results",
      "additionalProperties": False,
      "minProperties": 1,
      "maxProperties": 100,
      "properties": {
        "versions": {
          "$ref": "#/definitions/Versions",
          "description": "List of OpenC2 language versions supported by this Actuator"
        },
        "profiles": {
          "$ref": "#/definitions/Profiles",
          "description": "List of profiles supported by this Actuator"
        },
        "pairs": {
          "$ref": "#/definitions/Action-Targets",
          "description": "List of targets applicable to each supported Action"
        },
        "rate_limit": {
          "type": "number",
          "description": "Maximum number of requests per minute supported by design or policy",
          "minimum": 0.0
        },
        "args": {
          "type": "array",
          "description": "List of supported Command Arguments",
          "minItems": 1,
          "items": {
            "type": "string",
            "description": "List of supported Command Arguments",
            "enum": [
              "start_time",
              "stop_time",
              "duration",
              "response_requested"
            ]
          }
        }
      }
    },
    "Action-Targets": {
      "title": "Action Targets",
      "type": "object",
      "description": "Map of all actions to all targets",
      "additionalProperties": False,
      "minProperties": 1,
      "maxProperties": 100,
      "properties": {
        "scan": {
          "$ref": "#/definitions/Targets"
        },
        "locate": {
          "$ref": "#/definitions/Targets"
        },
        "query": {
          "$ref": "#/definitions/Targets"
        },
        "deny": {
          "$ref": "#/definitions/Targets"
        },
        "contain": {
          "$ref": "#/definitions/Targets"
        },
        "allow": {
          "$ref": "#/definitions/Targets"
        },
        "start": {
          "$ref": "#/definitions/Targets"
        },
        "stop": {
          "$ref": "#/definitions/Targets"
        },
        "restart": {
          "$ref": "#/definitions/Targets"
        },
        "cancel": {
          "$ref": "#/definitions/Targets"
        },
        "set": {
          "$ref": "#/definitions/Targets"
        },
        "update": {
          "$ref": "#/definitions/Targets"
        },
        "redirect": {
          "$ref": "#/definitions/Targets"
        },
        "create": {
          "$ref": "#/definitions/Targets"
        },
        "delete": {
          "$ref": "#/definitions/Targets"
        },
        "detonate": {
          "$ref": "#/definitions/Targets"
        },
        "restore": {
          "$ref": "#/definitions/Targets"
        },
        "copy": {
          "$ref": "#/definitions/Targets"
        },
        "investigate": {
          "$ref": "#/definitions/Targets"
        },
        "remediate": {
          "$ref": "#/definitions/Targets"
        }
      }
    },
    "Targets": {
      "title": "Targets",
      "type": "array",
      "description": "List of all Target types",
      "uniqueItems": True,
      "minItems": 1,
      "maxItems": 1,
      "items": {
        "enum": [
          "artifact",
          "command",
          "device",
          "domain_name",
          "email_addr",
          "features",
          "file",
          "idn_domain_name",
          "idn_email_addr",
          "ipv4_net",
          "ipv6_net",
          "ipv4_connection",
          "ipv6_connection",
          "iri",
          "mac_addr",
          "process",
          "properties",
          "uri"
        ]
      }
    },
    "Status-Code": {
      "title": "Status Code",
      "type": "integer",
      "enum": [
        102,
        200,
        201,
        400,
        401,
        403,
        404,
        500,
        501,
        503
      ]
    },
    "Artifact": {
      "title": "Artifact",
      "type": "object",
      "additionalProperties": False,
      "minProperties": 1,
      "maxProperties": 100,
      "properties": {
        "mime_type": {
          "type": "string",
          "description": "Permitted values specified in the IANA Media Types registry, [RFC6838]",
          "maxLength": 255
        },
        "payload": {
          "$ref": "#/definitions/Payload",
          "description": "Choice of literal content or URL"
        },
        "hashes": {
          "$ref": "#/definitions/Hashes",
          "description": "Hashes of the payload content"
        }
      }
    },
    "Device": {
      "title": "Device",
      "type": "object",
      "additionalProperties": False,
      "minProperties": 1,
      "maxProperties": 100,
      "properties": {
        "hostname": {
          "$ref": "#/definitions/Hostname",
          "description": "A hostname that can be used to connect to this device over a network"
        },
        "idn_hostname": {
          "$ref": "#/definitions/IDN-Hostname",
          "description": "An internationalized hostname that can be used to connect to this device over a network"
        },
        "device_id": {
          "type": "string",
          "description": "An identifier that refers to this device within an inventory or management system",
          "maxLength": 255
        }
      }
    },
    "Domain-Name": {
      "title": "Domain Name",
      "type": "string",
      "description": "[RFC1034], Section 3.5",
      "format": "hostname",
      "maxLength": 255
    },
    "Email-Addr": {
      "title": "Email Addr",
      "type": "string",
      "description": "Email address - [RFC5322], Section 3.4.1",
      "format": "email",
      "maxLength": 255
    },
    "Features": {
      "title": "Features",
      "type": "array",
      "description": "An array of zero to ten names used to query an Actuator for its supported capabilities.",
      "uniqueItems": True,
      "maxItems": 10,
      "items": {
        "$ref": "#/definitions/Feature"
      }
    },
    "File": {
      "title": "File",
      "type": "object",
      "additionalProperties": False,
      "minProperties": 1,
      "maxProperties": 100,
      "properties": {
        "name": {
          "type": "string",
          "description": "The name of the file as defined in the file system",
          "maxLength": 255
        },
        "path": {
          "type": "string",
          "description": "The absolute path to the location of the file in the file system",
          "maxLength": 255
        },
        "hashes": {
          "$ref": "#/definitions/Hashes",
          "description": "One or more cryptographic hash codes of the file contents"
        }
      }
    },
    "IDN-Domain-Name": {
      "title": "IDN Domain Name",
      "type": "string",
      "description": "Internationalized Domain Name - [RFC5890], Section 2.3.2.3",
      "format": "idn-hostname",
      "maxLength": 255
    },
    "IDN-Email-Addr": {
      "title": "IDN Email Addr",
      "type": "string",
      "description": "Internationalized email address - [RFC6531]",
      "format": "idn-email",
      "maxLength": 255
    },
    "IPv4-Net": {
      "title": "IPv4 Net",
      "type": "string",
      "description": "IPv4 address and prefix length",
      "pattern": "^((25[0-5]|2[0-4][0-9]|[01]?[0-9]?[0-9])\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9]?[0-9])(\\/(3[0-2]|[0-2]?[0-9]))?$"
    },
    "IPv4-Connection": {
      "title": "IPv4 Connection",
      "type": "object",
      "description": "5-tuple that specifies a tcp/ip connection",
      "additionalProperties": False,
      "minProperties": 1,
      "maxProperties": 100,
      "properties": {
        "src_addr": {
          "$ref": "#/definitions/IPv4-Net",
          "description": "IPv4 source address range"
        },
        "src_port": {
          "$ref": "#/definitions/Port",
          "description": "Source service per [RFC6335]"
        },
        "dst_addr": {
          "$ref": "#/definitions/IPv4-Net",
          "description": "IPv4 destination address range"
        },
        "dst_port": {
          "$ref": "#/definitions/Port",
          "description": "Destination service per [RFC6335]"
        },
        "protocol": {
          "$ref": "#/definitions/L4-Protocol",
          "description": "Layer 4 protocol (e.g., TCP) - see L4-Protocol section"
        }
      }
    },
    "IPv6-Net": {
      "title": "IPv6 Net",
      "type": "string",
      "description": "IPv6 address and prefix length",
      "pattern": "^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))(%.+)?s*(\\/([0-9]|[1-9][0-9]|1[0-1][0-9]|12[0-8]))?$"
    },
    "IPv6-Connection": {
      "title": "IPv6 Connection",
      "type": "object",
      "description": "5-tuple that specifies a tcp/ip connection",
      "additionalProperties": False,
      "minProperties": 1,
      "maxProperties": 100,
      "properties": {
        "src_addr": {
          "$ref": "#/definitions/IPv6-Net",
          "description": "IPv6 source address range"
        },
        "src_port": {
          "$ref": "#/definitions/Port",
          "description": "Source service per [RFC6335]"
        },
        "dst_addr": {
          "$ref": "#/definitions/IPv6-Net",
          "description": "IPv6 destination address range"
        },
        "dst_port": {
          "$ref": "#/definitions/Port",
          "description": "Destination service per [RFC6335]"
        },
        "protocol": {
          "$ref": "#/definitions/L4-Protocol",
          "description": "Layer 4 protocol (e.g., TCP) - [Section 3.4.2.10]"
        }
      }
    },
    "IRI": {
      "title": "IRI",
      "type": "string",
      "description": "Internationalized Resource Identifier, [RFC3987]",
      "format": "iri",
      "maxLength": 255
    },
    "MAC-Addr": {
      "title": "MAC Addr",
      "type": "string",
      "description": "Media Access Control / Extended Unique Identifier address - EUI-48 or EUI-64 as defined in [EUI]",
      "pattern": "^([0-9a-fA-F]{2}[:-]){5}[0-9A-Fa-f]{2}(([:-][0-9A-Fa-f]{2}){2})?$"
    },
    "Process": {
      "title": "Process",
      "type": "object",
      "additionalProperties": False,
      "minProperties": 1,
      "maxProperties": 100,
      "properties": {
        "pid": {
          "type": "integer",
          "description": "Process ID of the process",
          "minimum": 0
        },
        "name": {
          "type": "string",
          "description": "Name of the process",
          "maxLength": 255
        },
        "cwd": {
          "type": "string",
          "description": "Current working directory of the process",
          "maxLength": 255
        },
        "executable": {
          "$ref": "#/definitions/File",
          "description": "Executable that was executed to start the process"
        },
        "parent": {
          "$ref": "#/definitions/Process",
          "description": "Process that spawned this one"
        },
        "command_line": {
          "type": "string",
          "description": "The full command line invocation used to start this process, including all arguments",
          "maxLength": 255
        }
      }
    },
    "Properties": {
      "title": "Properties",
      "type": "array",
      "description": "A list of names that uniquely identify properties of an Actuator.",
      "uniqueItems": True,
      "minItems": 1,
      "maxItems": 100,
      "items": {
        "type": "string"
      }
    },
    "URI": {
      "title": "URI",
      "type": "string",
      "description": "Uniform Resource Identifier, [RFC3986]",
      "format": "uri",
      "maxLength": 255
    },
    "Date-Time": {
      "title": "Date Time",
      "type": "integer",
      "description": "Date and Time",
      "minimum": 0
    },
    "Duration": {
      "title": "Duration",
      "type": "integer",
      "description": "A length of time",
      "minimum": 0
    },
    "Feature": {
      "title": "Feature",
      "type": "string",
      "description": "Specifies the results to be returned from a query features Command",
      "enum": [
        "versions",
        "profiles",
        "pairs",
        "rate_limit",
        "args"
      ]
    },
    "Hashes": {
      "title": "Hashes",
      "type": "object",
      "description": "Cryptographic hash values",
      "additionalProperties": False,
      "minProperties": 1,
      "maxProperties": 100,
      "properties": {
        "md5": {
          "type": "string",
          "description": "MD5 hash as defined in [RFC1321]",
          "contentEncoding": "base16"
        },
        "sha1": {
          "type": "string",
          "description": "SHA1 hash as defined in [RFC6234]",
          "contentEncoding": "base16"
        },
        "sha256": {
          "type": "string",
          "description": "SHA256 hash as defined in [RFC6234]",
          "contentEncoding": "base16"
        }
      }
    },
    "Hostname": {
      "title": "Hostname",
      "type": "string",
      "description": "Internet host name as specified in [RFC1123]",
      "format": "hostname",
      "maxLength": 255
    },
    "IDN-Hostname": {
      "title": "IDN Hostname",
      "type": "string",
      "description": "Internationalized Internet host name as specified in [RFC5890], Section 2.3.2.3",
      "format": "idn-hostname",
      "maxLength": 255
    },
    "IPv4-Addr": {
      "title": "IPv4 Addr",
      "type": "string",
      "description": "32 bit IPv4 address as defined in [RFC0791]",
      "pattern": "^((25[0-5]|2[0-4][0-9]|[01]?[0-9]?[0-9])\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9]?[0-9])$"
    },
    "IPv6-Addr": {
      "title": "IPv6 Addr",
      "type": "string",
      "description": "128 bit IPv6 address as defined in [RFC8200]",
      "pattern": "^(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))(%.+)$"
    },
    "L4-Protocol": {
      "title": "L4 Protocol",
      "type": "string",
      "description": "Value of the protocol (IPv4) or next header (IPv6) field in an IP packet. Any IANA value, [RFC5237]",
      "enum": [
        "icmp",
        "tcp",
        "udp",
        "sctp"
      ]
    },
    "Payload": {
      "title": "Payload",
      "type": "object",
      "additionalProperties": False,
      "minProperties": 1,
      "maxProperties": 1,
      "properties": {
        "bin": {
          "type": "string",
          "description": "Specifies the data contained in the artifact",
          "contentEncoding": "base64url"
        },
        "url": {
          "$ref": "#/definitions/URI",
          "description": "MUST be a valid URL that resolves to the un-encoded content"
        }
      }
    },
    "Port": {
      "title": "Port",
      "type": "integer",
      "description": "Transport Protocol Port Number, [RFC6335]",
      "minimum": 0,
      "maximum": 65535
    },
    "Response-Type": {
      "title": "Response Type",
      "type": "string",
      "enum": [
        "none",
        "ack",
        "status",
        "complete"
      ]
    },
    "Versions": {
      "title": "Versions",
      "type": "array",
      "description": "List of OpenC2 language versions",
      "uniqueItems": True,
      "maxItems": 10,
      "items": {
        "$ref": "#/definitions/Version"
      }
    },
    "Profiles": {
      "title": "Profiles",
      "type": "array",
      "description": "List of OpenC2 profiles",
      "uniqueItems": True,
      "maxItems": 0,
      "items": {
        "$ref": "#/definitions/Namespace"
      }
    },
    "Version": {
      "title": "Version",
      "type": "string",
      "description": "Major.Minor version number",
      "maxLength": 255
    },
    "Namespace": {
      "title": "Namespace",
      "type": "string",
      "description": "Unique name of an Actuator Profile",
      "format": "uri",
      "maxLength": 255
    },
    "Command-ID": {
      "title": "Command ID",
      "type": "string",
      "description": "Command Identifier",
      "maxLength": 255,
      "pattern": "^\\S{0,36}$"
    }
  }
}
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
        
        response = validate_schema(self.oc2lsv11_json)
        self.assertTrue(response)        