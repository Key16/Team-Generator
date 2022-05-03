


//HTML format
const generateHTML = (myTeam, manager) =>


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
           ${managerCard(manager)}
        </div>

    </div>
    <div class="container ">
        <div class=" gap-4 row justify-content-center">
        
                ${teamCard(myTeam)}
                   
            
        </div>

    </div>

</body>

</html>`


const managerCard = () => {

    console.log(manager)
    let card =
        ` <div class="col col-lg-2 card text-center lilac " style="width: 18rem;">

<div class="card-body ">
    <h3 class="card-title">${manager.name}</h3>
    <h5 class="card-text"><i class="bi-piggy-bank-fill"></i> ${manager.getRole()}</h5>
    <ul class="list-group text-start">
    <li class="list-group-item">ID: ${manager.getId()}</li>
    <li class="list-group-item">Email:<a href="mailto:${manager.getEmail()}"> ${manager.getEmail()}</a></li>
    <li class="list-group-item">Office No: ${manager.officeNumber}</li>
    </ul>
</div>
</div>`
    return card
}

const teamCard = (myTeam) => {

    //Empty string for the card details to be put into so we can then print it in the above function
    let profileCards = "";

    //loop over every item in the myTeam array and add the profileCards code to the empty profileCards string for every item
    for (let i = 0; i < myTeam.length; i++) {

        //if statement to generate the appropriate 'other' title for office, github andschool
        let details = "";

        if (myTeam[i].getGithub() !== undefined) {
            details += "GitHub: "
        } else if (myTeam[i].getSchool() !== undefined) {
            details += "School: "
        } else {
            details += " "
        };


        if (myTeam[i].getRole() === "Engineer") {
            icon += '<i class="bi-piggy-bank-fill"></i>';

        } else if (myTeam[i].getRole() === "Intern") {

            icon += '<i class="bi-piggy-bank-fill"></i>';

        } else {
            icon += '';

        }

        //if statement to dynamically create gitHub URL for each engineer card
        let gitURL = "";

        if (myTeam[i].gitHub !== undefined) {
            gitURL += `<a href="https://github.com/${myTeam[i].gitHub}">${myTeam[i].gitHub}</a>`
        }

        //dynamically create card details for each role in the myTeam array
        profileCards +=

            `<div class="col col-md-12 col-2 card text-center dark-lilac" style="width: 18rem;">
                <div class="card-body ">
                    <h3 class="card-title">Name ${myTeam[i].getName()} </h3>
                    <h5 class="card-text">${icon} ${myTeam[i].role()}</h5>
                    <ul class="list-group text-start">
                        <li class="list-group-item">ID: ${myTeam[i].getid()} </li>
                        <li class="list-group-item">Email: ${myTeam[i].getEmail()}</li>
                        <li class="list-group-item">${detail}</span>${gitURL || myTeam[i].getSchool()}</li>
                    </ul>
                    <!-- <p class="card-text">With supporting text below as a natural lead-in to additional content.</p> -->
                    <a href="#" class="m-2 btn btn-primary">Go somewhere</a>
                </div>
            </div>`

    }

    return profileCards
}


module.exports = generateHTML;