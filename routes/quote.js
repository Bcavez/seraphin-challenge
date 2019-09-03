const express = require('express');

const quoteController = require('../controllers/quote');
const validator = require('./validation/quoteValidator');

const router = express.Router();

// expected to receive data in JSON with the following format:
// {
//    "car_value": 10000.00, 
//    "driver_birthdate": "15/10/1990"
// }
router.post('/api/v1/quote/car-insurance', validator.postQuote ,quoteController.postQuote);

module.exports = router;