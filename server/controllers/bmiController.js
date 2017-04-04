'use strict';

var path = require('path');

var userLogic = require('../logics/userLogic');

exports.findBMI = async function (req, res) {
    var username = req.session.user.username;

    if(!username) {
        return res.status(400).send({ message: '请先登录' });
    }

    var bmi = await userLogic.findUser(username);
    var data = {};
    data.height = bmi.height;
    data.weight = bmi.weight;
    return res.status(200).send(data);
}


exports.updateBMI = async function (req, res) {
    var height = req.fields.height;
    var weight = req.fields.weight;
    var username = req.session.user.username;

    if(!username) {
        return res.status(400).send({ message: '请先登录' });
    }

    if(!height || !weight) {
        return res.status(400).send({ message: '缺少信息' });
    }

    await userLogic.updateBMI(height, weight, username);
    var data = {};
    data.message = 'congratulation~';
    return res.status(200).send(data);
}