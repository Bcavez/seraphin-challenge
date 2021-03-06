const { validationResult } = require('express-validator');

const Driver = require('../models/driver');

exports.postQuote = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({
            "success": false,
            "message": "parameters missing or incorrect values"
        });
    };
    // pass the driver_birthdate and car_value to the Driver model which will make the computation using the functions defined in the model.
    const driver = new Driver(req.body.driver_birthdate, req.body.car_value);
    const age = driver.age;
    const civil_liability = driver.civil_liability();
    const omnium = driver.omnium();
    if (age >= 18) {
        res.status(200).json({
            "success": true,
            "message": "quote successfully computed",
            "data": {
                "eligible": true,
                "premiums": {
                    "civil_liability": civil_liability,
                    "omnium": omnium
                }
            }
        });
    } else {
        res.status(200).json({
            "success": true,
            "message": "quote successfully computed",
            "data": {
                "eligible": false,
                "premiums": null
            }
        });
    };
};