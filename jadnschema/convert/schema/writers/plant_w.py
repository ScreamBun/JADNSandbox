"""
Translate a JADN schema into a PlantUML graph display file
"""

import re
from datetime import datetime
from typing import NoReturn
from jadn.definitions import (TypeName, BaseType, TypeDesc, PRIMITIVE_TYPES,
                           Fields, FieldID, FieldName, FieldType, FieldOptions, FieldDesc)
from jadn.utils import ftopts_s2d, multiplicity_str, jadn2fielddef


# Wrap typenames at word boundaries to minimize node width, using a max of "lines" lines.
def wrapstr(ss: str, lines: int = 3) -> str:
    p = 0
    bp = len(ss)/lines
    wrapped = ''
    for m in re.findall(r'([A-Z][a-z0-9]+)|([A-Z]+)|([a-z]+)', ss):  # TODO: update regex to support more word formats
        w = ''.join(m)
        if p > 0 and p + len(w)/2 > bp:
            wrapped += '\\n'
            bp += len(ss)/lines
        wrapped += w
        p += len(w)
    return wrapped


def plant_style() -> dict:
    # Return default generation options and PlantUML style attributes
    return {
        'detail': 'conceptual',     # Level of detail: conceptual, logical, information
        'links': True,              # Show link edges (dashed)
        'link_horizontal': True,    # Use e-w links vs. n-s containers
        'edge_label': True,         # Show field name on edges
        'multiplicity': True,       # Show multiplicity on edges
        'attributes': False,        # Show node attributes connected to entities (ellipse)
        'attr_color': 'palegreen',  # Attribute ellipse fill color
        'enums': 10,                # Show Enumerated values with max length (0: none, <0: unlimited)
        'header': [                 # PlantUML Options
            '\' !theme spacelab',
            'hide empty members',
            'hide circle'
        ]
    }


def plant_dumps(schema: dict, style: dict = None) -> str:
    """
    Convert JADN schema to PlantUML file
    """
    s = plant_style()
    if style:
        s.update(style)

    text = '@startuml\n'
    for k, v in schema.get('info', {}).items():
        text += f"' {k}: {v}\n"
    text += '\n' + '\n'.join(s.get('header', [])) + '\n\n'

    atypes = (*PRIMITIVE_TYPES, 'Enumerated')
    nodes = {tdef[TypeName]: k for k, tdef in enumerate(schema['types']) if tdef[BaseType] not in atypes}
    edges = ''
    for td in schema['types']:
        if (tn := td[TypeName]) in nodes:
            text += f'class "{tn}" as n{nodes[tn]} <<{td[BaseType]}>>\n'
            for fd in td[Fields]:
                fopts, ftopts = ftopts_s2d(fd[FieldOptions])
                fieldtype = ftopts['vtype'] if fd[FieldType] == 'MapOf' else fd[FieldType]
                if fieldtype in nodes:
                    rel = ('.' if 'link_horizontal' in s else '..') if 'link' in fopts else '--'
                    elabel = ' : ' + fd[FieldName] if s['edge_label'] else ''
                    mult_f, mult_r = '', ''
                    if s['multiplicity']:
                        mult_f = ' "' + multiplicity_str(fopts) + '"'
                        mult_r = '"1 "'
                    if s['detail'] == 'logical':
                        text += f'  n{nodes[tn]} : {fd[FieldName]}\n'
                    edges += f'  n{nodes[tn]} {mult_r}{rel}>{mult_f} n{nodes[fieldtype]}{elabel}\n'
                if s['detail'] == 'information':
                    fname, fdef, fmult, fdesc = jadn2fielddef(fd, td)
                    fdef += '' if fmult == '1' else ' [' + fmult + ']'
                    fdef = fdef.translate(str.maketrans({'(': '{', ')': '}'}))  # PlantUML parses parens as methods
                    text += f'  n{nodes[tn]} : {fd[FieldID]} {fname} : {fdef}\n'
    return text + edges + '@enduml'


def plant_dump(schema: dict, fname: str, source: str = '', style: dict = None) -> NoReturn:
    with open(fname, 'w') as f:
        if source:
            f.write(f'\' Generated from {source}, {datetime.ctime(datetime.now())}"\n\n')
        f.write(plant_dumps(schema, style) + '\n')


__all__ = [
    'plant_dump',
    'plant_dumps',
    'plant_style'
]