const express = require('express')
const createError = require('http-errors')
const bodyParser = require('body-parser')
const cors = require('cors')
const bcrypt = require('bcrypt')
const jwt = require('jwt-simple')
const logger = require('morgan')


const app = express()
app.use(cors({ origin: 'http://localhost:3000', credentials: true}))
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

const models = require('./models')

models.sequelize.sync().then(()=>   {
    console.log('Nice! Database looks fine.')
}).catch((err)=>{
    console.log(err, 'Something went wrong with database update')
})

require('./routes')(app)

const port = 8000;

app.set('port', port);

app.listen(port);

module.exports = app;