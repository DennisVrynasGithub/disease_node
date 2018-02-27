var express = require('express'); // Fast, unopinionated, minimalist web framework for node.
var bodyParser = require('body-parser');
var mysql = require('mysql');
var index = require('./routes/index');
var connection = require('express-myconnection');
var path = require('path');
var cors = require('cors'); // CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.

var app = express();

// Database Connection
// Create Sql connection
app.use(connection(mysql, {
    host: "localhost",
    user: "root",
    password: "",
    database: "symptomsdisease"
}, 'request'));

// Middleware
app.use(cors({ origin: 'http://83.212.101.67:4200' }));
app.use(bodyParser.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(express.static(__dirname + '/client/dist1')); // Provide static directory for frontend
app.use("/index",index);

// Provide static directory for frontend
app.use(express.static(__dirname + '/client/dist1')); // Provide static directory for frontend
app.use("/index",index);

// Connect server to Angular 2 Index.html
app.use('*', function(req, res) {
    res.sendFile(path.join(__dirname + '/client/dist1/index.html'));
});

// Start Server: Listen on port 8080
app.listen(8010, function() {
    console.log('Listening on port 8080');
});

module.exports = app;