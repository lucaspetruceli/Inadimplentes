var db_string = 'mongodb://MongoLab:luc95as@ds064748.mlab.com:64748/MongoLab-w'

var mongoose = require('mongoose').connect(db_string);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'Erro ao conectar no banco'));

db.once('open', function() {
       
       var userSchema = mongoose.Schema({
           
           fullname: String,
           email: String,
           password: String,
           created_at: Date
           
       });
    exports.User = mongoose.model('User', userSchema);
});
