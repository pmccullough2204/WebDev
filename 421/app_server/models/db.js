// Require Mongoose
var mongoose = require('mongoose');
// Require dotenv and specify the custom path to your config.env
require('dotenv').config({ path: './config.env' });

// Build the connection string using environment variables from config.env
var dbURI = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}` +
    `@${process.env.DB_HOST}/${process.env.DB_NAME}?retryWrites=true&w=majority`;

// Connect to MongoDB
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });

// Handling connection events for success and error
mongoose.connection.on('connected', function () {
    console.log('Mongoose connected to ' + dbURI);
});
mongoose.connection.on('error',function (err) {
    console.log('Mongoose connection error: ' + err);
});