const Order = require('../models/index.js').Order
const Product = require('../models/index.js').Product
module.exports = {
    get(req, res) {
        const id = req.params.id
        Order.findAll()
        .then((orders) => res.status(201).send(orders))
        .catch(error => res.status(400).send(error))
    },
    getById(req, res) {
        const id = req.params.id
        Order.findOne({where:{id: id}})
        .then((order) => res.status(201).send(order))
        .catch(error => res.status(400).send(error))
    },
    create(req, res) {
        console.log('we hit the route B', req.body)
        Product.findOne({where:{id: req.body.productId}})
        .then((product)=>{
            if (!product){
                return res.status(404).send({message: 'Product not Found'})
            }
            else if (product.ordered){
                return res.status(404).send({message: 'Product has already been ordered'})
            }
            else{
                return Order
                .create
                    ({
                        userId: req.body.userId
                    })
                .then(order => {
                    product.update({
                        orderId: order.id,
                        ordered: true
                    })
                    return res.status(201).send(order)})
                .catch(error => res.status(400).send(error))
            }
        })     
    },
    check(){
        const id = req.params.id
        Product.findOne({where:{id: id}})
        .then((product)=>{
            if (!product){
                return res.status(404).send({message: 'Product not Found'})
            }
            else if (product.ordered){
                return res.status(404).send({message: 'Product has already been ordered'})
            }
        })
    },
    delete(req, res) {
        console.log('we hit the route B', req.body)
        const id = req.params.id
        return Order
        .findOne({where:{id: id}})
        .then((order)=>{
            if (!order){
                return res.status(404).send({
                    message: 'Order not Found'
                })
            }

            return order
            .destroy()
            .then(order => res.status(204).send(order))
            .catch(error => res.status(400).send(error))
        })
        .catch(error => res.status(400).send(error))
    }
}