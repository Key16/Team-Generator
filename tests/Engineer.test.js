const Engineer = require('../lib/Engineer');

describe('Engineer Name', () => {
    it('Name should return', () => {
        const engineer = new Engineer("Jane Doe", "12345", "123@123.com", "Key16");

        const result = engineer.getName()

        expect(result).toEqual('Jane Doe');
    });
});


describe('Engineer email', () => {
    it('Email should return', () => {
        const engineer = new Engineer("Jane Doe", "12345", "jane@123.com", "Key16");

        const result = engineer.getEmail()

        expect(result).toEqual('jane@123.com');

    });


});

describe('Engineer ID', () => {
    it('Email should return', () => {
        const engineer = new Engineer("Jane Doe", "12345", "jane@123.com", "Key16");

        const result = engineer.getId()

        expect(result).toEqual('12345');

    });


});

describe('Engineer role', () => {
    it('Engineer for role should return', () => {
        const engineer = new Engineer("Jane Doe", "12345", "jane@123.com", "Key16");

        const result = engineer.getRole()

        expect(result).toEqual('Engineer');

    });


});


describe('Engineer github', () => {
    it('Engineer github should return', () => {
        const engineer = new Engineer("Jane Doe", "12345", "jane@123.com", "Key16");

        const result = engineer.getGitHub()

        expect(result).toEqual('Key16');

    });


});