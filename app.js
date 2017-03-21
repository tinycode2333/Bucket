'use strict';

var express = require('express');
var path = require('path');
var config = require('./config/default')
var logger = require('morgan');
var httpRouter = require('./server/routes/httpRouter');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);

var app = express();
console.log(process.env.NODE_ENV);
app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));

app.use(express.static(path.join(__dirname, 'build')));

app.use(session({
    name: config.session.key,
    secret: config.session.secret,
    cookie: {
        maxAge: config.session.maxAge
    },
    store: new MongoStore({
        url: config.mongodb
    })
}));

app.use(require('express-formidable')({
    uploadDir: path.join(__dirname, 'build/avatar'),
    keepExtensions: true
}));
app.use('/api', httpRouter.router);

app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});