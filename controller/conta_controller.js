var db = require('../db_config.js');

exports.listAdmin = function(idadmin,callback){

        db.Conta.find({'idadmin':idadmin}, function (error, contas){
          if(error){           
              callback({error: 'Nao foi possivel retornar as contas'});
          }
          else
          {         
              callback(contas);
          } 
        });

};
exports.listUser = function(iduser,callback){

        db.Conta.find({'iduser':iduser}, function (error, contas){
          if(error){           
              callback({error: 'Nao foi possivel retornar as contas'});
          }
          else
          {         
              callback(contas);
          } 
        });

};

exports.conta = function(id, callback){

        db.Conta.findById(id, function (error, conta){

        if(error){           
            callback({error: 'Nao foi possivel retornar a conta'});
        }
        else
        {         
            callback(conta);
        } 
    });
};

exports.save = function(descricao, valortotal, status, iduser, idadmin, callback){

	   new db.Conta({
      'descricao': descricao,
      'valortotal': valortotal,
      'status': status,
      'iduser': iduser,
      'created_at': new Date(),
      'idadmin': idadmin

      }).save(function(error, conta){
      
      if(error){
          
        callback({error: 'Nao foi possivel salvar a conta'});
      }
      else
      {
        callback(conta);
      }    
      });

};

exports.update = function(id, descricao, valortotal, status, iduser, idadmin, callback){

    db.Conta.findById(id, function (error, conta){
    if(descricao){
      conta.descricao = descricao;
    }
    if(valortotal){  
      conta.valortotal = valortotal;
    }
    if(status){
        conta.status = status;
    }
      if(iduser){
      conta.iduser = iduser;
    }
      if(idadmin){
      conta.idadmin = idadmin;
    }

    conta.save(function (error,conta) {
        if(error){
            callback({error: 'Nao foi possivel atualizar a conta'});
        }
        else
        {
            callback(conta);
        }

    });

  });

};

exports.delete = function(id, idadmin, callback){


    db.Conta.findById(id, function (error, conta){

      if(error){           
          callback({error: 'Nao foi possivel retornar a conta'});
      }
      else
      { 
        conta.remove(function (error){

        if(!error){
            callback({response: 'Conta excluida com sucesso'})
          }

        })
      } 
    });

};