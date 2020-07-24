const { People } = require("../models");

// * READ / SHOW DATA -> SELECT *

// People.findAll()
//     .then(data => {
//         console.log(data);
//     })
//     .catch(err =>{
//         console.log(err);
//     })

// * CREATE DATA PEOPLE -> INSERT

People.create({
        firstname: 'Ahmad',
        lastname: 'Albar',
        age: 25,
        address: 'USA',
        ismale: false,
        Nationality: "Indonesia"
    })
    .then(data => {
        console.log(data);
    })
    .catch(err =>{
        console.log(err);
    })

// * UPDATE DATA

// People.update({
//         firstname: 'Agung',
//         lastname: 'Dian Prokoso',
//     }, {
//         where: {
//             id: 13
//         }
//     })
//     .then(data => {
//         console.log(data);
//     })
//     .catch(err =>{
//         console.log(err);
//     })

// * DELETE

// People.destroy({
//     where: {
//         id: 9
//     }
// })
// .then(data => {
//     console.log(data);
// })
// .catch(err =>{
//     console.log(err);
// })