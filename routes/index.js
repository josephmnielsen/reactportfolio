const router = require('express').Router()

router.use('/api', require('./feedbackRoutes.js'))


module.exports = router
