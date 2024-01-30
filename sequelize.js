const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('grocery_db', 'admin', 'password', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
