'use strict';

var path = require('path');

var goalLogic = require('../logics/goalLogic');

exports.addGoal = async function (req, res) {
    var goalname = req.fields.goalname;
    var goalreason = req.fields.goalreason;
    var username = req.session.user.username;

    console.log(username);
    console.log(goalreason);
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
    console.log(666);
    var goals = await goalLogic.getAllGoal(username);
    console.log("goals:::" + goals);
    var data = {};
    data.goals = goals;
    data.message = '添加成功';
    console.log(data);
    return res.status(200).send(data);
}