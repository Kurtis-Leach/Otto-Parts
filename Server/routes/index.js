
module.exports = (app) =>{
    require('./userRoutes.js')(app)
    require('./productRoutes.js')(app)
    require('./orderRoutes')(app)
    require('./inCartRoutes')(app)
    
}