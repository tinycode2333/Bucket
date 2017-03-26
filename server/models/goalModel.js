'use strict';

var mongoose = require('../lib/mongodb_helper').mongoose;

var schema = new mongoose.Schema({
  username: String,
  goalname: String,
  goalreason: String
});

schema.index({username: 1}, {unique: true});

var thisModel = mongoose.model('goals', schema);

exports.addGoal = async function (goal) {
  await thisModel.createAsync(goal);
};

exports.getAllGoal = async function (username) {
  return await thisModel.findAsync({username: username});
};