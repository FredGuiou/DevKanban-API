const { DataTypes, Model} = require("sequelize");
const sequelize = require("../dbClient.js");
class Tag extends Model{};

Tag.init({
    name:{
        type:DataTypes.TEXT,
        allowNull: false
    },
    color:DataTypes.TEXT
},{
    sequelize,
    tableName:"tag"
});

module.exports = Tag;