const sequelize = require('../database');
const { Model, DataTypes } = require('sequelize');

class List extends Model {
    
}

List.init({
    name: DataTypes.TEXT,
    order: DataTypes.INTEGER
}, {
    sequelize,
    tableName: "list"
});


module.exports = List;