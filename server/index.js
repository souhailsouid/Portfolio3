const express = require('express')
const app = express()
const port = process.argv[2] || 8000



app.use(express.static('dist'))
app.use(express.json()) // for parsing application/json



// Start listening
app.listen(port)
