'use strict';

var path = require('path');

var goalLogic = require('../logics/goalLogic');

exports.addGoal = async function (req, res) {
    var goalname = req.fields.goalname;
    var goalreason = req.fields.goalreason;

    if(!goalname || !goalreason) {
        return res.status(400).send({ message: '缺少信息' });
    }

    var goal = {
        goalname: goalname,
        goalreason: goalreason
    };

    await goalLogic.addGoal(goal);
    var goals = await goalLogic.getAllGoal();
    var data = {};
    data.goals = goals;
    data.message = '添加成功';
    return res.status(200).send(data);
}