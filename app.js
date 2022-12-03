var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const i18n = require('./lib/i18nConfigure')
const LoginController = require('./routes/loginController');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html'); // usa un motor de vista custom, llamado 'html'
app.engine('html', require('ejs').__express) // ese motor usa ejs

app.locals.title = 'Nodepop';

require('./lib/connectMongoose.js');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// API Route

app.use('/api/products', require('./routes/api/products'));

// Setup i18n

app.use(i18n.init);

// Website route
const loginController = new LoginController();

app.use('/',       require('./routes/index'));
app.use('/change-locale', require('./routes/change-locale'));
app.use('/login',       loginController.index);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {

  // Validation error check

  if (err.array) {
    err.status = 422; // validation error
    const errorInfo = err.array({ onlyFirstError: true })[0];
    console.log(errorInfo);
    err.message = `Error in ${errorInfo.location}, param "${errorInfo.param}" ${errorInfo.msg}`;
  }

  res.status(err.status || 500);

   // if it is an API request, it will be an JSON response
   if (req.originalUrl.startsWith('/api/')) {
    res.json({ error: err.message });
    return;
  }

  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
