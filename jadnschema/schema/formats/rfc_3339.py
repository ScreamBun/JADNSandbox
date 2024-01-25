"""
JADN RFC3339 Formats
"""
import datetime
import strict_rfc3339

from ... import utils
__all__ = [
    # All formats
    "RFC3339_Formats",
    # Specific formats
    "date_time", "date", "time"
]

RFC3339_Formats = {}


@utils.addKey(d=RFC3339_Formats, k="date-time")
def date_time(val: str) -> datetime.datetime:
    """
    Validate a datetime - RFC 3339 § 5.6
    :param val: DateTime instance to validate
    :return: None or Exception
    """
    if not isinstance(val, str):
        raise TypeError(f"datetime given is not expected string, given {type(val)}")

    try:
        strict_rfc3339.validate_rfc3339(val)
    except Exception as err:  # pylint: disable=broad-except
        # TODO: change to better exception
        raise ValueError from err
    return datetime.datetime.fromisoformat(val)


@utils.addKey(d=RFC3339_Formats)
def date(val: str) -> datetime.date:
    """
    Validate a date - RFC 3339 § 5.6
    :param val: Date instance to validate
    :return: None or Exception
    """
    if not isinstance(val, str):
        raise TypeError(f"date given is not expected string, given {type(val)}")
    try:
        d = datetime.datetime.strptime(val, '%Y-%m-%d').date()
    except Exception as err:  # pylint: disable=broad-except
        # TODO: change to better exception
        raise ValueError from err
    return d


@utils.addKey(d=RFC3339_Formats)
def time(val: str) -> datetime.time:
    """
    Validate a time - RFC 3339 § 5.6
    :param val: Time instance to validate
    :return: None or Exception
    """
    if not isinstance(val, str):
        raise TypeError(f"time given is not expected string, given {type(val)}")
    try:
        t = datetime.datetime.strptime(val, '%H:%M:%S').time()
    except Exception as err:  # pylint: disable=broad-except
        # TODO: change to better exception
        raise ValueError from err
    return t
