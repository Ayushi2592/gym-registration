/*const express = require('express');
const { registerStudent } = require('../controllers/registrationController');

const router = express.Router();

router.post('/register', registerStudent);

module.exports = router;*/
const express = require('express');
const router = express.Router();
const connection = require('../config/database');

// Route: Register a student
router.post('/register', async (req, res) => {
  const { name, address, batch } = req.body;

  try {
    const sql = `
      INSERT INTO registrations (name, address, batch_id, payment_status)
      VALUES (?, ?, ?, ?)
    `;
    const [result] = await connection.query(sql, [name, address, batch, true]);

    res.status(200).json({ message: 'Registration successful', registrationId: result.insertId });
  } catch (error) {
    console.error('Error during registration:', error.message);
    res.status(500).json({ message: 'Failed to register student' });
  }
});

module.exports = router;

