// const Company = require('../models/index.js').Company
// const Employee = require('../models/index.js').Employee
// module.exports = {
//     get(req, res) {
//         const id = req.params.id
//         Company.findAll({where:{id: id}})
//         .then((company) => res.status(201).send(company))
//         .catch(error => res.status(400).send(error))
//     },
//     create(req, res) {
//         console.log('we hit the route B', req.body)
//         console.log(Company)
//         return Company
//         .create
//         ({
//             name: req.body.name
//         })
//         .then(company => res.status(201).send(company))
//         .catch(error => res.status(400).send(error))
//     }
// }