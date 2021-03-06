const chai = require('chai');
const expect = require('chai').expect;

const Driver = require('../models/driver');

const current_year = new Date().getFullYear();

describe('Driver Model', () => {
    describe('age computation', () => {
        it('should 25 if the driver is born 25 years ago', () => {
            const driver = new Driver(`02/09/${current_year - 25}`, 1000.00);
            expect(driver.age).to.equal(25);
        });
        it('should return 18 if the driver is born 18 years ago', () => {
            const driver = new Driver(`02/09/${current_year - 18}`, 1000.00);
            expect(driver.age).to.equal(18);
        });
        it('should return 100 if the driver is born 100 years ago', () => {
            const driver = new Driver(`02/09/${current_year - 100}`, 1000.00);
            expect(driver.age).to.equal(100);
        });
    });

    describe('civil liability', () => {
        it('should return 1000 if the driver is less than 26 years old', () => {
            const driver = new Driver("02/09/1998", 1000.00);
            driver.age = 20;
            expect(driver.civil_liability()).to.equal(1000);
        });
        it('should return 1000 if the driver is 25 years old', () => {
            const driver = new Driver("02/09/1998", 1000.00);
            driver.age = 25
            expect(driver.civil_liability()).to.equal(1000);
        });
        it('should return 500 if the driver is 26 years old or older', () => {
            const driver = new Driver("02/09/1998", 1000.00);
            driver.age = 26
            expect(driver.civil_liability()).to.equal(500);
        });
    });

    describe('omnium', () => {
        it('should return 30 if the value of the car is 1000', () => {
            const driver = new Driver("02/09/1998", 1000.00);
            expect(driver.omnium()).to.equal(30);
        });
        it('should return 3703.70 if the value of the car is 123456.78', () => {
            const driver = new Driver("02/09/1998", 123456.78);
            expect(driver.omnium()).to.equal(3703.7);
        });
    });
});