const Intern = require('../lib/Intern');

describe('Intern Name', () => {
    it('Name should return', () => {
        const intern = new Intern("Jane Doe", "12345", "123@123.com", "School");

        const result = intern.getName()

        expect(result).toEqual('Jane Doe');
    });
});


describe('Intern email', () => {
    it('Email should return', () => {
        const intern = new Intern("Jane Doe", "12345", "jane@123.com", "School");

        const result = intern.getEmail()

        expect(result).toEqual('jane@123.com');

    });


});

describe('Intern ID', () => {
    it('Email should return', () => {
        const intern = new Intern("Jane Doe", "12345", "jane@123.com", "School");

        const result = intern.getId()

        expect(result).toEqual('12345');

    });


});

describe('Intern role', () => {
    it('Intern for role should return', () => {
        const intern = new Intern("Jane Doe", "12345", "jane@123.com", "School");

        const result = intern.getRole()

        expect(result).toEqual('Intern');

    });


});


describe('Intern github', () => {
    it('Intern github should return', () => {
        const intern = new Intern("Jane Doe", "12345", "jane@123.com", "School");

        const result = intern.getSchool()

        expect(result).toEqual('School');

    });


});