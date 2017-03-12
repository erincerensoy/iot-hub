var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(require('./controllers'));

app.listen('9000', function(){
console.log("server listening");
});
