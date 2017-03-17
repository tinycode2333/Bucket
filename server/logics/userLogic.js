'use strict';

var userModel = require('../models/userModel');

exports.findUser = async function (username) {
    var user = await userModel.findUser(username);
    return user ? true : false ;
}

exports.addUser = async function (userInfo) {
    await userModel.addUser(userInfo);
}