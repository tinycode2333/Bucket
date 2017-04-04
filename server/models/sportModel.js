'use strict';

var mongoose = require('../lib/mongodb_helper').mongoose;

var schema = new mongoose.Schema({
  username: String,
  sportname: String,
  sportreason: String,
  isFinished: {type: Boolean, default: false}
});

var thisModel = mongoose.model('sports', schema);

exports.addSport = async function (sport) {
  await thisModel.createAsync(sport);
};

exports.deleteSport = async function (id) {
  await thisModel.removeAsync({_id: id});
};

exports.finishSport = async function (id) {
  await thisModel.updateAsync({_id: id}, {isFinished: true});
};

exports.getAllSport = async function (username) {
  return await thisModel.findAsync({username: username});
};