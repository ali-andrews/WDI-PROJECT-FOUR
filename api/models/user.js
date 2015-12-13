var mongoose = require('mongoose');

var UserSchema = mongoose.Schema({
  name: String, 
  email: String, 
  password: String
});

module.exports = mongoose.model('User', UserSchema);

//controllers will be serving json instead of redirecting to a new page