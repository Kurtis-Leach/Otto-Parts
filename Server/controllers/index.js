const user = require('./userController')
const product = require('./productContoller')
const order = require('./orderController')
const admin = require('./adminController')

module.exports = {
    user,
    product,
    order,
    admin
}