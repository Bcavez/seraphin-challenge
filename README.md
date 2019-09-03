# seraphin-challenge API
This API was build for the Seraphin challenge

## Specs of the challenge:

### Price computation module

The product is a simple insurance product with 2 components:

#### Civil liability:

Protects the driver in case there is a crash in which (s)he's responsible, paying out the damage to the victims
Not eligible for drivers under 18 years old (excluded)

#### Costs the following:

€1000/year for drivers up to 25 years old (included)

€500/year for drivers 26 years old or more

#### Omnium:

Protects the car in case of material damage

Not eligible for drivers under 18 years old (excluded)

Costs 3% of the value of the car

### REST HTTP API

POST Quote

http://localhost:8080/v1/quote/car-insurance

Your API should respect this specification: when submitting a request we should get a response as described here.

#### REQUEST:
```
car_value           number    Float, value of the car excl. VAT
REQUIRED

driver_birthdate    string    Of the form "DD/MM/YYYY"
REQUIRED
```

#### RESPONSE:
##### 200: OK
All parameters present
```
// Driver eligible for the insurance
{
    "success": true,
    "message": "quote successfully computed",
    "data": {
        "eligible": true,
        "premiums": {
            "civil_liability": 1000.00,
            "omnium": 702.4
        }
    }
}  

// Driver NOT eligible for the insurance
{
    "success": true,
    "message": "quote successfully computed",
    "data": {
        "eligible": false,
        "premiums": null
    }
}    
```
##### 400: Bad Request
Parameters missing or incorrect values
```
{
    "success": false,
    "message": "parameters missing or incorrect values"
}
```

## How To Use:

```
git clone https://github.com/Bcavez/seraphin-challenge.git
cd seraphin-challenge
npm install
npm start
```
Then you can run curl with the following format:
```
curl -X POST "localhost:8080/api/v1/quote/car-insurance" --data '{"car_value": 20000.0, "driver_birthdate": "15/10/1990"}
```

## How Does It Work:

![Image of how does it work](https://github.com/Bcavez/seraphin-challenge/blob/master/90b0cda9-af70-423e-a5fb-865029261901.png?raw=true)

### App.js

This file launches the server.
It also sets the headers of all incoming request to 'content-type': 'application/json'.
Then it applies bodyParser.json to all request.
Finally it calls the route quote.js.

### Routes/quote.js

This file calls the validator quoteValidator.js, then calls the controller quoteController.js.

### Routes/quoteValidator.js

This file validates the data received from the route and sends it back.
It validates the car_value data, checking if it is a float, not negative and not impossibly high.
It also validates that the birth_date data is in a correct format.

### Controllers/quoteController.js

This file calls the driver model to make the necessary computation on the input data.
Then after receiving the computated data it will apply the proper response(400, 200 not eligible and 200 eligible)
with the proper data included (civil_liability and omnium) and send it to the user.

### Models/driver.js

This file computes the age of the driver from it's birthdate. 
It computes the civil_liability from the age of the driver.
It computes the omnium from the value of the car.
Then it sends it all back to the controller.

### Dependencies

```
"dependencies": {
    "express": "^4.17.1",
    "express-validator": "^6.2.0"
},
"devDependencies": {
    "chai": "^4.2.0",
    "chai-http": "^4.3.0",
    "mocha": "^6.2.0",
    "nodemon": "^1.19.1"
},
```
