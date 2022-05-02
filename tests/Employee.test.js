const Employee = require('../lib/Employee');

describe('Employee Details', () => {
    it('Name should not include numbers or special characters', () => {
        const employee = new Employee('Jane');

        employee.getName('Jane')

        expect(employee).toEqual('Jane')


    })




})