module.exports = class Driver {
    constructor(birth_date, car_value) {
        this.birth_date = birth_date;
        this.car_value = car_value;
        this.age = this.age();
    }

    age() {
        const birth_date = this.birth_date;
        //birthdate first has to be converted to the correct format of the Date() function
        const birthdate_array = birth_date.split("/");
        const formated_birthdate = `${parseInt(birthdate_array[2])}-${parseInt(birthdate_array[1])}-${parseInt(birthdate_array[0])}`;
        //using the Date() function with the formated birthdate to get the driver's age
        const date_birth = new Date(formated_birthdate);
        const date_today = new Date();
        const age_diff_date = new Date(date_today - date_birth);
        return Math.abs(age_diff_date.getUTCFullYear() - 1970);
    }

    civil_liability() {
        // should be 500 if 26 or more. 1000 otherwise.
        return this.age > 25 ? 500 : 1000;
    }

    omnium() {
        // should be 3% of the car_value
        return +((this.car_value / 100) * 3).toFixed(2);
    }
}