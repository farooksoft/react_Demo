var mongoose = require ('mongoose');
var schema =  mongoose.Schema;

var login = new schema({
	Name : String,
	EmailID : String,
	UserName : String,
	Password : String
});

module.exports = mongoose.model('login', login);