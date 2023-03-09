const express = require('express')
const { getAllProducts, createProduct, updateProduct, deleteProduct } = require('../controllers/product.controller')

const router = express.Router()

// GET requests
router.get('/products', getAllProducts)

// POST requests
router.post('/product/new', createProduct)

// PUT and DELETE requests
router.route('/products/:id').put(updateProduct).delete(deleteProduct)

module.exports = router