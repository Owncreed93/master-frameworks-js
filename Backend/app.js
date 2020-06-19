'use strict'

// * LOAD NODE MODULES TO CREATE THE SERVER
let express = require('express')
let bodyParser = require('body-parser')

// * EXECUTE EXPRESS
let app = express()

// * LOAD MIDDLEWARES
app.use(bodyParser.urlencoded( {extended:false} ))
app.use( bodyParser.json() )

// * LOAD FILES AND ROUTES
let article_routes = require('./routes/articles')

// * ACTIVATE CORS

// * ADD/LOAD PREFIX TO THE ROUTES
app.use('/api', article_routes)

// * EXPORT MODULE
module.exports = app
