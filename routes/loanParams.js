
var express = require('express');
var router = express.Router();

var Loan = require('../public/javascripts/loan');

/* GET users listing. */
router.get('/loanparams', function(req, res) {
	console.log('id: ' + req.query.id);
  var queryStuff = JSON.stringify(req.query);
  
	/*var calculoIntereses = Loan(100000, 24, 5, true);*/
  console.log(queryStuff)
});

module.exports = router;

/*
router.get('/api/choice', function (req, res) {
  console.log('id: ' + req.query.id);
  //get the whole query as!
  var queryStuff = JSON.stringify(req.query);
  console.log(queryStuff)
});
*/