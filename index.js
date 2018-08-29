const express = require('express')
const mongoose = require('mongoose')

// Load .env variables into environment
require('dotenv').config()

// Configure database 
mongoose.connect(process.env.DATABASE)
mongoose.Promise = global.Promise
mongoose.connection.on('error', (err) => console.error(`DB connection error: ${err.message}`))

const app = express()

const port = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`App listening on port ${port}`))