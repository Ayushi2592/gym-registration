/*const { Sequelize } = require('sequelize');
require('dotenv').config();

/*const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER,"", {
  host: process.env.localhost,
  dialect: 'mysql', // Change to 'postgres' for PostgreSQL
});
*/
/*const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD || '', // Default to an empty string if not provided
  {
    host: process.env.DB_HOST,
    dialect: 'mysql', // Use 'mysql' for MySQL
    port: process.env.DB_PORT || 3306, // Default to port 3306
  }
);
module.exports = sequelize;*/

/*const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost', // Replace with your DB host
  user: 'root', // Replace with your DB username
  password : 'Ayushisingh@2592',// Replace with your DB password
  database: 'gym_registration' // Replace with your DB name
});

module.exports = connection;*/

/*const mysql = require('mysql2/promise');

// Configuration for database connection
const dbConfig = {
  host: 'localhost', // Replace with your DB host
  user: 'root', // Replace with your DB username
  password: 'Ayushisingh@2592', // Replace with your DB password
  database: 'gym_registration', // Replace with your DB name
};

// Create a connection pool for efficient query handling
const connection = mysql.createPool(dbConfig);

// Test the database connection
(async () => {
  try {
    const [rows] = await connection.query('SELECT 1');
    console.log('Database connected successfully!');
  } catch (error) {
    console.error('Error connecting to the database:', error.message);
    process.exit(1); // Exit the process if the database connection fails
  }
})();

module.exports = connection;*/

const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: 'localhost', // Replace with your DB host
  user: 'root', // Replace with your DB username
  password: 'Ayushisingh@2592', // Replace with your DB password
  database: 'gym_registration', // Replace with your DB name
});

// Test the database connection
connection.connect((err) => {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    process.exit(1); // Exit process on failure
  }
  console.log('Database connected!');
});

module.exports = connection;









