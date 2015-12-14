var LocalStrategy = require('passport-local').Strategy;
var Agent         = require("../models/agent");
var jwt           = require('jsonwebtoken');

module.exports = function(passport) {
  passport.use('local-signup', new LocalStrategy({
    usernameField : 'username',
    passwordField : 'password',
    passReqToCallback : true
  }, function(req, codename, password, done) {
    process.nextTick(function() {
      User.findOne({ 'username' : username }, function(err, user) {

        if (err) return done(err);
        if (agent) return done(null, false);

        var newUser       = new User();
        newUser.username  = username;
        newUser.firstname  = req.body.firstname;
        newUser.street    = req.body.street;
        newUser.address  = req.body.address;
        newUser.city  = req.body.city;
        newUser.postcode  = req.body.postcode;
        newUser.password  = newUser.encrypt(password);

        newUser.save(function(err) {
          if (err) return done(err);
          return done(null, newUser);
        });
      });
    });
  }));
}
