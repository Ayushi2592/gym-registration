const express = require('express');
const { registerStudent } = require('../controllers/registrationController');

const router = express.Router();

router.post('/register', registerStudent);

module.exports = router;
