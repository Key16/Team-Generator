const inquirer = require('inquirer');

const questions = () => {

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
            validate(answer) {
                if (!answer) {
                    return "Please, fill your name!"
                }

                return true
            }

        },

        {
            type: 'input',
            name: 'employeeId',
            message: 'What is your employee ID?',
            validate(answer) {
                var letterRegex = /^[0-9]*$/
                if (!answer) {
                    return "Please fill in an employee id"
                }
                if (!letterRegex.test(answer)) {
                    return "Please fill in an id using numbers only"
                };
                return true
            }

        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email?',
            validate(answer) {
                var letterRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                if (!answer) {
                    return "Please fill in an email"
                }
                if (!letterRegex.test(answer)) {
                    return "Please fill in a valid email address"
                };
                return true
            }

        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is your office number?',
            validate(answer) {
                var letterRegex = /^[0-9]*$/
                if (!answer) {
                    return "Please fill in an office number"
                }
                if (!letterRegex.test(answer)) {
                    return "Please fill in an office number using numbers only"
                };
                return true
            }

        },
        {
            type: "loop",
            name: "addEmp",
            message: "Do you wish to add another employee?",
            questions: [
                {
                    type: "list",
                    name: "chosenEmp",
                    choices: ["Engineer", "Intern"],
                    message: "What role is your employee?",
                },
                {
                    type: 'input',
                    name: 'nameEmp',
                    message: 'What is their name?',
                    validate(answer) {
                        if (!answer) {
                            return "Please, fill your name!"
                        }
                        return true
                    }

                },
                {
                    type: 'input',
                    name: 'employeeIdEmp',
                    message: 'What is their employee ID?',
                    validate(answer) {
                        var letterRegex = /^[0-9]*$/
                        if (!answer) {
                            return "Please fill in an employee id"
                        }
                        if (!letterRegex.test(answer)) {
                            return "Please fill in an id using numbers only"
                        };
                        return true
                    }

                },
                {
                    type: 'input',
                    name: 'emailEmp',
                    message: 'What is their email?',
                    validate(answer) {
                        var letterRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
                        if (!answer) {
                            return "Please fill in an email"
                        }
                        if (!letterRegex.test(answer)) {
                            return "Please fill in a valid email address"
                        };
                        return true
                    }

                },
                {
                    type: 'input',
                    name: 'github',
                    message: 'What is their Github username?',
                    when: (addEmp) => addEmp.chosenEmp === "Engineer",
                    validate(answer) {
                        if (!answer) {
                            return "Please fill in a Github username"
                        }
                        return true
                    }


                },
                {
                    type: 'input',
                    name: 'school',
                    message: 'What is their school?',
                    when: (addEmp) => addEmp.chosenEmp === "Intern",
                    validate(answer) {
                        if (!answer) {
                            return "Please fill in a school"
                        }
                        return true
                    }


                },
            ],

        },
    ])


}

module.exports = questions;