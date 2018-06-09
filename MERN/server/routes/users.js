var express = require('express');
var router = express.Router();
var loginData = require('../model/LoginSchema.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/register', function(req,res){
	
	var data = new loginData();
	data.Name = req.body.Name;
	data.EmailID = req.body.EmailID;
	data.username = req.body.username;
	data.Password = req.body.Password;


	/*var newUser = new User();
	newUser.Name = Name;
	newUser.EmailID = EmailID;
	newUser.username = username;
	newUser.Password = Password;*/

	data.save(function(err, savdUser){
		if(err){
			console.log(err);
			return res.status(500).send();
		}

		return res.status(200).send();
	})
});
module.exports = router;


