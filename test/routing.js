const chai = require('chai');
const expect = require('chai').expect;
const chaiHttp = require('chai-http');

const app = require('../app');

chai.use(chaiHttp);

describe('Routes', function() {
    it('should not return a 404 error when doing a POST request to localhost:8080/api/v1/quote/car-insurance', () => {
        const path = '/api/v1/quote/car-insurance'
        // const path = 'http://localhost:8080/api/v1/quote/car-insurance'
        chai.request(app)
        .post(path)
        .send('asd')
        .end((err, res) => {
            expect(res).to.not.throw(err);
        });
        // expect(app.use(path)).to.not.throw('404 (not found)')
    });
});