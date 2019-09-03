const express = require('express');

const quoteController = require('../controllers/quote');
const validator = require('./validation/quote');

const router = express.Router();

router.post('/api/v1/quote/car-insurance', validator.postQuote ,quoteController.postQuote);

module.exports = router;