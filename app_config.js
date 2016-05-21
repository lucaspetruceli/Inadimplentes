var express = require('express');
var app = module.exports = express();
var bodyParser = require('body-parser');
var allowCors = function (req,res,next){
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	res.header('Access-Control-Allow-Credentials', 'true');
	next();
}
var port = process.env.PORT || 1337;
//var port = process.env.PORT || 1337;
app.listen(port);
app.use(allowCors);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));