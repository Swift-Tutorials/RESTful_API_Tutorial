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

module.exports = mongoose.model('members', member);
