const express = require('express');

const router = express.Router();

const authController = require('../controllers/AuthenticationController');
const { isAuth } = require('../utils/GenerateToken');

router.post('/register', authController.register);
router.post('/login', authController.login);
router.get('/:id', authController.findById);
router.put('/update/:userId', isAuth, authController.updated);


module.exports = router;
