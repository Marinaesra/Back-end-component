const express = require('express')
const { getAllProductsController } = require('../controllers/productController')

const router = express.Router()

router.get('/', getAllProductsController)

module.exports = router