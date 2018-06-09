var express = require('express');
var router = express.Router();
var movies = require('../model/movieschema.js');


/* GET home page. */
router.post('/app', function(req, res) {
  var data = new movies();
  data.Title = req.body.Title;
  data.Year = req.body.Year;
  data.imdbID = req.body.imdbID;
  data.Type = req.body.Type;


  data.save(function(error){
  	if(error){
  		console.log("error",error);
  	}
  	else{
  		res.send("successful");
  	}
  });
});

router.get('/view',function(req,res){
	movies.find({}, function(err, info){
		if(err){
			res.send(error);
		}else{
			res.send(info);
		}

	});
});

module.exports = router;


