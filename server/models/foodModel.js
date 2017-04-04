'use strict';

var mongoose = require('../lib/mongodb_helper').mongoose;

var schema = new mongoose.Schema({
  username: String,
  foodname: String,
  foodreason: String,
  isFinished: {type: Boolean, default: false}
});

var thisModel = mongoose.model('foods', schema);

exports.addFood = async function (food) {
  await thisModel.createAsync(food);
};

exports.deleteFood = async function (id) {
  await thisModel.removeAsync({_id: id});
};

exports.finishFood = async function (id) {
  await thisModel.updateAsync({_id: id}, {isFinished: true});
};

exports.getAllFood = async function (username) {
  return await thisModel.findAsync({username: username});
};