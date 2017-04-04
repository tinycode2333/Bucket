'use strict';

var foodModel = require('../models/foodModel');

exports.addFood = async function (food) {
    await foodModel.addFood(food);
}

exports.deleteFood = async function (id) {
    await foodModel.deleteFood(id);
}

exports.finishFood = async function (id) {
    await foodModel.finishFood(id);
}

exports.getAllFood = async function (username) {
    return await foodModel.getAllFood(username);
}

