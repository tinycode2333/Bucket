'use strict';

var goalModel = require('../models/goalModel');

exports.addGoal = async function (goal) {
    await goalModel.addGoal(goal);
}

exports.getAllGoal = async function (username) {
    await goalModel.getAllGoal(username);
}

