const express = require('express');
const { markPayment } = require('../controllers/paymentController');

const router = express.Router();

router.post('/pay', markPayment);

module.exports = router;
