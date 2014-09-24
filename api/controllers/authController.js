var passport  = require('passport');
var jwt       = require('jsonwebtoken');
var user      = require('../models/user');

/**
 * Logout
 * returns nothing
 */
exports.logout = function (req, res) {
  if(req.user) {
    req.logout();
    res.status(200).send();
  } else {
    res.status(400).send("Not logged in");
  }
};

/**
 *  Login
 *  requires: {email, password}
 */
exports.login = function (req, res) {
  passport.authenticate('local', function(err, user, info) {

    var error = err || info;

    if (error) { return res.status(501).send(error); }

    req.logIn(user, function(err) {    
      if (err) { return res.send(err); }

        var profile = {
            id      : user._id,
            email   : user.email
        };

      var token = jwt.sign(profile, 'myBike2' , { expiresInMinutes: 60*5 });
      
      res.json({ token: token });
    });
  })(req, res);
};

/**
 * is authenticated
 * @param req
 * @param res
 * @param next
 */
exports.isAuthenticated = function(req, res, next) {

    var token = req.headers.authorization;

    if(token) {
        jwt.verify(token, 'myBike2', function(err, decoded) {
            if (err) { return res.status(501).send(err); }

            user.findById(decoded.id, function(err, userObj){
                if(err) {return res.status(501).send(err); }

                if (decoded.email == userObj.email) {
                    return next();
                } else{
                    return res.status(401).send();
                }
            });
        });
    } else {
        return res.status(401).send();
    }
};

exports.success = function(req, res) {
    res.send();
};