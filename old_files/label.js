const sequelize = require('../database');
const { Model, DataTypes } = require('sequelize');

class Label extends Model {
    
}

Label.init({
    name: DataTypes.TEXT,
    color: DataTypes.TEXT
}, {
    sequelize,
    timestamps: false,
    tableName: "label"
});


module.exports = Label;