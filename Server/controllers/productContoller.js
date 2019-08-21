const Product = require('../models/index.js').Product
module.exports = {
    get(req, res) {
        const id = req.params.id
        Product.findAll()
        .then((products) => res.status(201).send(products))
        .catch(error => res.status(400).send(error))
    },
    getById(req, res) {
        const id = req.params.id
        Product.findOne({where:{id: id}})
        .then((product) => res.status(201).send(product))
        .catch(error => res.status(400).send(error))
    },
    create(req, res) {
        console.log('we hit the route B', req.body)
        return Product
        .create
        ({
            title: req.body.title,
            type: req.body.type,
            color: req.body.color,
            make: req.body.make,
            model: req.body.model,
            year: req.body.year,
            price: req.body.price,
            img: req.body.img,
            description: req.body.description
        })
        .then(product => res.status(201).send(product))
        .catch(error => res.status(400).send(error))
    },
    update(req, res) {
        console.log('we hit the route B', req.body)
        const id = req.params.id
        return Product
        .findOne({where:{id: id}})
        .then((product)=>{
            if (!product){
                return res.status(404).send({
                    message: 'Product not Found'
                })
            }

            return product
            .update({
                title: req.body.title || product.title,
                ordered: req.body.ordered || product.ordered,
                orderId: req.body.orderId || product.orderId,
            })
            .then(product => res.status(201).send(product))
            .catch(error => res.status(400).send(error))
        })
        .catch(error => res.status(400).send(error))
    },
    order(req, res) {
        const id = req.params.id
        return Product
        .findOne({where:{id: id}})
        .then((product)=>{
            if (!product){
                return res.status(404).send({
                    message: 'Product not Found'
                })
            } else if (product.ordered){
                return res.status(404).send({message: 'Product has already been ordered'})
            } else {
                return product
                .update({
                    orderId: req.body.orderId,
                    ordered: true
                })
                .then(product => res.status(201).send(product))
                .catch(error => res.status(400).send(error))
            }
        })
        .catch(error => res.status(400).send(error))
    },
    delete(req, res) {
        console.log('we hit the route B', req.body)
        const id = req.params.id
        return Product
        .findOne({where:{id: id}})
        .then((product)=>{
            if (!product){
                return res.status(404).send({
                    message: 'Product not Found'
                })
            }

            return product
            .destroy()
            .then(product => res.status(204).send(product))
            .catch(error => res.status(400).send(error))
        })
        .catch(error => res.status(400).send(error))
    }
}