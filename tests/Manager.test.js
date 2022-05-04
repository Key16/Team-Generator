const Manager = require('../lib/Manager');

describe('Manager Name', () => {
    it('Name should return', () => {
        const manager = new Manager("Jane Doe", "12345", "123@123.com", "OfficeNum");

        const result = manager.getName()

        expect(result).toEqual('Jane Doe');
    });
});


describe('Manager email', () => {
    it('Email should return', () => {
        const manager = new Manager("Jane Doe", "12345", "jane@123.com", "OfficeNum");

        const result = manager.getEmail()

        expect(result).toEqual('jane@123.com');

    });


});

describe('Manager ID', () => {
    it('Email should return', () => {
        const manager = new Manager("Jane Doe", "12345", "jane@123.com", "OfficeNum");

        const result = manager.getId()

        expect(result).toEqual('12345');

    });


});

describe('Manager role', () => {
    it('Manager for role should return', () => {
        const manager = new Manager("Jane Doe", "12345", "jane@123.com", "OfficeNum");

        const result = manager.getRole()

        expect(result).toEqual('Manager');

    });


});

