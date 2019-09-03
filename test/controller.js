const chai = require('chai');
const expect = require('chai').expect;
const chaiHttp = require('chai-http');

const app = require('../app');

const path = '/api/v1/quote/car-insurance'

const current_year = new Date().getFullYear();

chai.use(chaiHttp);

describe('Controller status response type', () => {
    it('should return a 400 when there are errors', () => {
        chai.request(app)
        .post(path)
        .end((err, res) => {
            expect(res).to.have.status(400);
        });
    });
    it('should return a 200 when there are no errors', () => {
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
});

describe('Controller response content', () => {
    describe('eligibility', () => {
        it('should return "eligibility false" in the data when the driver is under 18 years of age', () => {
            chai.request(app)
            .post(path)
            .send({
                "car_value": 1000.00,
                "driver_birthdate": `13/02/${current_year - 10}`
            })
            .end((err, res) => {
                expect(res.body.data.eligible).to.be.false;
            });
        });
        it('should return "eligibility true" in the data when the driver is 18 years of age', () => {
            chai.request(app)
            .post(path)
            .send({
                "car_value": 1000.00,
                "driver_birthdate": `13/02/${current_year - 18}`
            })
            .end((err, res) => {
                expect(res.body.data.eligible).to.be.true;
            });
        });
        it('should return "eligibility true" in the data when the driver is older than 18', () => {
            chai.request(app)
            .post(path)
            .send({
                "car_value": 1000.00,
                "driver_birthdate": `13/02/${current_year - 30}`
            })
            .end((err, res) => {
                expect(res.body.data.eligible).to.be.true;
            });
        });
    })
    describe('premiums', () => {
        it('should return 30 in the omnium when the car value is 1000.00', () => {
            chai.request(app)
            .post(path)
            .send({
                "car_value": 1000.00,
                "driver_birthdate": `13/02/1989`
            })
            .end((err, res) => {
                expect(res.body.data.premiums.omnium).to.equal(30);
            });
        });
        it('should return 3703.70 in the omnium when the car value is 123456.78', () => {
            chai.request(app)
            .post(path)
            .send({
                "car_value": 123456.78,
                "driver_birthdate": `13/02/1989`
            })
            .end((err, res) => {
                expect(res.body.data.premiums.omnium).to.equal(3703.70);
            });
        });
        it('should return 1000 in the civil_liability when the age of the driver is 20', () => {
            chai.request(app)
            .post(path)
            .send({
                "car_value": 1000.00,
                "driver_birthdate": `13/02/${current_year - 20}`
            })
            .end((err, res) => {
                expect(res.body.data.premiums.civil_liability).to.equal(1000);
            });
        });
        it('should return 1000 in the civil_liability when the age of the driver is 25', () => {
            chai.request(app)
            .post(path)
            .send({
                "car_value": 1000.00,
                "driver_birthdate": `13/02/${current_year - 25}`
            })
            .end((err, res) => {
                expect(res.body.data.premiums.civil_liability).to.equal(1000);
            });
        });
        it('should return 500 in the civil_liability when the age of the driver is 26', () => {
            chai.request(app)
            .post(path)
            .send({
                "car_value": 1000.00,
                "driver_birthdate": `13/02/${current_year - 26}`
            })
            .end((err, res) => {
                expect(res.body.data.premiums.civil_liability).to.equal(500);
            });
        });
    });
});