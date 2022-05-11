/* on démarre la créationd e notre BDD avec un begin */
BEGIN;

/* On supprime toutes nos tables si elles existent déjà */

DROP TABLE IF EXISTS "label", "list", "card", "card_has_label";

/* On crée nos tables */
CREATE TABLE "label" (
    "id"         INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name"       TEXT NOT NULL,
    "color"      TEXT,
);

CREATE TABLE "list" (
    "id"         INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name"       TEXT NOT NULL,
    "order"      INTEGER NOT NULL,
);

CREATE TABLE "card" (
    "id"         INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name"       TEXT NOT NULL,
    "order"      INTEGER NOT NULL,
    "color"      TEXT,
    "list_id"    INTEGER NOT NULL REFERENCES "list"("id"), /* Une carte ne peut appartenir qu'à une seule liste */
);

CREATE TABLE "card_has_label" (
    "id"         INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "label_id"   INTEGER NOT NULL REFERENCES "label"("id"),
    "card_id"    INTEGER NOT NULL REFERENCES "card"("id"),
); /* Une carte peut avoir plusieurs labels on créé donc une table de liaison */


-- Data for list; 
INSERT INTO "list" ("name")
VALUES ('To do'),
('Done');

-- Data for card;
INSERT INTO "card" ("name", "order", "color", "list_id")
VALUES ('Faire le MCD', '1', 'yellow', '1'),
('Envoi en test', '1', 'green', '2');

-- Data for label;
INSERT INTO "label"("name", "color")
VALUES ('Urgent', 'Extra');

/* On termine la création de la BDD avec un commit*/
COMMIT;