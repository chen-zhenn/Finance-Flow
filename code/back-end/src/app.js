const express = require('express')
const app = express()

const expenseRoutes = require('./routes/expenseRoutes') 

//-Middlewares
app.use(express.json())
app.use('/api/v1/expenses', expenseRoutes)

module.exports = app
