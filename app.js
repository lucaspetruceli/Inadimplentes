var express = require('express');

var app = express();

var port = process.env.PORT || 1337;

app.listen(port);

app.get('/', Function(req, res){
        
        res.end('Servidor ON!');
});