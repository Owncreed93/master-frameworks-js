'use strict'

let express = require('express')

let ArticleController = require('../controllers/article')

let router = express.Router()

let multipart = require('connect-multiparty')

// * MIDDELWARES
// * DEAL WITH IMAGES 
let md_upload = multipart({ uploadDir: './upload/articles' })

// * TEST ROUTES
router.post('/datos-curso', ArticleController.datosCurso)
router.get('/test-de-controlador', ArticleController.test)

// * ARTICLE ROUTES
router.post('/save', ArticleController.save)
router.get('/articles/:last?', ArticleController.getArticles)
router.get('/article/:id', ArticleController.getArticle)
router.put('/article/:id', ArticleController.update)
router.delete('/article/:id', ArticleController.delete)
router.post('/upload-image/:id', md_upload, ArticleController.upload)
router.get('/get-image/:image', ArticleController.getImage)
router.get('/search/:search', ArticleController.search)

module.exports = router
