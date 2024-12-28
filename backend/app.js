/*console.log('App is starting...');
const express = require('express');
const sequelize = require('./config/database');
const registrationRoutes = require('./routes/registrationRoutes');
const paymentRoutes = require('./routes/paymentRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Test DB Connection
sequelize.authenticate().then(() => {
  console.log('Database connected...');
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});

// Sync DB
sequelize.sync({ alter: true });

// Routes
app.use('/api/registration', registrationRoutes);
app.use('/api/payment', paymentRoutes);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});*/

/*var express = require('express');
var app = express();
var connection = require('./config/database');

// Test the connection when the app starts
connection.connect(function (err) {
  if (err) {
    console.error('Database connection failed: ' + err.stack);
    return;
  }
  console.log('Database connected!');
});

app.get('/', function (req, res) {
  res.send('Hey there!');
});

// Dynamically assign the port
const PORT = process.env.PORT || 6500;

// Start the server
app.listen(PORT, function () {
  console.log(`App listening on port ${PORT}`);
});*/


/*const express = require('express');
const connection = require('./config/database'); // Updated database.js
const registrationRoutes = require('./routes/registrationRoutes'); // Add registration routes

const app = express();

// Middleware for parsing JSON requests
app.use(express.json());

// Test the database connection when the app starts
(async () => {
  try {
    const [rows] = await connection.query('SELECT 1');
    console.log('Database connected!');
  } catch (error) {
    console.error('Database connection failed:', error.message);
  }
})();

// Home route
app.get('/', (req, res) => {
  res.send('Welcome to the Gym Class Registration System!');
});

// Registration API routes
app.use('/api', registrationRoutes);

// Dynamically assign the port
const PORT = process.env.PORT || 7000;

// Start the server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});*/

const express = require('express');
const path = require('path');
const app = express();
const connection = require('./config/database');

// Middleware to parse JSON data
app.use(express.json());

// Serve static files from the "frontend" directory
app.use(express.static(path.join(__dirname, '../frontend')));

// Default route to serve the HTML file
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend', 'index.html'));
});

// API endpoint to handle registration
app.post('/api/register', (req, res) => {
  const { name, address, batch } = req.body;
  const payment = 500; // Fixed monthly fee

  const query = `INSERT INTO registrations (name, address, batch, payment) VALUES (?, ?, ?, ?)`;

  connection.query(query, [name, address, batch, payment], (err, results) => {
    if (err) {
      console.error('Error inserting data:', err);
      res.status(500).json({ message: 'Failed to register' });
    } else {
      res.status(201).json({ message: 'Registration successful', registrationId: results.insertId });
    }
  });
});

// Start the server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});







