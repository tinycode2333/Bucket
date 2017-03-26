'use strict';

var emotionModel = require('../models/emotionModel');

exports.addEmotion = async function (emotion) {
    await emotionModel.addEmotion(emotion);
}
