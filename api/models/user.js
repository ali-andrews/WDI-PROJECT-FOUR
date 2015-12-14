var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

var UserSchema = mongoose.Schema({
  username: {type: String, unique: true},   
  firstname: {type: String}, 
  email: {type: String, unique: true, required: true},  
  street: {type: String},   
  address: {type: String},  
  city: {type: String}, 
  postcode: {type: String}, 
  password: {type: String, required: true}
});

UserSchema.pre('save', function(next) {
  this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync(8));
  next();
});

UserSchema.methods.authenticate = function(password, callback) {
  return bcrypt.compare(password, this.password, function(err, isMatch){
    callback(null, isMatch)
  });
}

module.exports = mongoose.model("User", UserSchema);
//controllers will be serving json instead of redirecting to a new page