const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users');
const config = require('../../config/checkToken')

// All paths start with '/api/users'

// POST /api/users (create a user - sign up)
router.post('/register', usersCtrl.create);
// POST /api/users/login
router.post('/login', usersCtrl.login);
//POST /api/users/check-token
router.post('/check-token', usersCtrl.checkToken);

module.exports = router;