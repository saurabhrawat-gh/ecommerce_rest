const express = require('express')
const { getAllProducts } = require('../models/product.model')

const router = express.Router()

router.get('/products', getAllProducts)

module.exports = router