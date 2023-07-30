const express = require('express')
const cors = require('cors')
const app = express()
const PORT = 3000



const homeRoutes = require('./routes/homeRoutes')
const filmesRoutes = require('./routes/filmesRoutes')

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

app.use('/', homeRoutes)
app.use('/filmes', filmesRoutes)


app.listen(PORT, () => {
    console.log('Biblioteca 7 rodando')
})