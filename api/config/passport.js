
var LocalStrategy   = require('passport-local').Strategy;
var user            = require('../models/user');

module.exports = function(passport) {
    passport.use(new LocalStrategy({
            usernameField: 'email',
            passwordField: 'pass'
        },function(username, password, done) {
            user.findOne({ email: username, active: true }, function(err, userObj) {
                if (err) { return done(err); }
                if (!userObj) {
                    return done(null, false, { message: 'Incorrect username.' });
                }
                if (userObj.pass !== password) {
                    return done(null, false, { message: 'Incorrect password.' });
                }
                return done(null, userObj);
            });
        }
    ));

    passport.serializeUser(function(user, done) {
        done(null, user._id);
    });

    passport.deserializeUser(function(id, done) {
        user.findById(id, function(err, user) {
            done(err, user);
        });
    });
};





