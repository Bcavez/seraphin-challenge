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

describe('civil liability', () => {
    it('should return 1000 if the driver is less than 26 years old', () => {
        const driver = new Driver("02/09/1998", 1000.00);
        driver.age = 20;
        expect(driver.civil_liability()).to.equal(1000);
    });
    it('should return 100 if the driver is 25 years old', () => {
        const driver = new Driver("02/09/1998", 1000.00);
        driver.age = 25
        expect(driver.civil_liability()).to.equal(100);
    });
    it('should return 500 if the driver is 26 years old or older', () => {
        const driver = new Driver("02/09/1998", 1000.00);
        driver.age = 26
        expect(driver.civil_liability()).to.equal(500);
    });
});