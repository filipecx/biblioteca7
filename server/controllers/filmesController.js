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
            if( await Filme.countDocuments({idFilme: req.params.id}) != 0){
                console.log('Este filme já foi adicionado')
            }else{
                await Filme.create({idFilme: req.params.id})
                console.log('Novo filme adicionado ao bd')
            }          
            
        }catch(e){
            console.log(e)
        }
    },

    removeFavorite: async (req, res) => {
        try{
            await Filme.findOneAndDelete({idFilme:req.query.idFilme})
            console.log('o seguinte id foi removido: ')
        }
        catch(e){
            console.log(e)
        }
    }
}