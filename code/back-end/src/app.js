const express = require('express')
const app = express()

const expenseRoutes = require('./routes/expenseRoutes')
const categoryRoutes = require('./routes/categoryRoutes') 

//-Middlewares
app.use(express.json())
app.use('/api/v1/expenses', expenseRoutes)
app.use('/api/v1/categories', categoryRoutes)

module.exports = app
