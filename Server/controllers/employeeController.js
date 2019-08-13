// const Employee = require('../models/index.js').Employee
// module.exports = {
//     create(req, res) {
//         console.log('we hit the route B', req.body)
//         return Employee
//         .create
//         ({
//             name: req.body.name,
//             designation: req.body.designation,
//             salary: req.body.salary,
//             companyId: req.body.companyId
//         })
//         .then(employee => res.status(201).send(employee))
//         .catch(error => res.status(400).send(error))
//     }
// }