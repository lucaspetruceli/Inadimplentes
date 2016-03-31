var express = require('express');

var app = express();

app.listen(5000);

app.get('/', Function(req, res){
        
        res.end('Servidor ON!');
});