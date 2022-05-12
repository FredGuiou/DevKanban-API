BEGIN;

INSERT INTO "list" ("id","name","position")
VALUES
(1,'liste 1',1),
(2,'liste 2',2),
(3,'liste 3',3);

INSERT INTO "card" ("id","name","position","list_id")
VALUES
(1,'carte 1',1,1), -- je positionne mes 3 cartes dans la liste 1
(2,'carte 2',2,1),
(3,'carte 3',3,1);

INSERT INTO "tag" ("id","name","color")
VALUES
(1,'urgent','#F00'), 
(2,'à faire','#0F0'),
(3,'en cours','#00F'),
(4,'proritaire','#F0F');

INSERT INTO "card_has_tag" ("tag_id","card_id")
VALUES
(1,1),
(4,2);

COMMIT;
