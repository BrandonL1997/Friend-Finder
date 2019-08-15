var path = require('path');

var friends = require('../data/friends');

module.exports = function(app) {
	
//  i think i have the apiRoute correct but i dont think im connecting to the friends data 
	app.get('/api/friends', function(req, res) {
		res.json(friends);
	});

	app.post('/api/friends', function(req, res) {
		var userInput = req.body;
	console.log(userInput);

		var userResponses = userInput.scores;
		
		var matchName = '';
		var matchImage = '';
		var totalDifference = 10000;

		for (var i = 0; i < friends.length; i++) {
			var diff = 0;
			for (var j = 0; j < userResponses.length; j++) {
				diff += Math.abs(friends[i].scores[j] - userResponses[j]);
			console.log(diff)
			}
			
			if (diff < totalDifference) {
			console.log("found friend")
				totalDifference = diff;
				matchName = friends[i].name;
				matchImage = friends[i].photo;
	
			}
		}

		friends.push(userInput);
		console.log(matchName, matchImage);
		res.json({status: 'OK', matchName: matchName, matchImage: matchImage});
	});
};