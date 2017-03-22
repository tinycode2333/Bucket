'use strict';

var mongoose = require('../lib/mongodb_helper').mongoose;

var schema = new mongoose.Schema({
  goalname: String,
  goalreason: String
});

schema.index({username: 1}, {unique: true});

var thisModel = mongoose.model('goals', schema);

exports.addGoal = async function (goal) {
  await thisModel.createAsync(goal);
};

exports.getAllGoal = async function () {
  await thisModel.createAsync(goal);
};