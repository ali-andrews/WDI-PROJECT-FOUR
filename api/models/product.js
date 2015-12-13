var mongoose = require('mongoose');

var ProductSchema = mongoose.Schema({
  name: String, 
  description: String, 
  price: Number, 
  image: String,
});

module.exports = mongoose.model('Product', ProductSchema);

//controllers will be serving json instead of redirecting to a new page