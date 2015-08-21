var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var teamMembers = require('./routes/teamMembers');

var app = express();
mongoose.connect('mongodb://localhost/dashboard');

//configure the body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use('/api', teamMembers);

module.exports = app;