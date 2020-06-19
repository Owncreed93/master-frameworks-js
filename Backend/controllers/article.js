'use strict'

let validator = require('validator')
let Article = require('../models/article');

let controller = {

    datosCurso: (req, res) => {
        let hola = req.body.hola;

        return res.status(200).send({
            curso: 'Master en Frameworks JS',
            autor: 'Víctor Robles Web',
            url: 'victorroables.web',
            hola
        })
    },

    test: (req, res) => {
        return res.status(200).send({
            message: 'Soy la acción test de mi controlador de artículos'
        })
    },

    save: (req, res) => {

        // * REQUEST PARAMETERS VIA POST
        let params = req.body

        console.log(params)

        try{
            // * VALIDATE DATA WITH VALIDATOR
            let validate_title = !validator.isEmpty(params.title)
            let validate_content = !validator.isEmpty(params.content)
            
            if( validate_title && validate_content ){

                // * CREATE OBJECT TO SAVE
                let article = new Article()

                // * ASIGN VALUES TO THE RECENT CREATED OBJECT
                article.title = params.title
                article.content = params.content
                article.image = null

                // * SAVE THE OBJECT
                article.save( (err, articleStored) => {
                    if(err || !articleStored){
                        return res.status(404).send({
                            status: 'error',
                            message: 'The article has not been stored.'
                        })
                    }

                    // * SEND THE RESPONSE
                    return res.status(200).send({
                        status: 'success',
                        article: articleStored
                    })
                })

            } else {
                return res.status(200).send({
                    status: 'error',
                    message: 'Faltan datos por enviar'
                })
            }

        }catch(err){
            return res.status(200).send({
                status: 'error',
                message: 'Faltan datos por enviar'
            })
        }

    },

    getArticles: (req, res) => {

        let query = Article.find({})

        let last = req.params.last

        console.log(last)

        if(last || last != undefined){
            query.limit(2)
        }

        // Find
        query.sort('-_id').exec( (err, articles) => {

            if(err) {
                return res.status(404).send({
                    status: 'error',
                    message: 'Error retrieving data.'
                })
            }

            if(!articles) {
                return res.status(404).send({
                    status: 'error',
                    message: 'There are no articles to show.'
                })
            }

            return res.status(200).send({
                status: 'success',
                articles
            })

        })

        
    }

} // end controller

module.exports = controller