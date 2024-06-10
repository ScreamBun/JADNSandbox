from io import TextIOBase
import io
import json
import os
import subprocess
import cbor_diag

from cbor2 import dumps
import docker
from flask import current_app
from cbor2 import dumps

from server.webApp.utils import constants


def does_dir_exist(dir_path: str, isCreate: bool):
    isExist = os.path.exists(dir_path)
    if isExist:
        return True
    else:
        if isCreate:
            os.mkdir(dir_path) 
            return True
        else:
            return False


def find_file_by_name(name: str, path: str):
    file_found = None
    for (root, dirs, file) in os.walk(path):
        for f in file:
            if name.lower() == f.lower():
                fp = root + '/' + f
                file_found = {'name': f, 'path' : fp}
                break
    return file_found


def find_file_names_by_extension(ext: str, path: str, isReturnNamesOnly: bool):
    files_found = []
    for (root, dirs, file) in os.walk(path):
        for f in file:
            if ext in f or ext == "*":
                fp = root + '/' + f
                file_info = {'filename': f, 'fullpath': fp}
                if isReturnNamesOnly:
                    files_found.append(f)
                else:
                    files_found.append(file_info)             
    return files_found


def get_upload_loc(loc: str):
    if loc == 'schemas':
        return current_app.config.get("OPEN_C2_SCHEMA_CUSTOM_DATA")
    elif loc == 'messages':
        return current_app.config.get("OPEN_C2_MESSAGE_CUSTOM_DATA")
    else:
        return False


def is_file_in_dir(path: str, filename: str):
    if os.path.isfile(os.path.join(path, filename)):
        return True
    else:
        return False


def remove_file(path: str, filename: str):
    if is_file_in_dir(path, filename):
        os.remove(os.path.join(path, filename))
        if not os.path.isfile(os.path.join(path, filename)):
            return True
        else:
            return False
        

def remove_files(path: str, filenames: list):
    for file in filenames:
        if is_file_in_dir(path, file):
            os.remove(os.path.join(path, file))

    failed_files = []
    for file in filenames:
        if is_file_in_dir(path, file):
            failed_files.append(file)
            
    return failed_files


def write_file(path: str, filename: str, data):
    fp = os.path.join(path, filename)
    with open(fp, 'w') as outfile:
        outfile.write(data)        

    if is_file_in_dir(path, filename):
        return True
    else:
        return False
 
    
def convert_json_to_cbor_str(data_dict: dict) -> bytes:
    json_str = json.dumps(data_dict)
    
    encoded = cbor_diag.diag2cbor(json_str)
    cbor_str= encoded.hex()    
    
    return cbor_str
                         

def convert_cbor_str_to_json(cbor_str: str) -> str:
    
    # Legacy conversion, returns dict
    # msg_binary_string = binascii.unhexlify(hex_str)
    # msg_native_json = cbor_json.native_from_cbor(msg_binary_string) 
    # print("msg_native_json: " + str(msg_native_json))
    
    bytes_obj = bytes.fromhex(cbor_str)
    cbor_bytes_obj = dumps(bytes_obj, canonical=True)
    
    # No formatting, returns str
    cbor_diag_str = cbor_diag.cbor2diag(bytes_obj)
    print("cbor_diag_str: " + cbor_diag_str)
    
    return cbor_diag_str


def convert_cbor_to_annotated_view(cbor_str: str) -> bytes:
    
    # TODO:
    # Convert cbor to json
    # Or compare cbor to json3cbor output, if the passed in cbor can match, then this step can be removed
    # Built API to hit this util
    # Build developer script/instructions to start ruby container
    # Add ruby to the docker compose for the deployed version
    # Send out for testing
    
    data = {
        "Image": {
            "Width": 800,
            "Height": 600,
            "Title": "View from 13th Floor",
            "Thumbnail": {
            "Url": "http://www.example.com/image/481989942",
            "Height": 125,
            "Width": 100
            },
            "Animated": False,
            "IDs": [
                333,
                116,
                943,
                234,
                38793
            ]
        }
    }

    with open(constants.LOCAL_JSON_FILE_PATH, 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=4)

    cp_cmd = "docker cp " + constants.LOCAL_JSON_FILE_PATH + " " + constants.CONTAINER_NAME + ":" + constants.CONTAINER_JSON_FILE_PATH
    
    os.system(cp_cmd)
    os.system('docker exec ' + constants.CONTAINER_NAME + ' bash -c "' + constants.CONTAINER_JSON2CBOR_RB + ' value_json.json > value_cbor.cbor"')
    os.system('docker exec ' + constants.CONTAINER_NAME + ' bash -c "' + constants.CONTAINER_CBOR2PRETTY_RB + ' value_cbor.cbor > value_cbor_pretty.txt"')
       
    return True