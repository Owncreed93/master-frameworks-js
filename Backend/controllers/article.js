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

        
    },

    getArticle: (req, res) => {

        // * GET THE ID FROM THE URL
        let articleId = req.params.id;

        // * CHECK IF IT EXISTS
        if(!articleId || articleId == null ){
            return res.status(404).send({
                status:'error',
                message: 'No hay articulos para mostrar!!!'
            })
        }

        // * LOOK FOR THE ARTICLE
        Article.findById(articleId, (err, article) => {

            if(err || !article){
                return res.status(404).send({
                    status:'error',
                    message: 'No existe el articulo!!!'
                });
            }

            // * DISPLAY JSON
            return res.status(200).send({
                status:'success',
                article
            })
        })

    },

    update: (req, res) => {

        // * GET THE ARTICLE BY THE URL
        let articleId = req.params.id

        // * GET THE DATA BY HTTP PUT METHOD
        let params = req.body

        // * VALIDATE THE DATA
        let validate_title
        let validate_content
        try {
            validate_title = !validator.isEmpty(params.title)
            validate_content = !validator.isEmpty(params.content)
        }catch(err){
            return res.status(200).send({
                status: 'error',
                message: 'Faltan datos por enviar!'
            })
        }

        if (validate_title && validate_content){
            // * FIND AND UPDATE
            Article.findOneAndUpdate({_id: articleId}, params, {new:true}, (err, articleUpdated) => {
                if ( err ){
                    return res.status(500).send({
                        status: 'error',
                        message: 'Error al actualizar'
                    })
                }

                if ( !articleUpdated ){
                    return res.status(404).send({
                        status: 'error',
                        message: 'No existe ningún artículo'
                    })
                }

                return res.status(200).send({
                    status:'success',
                    article: articleUpdated
                });

            })
        } else {
            return res.status(200).send({
                status:'error',
                message: 'La validación no es correcta!!!'
            });
        }
        
    }

} // end controller

module.exports = controller