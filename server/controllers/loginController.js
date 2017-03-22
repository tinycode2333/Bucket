'use strict';

var path = require('path');

var userLogic = require('../logics/userLogic');


exports.signup = async function (req, res) {
    var name = req.fields.name;
    var avatar = req.files.avatar.path.split( path.sep ).pop();
    var password = req.fields.password;
    var password2 = req.fields.password2;

    if (password != password2) {
        return res.status(400).send({ message: '密码不一致' });
    }

    if (await userLogic.findUser(name)) {
        return res.status(400).send({ message: '该用户名已被注册' });
    }

    var info = {
        username: name,
        password: password,
        avatar: avatar
    };

    await userLogic.addUser(info);
    return res.status(200).send({ message: '注册成功' });
}

exports.login = async function (req, res) {
    var name = req.fields.name;
    var password = req.fields.password;
    var user = await userLogic.findUserByLogin(name, password)
    if (!user) {
        return res.status(400).send({ message: '用户名或密码错误' });
    } else {
        delete user.password;
        req.session.user = user;
        return res.status(200).send({ message: '登录成功' });
    }
}

exports.checkLogin = async function (req, res) {
    if (req.session.user) {
        var data = {};
        data.user = await userLogic.findUser(req.session.user.username);
        data.user.password = undefined;
        data.isLogin = true;
    } else {
        var data = {};
        data.isLogin = false;
    }
    return res.status(200).send(data);
}

exports.logout =  function (req, res) {
    if (req.session.user) {
        req.session.user = undefined;
        return res.status(200).send({ message: '注销成功' });
    } else {
        return res.status(400).send({ message: '没有找到登录信息' });
    }
}