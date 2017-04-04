'use strict';

var path = require('path');

var foodLogic = require('../logics/foodLogic');

exports.findFood = async function (req, res) {
    var username = req.session.user.username;

    if(!username) {
        return res.status(400).send({ message: '请先登录' });
    }

    var foods = await foodLogic.getAllFood(username);
    var data = {};
    data.foods = foods;
    return res.status(200).send(data);
}

exports.addFood = async function (req, res) {
    var foodname = req.fields.foodname;
    var foodreason = req.fields.foodreason;
    var username = req.session.user.username;

    if(!username) {
        return res.status(400).send({ message: '请先登录' });
    }

    if(!foodname || !foodreason) {
        return res.status(400).send({ message: '缺少信息' });
    }

    var food = {
        username: username,
        foodname: foodname,
        foodreason: foodreason
    };

    await foodLogic.addFood(food);
    var foods = await foodLogic.getAllFood(username);
    var data = {};
    data.foods = foods;
    data.message = '添加成功';
    return res.status(200).send(data);
}

exports.deleteFood = async function (req, res) {
    var id = req.fields._id;
    var username = req.session.user.username;


    if(!id) {
        return res.status(400).send({ message: '缺少信息' });
    }

    await foodLogic.deleteFood(id);
    var foods = await foodLogic.getAllFood(username);
    var data = {};
    data.foods = foods;
    data.message = '删除成功';
    return res.status(200).send(data);
}

exports.finishFood = async function (req, res) {
    var id = req.fields._id;
    var username = req.session.user.username;

    if(!id) {
        return res.status(400).send({ message: '缺少信息' });
    }

    await foodLogic.finishFood(id);
    var foods = await foodLogic.getAllFood(username);
    var data = {};
    data.foods = foods;
    data.message = 'congratulation~';
    return res.status(200).send(data);
}