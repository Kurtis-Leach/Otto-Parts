const User = require('../models/index.js').User
const bcrypt = require('bcrypt')
const jwt = require('jwt-simple')
module.exports = {
    get(req, res) {
        const id = req.params.id
        User.findAll()
        .then((users) => res.status(201).send(users))
        .catch(error => res.status(400).send(error))
    },
    getById(req, res) {
        const id = req.params.id
        User.findOne({where:{id: id}})
        .then((user) => res.status(201).send(user))
        .catch(error => res.status(400).send(error))
    },
    getByToken(req, res) {
        const token = req.params.token
        let {id} = jwt.decode(token, 'jsdaknfioed0243895')
        User.findByPk(id)
        .then((user) => res.status(201).send(user))
        .catch(error => res.status(400).send(error))
    },
    create(req, res) {
        console.log('we hit the route B', req.body)
        return User
        .create
        ({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            username: req.body.username,
            password: req.body.password,
            admin: req.body.admin || false
        })
        .then(user => res.status(201).send(user))
        .catch(error => res.status(400).send(error))
    },
    update(req, res) {
        console.log('we hit the route B', req.body)
        const id = req.params.id
        return User
        .findOne({where:{id: id}})
        .then((user)=>{
            if (!user){
                return res.status(404).send({
                    message: 'User not Found'
                })
            }

            return user
            .update({
                firstname: req.body.firstname || user.firstname,
                lastname: req.body.lastname || user.lastname,
                username: req.body.username || user.username,
                password: req.body.password
            })
            .then(user => res.status(201).send(user))
            .catch(error => res.status(400).send(error))
        })
        .catch(error => res.status(400).send(error))
    },
    delete(req, res) {
        console.log('we hit the route B', req.body)
        const id = req.params.id
        return User
        .findOne({where:{id: id}})
        .then((user)=>{
            if (!user){
                return res.status(404).send({
                    message: 'User not Found'
                })
            }

            return user
            .destroy()
            .then(user => res.status(204).send(user))
            .catch(error => res.status(400).send(error))
        })
        .catch(error => res.status(400).send(error))
    },
    login (req, res){
    const {username, password} = req.body
    User.findOne({where: {username: username}})
        .then((user)=>{
            if(user && bcrypt.compareSync(password, user.password_digest)){
                res.send(user)
            } else {
                res.send({message:'Nope!'})
            }
        })
    }
}