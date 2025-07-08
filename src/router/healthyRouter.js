const express = require('express')
const { healthyCheck } = require('../controllers/healthyControllers')


const router = express.Router()


router.get('/', healthyCheck)

module.exports = router