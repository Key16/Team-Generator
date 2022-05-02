// const Employee = require("./lib/Employee");
// const Engineer = require("./lib/Engineer");
// const Intern = require("./lib/Intern");
const Manager = require("./Manager");

const generateHTML = (answers) =>


    `<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- CSS only -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
    <title>Team Layout</title>
</head>

<body>
    <h1 class="position-relative">
        <div class="display-1 position-absolute top-50 start-50 translate-middle"><i class="bi-people-fill"></i> My Team
        </div>
    </h1>
    <div class="mb-3 mt-3 container">
        <div class="mx-2 row justify-content-center ">
           ${createManager(answers)}
        </div>

    </div>
    <div class="container ">
        <div class=" gap-4 row justify-content-center">
            <div class="col col-md-12 col-2 card text-center dark-lilac " style="width: 18rem;">
                <div class="card-body ">
                    <h3 class="card-title">Name</h3>
                    <h5 class="card-text">Manager</h5>
                    <ul class="list-group text-start">
                        <li class="list-group-item">ID:</li>
                        <li class="list-group-item">Email:</li>
                        <li class="list-group-item">Office No:</li>
                    </ul>
                    <!-- <p class="card-text">With supporting text below as a natural lead-in to additional content.</p> -->
                    <a href="#" class="m-2 btn btn-primary">Go somewhere</a>
                </div>
            </div>

            <div class="col col-md-12 col-2 card text-center dark-lilac" style="width: 18rem;">
                <div class="card-body ">
                    <h3 class="card-title">Name</h3>
                    <h5 class="card-text">Manager</h5>
                    <ul class="list-group text-start">
                        <li class="list-group-item">ID:</li>
                        <li class="list-group-item">Email:</li>
                        <li class="list-group-item">Office No:</li>
                    </ul>
                    <!-- <p class="card-text">With supporting text below as a natural lead-in to additional content.</p> -->
                    <a href="#" class="m-2 btn btn-primary">Go somewhere</a>
                </div>
            </div>

        </div>

    </div>

</body>

</html>`


const createManager = (answers) => {
    const manager = new Manager(answers.name, answers.employeeId, answers.email, answers.officeNumber)

    let card =
        ` <div class="col col-lg-2 card text-center lilac " style="width: 18rem;">

<div class="card-body ">
    <h3 class="card-title">${manager.getName()}</h3>
    <h5 class="card-text"><i class="bi-piggy-bank-fill"></i> Manager</h5>
    <ul class="list-group text-start">
    <li class="list-group-item">ID: ${manager.getId()}</li>
    <li class="list-group-item">Email:<a href="mailto:${manager.getEmail()}"> ${manager.getEmail()}</a></li>
    <li class="list-group-item">Office No: ${manager.officeNumber}</li>
    </ul>
</div>
</div>`
    return card
}


// const createIntern = (answers) => {
//     let Intern = ''
//     const intern = new Intern(answers.name)
//     for (let i = 0; i < answers.addEmp.length; i++) {
//         const num = employees[i]
//         if (e.type === "Engineer") {
//             const engineer = new Engineer(e.name, e.id, e.email, e.github)
//             engineers.push(engineer)
//         } else if (e.type === "Intern") {
//             const intern = new Intern(e.name, e.id, e.email, e.school)
//             interns.push(intern)
//         }
//     }

//     let card = `<div class="col col-md-12 col-2 card text-center dark-lilac " style="width: 18rem;">
// <div class="card-body ">
//     <h3 class="card-title">Name</h3>
//     <h5 class="card-text">Manager</h5>
//     <ul class="list-group text-start">
//         <li class="list-group-item">ID:</li>
//         <li class="list-group-item">Email:</li>
//         <li class="list-group-item">Office No:</li>
//     </ul>
//     <!-- <p class="card-text">With supporting text below as a natural lead-in to additional content.</p> -->
//     <a href="#" class="m-2 btn btn-primary">Go somewhere</a>
// </div>
// </div>`


//     return Employee
// }


// const engineers = []
// const interns = []

// for (let i = 0; i < answers.addEmp.length; i++) {
//     const num = employeeNo[i]
//     if (answers.chosenEmp === "Engineer") {
//         const engineer = new Engineer(e.name, e.id, e.email, e.github)
//         engineers.push(engineer)
//     } else if (e.type === "Intern") {
//         const intern = new Intern(e.name, e.id, e.email, e.school)
//         interns.push(intern)
//     }
// }

// function createEngineerCards(engineers) {
//     let engineerCards = ``
//     for (let i = 0; i < engineers.length; i++) {
//         let engineer = engineers[i]
//         let card = `<div class="card">
//         <div class="card-title">
//             <h3 class="name">${engineer.name}</h3>
//             <h4 class="type">Engineer</h4>
//         </div>
//         <div class="card-body">
//             <p>ID: <span class="ID">${engineer.id}</span></p>
//             <p>Email: <span class="Email"><a href="mailto:${engineer.email}">${engineer.email}</a></span></p>
//             <p>Github: <span class="Github"><a href="https://www.github.com/${engineer.github}"  target="_blank">${engineer.github}</a></span></p>
//         </div>
//     </div>`
//         engineerCards += card
//     }
//     return engineerCards
// }


// function createInternCards(interns) {
//     let internCards = ``
//     for (let i = 0; i < interns.length; i++) {
//         let intern = interns[i]
//         let card = `<div class="card">
//         <div class="card-title">
//             <h3 class="name">${intern.name}</h3>
//             <h4 class="type">Intern</h4>
//         </div>
//         <div class="card-body">
//             <p>ID: <span class="ID">${intern.id}</span></p>
//             <p>Email: <span class="Email"><a href="mailto:${intern.email}">${intern.email}</a></span></p>
//             <p>School: <span class="Github">${intern.school}</span></p>
//         </div>
//     </div>`

//         internCards += card
//     }
//     return internCards
// }

module.exports = generateHTML;