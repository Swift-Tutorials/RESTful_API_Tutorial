
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/dashboard');
var Schema = mongoose.Schema
			, ObjectId = Schema.ObjectId;

// Create schema
var member = new Schema({
	name 	: String,
	skypeid : String,
	phone 	: String,
	birth 	: Date
});

// var myTeam = mongoose.model('members', member);
module.exports = mongoose.model('members', member)

/*---
// Insert new collection into the db
var tm = new myTeam({
	name : 'Yogesh Bharate',
	skypeid : 'yogesh.bharate001',
	phone : '8975236279',
	birth : new Date ('Jan 25, 1991')
});

tm.save(function(err){
if(err) return console.error(err);
else console.log('new records added Successfully!!!');
});
 ----*/

/*----
// Update the fields
myTeam.update({name:'Yogesh Bharate'}, {$set: {phone : '8087294739'}}, function(err ,result){
	if(err) return console.log(err);
	else console.log(result);
});
-----*/

/*--------
// Remove particular records
myTeam.remove({name: 'Yogesh Bharate'}, function(err, result){
	if(err) return console.log(err);
	else console.log(result);
});
------*/

/*
// Show the all members
myTeam.find(function(err, res){
	console.log(res);
});
*/
/*------
// Show the detail for particular account
myTeam.findOne({name : 'Yogesh Bharate'},function(err, res){
	console.log(res);
});
--------*/