'use strict';

var Promise = require('bluebird');
var config = require('../../config/default');
var mongoose = Promise.promisifyAll(require('mongoose'));

var exports = {};

mongoose.connect(config.mongodb);

exports.mongoose = mongoose;


module.exports = exports;
