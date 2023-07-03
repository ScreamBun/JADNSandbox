"""
JADN Network Formats
"""
import re
import netaddr

from ipaddress import IPv4Address, IPv4Network, IPv6Address, IPv6Network
from typing import Optional, Union
from .consts import HOSTNAME_MAX_LENGTH
from ...utils import addKey
import base64

__all__ = [
    # All formats
    "NetworkFormats",
    # Specific
    "hostname", "IPv4", "IPv6", "EUI", "IPv4_Address", "IPv6_Address", "IPv4_Network", "IPv6_Network"
]

NetworkFormats = {}


# From https://stackoverflow.com/questions/2532053/validate-a-hostname-string
@addKey(d=NetworkFormats)
def hostname(val: str) -> str:
    """
    Check if valid Hostname - RFC 1034 § 3.1
    :param val: Hostname to validate
    :return: given hostname
    :raises: ValidationError
    """
    if not isinstance(val, str):
        raise TypeError(f"Hostname given is not expected string, given {type(val)}")

    # Copy & strip exactly one dot from the right, if present
    val = val[:-1] if val.endswith(".") else val[:]
    if len(val) < 1:
        raise ValueError("Hostname is not a valid length, minimum 1 character")

    if len(val) > HOSTNAME_MAX_LENGTH:
        raise ValueError(f"Hostname is not a valid length, exceeds {HOSTNAME_MAX_LENGTH} characters")

    allowed = re.compile("(?!-)[A-Z0-9-]{1,63}(?<!-)$", re.IGNORECASE)
    if not all(allowed.match(x) for x in val.split(".")):
        raise ValueError("Hostname given is not valid")
    return val


@addKey(d=NetworkFormats, k="ipv4")
def IPv4(val: str) -> IPv4Address:
    """
    JSON Schema
    RFC 2673 § 3.2# "dotted-quad"
    :param val: IPv4 Address to validate
    :return: None or Exception
    """
    if not isinstance(val, str):
        raise TypeError(f"IPv4 address given is not expected string, given {type(val)}")
    return IPv4Address(val)


@addKey(d=NetworkFormats, k="ipv6")
def IPv6(val: str) -> IPv6Address:
    """
    JSON Schema
    RFC 4291 § 2.2 "IPv6 address"
    :param val: IPv6 Address to validate
    :return: None or Exception
    """
    if not isinstance(val, str):
        raise TypeError(f"IPv6 address given is not expected string, given {type(val)}")
    return IPv6Address(val)


@addKey(d=NetworkFormats, k="eui")
def EUI(val: Union[bytes, str]) -> netaddr.EUI:
    """
    IEEE Extended Unique Identifier (MAC Address), EUI-48 or EUI-64
    :param val: EUI to validate
    :return: None or Exception
    """
    if not isinstance(val, (bytes, str)):
        raise TypeError(f"EUI is not expected type, given {type(val)}")

    val = val if isinstance(val, str) else val.decode("utf-8")
    return netaddr.EUI(val)


# How to validate??
@addKey(d=NetworkFormats, k="ipv4-addr")
def IPv4_Address(val: str) -> IPv4Address:
    """
    IPv4 address as specified in RFC 791 § 3.1
    :param val: IPv4 Address to validate
    :return: None or Exception
    """
    # Convert val to bytes
    try:
        bytes = base64.b64decode(val)
        val = bytes.decode("utf-8")
    except Exception as e:
            raise TypeError(f"{e}")
 
    if not isinstance(val, str):
        raise TypeError(f"IPv4 address given is not expected string, given {type(val)}")
    return IPv4Address(val)


# How to validate??
@addKey(d=NetworkFormats, k="ipv6-addr")
def IPv6_Address(val: str) -> IPv6Address:
    """
    IPv6 address as specified in RFC 8200 § 3
    :param val: IPv6 Address to validate
    :return: None or Exception
    """
    # Convert val to bytes
    try:
        bytes = base64.b64decode(val)
        val = bytes.decode("utf-8")
    except Exception as e:
            raise TypeError(f"{e}")
    
    if not isinstance(val, str):
        raise TypeError(f"IPv6 address given is not expected string, given {type(val)}")
    return IPv6Address(val)


@addKey(d=NetworkFormats, k="ipv4-net")
def IPv4_Network(val: Union[list, str, tuple]) -> Union[IPv4Address, IPv4Network]:
    """
    Binary IPv4 address and Integer prefix length as specified in RFC 4632 § 3.1
    :param val: IPv4 network address to validate
    :return: None or exception
    """
    if not isinstance(val, (list, str, tuple)):
        raise TypeError(f"IPv4 Network is not expected type, given {type(val)}")

    #val = val if isinstance(val, (list, tuple)) else val.split("/")
    if isinstance(val, (list, tuple)):
        val = val
    elif '/' in val:
        val = val.split("/")
        try:
            bytes = base64.b64decode(val[0]) #decode
            bin = bytes.decode("utf-8")
        except Exception as e:
            raise TypeError(f"{e}")
        val = [bin, val[1]]
    else:
        try:
            bytes = base64.b64decode(val) #decode
            val = [bytes.decode("utf-8")]
        except Exception as e:
            raise TypeError(f"{e}")
    
    if len(val) == 1:
        return IPv4(val[0])

    if len(val) != 2:
        raise ValueError(f"IPv4 Network is not 2 values, given {len(val)}")

    val = "/".join(map(str, val))
    return IPv4Network(val, strict=False)


@addKey(d=NetworkFormats, k="ipv6-net")
def IPv6_Network(val: Union[list, str, tuple]) -> Union[IPv6Address, IPv6Network]:
    """
    Binary IPv6 address and Integer prefix length as specified in RFC 4291 § 2.3
    :param val: IPv6 network address to validate
    :return: None or exception
    """
    if not isinstance(val, (list, str, tuple)):
        raise TypeError(f"IPv6 Network is not expected type, given {type(val)}")

    #val = val if isinstance(val, (list, tuple)) else val.split("/")
    if isinstance(val, (list, tuple)):
        val = val
    elif '/' in val:
        val = val.split("/")
        try:
            bytes = base64.b64decode(val[0]) #decode
            bin = bytes.decode("utf-8")
        except Exception as e:
            raise TypeError(f"{e}")
        val = [bin, val[1]]
    else:
        try:
            bytes = base64.b64decode(val) #decode
            val = [bytes.decode("utf-8")]
        except Exception as e:
            raise TypeError(f"{e}")
        
    if len(val) == 1:
        return IPv6(val[0])

    if len(val) != 2:
        raise ValueError(f"IPv6 Network is not 2 values, given {len(val)}")

    val = "/".join(map(str, val))
    return IPv6Network(val, strict=False)
