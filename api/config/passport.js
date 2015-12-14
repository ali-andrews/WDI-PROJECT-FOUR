var LocalStrategy = require('passport-local').Strategy;
var User         = require("../models/user");
var jwt           = require('jsonwebtoken');

module.exports = function(passport) {
  passport.use('local-signup', new LocalStrategy({
    usernameField : 'email',
    passwordField : 'password',
    passReqToCallback : true
  }, 
  function(req, email, password, done) {
    console.log(email, password);
    User.findOne({ 'email' : email }, function(err, user) {
      if (err) return done(err);
      if (user) return done(null, false);

      var newUser = new User(req.body);
      newUser.save(function(err, user) {
        if (err) return done(err);
        return done(null, user);
      });
    });
  }));
}
