const express = require ('express');

const router = express.Router();

const dummyMethod = (req, res, next) => {
    res.json({
        message: 'success',
        stuff: [{content: "asfasd"}]
    });
};

router.post('/api/v1/quote/car-insurance', dummyMethod);

module.exports = router;