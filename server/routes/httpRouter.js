'use strict';

var express = require('express');
var router = express.Router();

var loginController = require('../controllers/loginController');

router.post('/signup',  loginController.signup);

exports.router = router;