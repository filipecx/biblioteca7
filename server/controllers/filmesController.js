const Filme = require('../models/Filme')

module.exports = {
    getFilmes: async (req, res) => {
       try{
        const idsFavoritados = await Filme.find()
        res.json(idsFavoritados)
       }catch(error){
        console.log(error)
       }
    },

    favorite: async (req, res) => {
        try{          
            await Filme.create({idFilme: req.params.id})
        }catch(e){
            console.log(e)
        }
    },

    removeFavorite: async (req, res) => {
        try{
            await Filme.findOneAndDelete({idFilme:req.query.idFilme})
            console.log(req.query.idFilme)
        }
        catch(e){
            console.log(e)
        }
    }
}