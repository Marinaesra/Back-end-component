const express = require('express')
const { getAllProductsController } = require('../controllers/productController')

const router = express.Router()

router.get('/products', getAllProductsController)

module.exports = router