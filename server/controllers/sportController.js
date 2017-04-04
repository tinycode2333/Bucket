'use strict';

var path = require('path');

var sportLogic = require('../logics/sportLogic');

exports.findSport = async function (req, res) {
    var username = req.session.user.username;

    if(!username) {
        return res.status(400).send({ message: '请先登录' });
    }

    var sports = await sportLogic.getAllSport(username);
    var data = {};
    data.sports = sports;
    return res.status(200).send(data);
}

exports.addSport = async function (req, res) {
    var sportname = req.fields.sportname;
    var sportreason = req.fields.sportreason;
    var username = req.session.user.username;

    if(!username) {
        return res.status(400).send({ message: '请先登录' });
    }

    if(!sportname || !sportreason) {
        return res.status(400).send({ message: '缺少信息' });
    }

    var sport = {
        username: username,
        sportname: sportname,
        sportreason: sportreason
    };

    await sportLogic.addSport(sport);
    var sports = await sportLogic.getAllSport(username);
    var data = {};
    data.sports = sports;
    data.message = '添加成功';
    return res.status(200).send(data);
}

exports.deleteSport = async function (req, res) {
    var id = req.fields._id;
    var username = req.session.user.username;


    if(!id) {
        return res.status(400).send({ message: '缺少信息' });
    }

    await sportLogic.deleteSport(id);
    var sports = await sportLogic.getAllSport(username);
    var data = {};
    data.sports = sports;
    data.message = '删除成功';
    return res.status(200).send(data);
}

exports.finishSport = async function (req, res) {
    var id = req.fields._id;
    var username = req.session.user.username;

    if(!id) {
        return res.status(400).send({ message: '缺少信息' });
    }

    await sportLogic.finishSport(id);
    var sports = await sportLogic.getAllSport(username);
    var data = {};
    data.sports = sports;
    data.message = 'congratulation~';
    return res.status(200).send(data);
}