'use strict';

var express = require('express');
var router = express.Router();

var loginController = require('../controllers/loginController');
var goalController = require('../controllers/goalController');
var emotionController = require('../controllers/emotionController');
var workController = require('../controllers/workController');

//登录注册
router.post('/signup',  loginController.signup);
router.post('/login', loginController.login);
router.get('/logout', loginController.logout);
router.get('/isLogin', loginController.checkLogin);

//人生规划
router.get('/findGoal', goalController.findGoal)
router.post('/addGoal',  goalController.addGoal);
router.post('/deleteGoal',  goalController.deleteGoal);
router.post('/finishGoal',  goalController.finishGoal);

//情绪管理
router.post('/addEmotion', emotionController.addEmotion)

//工作管理
router.get('/findToDo', workController.findWork)
router.post('/addToDo',  workController.addWork);
router.post('/deleteToDo',  workController.deleteWork);
router.post('/finishToDo',  workController.finishWork);

exports.router = router;