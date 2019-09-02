const expect = require('chai').expect;

const app = require('../app');

describe('Routes', function() {
    it('should not return a 404 error when doing a POST request to localhost:8080/api/v1/quote/car-insurance', function() {
        const path = 'localhost:8080/api/v1/quote/car-insurance'
        app.listen(8080);
        expect(app.use(path)).to.not.throw('404 (not found)')
    });
});