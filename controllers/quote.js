exports.postQuote = (req, res, next) => {
    const driver_birthdate = req.body.driver_birthdate;
    const car_value = req.body.car_value;
    console.log(car_value);
    console.log(driver_birthdate);
    if (badParameters) {
        res.status(400).json({
            "success": false,
            "message": "parameters missing or incorrect values"
        });
    }
    else if (dummyAgeComputation >= 18) {
        res.status(200).json({
            "success": true,
            "message": "quote successfully computed",
            "data": {
                "eligible": true,
                "premiums": {
                    "civil_liability": 1000.00,
                    "omnium": 702.4
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

const dummyAgeComputation = 25

const badParameters = false