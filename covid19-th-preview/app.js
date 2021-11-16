var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const es6Renderer = require('express-es6-template-engine');

var homeRouter = require('./routes/index');
var CountryDaily = require('./routes/R_CountryDaily');
var Country12 = require('./routes/R_Country12');
var Country3 = require('./routes/R_Country3');
var InformDaily = require('./routes/R_InformDaily');
var Inform12 = require('./routes/R_Inform12');
var Inform3 = require('./routes/R_Inform3');
var SumDaily = require('./routes/R_SumDaily');
var SumDailyV2 = require('./routes/R_SumDailyV2');
var Sum12 = require('./routes/R_Sum12');
var Sum3 = require('./routes/R_Sum3');

var app = express();

// view engine setup
app.engine('html', es6Renderer);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', homeRouter);
app.use('/CountryDaily', CountryDaily);
app.use('/Country12', Country12);
app.use('/Country3', Country3);
app.use('/InformDaily', InformDaily);
app.use('/Inform12', Inform12);
app.use('/Inform3', Inform3);
app.use('/SumDaily', SumDaily);
app.use('/SumDailyV2', SumDailyV2);
app.use('/Sum12', Sum12);
app.use('/Sum3', Sum3);

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
