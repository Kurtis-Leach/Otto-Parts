const orderController = require('../controllers').order
module.exports = (app) => {

    app.get('/orders', orderController.get)

    app.get('/orders/:id', orderController.getById)

    app.get('/orders/all', orderController.getAll)

    app.get('/orders/all/:userId', orderController.getAllProductsForUser)

    app.get('/orders/check/:id', orderController.check)
    
    app.post('/orders', orderController.create)

    app.delete('/orders/:id', orderController.delete)

}