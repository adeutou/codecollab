const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Route for user sign-up
router.post('/signup', authController.signup);

// Route for user sign-in
router.post('/signin', authController.signin);

module.exports = router;
