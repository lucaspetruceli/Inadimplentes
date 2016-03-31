var express = require('express');

var app = module.exports = express();

var bodyParser = require('body-parser');

var port = process.env.PORT || 1337;

app.listen(port);

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));