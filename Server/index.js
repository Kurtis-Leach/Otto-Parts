const express = require('express')
const createError = require('http-errors')
const bodyParser = require('body-parser')
const cors = require('cors')
const bcrypt = require('bcrypt')
const jwt = require('jwt-simple')
const logger = require('morgan')

const app = express()

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

app.get('*', (req, res) => res.status(200).send({
    message: 'Welcome to the beginning of nothingness.',
    }))

const port = 8000;

app.set('port', port);

app.listen(port);

module.exports = app;