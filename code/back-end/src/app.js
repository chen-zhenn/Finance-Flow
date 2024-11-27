const express = require('express')
const app = express()

const expenseRoutes = require('./routes/expenseRoutes') 

//-Middleware
app.use(express.json())
app.use('/api/v1/expenses', expenseRoutes)

//Server
const port = 8000
app.listen(port, () => 
    console.log(`Server run on port ${port}`)
)