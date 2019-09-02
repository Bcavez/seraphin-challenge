const express = require ('express');

const quoteController = require('../controllers/quote');

const router = express.Router();

router.post('/api/v1/quote/car-insurance', quoteController.postQuote);

module.exports = router;