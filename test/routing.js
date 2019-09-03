const chai = require('chai');
const expect = require('chai').expect;
const chaiHttp = require('chai-http');

const app = require('../app');

chai.use(chaiHttp);

describe('Routes', () => {
    it('should not return a 404 error when doing a POST request to localhost:8080/api/v1/quote/car-insurance', (done) => {
        const path = '/api/v1/quote/car-insurance'
        chai.request(app)
        .post(path)
        .end((err, res) => {
            expect(res).to.not.have.status(404);
            done();
        });
    });
});