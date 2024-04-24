var createError = require('http-errors');
var express = require('express');
const http = require('http');
const socketIo = require('socket.io');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('./models/db');

//var routes = require('./app_server/routes/index');
var routesApi = require('./app_api/routes/index');

var app = express();

app.use(express.static(path.join(__dirname, 'app_client')));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));

//app.use('/', routes);
app.use('/api', routesApi);

app.use((req, res, next) => {
  if (!req.path.startsWith('/api')) {
    res.sendFile(path.join(__dirname, 'app_client', 'index.html'));
  } else {
    next(createError(404)); // If it's an unmatched API route, return 404
  }
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

const server = http.createServer(app);
const io = socketIo(server);

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

server.listen(80, () => {
  console.log('Server is running on port 80');
});

module.exports = app;
