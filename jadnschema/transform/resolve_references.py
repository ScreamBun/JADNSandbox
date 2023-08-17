"""
Import namespaced type definitions into a base package.

Search all packages in SCHEMA_DIR for referenced definitions, put resolved base file in OUTPUT_DIR.
"""

import jadn
import os
from .resolve import resolve_imports

def resolve(schema_name: str, schema: dict, schema_list: list) -> list | str:
    print(f'Installed JADN version: {jadn.__version__}\n')
    filename, ext = os.path.splitext(schema_name)
    # get all referenced def
    references = schema['info']['namespaces'] if 'namespaces' in schema['info'] else {}
    if len(references) == 0:
        raise ValueError("No references to resolve")
    sc2 = resolve_imports(schema, schema_list, references)        # Resolve referenced definitions
    schema = jadn.dumps(sc2)   # Save resolved base package
    return [{'schema_name': filename + '-resolved', "schema_fmt": 'jadn', 'schema': schema }]
    #return schema