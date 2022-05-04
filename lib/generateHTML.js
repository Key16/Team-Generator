const Engineer = require("./Engineer");
const Intern = require("./Intern");
const Manager = require("./Manager");



//HTML format
const generateHTML = (myTeam, myManager) =>


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
           ${managerCard(myManager)}
        </div>

    </div>
    <div class="container ">
        <div class=" gap-4 row justify-content-center">
        
                ${teamCard(myTeam)}
                   
            
        </div>

    </div>

</body>

</html>`

//manager card
const managerCard = (manager) => {


    let card =
        ` <div class="col col-lg-2 card text-center lilac " style="width: 18rem;">

<div class="card-body ">
    <h3 class="card-title">${manager[0].name}</h3>
    <h5 class="card-text"><i class="bi-piggy-bank-fill"></i> Manager </h5>
    <ul class="list-group text-start">
    <li class="list-group-item">ID: ${manager[0].id}</li>
    <li class="list-group-item">Email:<a href="mailto:${manager[0].email}"> ${manager[0].email}</a></li>
    <li class="list-group-item">Office No: ${manager[0].officeNumber}</li>
    </ul>
</div>
</div>`
    return card
}

//team card
const teamCard = (myTeam) => {



    //Empty string for the card details to be put into so we can then print it in the above function
    let employeeCards = "";

    //loop over every item in the myTeam array and add the employeeCards code to the empty employeeCards string for every item
    for (let i = 0; i < myTeam.length; i++) {

        //sets the specific role title
        let details = "";
        if (myTeam[i].github !== undefined) {
            details += "GitHub: "

        } else if (myTeam[i].school !== undefined) {
            details += "School: "

        }

        //sets the icon for the role

        let icon = ""
        if (myTeam[i].getRole() === "Engineer") {
            icon += '<i class="bi-laptop"></i>';


        } else if (myTeam[i].getRole() === "Intern") {

            icon += '<i class="bi-emoji-smile"></i>';

        } else {
            icon += '';

        }

        //sets github link
        let githubLink = "";

        if (myTeam[i].github !== undefined) {
            githubLink += `<a href="https://github.com/${myTeam[i].getGitHub()}" target="_blank">${myTeam[i].getGitHub()}</a>`
        }

        let gitButton = "";

        if (myTeam[i].github !== undefined) {
            gitButton += ` <a href="https://github.com/${myTeam[i].getGitHub()}" target="_blank" class="m-2 btn btn-primary">Go Github</a>`

        }


        //sets intern school so it doesnt return undefined if trying to run it directly when looping for engineer
        let internSchool = "";

        if (myTeam[i].school !== undefined) {
            internSchool += `${myTeam[i].school}`
        }
        //dynamic button for intern to search on google for their school
        let internButton = "";

        if (myTeam[i].school !== undefined) {
            internButton += ` <a href="https://www.google.com/search?q=${myTeam[i].school}" target="_blank" class="m-2 btn btn-primary">Search School</a>`
        }
        //dynamically create card details for each role in the myTeam array
        employeeCards +=

            `<div class="col col-md-12 col-2 card text-center dark-lilac" style="width: 18rem;">
                <div class="card-body ">
                    <h3 class="card-title"> ${myTeam[i].getName()} </h3>
                    <h5 class="card-text">${icon} ${myTeam[i].getRole()}</h5>
                    <ul class="list-group text-start">
                        <li class="list-group-item">ID: ${myTeam[i].getId()} </li>
                        <li class="list-group-item">Email: <a href="mailto:${myTeam[i].getEmail()}"> ${myTeam[i].getEmail()}</a> </li>
                        <li class="list-group-item">${details}</span>${githubLink}${internSchool}</li >
                    </ul >
                        ${gitButton}${internButton}
                </div >
            </div > `

    }

    return employeeCards
}


module.exports = generateHTML;