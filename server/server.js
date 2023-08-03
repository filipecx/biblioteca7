const express = require('express')
const cors = require('cors')
const connectDB = require('./config/database')
const mongoose = require('mongoose')
const app = express()
const PORT = 3000



const homeRoutes = require('./routes/homeRoutes')
const filmesRoutes = require('./routes/filmesRoutes')



app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())

require('dotenv').config({path: './config/.env'})

connectDB()

app.use('/', homeRoutes)
app.use('/filmes', filmesRoutes)


mongoose.connection.once('open', () => {
    app.listen(PORT, () => {
        console.log('Biblioteca 7 rodando')
    })
})

