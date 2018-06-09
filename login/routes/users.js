var express = require('express');
var router = express.Router();
var loginData = require('../model/users.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


//Sign In Router
router.post('/signin', function(req,res){
	var username = req.body.UserName;
	var password = req.body.Password;

	loginData.findOne({UserName : username , Password : password}, function(err, user){
		if(err){
			return res.status(500).send("Data Not Set for Credentials");
		}
		if(!user){
			return res.status(404).send("Data Not Found");
		}
		req.session.loginSession = user;
		return res.status(200).send("Login Credentials set")
	})
});

//Dashboard router
router.get('/dashboard', function(req,res){
	if(!req.session.loginSession){
		return res.status(401).send("Session Time Outss");
	}
	return res.status(200).send("Welcome to Secret Services");
})

//Registration router
router.post('/register', function(req,res){
	var data = new loginData();
	data.Name = req.body.Name;
	data.EmailID = req.body.EmailID;
	data.UserName = req.body.UserName;
	data.Password = req.body.Password;

	data.save(function(err, savedUser){
		if(err){
			console.log(err);
			return res.status(500).send("Data Not Set for Register");
		}
		return res.status(200).send("Data Inserted");
	})
});



module.exports = router;
