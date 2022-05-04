const Engineer = require("./Engineer");
const Intern = require("./Intern");
const Manager = require("./Manager");

const fs = require('fs');
const inquirer = require('inquirer');
const generateHTML = require("./generateHTML");
const myTeam = []
const myManager = []

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
            const manager = new Manager(answer.name, answer.employeeId, answer.email, answer.officeNumber);
            console.log(manager)
            myManager.push(manager);
        })

        .then(addEmployee);

}





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
                console.log("Engineer chosen")
                return engineerQ();
            } else if (answer.choice === "Intern") {
                console.log("Intern chosen")
                return internQ();
            } else {
                createFile();
            }
        })


}



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
    // .catch ((error) => console.error(error));


};

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
    // .catch ((error) => console.error(error));


};

function createFile() {

    fs.writeFile("./dist/index.html", generateHTML(myTeam, myManager), (err) => {
        err ? console.error(err) : console.log("team created! Please check index.html file")
    });


}

module.exports = questions