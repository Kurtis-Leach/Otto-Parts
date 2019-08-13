const orderController = require('../controllers').order
module.exports = (app) => {

    app.get('/orders', orderController.get)

    app.get('/orders/:id', orderController.getById)
    
    app.post('/orders', orderController.create)

    app.delete('/orders/:id', orderController.delete)

}