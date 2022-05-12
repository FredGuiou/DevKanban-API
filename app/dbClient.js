const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(process.env.PG_URL,{
   define:{
       underscored:true, // passe du camelCase au snake_case
       createdAt:"created_at",
       updatedAt:"updated_at",
 
   } ,
   logging: false
});

module.exports = sequelize;