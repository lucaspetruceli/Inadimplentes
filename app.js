var express = require('express');

var app = express();

var port = process.env.PORT || 1337;

var bodyParser = require('body-parser');

var db_string = 'mongodb://MongoLab:luc95as@ds064748.mlab.com:64748/MongoLab-w'

var mongoose = require('mongoose').connect(db_string);

var db = mongoose.connection;

var User;


db.on('error', console.error.bind(console, 'Erro ao conectar no banco'));

db.once('open', function() {
       
       var userSchema = mongoose.Schema({
           
           fullname: String,
           email: String,
           password: String,
           created_at: Date
           
       });
    User = mongoose.model('User', userSchema);
});

app.listen(port);

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({extended: true}));

app.get('/', function(req, res){
           
        res.end('Servidor ON!');
});

app.get('/users', function(req, res){
        
        User.find({}, function(error, users){

        if(error){           
            res.json({error: 'Nao foi possivel retornar os usuarios'});
        }
        else
        {         
                res.json(users);
        } 
        });
    
});

app.get('/users/:id', function(req, res){
        
        var id = req.param('id');

        User.findById(id, function(error, user){

        if(error){           
            res.json({error: 'Nao foi possivel retornar o usuario'});
        }
        else
        {         
                res.json(user);
        } 
        });
    
});

app.post('/users', function(req, res){
        
    
var fullname = req.param('fullname');
var email = req.param('email');
var password = req.param('password');


 new User({
    'fullname': fullname,
    'email': email,
    'password': password,
    'created_at': new Date()

    }).save(function(error, user){
    
    if(error){
        
      res.json({error: 'Nao foi possivel salver o usuario'});
    }
    else
    {
      res.json(user);
    }    
    });
});

app.put('/users', function(req, res){      
  var id = req.param('id');
  var fullname = req.param('fullname');
  var email = req.param('email');
  var password = req.param('password');

  User.findById(id, function(error, user){
    if(fullname){
      user.fullname = fullname;
    }
    if(email){  
      user.email = email;
    }
    if(password){
        
        user.password = password;
    }

    user.save(function(error,user) {
        if(error){
            res.json({error: 'Nao foi possivel salver o usuario'});
        }
        else
        {
            res.json(user);
        }

    });

  });
});


app.delete('/users/:id', function(req, res){
        
        var id = req.param('id');

        User.findById(id, function(error, user){

        if(error){           
            res.json({error: 'Nao foi possivel retornar o usuario'});
        }
        else
        {         
                user.remove(function(error){

                  if(!error){

                    res.json({response: 'Usuario excluido com sucesso'})
                  }

                })
        } 
        });
});