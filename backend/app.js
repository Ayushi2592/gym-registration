console.log('App is starting...');
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
});
