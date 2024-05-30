const express = require('express');
const router = express.Router();
const { login } = require('../controllers/AccountController');

router.post('/login', login);

module.exports = router;
