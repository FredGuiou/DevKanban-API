const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.PG_URL, {
    define: {
        updatedAt: 'updated_at',
        createdAt: 'created_at'
    },
    logging: false,
});

module.exports = sequelize;