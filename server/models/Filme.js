const mongoose = require('mongoose')

const FilmeSchema = new mongoose.Schema({
    idFilme: {
        type: String
    }
})

module.exports = mongoose.model('biblioteca7', FilmeSchema, 'ids')