var mongoose    = require('mongoose');

var databaseUrl = 'mongodb://localhost:27017/babybag';
mongoose.connect(databaseUrl);

// Require models
var Product     = require('../models/product');
var User    = require('../models/user');
// var Cart    = require('../models/cart');
// var Order    = require('../models/order');

// ProductType seed data
var product1 = new Product({
  name: "Karicare Gold+ From 6 Months",
  description: "Karicare Gold+ From 6 Months is a unique formulation designed to meet the increasing nutritional requirements of growing infants.",
  price: 10.00,
  image: "http://cdn.shopify.com/s/files/1/0789/3885/products/209_0524f736-1c30-44f3-9d6b-2f4d06f74037_large.jpeg?v=1430790797",
});

product1.save(function(err, product1){
  if (err) return console.log(err);
  console.log('Product 1 Added!', product1);
});

var product2 = new Product({
  name: "Farex Baby Rice Cereal Pouch",
  description: "Trusted by mums and dads for generations, Farex Baby Rice Cereal is the ideal first food. Made from ground rice", 
  price: 1.70,
  image: "http://cdn.shopify.com/s/files/1/0789/3885/products/131_f824732a-e1b6-464e-bb6a-4d6418f688cd_large.jpeg?v=1430790739",
});

product2.save(function(err, product2){
  if (err) return console.log(err);
  console.log('Product 2 Added!', product2);
});
