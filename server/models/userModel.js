'use strict';

var mongoose = require('../lib/mongodb_helper').mongoose;

var schema = new mongoose.Schema({
  username: String,
  password: String,
  avatar: {type: String, default: null}
});

schema.index({username: 1}, {unique: true});

var thisModel = mongoose.model('user', schema);

exports.addUser = async function (info) {
  await thisModel.createAsync(info);
};

exports.findUser = async function (username) {
  return await  thisModel.findOneAsync({username: username});
}

exports.findUserByLogin = async function (username, password) {
  return await  thisModel.findOneAsync({username: username, password: password});
}