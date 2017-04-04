'use strict';

var sportModel = require('../models/sportModel');

exports.addSport = async function (sport) {
    await sportModel.addSport(sport);
}

exports.deleteSport = async function (id) {
    await sportModel.deleteSport(id);
}

exports.finishSport = async function (id) {
    await sportModel.finishSport(id);
}

exports.getAllSport = async function (username) {
    return await sportModel.getAllSport(username);
}

