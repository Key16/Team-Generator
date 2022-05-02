// const Employee = require("./Employee");
// const Engineer = require("./Engineer");
// const Intern = require("./Intern");
const Manager = require("./Manager");


//HTML format
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
        //placeholder for the other employee cards
        ${createIntern(answers)}
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

//create maanger card
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


// create employee cards
const createIntern = (answers) => {
    let Intern = ''
    const intern = new Intern(answers.name)

    //not sure how to get the loop to return me the different Interns
    let card = `<div class="col col-md-12 col-2 card text-center dark-lilac " style="width: 18rem;">
<div class="card-body ">
    <h3 class="card-title">Name ${intern.name}</h3>
    <h5 class="card-text">${intern.getRole()}</h5>
    <ul class="list-group text-start">
        <li class="list-group-item">ID:</li>
        <li class="list-group-item">Email:</li>
        <li class="list-group-item">Office No:</li>
    </ul>
    <!-- <p class="card-text">With supporting text below as a natural lead-in to additional content.</p> -->
    <a href="#" class="m-2 btn btn-primary">Go somewhere</a>
</div>
</div>`


    return card
}




module.exports = generateHTML;