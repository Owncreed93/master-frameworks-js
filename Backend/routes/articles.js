'use strict'

let express = require('express')

let ArticleController = require('../controllers/article')

let router = express.Router()

// * TEST ROUTES
router.post('/datos-curso', ArticleController.datosCurso)
router.get('/test-de-controlador', ArticleController.test)

// * ARTICLE ROUTES
router.post('/save', ArticleController.save)
router.get('/articles/:last?', ArticleController.getArticles)

module.exports = router
