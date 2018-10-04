var express = require('express');
var router = express.Router();

var Loan = require('../public/javascripts/loan');

/* GET users listing. */
router.get('/', function(req, res, next) {
	var calculoIntereses = Loan(100000, 24, 5, true);
  res.send(calculoIntereses);
});

module.exports = router;