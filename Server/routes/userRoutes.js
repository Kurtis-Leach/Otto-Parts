const userController = require('../controllers').user
module.exports = (app) => {

    app.get('/users', userController.get)

    app.get('/users/:id', userController.getById)
    
    app.post('/users', userController.create)

    app.put('/users/:id', userController.update)

    app.delete('/users/:id', userController.delete)

}