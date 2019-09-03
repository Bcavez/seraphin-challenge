const chai = require('chai');
const expect = require('chai').expect;
const chaiHttp = require('chai-http');

const app = require('../app');

const path = '/api/v1/quote/car-insurance'

chai.use(chaiHttp);

describe('Controller status response type', () => {
    it('should return a 400 when there are errors', () => {
        //400
        const errors = [];
        chai.request(app)
        .post(path)
        .end((err, res) => {
            expect(res).to.have.status(400);
        });
    });
    it('should return a 200 when there are no errors', () => {
        //200
        const errors = ['this is not empty'];
        chai.request(app)
        .post(path)
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