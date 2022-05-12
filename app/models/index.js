const List = require("./List");
const Card = require("./Card");
const Tag = require("./Tag");

/* ASSOCIATION 0,N */
List.hasMany(Card,{
    as:"cards",
    foreignKey:"list_id"
});

/* ASSOCIATION 1,1 */
Card.belongsTo(List,{ // on a belongsTo par rapport à la clef étrangère qui se trouve dans Card
    as:"list",
    foreignKey:"list_id"
});

/* ASSOCIATION N;N entre Card et Tag */
Card.belongsToMany(Tag,{
    as:"tags",
    through:"card_has_tag", // nom de la table d'association
    foreignKey:"card_id", // correspond à l'id de la carte
    otherKey:"tag_id", // correspond à l'id du tag associé
    timestamps: false
});

Tag.belongsToMany(Card,{
    as:"cards",
    through:"card_has_tag", // nom de la table d'association
    foreignKey:"tag_id", // correspond à l'id de la carte
    otherKey:"card_id", // correspond à l'id du tag associé
    timestamps: false
});

module.exports = { List, Card, Tag};