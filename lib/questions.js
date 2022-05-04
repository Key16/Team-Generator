// Ext packages required

const fs = require('fs');
const inquirer = require('inquirer');

//local modules required
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const Manager = require("./Manager");
const generateHTML = require("./generateHTML");

//array for team and manager. Manager will be in a different card to others
const myTeam = []
const myManager = []


//starter questions ask for manager first
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


    ])
        .then((answer) => {
            //constructs the manager 
            const manager = new Manager(answer.name, answer.employeeId, answer.email, answer.officeNumber);
            console.log(manager)
            myManager.push(manager);
        })

        .then(addEmployee);

}



//questions for choice of employee

const addEmployee = () => {

    return inquirer.prompt([

        {
            type: "list",
            name: "choice",
            choices: ["Engineer", "Intern", "No"],
            message: "Do you wish to add an employee?",
        },

    ])
        .then((answer) => {
            if (answer.choice === ("Engineer")) {
                console.log("Please fill in details for the Engineer")
                return engineerQ();
            } else if (answer.choice === "Intern") {
                console.log("Please fill in details for the Intern")
                return internQ();
            } else {
                createFile();
            }
        })


}


//questions for engineer
const engineerQ = () => {

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is their name?',
            validate(answer) {
                if (!answer) {
                    return "Please, fill their name!"
                }

                return true
            }

        },

        {
            type: 'input',
            name: 'employeeId',
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
            name: 'email',
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
            validate(answer) {
                if (!answer) {
                    return "Please fill in a Github username"
                }
                return true
            }

        }


    ])
        .then((answer) => {
            let engineer = new Engineer(answer.name, answer.employeeId, answer.email, answer.github);
            myTeam.push(engineer);
            console.log(myTeam);
        })
        .then(addEmployee);


};

//questions for interns
const internQ = () => {

    return inquirer.prompt([

        {
            type: 'input',
            name: 'name',
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
            name: 'employeeId',
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
            name: 'email',
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
            name: 'school',
            message: 'What is their school?',
            validate(answer) {
                if (!answer) {
                    return "Please fill in a school"
                }
                return true
            }


        },
    ])
        .then((answer) => {
            let intern = new Intern(answer.name, answer.employeeId, answer.email, answer.school);
            myTeam.push(intern);
            console.log(myTeam)
        })
        .then(addEmployee);


};

function createFile() {

    fs.writeFile("./dist/index.html", generateHTML(myTeam, myManager), (err) => {
        err ? console.error(err) : console.log("Your team has been created! Please check dist/index.html file")
    });


}

module.exports = questions