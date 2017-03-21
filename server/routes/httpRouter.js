'use strict';

var express = require('express');
var router = express.Router();

var loginController = require('../controllers/loginController');

router.post('/signup',  loginController.signup);
router.post('/login', loginController.login);
router.get('/isLogin', loginController.checkLogin);

exports.router = router;