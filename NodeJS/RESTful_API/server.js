// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var members    = require('./app/models/members');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// var port = process.env.PORT || 3000;        // set our port
var port = 8080;

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router


router.use(function(req, res, next){
	console.log('happen something');
	next();
});

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'Hello World' });   
});

mem = new members();
// more routes for our API will happen here
router.route('/members')


// router.route('/:ids')

// get all members info

.get(function(req, res){
	members.find(function(err, mem){
		if(err)
			res.send(err);

		// var items =[];
		// mem.forEach(function(item){
		// 	items.push(item.name);
		// });
		// res.json(items);	
		res.json(mem);
	});
});

router.route('/name')

.post(function(req, res){
	console.log(req.body.name)
	members.findOne({name : req.body.name}, function(err, mem){
		if(err)
			res.send(err);

		res.json(mem);
	});
})


// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
// app.use('/api', router);
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  next();
});

app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);