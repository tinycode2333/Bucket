'use strict';

var userModel = require('../models/userModel');

exports.findUser = async function (username) {
    var user = await userModel.findUser(username);
    return user;
}

exports.addUser = async function (userInfo) {
    await userModel.addUser(userInfo);
}

exports.findUserByLogin = async function (username, password) {
    var user = await userModel.findUserByLogin(username, password);
    return user;
}

exports.updateBMI = async function (height, weight, username) {
    await userModel.updateBMI(height, weight, username);
}