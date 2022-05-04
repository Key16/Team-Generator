
//modules referenced

const questions = require('./lib/questions');



const init = () => {
    console.log("This is the team profile generator.\n  \nAs a Manager, please enter the following.")
    questions()
};

init();
