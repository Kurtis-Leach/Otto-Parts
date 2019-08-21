const inCartController = require('../controllers').inCart
module.exports = (app) => {

    app.get('/inCarts', inCartController.get)

    app.get('/inCarts/:id', inCartController.getById)
    
    app.post('/inCarts', inCartController.create)

    // app.post('/inCarts/parts', inCartController.find)

    app.delete('/inCarts/:id', inCartController.delete)

    app.delete('/inCarts/all/:id', inCartController.deleteAll)
    
}