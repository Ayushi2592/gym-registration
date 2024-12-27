const { Sequelize } = require('sequelize');
require('dotenv').config();

/*const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER,"", {
  host: process.env.localhost,
  dialect: 'mysql', // Change to 'postgres' for PostgreSQL
});
*/
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD || '', // Default to an empty string if not provided
  {
    host: process.env.DB_HOST,
    dialect: 'mysql', // Use 'mysql' for MySQL
    port: process.env.DB_PORT || 3306, // Default to port 3306
  }
);
module.exports = sequelize;
