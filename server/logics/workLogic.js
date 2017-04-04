'use strict';

var workModel = require('../models/workModel');

exports.addWork = async function (work) {
    await workModel.addWork(work);
}

exports.deleteWork = async function (id) {
    await workModel.deleteWork(id);
}

exports.finishWork = async function (id) {
    await workModel.finishWork(id);
}

exports.getAllWork = async function (username) {
    return await workModel.getAllWork(username);
}
