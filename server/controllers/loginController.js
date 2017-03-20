'use strict';

var path = require('path');

var userLogic = require('../logics/userLogic');


exports.signup = async function (req, res) {
    var name = req.fields.name;
    console.log(req.fields);
    console.log(req.files);
    var avatar = req.files.avatar.path.split( path.sep ).pop();
    var password = req.fields.password;
    var password2 = req.fields.password2;

    if (password != password2) {
        return res.status(400).send({ message: '密码不一致' });
    }

    if (await userLogic.findUser(name)) {
        return res.status(400).send({ message: '该用户名已被注册' });
    }

    var userInfo = {
        username: name,
        password: password,
        avatar: avatar
    };

    await userLogic.addUser(userInfo);
    return res.status(200).send({ message: '注册成功' });
}