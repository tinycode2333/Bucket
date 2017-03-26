'use strict';

var goalModel = require('../models/goalModel');

exports.addGoal = async function (goal) {
    await goalModel.addGoal(goal);
}

exports.deleteGoal = async function (id) {
    await goalModel.deleteGoal(id);
}

exports.finishGoal = async function (id) {
    await goalModel.finishGoal(id);
}

exports.getAllGoal = async function (username) {
    return await goalModel.getAllGoal(username);
}

