const userController = require('../controllers').user
module.exports = (app) => {

    app.get('/users', userController.get)

    app.get('/users/:id', userController.getById)

    app.get('/users/token/:token', userController.getByToken)
    
    app.post('/users', userController.create)

    app.post('/login', userController.login)

    app.put('/users/:id', userController.update)

    app.delete('/users/:id', userController.delete)

}