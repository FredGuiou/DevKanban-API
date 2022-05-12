/* on démarre la créationd e notre BDD avec un begin */
BEGIN;

/* On supprime toutes nos tables si elles existent déjà */

DROP TABLE IF EXISTS "label", "list", "card", "card_has_label";

/* On crée nos tables */
CREATE TABLE "label" (
    "id"         INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    "name"       TEXT NOT NULL,
    "color"      TEXT
);

CREATE TABLE "list" (
    "id"         INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    "name"       TEXT NOT NULL,
    "order"      INTEGER NOT NULL
);

CREATE TABLE "card" (
    "id"         INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    "name"       TEXT NOT NULL,
    "order"      INTEGER NOT NULL,
    "color"      TEXT,
    "list_id"    INTEGER NOT NULL REFERENCES "list"("id") /* Une carte ne peut appartenir qu'à une seule liste */
);

CREATE TABLE "card_has_label" (
    "id"         INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
    "label_id"   INTEGER NOT NULL REFERENCES "label"("id"),
    "card_id"    INTEGER NOT NULL REFERENCES "card"("id")
); /* Une carte peut avoir plusieurs labels on créé donc une table de liaison */


-- Data for list; 
INSERT INTO "list" ("id", "name", "order")
VALUES (1,'To do',1),
(2,'Done',2);

-- Data for card;
INSERT INTO "card" ("id", "name", "order", "color", "list_id")
VALUES (1, 'Faire le MCD', '1', 'yellow', 1),
(2, 'Envoi en test', '1', 'green', 2);

-- Data for label;
INSERT INTO "label" ("name", "color")
VALUES ('Urgent', 'Red'),
('Extra', 'Blue');

/* On termine la création de la BDD avec un commit*/
COMMIT;