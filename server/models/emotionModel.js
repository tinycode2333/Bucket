'use strict';

var mongoose = require('../lib/mongodb_helper').mongoose;

var schema = new mongoose.Schema({
  username: String,
  emotionname: String,
  emotionreason: String
});

var thisModel = mongoose.model('emotions', schema);

exports.addEmotion = async function (emotion) {
  await thisModel.createAsync(emotion);
};