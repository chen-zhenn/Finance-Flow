const express = require('express')
const app = express()
const router = express.Router()

const {
    getExpense,
    getExpenseById,
    createExpense,
    updateExpense,
    deleteExpense
} = require('./controllers/expenseControllers')

//-Middleware
app.use(express.json())

//-Routes
app
.get('/api/v1/expenses', getExpense)
.get('/api/v1/expenses/:id', getExpenseById)
.post('/api/v1/expenses', createExpense)
.patch('/api/v1/expenses/:id', updateExpense)
.delete('/api/v1/expenses/:id', deleteExpense)

//Server
const port = 8000
app.listen(port, () => 
    console.log(`Server run on port ${port}`)
)