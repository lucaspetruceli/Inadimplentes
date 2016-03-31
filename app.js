var express = require('express');

var app = express();

var port = process.env.PORT || 1337;

var bodyParser = require('body-parser');

app.listen(port);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){
        
        res.end('Servidor ON!');
});

app.get('/users', function(req, res){
        
    res.json([
        {name: 'Joao'},
        {name: 'Felipe'}
    ]);
    
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