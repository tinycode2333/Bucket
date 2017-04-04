'use strict';

var mongoose = require('../lib/mongodb_helper').mongoose;

var schema = new mongoose.Schema({
  username: String,
  workname: String,
  isFinished: {type: Boolean, default: false}
});

var thisModel = mongoose.model('works', schema);

exports.addWork = async function (work) {
  await thisModel.createAsync(work);
};

exports.deleteWork = async function (id) {
  await thisModel.removeAsync({_id: id});
};

exports.finishWork = async function (id) {
  await thisModel.updateAsync({_id: id}, {isFinished: true});
};

exports.getAllWork = async function (username) {
  return await thisModel.findAsync({username: username});
};