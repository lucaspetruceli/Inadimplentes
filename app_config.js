var express = require('express');

var app = module.exports = express();

var bodyParser = require('body-parser');

var port = process.env.PORT || 1337;

var allowCors = function(req, res, next){

	res.header('Acess-Control-Allow-Origin', '*');
	res.header('Acess-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
	res.header('Acess-Control-Allow-Headers', 'Content-Type');
	res.header('Acess-Control-Allow-Credentials', 'true');

	next();

}
app.listen(port);

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));