const chai = require('chai');
const expect = require('chai').expect;
const chaiHttp = require('chai-http');

const app = require('../app');

chai.use(chaiHttp);

const path = '/api/v1/quote/car-insurance'

describe('car_value', () => {
    it('should return a 400 when the car_value is a string', () => {
        //400
        chai.request(app)
        .post(path)
        .send({
            "car_value": "this is a string",
            "driver_birthdate": "13/02/1989"	
        })
        .end((err, res) => {
            expect(res).to.have.status(400);
        });
    });
    it('should return a 400 when the car_value is not present in the request', () => {
        //400
        chai.request(app)
        .post(path)
        .send({
            "not_car_value": 1000.00,
            "driver_birthdate": "13/02/1989"	
        })
        .end((err, res) => {
            expect(res).to.have.status(400);
        });
    });
    it('should return a 200 when the car_value is a float', () => {
        //200
        chai.request(app)
        .post(path)
        .send({
            "car_value": 123.456,
            "driver_birthdate": "13/02/1989"	
        })
        .end((err, res) => {
            expect(res).to.have.status(200);
        });
    });
    it('should return a 200 when the car_value is an integer', () => {
        //200
        chai.request(app)
        .post(path)
        .send({
            "car_value": 123,
            "driver_birthdate": "13/02/1989"	
        })
        .end((err, res) => {
            expect(res).to.have.status(200);
        });
    });
});

describe('Controller response content', () => {
    it('should return "eligibility false" in the data when the driver is under 18 years of age', () => {
        //eligbility false
    });
    it('should return "eligibility true" in the data when the driver is 18 years of age or older', () => {
        //eligibility true
    });
    // it('should return the correct computation in the data premiums', () => {
    //     //check if computation are correctly passed
    // });
});