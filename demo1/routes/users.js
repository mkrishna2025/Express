var express = require('express');
var router = express.Router();
var multer = require('multer');
var upload = multer();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/', upload.fields([]), function(req, res, next) {
	console.log(req.body);
	console.log(req.query);
	let formData = req.body;
	console.log('form data', formData);
	if(req.body.userName == 'Krishna'){
		res.send({state: 'success', user: { name: 'Arjun Krishna'}});
	} else {
		res.send({state: 'failure',user:null,message:"Invalid User"});
	}
});

module.exports = router;
