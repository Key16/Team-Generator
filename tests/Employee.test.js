const Employee = require('../lib/Employee');

describe('Employee Name', () => {
    it('Name should return', () => {
        const employee = new Employee("Jane Doe", "12345", "123@123.com");

        const result = employee.getName()

        expect(result).toEqual('Jane Doe');
    });
});


describe('Employee email', () => {
    it('Email should return', () => {
        const employee = new Employee("Jane Doe", "12345", "jane@123.com");

        const result = employee.getEmail()

        expect(result).toEqual('jane@123.com');

    });


});

describe('Employee ID', () => {
    it('Email should return', () => {
        const employee = new Employee("Jane Doe", "12345", "jane@123.com");

        const result = employee.getId()

        expect(result).toEqual('12345');

    });


});

describe('Employee role', () => {
    it('Employee for role should return', () => {
        const employee = new Employee("Jane Doe", "12345", "jane@123.com");

        const result = employee.getRole()

        expect(result).toEqual('Employee');

    });


});