const express = require('express')
const router = express.Router()
const { loginUser, registerUser, getMyData, verifyUser } = require('../controllers/userController')
const { protect } = require('../middleware/authMiddleware')

router.post('/', registerUser)
router.put('/:id', verifyUser)
router.post('/login', loginUser)
router.post('/account', protect, getMyData)

module.exports = router