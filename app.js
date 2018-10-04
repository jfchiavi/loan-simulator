var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var Loan = require('./public/javascripts/loan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loanRouter = require('./routes/loanRouterExample');


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/loan', loanRouter);

/*
	como consumir el calculo desde postman o desde el browser
	http://localhost:3000/loanparams/?amount=100000&installmentsNumber=12&interestRate=5&diminishing=false
*/
app.get('/loanparams', function(req, res, next) {
  	const query = req.query;
	var calculoIntereses = Loan(query.amount, query.installmentsNumber, query.interestRate, query.diminishing);
  	res.json(calculoIntereses);

});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
