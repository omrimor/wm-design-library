'use strict';

/**
 * Load modules
 */

var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');


// Init a new Express app instance
var app = express();
// Set the app port (used at the end with `listen`)
app.set('port', 3000);

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});


/**
 * Define Middleware handlers
 * These run on every request
 */

// Add extra logging in the console
app.use(logger('dev'));
// Request's body parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

/**
 * Define Routes handling
 */


// Serve static files
app.use(express.static(__dirname));

// Start the server at a specific port
app.listen(app.get('port'));

console.log('Listening on: http://localhost:3000');
