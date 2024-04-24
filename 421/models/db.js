
var mongoose = require('mongoose');

require('dotenv').config({ path: './config.env' });

var dbURI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}` +
    `@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`;

var name  = process.env.DB_USER

mongoose.connect(dbURI);


mongoose.connection.on('connected', function () {
    console.log('Mongoose connected to ' + name);
});


mongoose.connection.on('error',function (err) {
    console.log('Mongoose connection error: ' + err);
});


mongoose.connection.on('disconnected', function () {
    console.log('Mongoose disconnected');
});

async function gracefulShutdown() {
    await mongoose.connection.close();
    console.log('Mongoose connection closed through app termination');
    process.exit(0);
}

process.on('SIGINT', gracefulShutdown).on('SIGTERM', gracefulShutdown);


// For nodemon restarts
process.once('SIGUSR2', function () {
    gracefulShutdown('nodemon restart', function () {
        process.kill(process.pid, 'SIGUSR2');
    }); });

// For app termination
process.on('SIGINT', function() {
    gracefulShutdown('app termination', function () {
        process.exit(0);
    }); });

