'use strict';

var goalModel = require('../models/goalModel');

exports.addGoal = async function (goal) {
    await goalModel.addGoal(goal);
}

exports.getAllGoal = async function (username) {
    return await goalModel.getAllGoal(username);
}

