const sequelize = require('../database');
const { Model, DataTypes } = require('sequelize');

class Card extends Model {
    
}

Card.init({
    name: DataTypes.TEXT,
    order: DataTypes.INTEGER,
    color: DataTypes.TEXT
}, {
    sequelize,
    tableName: "card"
});


module.exports = Card;