# MLD

List(<u>ListCode</u>,Name,Position)

Card(<u>CardCode</u>,Name,Position,Color,#ListCode)

Tag(<u>TagCode</u>,Name,Color)

DEFINES(<u>CardCode</u>,<u>TagCode</u>)

## Associations

### Relation entre List et Card

1 List peut avoir 0 ou N Card : List ne contient pas de référence à Card

1 Card est liée à 1 List : Card a une référence à List

La relation entre List et Card est d'ordre 1;N , cela sous-entend la création d'une clef étrangère.

### Relation entre Card et Tag

1 Card a 0 ou N Tag : Card ne contient pas de référence à Tag

1 Tag a 0 ou N Card : Tag ne contient pas de référence à Card

La relation entre Card et Tag est d'ordre N;N , cela sous-entend la création d'une table d'association.
