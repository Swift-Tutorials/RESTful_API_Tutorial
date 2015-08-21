var members = require('../models/members');
var express = require('express');
var router = express.Router();



router.route('/teamMembers').get(function(req, res){
	members.find(function(err, teamMembers){
		if (err){
			return res.send(err);
		}
		res.json(teamMembers);
	});
});

