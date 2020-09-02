const express = require('express')
const { json } = require('express')
const app = express()

// Importing Routes
const routesuser = require('./routes/user.routes')
app.use(express.json())
app.use(express.urlencoded({extended:false}))

//settings
app.set('port', process.env.PORT || 3000)


//routes
app.use('/', routesuser)

module.exports = app




