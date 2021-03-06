var app = require('./app_config.js');

var user_controller = require('./controller/user_controller.js');

var conta_controller = require('./controller/conta_controller.js');

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
  var tipoUsu = validator.trim(validator.escape(req.param('tipoUsu')));


  user_controller.save(fullname,email,password, tipoUsu, function(resp){
    res.json(resp);
  });

});

app.post('/users/login', function(req, res){        
  var email = validator.trim(validator.escape(req.body.email.toString()));
  var password = validator.trim(validator.escape(req.body.password.toString()));

  user_controller.validate(email,password,function(resp){
    res.json(resp);
  });

});

app.put('/users', function(req, res){  

  var id = validator.trim(validator.escape(req.param('id')));
  var fullname = validator.trim(validator.escape(req.param('fullname')));
  var email = validator.trim(validator.escape(req.param('email')));
  var password = validator.trim(validator.escape(req.param('password')));
  var tipoUsu = validator.trim(validator.escape(req.param('tipoUsu')));

  user_controller.update(id, fullname, email, password, tipoUsu, function(resp){
      res.json(resp);
  });

});


app.delete('/users/:id', function(req, res){
        
  var id = validator.trim(validator.escape(req.param('id')));

  user_controller.delete(id, function(resp){
    res.json(resp);
  });

});













app.get('/contas/admin/:idadmin', function(req, res){
  var idadmin = validator.trim(validator.escape(req.param('idadmin')));
  conta_controller.listAdmin(idadmin,function(resp){
    res.json(resp);
  });
});

app.get('/contas/user/:iduser', function(req, res){
  var iduser = validator.trim(validator.escape(req.param('iduser')));
  conta_controller.listUser(iduser,function(resp){
    res.json(resp);
  });
});

app.get('/contas/:id', function(req, res){
        
  var id = validator.trim(validator.escape(req.param('id')));

  conta_controller.conta(id, function(resp){
    res.json(resp);
  });
    
});

app.post('/contas', function(req, res){
        
  var descricao = validator.trim(validator.escape(req.param('descricao')));
  var valortotal = validator.trim(validator.escape(req.param('valortotal')));
  var status = validator.trim(validator.escape(req.param('status')));
  var iduser = validator.trim(validator.escape(req.param('iduser')));
  var idadmin = validator.trim(validator.escape(req.param('idadmin')));

  conta_controller.save(descricao,valortotal,status,iduser,idadmin, function(resp){
    res.json(resp);
  });

});

app.put('/contas', function(req, res){  

  var id = validator.trim(validator.escape(req.param('id')));
  var descricao = validator.trim(validator.escape(req.param('descricao')));
  var valortotal = validator.trim(validator.escape(req.param('valortotal')));
  var status = validator.trim(validator.escape(req.param('status')));
  var iduser = validator.trim(validator.escape(req.param('iduser')));
  var idadmin = validator.trim(validator.escape(req.param('idadmin')));

  conta_controller.update(id, descricao,valortotal,status,iduser,idadmin, function(resp){
      res.json(resp);
  });

});


app.delete('/contas/:id', function(req, res){
        
  var id = validator.trim(validator.escape(req.param('id')));
  var idadmin = validator.trim(validator.escape(req.param('idadmin')));

  conta_controller.delete(id, idadmin, function(resp){
    res.json(resp);
  });

});