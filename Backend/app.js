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
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


// * ADD/LOAD PREFIX TO THE ROUTES
app.use('/api', article_routes)

// * EXPORT MODULE
module.exports = app
