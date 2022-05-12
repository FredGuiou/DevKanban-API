const sequelize = require('../database');
const { Model, DataTypes } = require('sequelize');

class List extends Model {
    
}

List.init({
    name: DataTypes.TEXT,
    order: DataTypes.INTEGER
}, {
    sequelize,
    timestamps: false,
    tableName: "list"
});


module.exports = List;