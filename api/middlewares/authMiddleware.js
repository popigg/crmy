'use strict';

exports.isAuthenticated = function(req, res, next) {	
	if (req.isAuthenticated()) {
		console.log('yes');
		return next();
	}

	console.log('nop');
	res.status(401).send();
}