"""
Generate JSON message examples from JADN schema
:param schema: Schema to generate examples from 
"""

from typing import List, Union
import jadn
import json
import os
from jsf import JSF
from random import randint
from jadn.translate import json_schema_dumps

def make_ex(schema: dict) -> List[str]:
    """ 
    Generate examples based on given schema
    :param schema:  a valid JADN schema
    :return: (List[str]) an array of string examples 
    """
    ### DOES NOT WORK WITH COMPLEX SCHEMAS 

    sc2 = json_schema_dumps(schema) # convert to JSON schema (formatted string) --- note: this generates data in the JS API
    sc2_js = json.loads(sc2) # convert to JSON dict --- note: this DOES NOT generate

    # note : the js api works with data, but the python parser does not resolve the reference correctly
    # note : faker likes sc2_js (dict) --- IT IS ABLE TO GENERATE EXAMPLES FROM test_schema_message.jadn
    faker = JSF(sc2_js) 
   
   # generate a random num of examples based on JSON schema
    generated = []
    num = randint(3,10)
    i = 0
    while i < num:
        ex = faker.generate()
        if(len(ex) != 0):
            generated.append(json.dumps(ex, indent=2))
            i+=1

    return generated