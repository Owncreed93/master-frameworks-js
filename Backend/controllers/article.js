'use strict'

let validator = require('validator')
let fs = require('fs')
let path = require('path')

let Article = require('../models/article');
const { exists } = require('../models/article');
const article = require('../models/article');

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
        
    },

    delete: (req, res) => {

        // * GET THE ID OF THE URL
        let articleID = req.params.id

        // * FIND AND DELETE THE ARTICLE
        Article.findOneAndDelete({_id: articleID}, (err, articleRemoved) => {

            if( err ){
                return res.status(500).send({
                    status:'error',
                    message: 'Error al borrar!!!'
                });
            }

            if( !articleRemoved ){
                return res.status(404).send({
                    status:'error',
                    message: 'No se ha borrado el artículos, posiblemente no exista!!!'
                });
            }

            return res.status(200).send({
                status:'success',
                article: articleRemoved
            });

        })
        
    },

    upload: (req, res) => {
        // * SET UP MODULE CONNECT-MULTIPARTY
        
        // * GET THE FILE FROM THE REQUEST
        let file_name = 'Imagen no subida'

        if ( !req.files ){
            return res.status(404).send({
                status:'success',
                fichero: file_name
            });
        }
        // * GET THE NAME AND THE EXTENSION
        let file_path = req.files.file0.path;

        console.log(file_path)
        /** 
         * WINDOWS
         * let file_split = file_path.split('\\')
         * LINUX O MAC
         * let file_split = file_path.split('/')
        */
        let file_split = file_path.split('/')
        file_name = file_split[2]

        //  * GET THE EXTENSION
        let extension_split = file_name.split('\.')
        let file_ext = extension_split[1]

        // * CHECK THE EXTENSION (ONLY IMAGES, IF INVALID DELETE THE FILE)
        if ( file_ext != 'png' && file_ext != 'jpg' && file_ext != 'jpeg' && file_ext != 'gif') {

            // * BORRAR EL FICHERO SUBIDO
            fs.unlink(file_path, (err) => {

                return res.status(200).send({
                    status:'error',
                    message: 'La extensión de la imágen no es válida'
                });
            })

        } else {
            // * GET THE ARTICLE'S ID BY THE URL
            let articleID = req.params.id


            // * LOOKF FOR THE ARTICLE, ASIGN NAME TO THE IMAGE AND UPDATE IT 
            Article.findOneAndUpdate({_id: articleID }, {image: file_name}, {new: true}, (err, articleUpdated) => {
                if ( err ){
                    return res.status(500).send({
                        status: 'error',
                        message: 'La imagen no se actualizó'
                    })
                }

                if ( !articleUpdated ){
                    return res.status(404).send({
                        status: 'err',
                        message: 'Articulo no encontrado'
                    })
                }

                return res.status(200).send({
                    status:'success',
                    fichero: req.files,
                    article: articleUpdated
                })

            })
            
        }
 
    }, // * End upload file

    getImage: (req, res) => {

        let file = req.params.image

        let path_file = `./upload/articles/${file}`

        fs.exists(path_file, (exists) => {

            if( exists ) {
                return res.sendFile(path.resolve(path_file))
            } else {
                return res.status(404).send({
                    status:'error',
                    message: 'La imagen no existe !!!'
                })
            }

        })

    },

    search: (req, res) => {
        // * GET THE DATA TO SEARCH
        let searchString = (req.params.search).trim();

        // * FIND BY OR
        Article.find({
            "$or": [
                {"title" : {"$regex": searchString, "$options": "i"} },
                {"content" : {"$regex": searchString, "$options": "i"} },
            ]
        })
        .sort([['date', 'descending']])
        .exec( (err, articles) => {

            if( err ){
                return res.status(500).send({
                    status:'error',
                    message: 'No hay articulos'
                })
            }

            if( !articles || articles.length <= 0){
                return res.status(404).send({
                    status:'Not found',
                    message: 'No hay articulos asociados a la búsqueda'
                })
            }

            return res.status(200).send({
                status:'success',
                articles
            })


        })

        


    }

} // end controller

module.exports = controller