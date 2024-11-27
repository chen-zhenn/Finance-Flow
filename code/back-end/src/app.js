const express = require('express')
const app = express()
const router = express.Router()

//-Middleware
app.use(express.json())

//-Routes
app
.get('/api/v1/expenses', (req, res) => {
    console.log('Listar de despesas...')
})
.get('/api/v1/expenses/:id', (req, res) => {
    console.log(`Lista despesas por ${req.params.id}`)
})
.post('/api/v1/expenses', (req, res) => {
    console.log('Cadastrar despesas...')
    const expenseData = req.body
    console.log(expenseData)
})
.patch('/api/v1/expenses/:id', (req, res) => {
    console.log(`Atualizar despesa -> ${req.params.id}`)
    const expenseData = req.body
    console.log(expenseData)
})
.delete('/api/v1/expenses/:id', (req, res) => {
    console.log(`Deletar despesa -> ${req.params.id}`)
})

//Server
const port = 8000
app.listen(port, () => 
    console.log(`Server run on port ${port}`)
)