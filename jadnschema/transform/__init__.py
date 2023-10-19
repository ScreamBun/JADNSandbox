"""
JADN Transform: Process a JADN schema to produce another JADN schema:
- combine definitions from separate schemas into a single schema
- split a schema that defines multiple objects into separate schemas for each object
- remove unused definitions
- delete or truncate comments
"""

from .resolve import SchemaPackage, resolve_imports
from .transform import strip_comments, unfold_extensions
from .resolve_references import resolve

__all__ = [
    "SchemaPackage",
    "resolve_imports",
    "strip_comments",
    "unfold_extensions", 
    "resolve"   
]
