const productController = require('../controllers').product
module.exports = (app) => {

    app.get('/parts', productController.get)

    app.get('/parts/:id', productController.getById)
    
    app.post('/parts', productController.create)

    app.put('/parts/:id', productController.update)

    app.delete('/parts/:id', productController.delete)

}