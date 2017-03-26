'use strict';

var path = require('path');

var goalLogic = require('../logics/goalLogic');

exports.findGoal = async function (req, res) {
    var username = req.session.user.username;

    if(!username) {
        return res.status(400).send({ message: '请先登录' });
    }

    var goals = await goalLogic.getAllGoal(username);
    var data = {};
    data.goals = goals;
    return res.status(200).send(data);
}

exports.addGoal = async function (req, res) {
    var goalname = req.fields.goalname;
    var goalreason = req.fields.goalreason;
    var username = req.session.user.username;

    if(!username) {
        return res.status(400).send({ message: '请先登录' });
    }

    if(!goalname || !goalreason) {
        return res.status(400).send({ message: '缺少信息' });
    }

    var goal = {
        username: username,
        goalname: goalname,
        goalreason: goalreason
    };

    await goalLogic.addGoal(goal);
    var goals = await goalLogic.getAllGoal(username);
    var data = {};
    data.goals = goals;
    data.message = '添加成功';
    return res.status(200).send(data);
}

exports.deleteGoal = async function (req, res) {
    var id = req.fields._id;
    var username = req.session.user.username;


    if(!id) {
        return res.status(400).send({ message: '缺少信息' });
    }

    await goalLogic.deleteGoal(id);
    var goals = await goalLogic.getAllGoal(username);
    var data = {};
    data.goals = goals;
    data.message = '删除成功';
    return res.status(200).send(data);
}

exports.finishGoal = async function (req, res) {
    var id = req.fields._id;
    var username = req.session.user.username;

    if(!id) {
        return res.status(400).send({ message: '缺少信息' });
    }

    await goalLogic.finishGoal(id);
    var goals = await goalLogic.getAllGoal(username);
    var data = {};
    data.goals = goals;
    data.message = 'congratulation~';
    return res.status(200).send(data);
}