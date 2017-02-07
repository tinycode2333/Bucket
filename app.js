var express = require('express');
var path = require('path');
var logger = require('morgan');

var app = express();
console.log(process.env.NODE_ENV);
app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));
app.use(express.static(path.join(__dirname, 'build')));

app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + app.get('port'));
});