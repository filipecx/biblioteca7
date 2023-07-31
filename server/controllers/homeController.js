module.exports = {
    pegaFilmes : async (req, res) => {
        try{
            const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`)
            const data = await response.json()
            const movies = data.results.map((movie) => {
                return movie.original_title
            })
            res.json(movies)
        }catch(error){
            console.log(error)
        }
        
    }
}