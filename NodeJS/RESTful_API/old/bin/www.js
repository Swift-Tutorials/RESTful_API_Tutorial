var app = require('../app'); //Require our app
 
app.set('port', process.env.PORT || 8000);

var express = require('express');
var bodyparser = require('body-parser');
var mongoose = require('mongoose');

var app = express();


mongoose.connect('mongodb://localhost/dashboard')

app.use(bodyparser.urlencoded({ extended : true }));
app.use(bodyparser.json());
// app.get('/api', require('./routes/api'));

var port = process.env.PORT || 3000;

var router = express.Router();

router.get('/', function(req, res, next){
	res.json({message : 'hoorry ! welcome to our api'});
	// next();
});

// Register our routes
router.use('/api', router);

app.listen(3000);
console.log('Magic happen on port ' + port);