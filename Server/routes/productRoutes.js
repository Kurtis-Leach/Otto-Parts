const productController = require('../controllers').product
module.exports = (app) => {

    app.get('/products', productController.get)

    app.get('/products/:id', productController.getById)
    
    app.post('/products', productController.create)

    app.put('/products/:id', productController.update)

    app.delete('/products/:id', productController.delete)

}