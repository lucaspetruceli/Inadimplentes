var express = require('express');

var app = express();

var port = process.env.PORT || 1337;

app.listen(port);

app.get('/', function(req, res){
        
        res.end('Servidor ON!');
});

app.get('/users', function(req, res){
        
    
    
});

app.get('/users/:id', function(req, res){
        
        
});

app.post('/users', function(req, res){
        
    res.end('post users')
});

app.put('/users', function(req, res){
        
    res.end('put user')
});

app.delete('/users/:id', function(req, res){
        
    res.end('delete user')
});