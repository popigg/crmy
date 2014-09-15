var passport  = require('passport');
var jwt       = require('jsonwebtoken');

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

    if (error) { return res.status(200).send(error); }

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
}