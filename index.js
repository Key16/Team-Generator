
//packages needed for the application
const inquirer = require('inquirer');
const fs = require('fs');

//modules referenced

const questions = require('./lib/question2');



const init = () => {
    console.log("This is the team profile generator.\n  \nAs a Manager, please enter the following.")
    questions()
    // .catch((err) => console.error(err));
};

init();
//create manager function, when its done
//  another function to create team , this will ask one mc question intern or eng? or done
//      if eng call eng function
//      if intern, call intern
//      if none then writes the files


