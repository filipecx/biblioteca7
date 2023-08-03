module.exports = {
    pegaFilmes : async (req, res) => {
        try{
            //const response = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`)           
                const response = await fetch(`http://www.omdbapi.com/?s=Batman&page=2&apikey=89398835`)
                const data = await response.json()               
                res.json(data)
            //const movies = data.results.map((movie) => {
            //    return movie
            //})
           
        }catch(error){
            console.log(error)
        }
        
    }
}