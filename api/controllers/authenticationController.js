var User     = require('../models/user');
var jwt      = require('jsonwebtoken');
var passport = require('passport');
var secret   = 'dadada34342dadadabbsj';

function signup(req, res, next) {
  var localStrategy = passport.authenticate('local-signup',
   function(err, user, info) {
     if (err) {
       return res.status(500).json({message: 'Something went wrong!'});
     }
     if (info) {
       return res.status(401).json({message: info.message});
     }
     if (!user) {
       return res.status(401).json({message: 'User already exists!'});
     }
     var token = jwt.sign(user, secret, {expiresIn: 60 * 60 * 24});
     return res.status(200).json({
       success: true,
       message: 'Thank you for authenticating',
       token: token,
       user: user
     });
   });
   return localStrategy(req, res, next);
};

function login(req, res) {
  console.log("LOGIN", req.body.email, req.body.password);
  User.findOne({
    email: req.body.email
  }, function(err, user) {
    console.log(err, user);
    if (err) return res.status(500).send(err);
    if (!user) return res.status(403).send({ message: 'You seem to be mistaken, we have no user with that identity.' });
    // if (!user.authenticate(req.body.password)) return res.status(403).send({ message: 'Authentication failed. Wrong password.' });
    console.log("ABOUT TO AUTHENTICATE!!!!");
    user.authenticate(req.body.password, function(err, isMatch) {
      console.log(err, isMatch);
      if (err) return res.status(500).json({message: err});
      if (isMatch) {
        var token = jwt.sign(user, secret, { expiresInMinutes: 1440 });
        return res.status(200).json({token: token});
      }
      else {
        return  res.status(401).json({ message: 'Not authorized' });
      }
    })

  });
};

module.exports = {
  signup: signup,
  login: login
}