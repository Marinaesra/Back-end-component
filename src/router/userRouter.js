const express = require('express')
const { getUserController } = require('../controllers/userController')

const router = express.Router()

router.get('/:id', getUserController)

module.exports = router