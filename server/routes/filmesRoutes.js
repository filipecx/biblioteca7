const express = require('express')
const filmesController = require('../controllers/filmesController')
const router = express.Router()

router.get('/', filmesController.getFilmes)
router.post('/:id', filmesController.favorite)
router.delete('/:id', filmesController.removeFavorite)

module.exports = router