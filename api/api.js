'use strict';

/**
 * required modules
 * @type {*}
 */
var mongoose        = require('mongoose');
var express         = require('express');
var passport        = require('passport');
var app             = express();
var router          = express.Router();
var routes          = require('./handlers/routes');
var bodyParser      = require('body-parser');
var cookieParser    = require('cookie-parser');
var session         = require('express-session');
var passportConf    = require('./config/passport')(passport);

/**
 * MongoDb connection
 */
mongoose.connect('mongodb://localhost/crm');
mongoose.connection.on('error', function() {
    console.error('MongoDB connection error.');
});

/**
 * express configuration
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(session({ secret: 'myBike', key: 'token', resave: false, saveUninitialized: false } ));
app.use( function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept, Authorization');
    next();
});

app.use(passport.initialize());
app.use(passport.session());

router.use('./handlers/routes', router);

// Application routes
routes(app);

app.listen(3000);
console.log('Express server listening on port 3000');