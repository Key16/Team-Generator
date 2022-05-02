
//packages needed for the application
const inquirer = require('inquirer');
const fs = require('fs');
//allows for looping in inquirer
inquirer.registerPrompt("loop", require("inquirer-loop")(inquirer));

//modules referenced

const questions = require("./lib/questions")
const generateHTML = require("./lib/generateHTML")


const init = () => {
    console.log("This is the team profile generator.\n  \nAs a Manager, please enter the following.")
    questions()

        .then((answers) => {

            fs.writeFileSync('./dist/index.html', generateHTML(answers))
        })
        .then(() => console.log('Successfully finished questions'))

    // .catch((err) => console.error(err));
};

init();