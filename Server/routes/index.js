
module.exports = (app) =>{
    require('./userRoutes.js')(app)
    require('./productRoutes.js')(app)
    require('./orderRoutes')(app)
    require('./adminRoutes')(app)
    
}