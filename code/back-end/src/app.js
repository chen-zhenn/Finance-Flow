const express = require('express')
const app = express()
const router = express.Router()

//Server
const port = 8000
app.listen(port, () => 
    console.log(`Server run on port ${port}`)
)