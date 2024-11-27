const dotenv = require('dotenv')
dotenv.config({ path: '.env' })
const mongoose = require('mongoose')
const app  = require('./app')

//-Database
const DB_CONN = process.env.DB_LOCAL_CONN
mongoose
.connect(DB_CONN)
.then(conn => console.log('Conexão com banco realizado com sucesso!'))
.catch(err => console.log('Erro ao conectar com Banco de Dados'))

//-Server
const port = 8000
app.listen(port, () => 
    console.log(`Server run on port ${port}`)
)