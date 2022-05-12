const { DataTypes, Model} = require("sequelize");
const sequelize = require("../dbClient.js");
class Card extends Model{};

Card.init({
    name:DataTypes.TEXT,
    position:DataTypes.INTEGER,
    color:DataTypes.TEXT
},{
    sequelize,
    tableName:"card"
});

module.exports = Card;