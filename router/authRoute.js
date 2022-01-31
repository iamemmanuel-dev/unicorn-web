const { Router } = require('express')
const authController = require('../controllers/authController')
const router = Router()

router.post('/signup', authController.signup)
router.post('/login', authController.login)
router.post('/configUser', authController.configUser)
router.get('/authstate', authController.getAuthState)

module.exports = router
