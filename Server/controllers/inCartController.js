const InCart = require('../models/index.js').inCart
const User = require('../models/index.js').User
module.exports = {
    get(req, res) {
        const id = req.params.id
        InCart.findAll()
        .then((inCarts) => res.status(201).send(inCarts))
        .catch(error => res.status(400).send(error))
    },
    getById(req, res) {
        const id = req.params.id
        InCart.findAll({where:{userId: id}})
        .then((incarts) => res.status(201).send(incarts))
        .catch(error => res.status(400).send(error))
    },
    create(req, res) {
        console.log('we hit the route B', req.body)
        return InCart
        .create
        ({
            userId: req.body.userId,
            productId: req.body.productId
        })
        .then(inCart => res.status(201).send(inCart))
        .catch(error => res.status(400).send(error))
    },
    delete(req, res) {
        console.log('we hit the route B', req.body)
        const id = req.params.id
        return InCart
        .findOne({where:{id: id}})
        .then((inCart)=>{
            if (!inCart){
                return res.status(404).send({
                    message: 'InCart not Found'
                })
            }

            return inCart
            .destroy()
            .then(inCart => res.status(204).send(inCart))
            .catch(error => res.status(400).send(error))
        })
        .catch(error => res.status(400).send(error))
    },
    deleteAll(req, res) {
        console.log('we hit the route B', req.body)
        const id = req.params.id
        return InCart
        .findAll({where:{userId: id}})
        .then((inCarts)=>{
            if (!inCarts){
                return res.status(404).send({
                    message: 'InCart not Found'
                })
            }
            for(let i in inCarts){
                inCarts[i].destroy()
            }
            inCart => res.status(204).send({message: 'Success'})
        })
        .catch(error => res.status(400).send(error))
    }
}