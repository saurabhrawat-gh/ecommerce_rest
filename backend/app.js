const express = require('express')

const productRoute = require('./routes/product.route.js')
const errorMiddleWare = require('./middleware/error')

const app = express()

app.use(express.json())

app.use('/api/v1', productRoute)

// Middleware for Errors
app.use(errorMiddleWare)


module.exports = app