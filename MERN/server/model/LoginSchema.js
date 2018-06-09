var mongoose=require('mongoose');

var Schema = mongoose.Schema;

var login = new Schema({
	Name : String,
	EmailID : String,
	username : String,
	Password : String
});


module.export = mongoose.model('login',login);