var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('./models/db');

// Only one routes variable for API routes
var routesApi = require('./app_api/routes/index');

var app = express();

// View engine setup (if you are using server-rendered EJS views)
app.set('views', path.join(__dirname,'app_client', 'views'));
app.set('view engine', 'ejs');

// Middleware setup
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Serving static files
app.use(express.static(path.join(__dirname, 'public')));
// Serve static files from 'app_client' if it's your AngularJS app's root
app.use(express.static(path.join(__dirname, 'app_client')));

// Use the API routes with '/api' prefix
app.use('/api', routesApi);

// Catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// Error handler
app.use(function(err, req, res, next) {
  // Set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

