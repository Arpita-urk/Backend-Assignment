const express = require('express');
const router = express.Router();

const signup = require('../controllers/signup');
const signupMiddleware = require('../middleware/signupmiddleware');

router.post('/signup', signupMiddleware, signup);

module.exports = router;