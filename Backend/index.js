'use strict'

let mongoose = require('mongoose')

// * IMPORT THE EXPRESS CONFIGURATION
let app = require('./app')
let port = 3900

// * CONNECT TO MONGODB

// * FORCE TO DISABLE DEPRECATED METHODS
mongoose.set('useFindAndModify', false)

// * ENABLES TO WORK WITH ASYNCRONUS
mongoose.Promise = global.Promise

// mongoose.connect(url, opciones).then
mongoose.connect('mongodb://localhost:27017/api_rest_blog', { useUnifiedTopology: true, useNewUrlParser: true })
        .then( () => {
            console.log('La conexión a la base de datos se ha realizado bien');
        
        // * CREATE SERVER AND LISTEN TO HTTP REQUEST
        app.listen(port, () => {
            console.log(`Servidor corriendo en http://localhost:${port}`)
        })
})