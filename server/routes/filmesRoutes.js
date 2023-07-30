const express = require('express')
const filmesController = require('../controllers/filmesController')
const router = express.Router()

router.get('/filmes', filmesController.getFilmes)

module.exports = router