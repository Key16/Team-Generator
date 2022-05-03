

//create maanger card
const createManagerCard = (managerTeam) => {
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
// const createIntern = (answers) => {
//     let Intern = ''
//     const intern = new Intern(answers.name)


s
//     //not sure how to get the loop to return me the different Interns
//     let card = `<div class="col col-md-12 col-2 card text-center dark-lilac " style="width: 18rem;">
// <div class="card-body ">
//     <h3 class="card-title">Name ${intern.name}</h3>
//     <h5 class="card-text">${intern.getRole()}</h5>
//     <ul class="list-group text-start">
//         <li class="list-group-item">ID:</li>
//         <li class="list-group-item">Email:</li>
//         <li class="list-group-item">Office No:</li>
//     </ul>
//     <a href="#" class="m-2 btn btn-primary">Go somewhere</a>
// </div>
// </div>`


//     return card
// }

module.exports = createManagerCard