const mongoose = require('mongoose')

const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.DB_STRING, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log(`Banco de dados conectado: ${conn.connection.host}`)
    }
    catch(e){
        console.log(e)
    }
}

module.exports = connectDB