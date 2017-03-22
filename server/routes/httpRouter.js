'use strict';

var express = require('express');
var router = express.Router();

var loginController = require('../controllers/loginController');
var goalController = require('../controllers/goalController');

//登录注册
router.post('/signup',  loginController.signup);
router.post('/login', loginController.login);
router.get('/logout', loginController.logout);
router.get('/isLogin', loginController.checkLogin);

//人生规划
router.post('/addGoal',  goalController.addGoal);

exports.router = router;