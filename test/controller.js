const chai = require('chai');
const expect = require('chai').expect;
const chaiHttp = require('chai-http');

const app = require('../app');

chai.use(chaiHttp);

describe('Controller status response type', () => {
    it('should return a 400 when the badParameters method returns false', () => {
        //400
    });
    it('should return a 200 when the badParameters method returns true', () => {
        //200
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