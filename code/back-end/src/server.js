const app  = require('./app')

//Server
const port = 8000
app.listen(port, () => 
    console.log(`Server run on port ${port}`)
)