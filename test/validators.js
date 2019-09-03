const chai = require('chai');
const expect = require('chai').expect;
const chaiHttp = require('chai-http');

const app = require('../app');

chai.use(chaiHttp);

const path = '/api/v1/quote/car-insurance'

describe('Validator', () => {
    describe('car_value', () => {
        it('should return a 400 when the car_value is a string', () => {
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

    describe('driver_birthdate', () => {
        describe('400', () => {
            it('should return a 400 when the driver_birthdate is not a string', () => {
                chai.request(app)
                .post(path)
                .send({
                    "car_value": 1000.00,
                    "driver_birthdate": 13021989	
                })
                .end((err, res) => {
                    expect(res).to.have.status(400);
                });
            });
            it('should return a 400 when the driver_birthdate is not present in the request', () => {
                chai.request(app)
                .post(path)
                .send({
                    "car_value": 1000.00,
                    "not_driver_birthdate": "13/02/1989"	
                })
                .end((err, res) => {
                    expect(res).to.have.status(400);
                });
            });
            it('should return a 400 when the driver_birthdate does not have a valid format', () => {
                chai.request(app)
                .post(path)
                .send({
                    "car_value": 1000.00,
                    "driver_birthdate": "1989/01/01"	
                })
                .end((err, res) => {
                    expect(res).to.have.status(400);
                });
            });
            it('should return a 400 when the driver_birthdate does not use /slash/', () => {
                chai.request(app)
                .post(path)
                .send({
                    "car_value": 1000.00,
                    "driver_birthdate": "13-02-1989"	
                })
                .end((err, res) => {
                    expect(res).to.have.status(400);
                });
            });
            it('should return a 400 when the driver_birthdate does not have a valid day', () => {
                chai.request(app)
                .post(path)
                .send({
                    "car_value": 1000.00,
                    "driver_birthdate": "32/02/1989"	
                })
                .end((err, res) => {
                    expect(res).to.have.status(400);
                });
            });
            it('should return a 400 when the driver_birthdate does not have a valid month', () => {
                chai.request(app)
                .post(path)
                .send({
                    "car_value": 1000.00,
                    "driver_birthdate": "13/13/1989"	
                })
                .end((err, res) => {
                    expect(res).to.have.status(400);
                });
            });
            it('should return a 400 when the driver_birthdate does not have a valid year', () => {
                chai.request(app)
                .post(path)
                .send({
                    "car_value": 1000.00,
                    "driver_birthdate": "13/02/91989"	
                })
                .end((err, res) => {
                    expect(res).to.have.status(400);
                });
            });
            it('should return a 400 when the birthdate is on the 29th February of a non-leap year', () => {
                chai.request(app)
                .post(path)
                .send({
                    "car_value": 1000.00,
                    "driver_birthdate": "29/02/2017"	
                })
                .end((err, res) => {
                    expect(res).to.have.status(400);
                });
            });
        });
        describe('200', () => {
            it('should return a 200 with a good birthdate', () => {
                chai.request(app)
                .post(path)
                .send({
                    "car_value": 1000.00,
                    "driver_birthdate": "13/02/1989"	
                })
                .end((err, res) => {
                    expect(res).to.have.status(200);
                });
            });
            it('should return a 200 with a birthdate entered with single digit, eg: 1/1/1989', () => {
                chai.request(app)
                .post(path)
                .send({
                    "car_value": 1000.00,
                    "driver_birthdate": "1/1/1989"	
                })
                .end((err, res) => {
                    expect(res).to.have.status(200);
                });
            });
            it('should return a 200 when the birthdate is on the 29th February of a leap year', () => {
                chai.request(app)
                .post(path)
                .send({
                    "car_value": 1000.00,
                    "driver_birthdate": "29/02/2016"	
                })
                .end((err, res) => {
                    expect(res).to.have.status(200);
                });
            });
        });
    });
});