const user = require('./userController')
const product = require('./productContoller')
const order = require('./orderController')
const inCart = require('./inCartController')

module.exports = {
    user,
    product,
    order,
    inCart
}