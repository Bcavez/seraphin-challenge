const express = require ('express');
const { body } = require('express-validator');

const quoteController = require('../controllers/quote');

const router = express.Router();

router.post('/api/v1/quote/car-insurance', [
    body('car_value').isFloat(),
    // body('driver_birthdate').isBefore({date: })
] ,quoteController.postQuote);

module.exports = router;


//check date