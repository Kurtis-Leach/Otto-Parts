const adminController = require('../controllers').admin
module.exports = (app) => {

    app.get('/admins', adminController.get)

    app.get('/admins/:id', adminController.getById)
    
    app.post('/admins', adminController.create)

    app.put('/admins/:id', adminController.update)

    app.delete('/admins/:id', adminController.delete)

}