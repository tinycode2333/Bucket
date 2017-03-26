'use strict';

var path = require('path');

var emotionLogic = require('../logics/emotionLogic');


exports.addEmotion = async function (req, res) {
    var emotionname = req.fields.emotionname;
    var emotionreason = req.fields.emotionreason;
    var username = req.session.user.username;

    if(!username) {
        return res.status(400).send({ message: '请先登录' });
    }

    if(!emotionname || !emotionreason) {
        return res.status(400).send({ message: '缺少信息' });
    }

    var emotion = {
        username: username,
        emotionname: emotionname,
        emotionreason: emotionreason
    };

    await emotionLogic.addEmotion(emotion);
    return res.status(200).send({ message: '添加成功' });
}
