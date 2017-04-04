'use strict';

var path = require('path');

var workLogic = require('../logics/workLogic');

exports.findWork = async function (req, res) {
    var username = req.session.user.username;

    if(!username) {
        return res.status(400).send({ message: '请先登录' });
    }

    var works = await workLogic.getAllWork(username);
    var data = {};
    data.works = works;
    return res.status(200).send(data);
}

exports.addWork = async function (req, res) {
    var workname = req.fields.workname;
    var username = req.session.user.username;

    if(!username) {
        return res.status(400).send({ message: '请先登录' });
    }

    if(!workname) {
        return res.status(400).send({ message: '缺少信息' });
    }

    var work = {
        username: username,
        workname: workname
    };

    await workLogic.addWork(work);
    var works = await workLogic.getAllWork(username);
    var data = {};
    data.works = works;
    data.message = '添加成功';
    return res.status(200).send(data);
}

exports.deleteWork = async function (req, res) {
    var id = req.fields._id;
    var username = req.session.user.username;


    if(!id) {
        return res.status(400).send({ message: '缺少信息' });
    }

    await workLogic.deleteWork(id);
    var works = await workLogic.getAllWork(username);
    var data = {};
    data.works = works;
    data.message = '删除成功';
    return res.status(200).send(data);
}

exports.finishWork = async function (req, res) {
    var id = req.fields._id;
    var username = req.session.user.username;

    if(!id) {
        return res.status(400).send({ message: '缺少信息' });
    }

    await workLogic.finishWork(id);
    var works = await workLogic.getAllWork(username);
    var data = {};
    data.works = works;
    data.message = 'congratulation~';
    return res.status(200).send(data);
}