
//packages needed for the application
const inquirer = require('inquirer');
const fs = require('fs');
//allows for looping in inquirer
// inquirer.registerPrompt("loop", require("inquirer-loop")(inquirer));

//modules referenced
// const Employee = require(./lib/Employee);
// const Engineer = require(./lib/Engineer);
// const Intern = require(./lib/Intern);
// const Manager = require(./lib/Manager);

const questions = () => {

    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'Title of your project:'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please write a description of this repo:'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please input installation instructions for packages:'
        },
        {
            type: 'list',
            name: 'license',
            choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense', 'WTFPL License'],
            message: 'Choose a licenses for your project:'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please input a usage guide:'
        },
        {
            type: 'input',
            name: 'contribution',
            message: 'Please input contribution message:'
        },
        {
            type: 'input',
            name: 'test',
            message: 'Please input how to test:'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email:'
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your github username (no @ required):'
        },
    ])


}


const init = () => {
    questions()

    // .then((answers) => fs.writeFileSync('README.md', generateREADME(answers)))
    // .then(() => console.log('Successfully wrote to README.md'))
    // .catch((err) => console.error(err));
};

init();