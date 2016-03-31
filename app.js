var app = require('./app_config.js');

var user_controller = require('./controller/user_controller.js');

var validator = require('validator');

app.get('/', function(req, res){   
  res.end('Servidor ON!');
});

app.get('/users', function(req, res){
        
  user_controller.list(function(resp){
    res.json(resp);
  });

});

app.get('/users/:id', function(req, res){
        
  var id = validator.trim(validator.escape(req.param('id')));

  user_controller.user(id, function(resp){
    res.json(resp);
  });
    
});

app.post('/users', function(req, res){
        
  var fullname = validator.trim(validator.escape(req.param('fullname')));
  var email = validator.trim(validator.escape(req.param('email')));
  var password = validator.trim(validator.escape(req.param('password')));


  user_controller.save(fullname,email,password, function(resp){
    res.json(resp);
  });

});

app.put('/users', function(req, res){  

  var id = validator.trim(validator.escape(req.param('id')));
  var fullname = validator.trim(validator.escape(req.param('fullname')));
  var email = validator.trim(validator.escape(req.param('email')));
  var password = validator.trim(validator.escape(req.param('password')));

  user_controller.update(id, fullname, email, password, function(resp){
      res.json(resp);
  });

});


app.delete('/users/:id', function(req, res){
        
  var id = validator.trim(validator.escape(req.param('id')));

  user_controller.delete(id, function(resp){
    res.json(resp);
  });

});