const express = require('express')
const app = express()
require('dotenv').config({path: 'variables.env'})
 
const port = process.env.PORT || 3000;

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`App listening on port ${port}`))