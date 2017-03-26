'use strict';

var mongoose = require('../lib/mongodb_helper').mongoose;

var schema = new mongoose.Schema({
  username: String,
  goalname: String,
  goalreason: String,
  isFinished: {type: Boolean, default: false}
});

var thisModel = mongoose.model('goals', schema);

exports.addGoal = async function (goal) {
  await thisModel.createAsync(goal);
};

exports.deleteGoal = async function (id) {
  await thisModel.removeAsync({_id: id});
};

exports.finishGoal = async function (id) {
  await thisModel.updateAsync({_id: id}, {isFinished: true});
};

exports.getAllGoal = async function (username) {
  return await thisModel.findAsync({username: username});
};