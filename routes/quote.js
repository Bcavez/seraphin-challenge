const express = require ('express');

const quoteController = require('../controllers/quote');

const router = express.Router();

// const dummyMethod = (req, res, next) => {
//     res.json({
//         message: 'success',
//         stuff: [{content: "asfasd"}]
//     });
// };

router.post('/api/v1/quote/car-insurance', quoteController.postQuote);

module.exports = router;