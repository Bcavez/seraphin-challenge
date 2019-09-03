const chai = require('chai');
const expect = require('chai').expect;

const Driver = require('../models/driver');

describe('age computation', () => {
    it('should 25 if the driver is born 25 years ago', () => {
        const driver = new Driver("02/09/1994", 1000.00);
        expect(driver.age()).to.equal(25);
    });
    it('should return 18 if the driver is born 18 years ago', () => {
        const driver = new Driver("02/09/2001", 1000.00);
        expect(driver.age()).to.equal(18);
    });
});