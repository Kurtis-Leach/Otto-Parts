const Admin = require('../models/index.js').Admin
module.exports = {
    get(req, res) {
        const id = req.params.id
        Admin.findAll()
        .then((admins) => res.status(201).send(admins))
        .catch(error => res.status(400).send(error))
    },
    getById(req, res) {
        const id = req.params.id
        Admin.findAll({where:{id: id}})
        .then((admin) => res.status(201).send(admin))
        .catch(error => res.status(400).send(error))
    },
    create(req, res) {
        console.log('we hit the route B', req.body)
        return Admin
        .create
        ({
            name: req.body.name,
            username: req.body.username,
            password: req.body.password
        })
        .then(user => res.status(201).send(user))
        .catch(error => res.status(400).send(error))
    },
    update(req, res) {
        console.log('we hit the route B', req.body)
        const id = req.params.id
        return Admin
        .findOne({where:{id: id}})
        .then((admin)=>{
            if (!admin){
                return res.status(404).send({
                    message: 'Admin not Found'
                })
            }

            return admin
            .update({
                name: req.body.name || admin.name,
                username: req.body.username || admin.username,
                password: req.body.password
            })
            .then(admin => res.status(201).send(admin))
            .catch(error => res.status(400).send(error))
        })
        .catch(error => res.status(400).send(error))
    },
    delete(req, res) {
        console.log('we hit the route B', req.body)
        const id = req.params.id
        return Admin
        .findOne({where:{id: id}})
        .then((admin)=>{
            if (!admin){
                return res.status(404).send({
                    message: 'Admin not Found'
                })
            }

            return admin
            .destroy()
            .then(admin => res.status(204).send(admin))
            .catch(error => res.status(400).send(error))
        })
        .catch(error => res.status(400).send(error))
    }
}