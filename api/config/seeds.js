var mongoose    = require('mongoose');

var databaseUrl = 'mongodb://localhost:27017/babybag';
mongoose.connect(databaseUrl);

// Require models
var Product     = require('../models/product');
var User    = require('../models/user');
// var Cart    = require('../models/cart');
// var Order    = require('../models/order');

Product.remove({});
User.remove({});

var user1 = new User({
  name: 'Test user',
  email: 'test@test.com',
  password: 'password'
});

user1.save(function(err, user1){
  if (err) return console.log(err);
  console.log('User 1 Added!', user1);
});

// ProductType seed data
var product1 = new Product({
  name: "Karicare Gold+",
  description: "Karicare Gold+ From 6 Months is a unique formulation designed to meet the increasing nutritional requirements of growing infants.",
  price: 10.00,
  image: "http://cdn.shopify.com/s/files/1/0789/3885/products/209_0524f736-1c30-44f3-9d6b-2f4d06f74037_large.jpeg?v=1430790797",
});

product1.save(function(err, product1){
  if (err) return console.log(err);
  console.log('Product 1 Added!', product1);
});

var product2 = new Product({
  name: "Farex Rice Cereal Pouch",
  description: "Trusted by mums and dads for generations, Farex Baby Rice Cereal is the ideal first food. Made from ground rice", 
  price: 1.75,
  image: "http://cdn.shopify.com/s/files/1/0789/3885/products/131_f824732a-e1b6-464e-bb6a-4d6418f688cd_large.jpeg?v=1430790739",
});

product2.save(function(err, product2){
  if (err) return console.log(err);
  console.log('Product 2 Added!', product2);
});

var product3 = new Product({
  name: "Huggies Wipes",
  description: "Thick, soft and absorbent, for a safe, gentle yet thorough clean. Triple Clean Technology, Alcohol, soap, paraben & MIT free and clinically proven to help prevent nappy", 
  price: 3.95,
  image: "http://cdn.shopify.com/s/files/1/0789/3885/products/165_ecd7e3af-a5d8-4381-bbd3-366f70ae6b17_large.jpeg?v=1430790766",
});

product3.save(function(err, product3){
  if (err) return console.log(err);
  console.log('Product 3 Added!', product3);
});

var product4 = new Product({
  name: "Ecostore Soap",
  description: "Ecostore's gentle soap will cleanse your baby without damaging or breaking down the oils in the protective layer in their skin. Enriched with creamy goat's milk, lavender essential oil, wheatgerm and rich in vitamin E ", 
  price: 1.25,
  image: "http://cdn.shopify.com/s/files/1/0789/3885/products/218_c0543759-55ff-45eb-8e0b-ddaae6d5c9d9_large.jpeg?v=1430790800",
});

product4.save(function(err, product4){
  if (err) return console.log(err);
  console.log('Product 4 Added!', product4);
});

var product5 = new Product({
  name: "Johnson's Bath",
  description: "A pioneering clinical study by Tina Lavender (Professor of Midwifery at The University of Manchester) found that, at two weeks, skin cleansed with Johnson's baby Top-To-Toe had higher hydration levels than skin bathed in water alone. ", 
  price: 4.65,
  image: "http://cdn.shopify.com/s/files/1/0789/3885/products/228_f8921981-1d65-471c-89c9-1435b09f1924_large.jpeg?v=1430790806",
});

product5.save(function(err, product5){
  if (err) return console.log(err);
  console.log('Product 5 Added!', product5);
});

var product6 = new Product({
  name: "Huggies Infant Girl",
  description: " New Zealand's No.1 nappy, features the revolutionary DryTouch Layer which instantly absorbs wetness leaving skin dry, even when the nappy is full.", 
  price: 10.65,
  image: "http://cdn.shopify.com/s/files/1/0789/3885/products/139_7461c3c0-456a-414b-953b-d6694b3e80f8_large.jpeg?v=1430790744",
});

product6.save(function(err, product6){
  if (err) return console.log(err);
  console.log('Product 6 Added!', product6);
});

var product7 = new Product({
  name: "Johnson's Lotion Bedtime",
  description: " Clinically proven to help your baby sleep better. Releases NaturalCalm essences - a special blend of gentle and calming aromas", 
  price: 3.20,
  image: "http://cdn.shopify.com/s/files/1/0789/3885/products/235_2ee08ea4-d8e6-484e-b0db-698949194ec9_large.jpeg?v=1430790812",
});

product7.save(function(err, product7){
  if (err) return console.log(err);
  console.log('Product 7 Added!', product7);
});

var product8 = new Product({
  name: "Johnson's Powder Cornstarch",
  description: "Johnson's Powder gently absorbs moisture. Made with the pure cornstarch and clinically proven to be gentle and mild for your baby's skin", 
  price: 2.50,
  image: "http://cdn.shopify.com/s/files/1/0789/3885/products/237_7aba88aa-746d-4466-8f41-43bf800b354e_large.jpeg?v=1430790814",
});

product8.save(function(err, product8){
  if (err) return console.log(err);
  console.log('Product 8 Added!', product8);
});

var product9 = new Product({
  name: "JBasik Organics Balm",
  description: "Help soothe and protect little bottoms. Use regularly to prevent nappy rash. Calendula has antibacterial, anti-fungal and antiviral properties, while cocoa butter contains natural antioxidants, is high in vitamin e, and is well known for it’s healing and moisturising properties.", 
  price: 15.50,
  image: "http://cdn.shopify.com/s/files/1/0789/3885/products/439_large.jpg?v=1449466897",
});

product9.save(function(err, product9){
  if (err) return console.log(err);
  console.log('Product 9 Added!', product9);
});


var product10 = new Product({
  name: "Bonjela",
  description: "Teething gels can provide fast-acting and targeted relief from the pain of teething. Bonjela Teething Gel is specially formulated to provide fast, soothing relief from teething.", 
  price: 5.50,
  image: "http://cdn.shopify.com/s/files/1/0789/3885/products/264_616fbdc8-d722-45b6-8091-ae202a50fffa_large.jpeg?v=1430790829",
});

product10.save(function(err, product10){
  if (err) return console.log(err);
  console.log('Product 10 Added!', product10);
});


var product11 = new Product({
  name: "Nurture Infant Formula",
  description: "Complete nutrition for newborn babies. With a blend of essential nutrients, Nurture Infant Formula is suitable for newborn babies from birth and is a gentle formulation to encourage easier digestion. ", 
  price: 11.35,
  image: "http://cdn.shopify.com/s/files/1/0789/3885/products/337_af200e97-cdb1-4cc6-b064-02354ea74680_large.jpeg?v=1430790870",
});

product11.save(function(err, product11){
  if (err) return console.log(err);
  console.log('Product 11 Added!', product11);
});


var product12 = new Product({
  name: "Little Angels Banana Porridge",
  description: "This sweet creamy breakfast is a real favourite. It contains essential fatty acids and whole grain oats to keep their tummies full and sustain them through a busy morning of playing. 3-6 Servings per pack. ", 
  price: 4.35,
  image: "http://cdn.shopify.com/s/files/1/0789/3885/products/376_large.jpg?v=1434937698",
});

product12.save(function(err, product12){
  if (err) return console.log(err);
  console.log('Product 12 Added!', product12);
});

var product13 = new Product({
  name: "Farex Multigrain Cereal Pouch",
  description: "A new twist on an old favourite, Original Multigrain Cereal was the first recipe developed for Farex. It is made for today's nutritional standards but with the same gentle taste that babies have enjoyed for years", 
  price: 1.40,
  image: "http://cdn.shopify.com/s/files/1/0789/3885/products/128_87276920-03c5-4071-beff-2c0804475559_large.jpeg?v=1430790736",
});

product13.save(function(err, product13){
  if (err) return console.log(err);
  console.log('Product 13 Added!', product13);
});

var product14 = new Product({
  name: "Little Genie Newborn",
  description: "Little Genie Bio-Nappies are engineered from as many compostable and biodegradable materials (approximately 65% of nappy by weight) as possible and are made to provide maximum protection and comfort for your little one.", 
  price: 9.40,
  image: "http://cdn.shopify.com/s/files/1/0789/3885/products/394_large.jpg?v=1436395325",
});

product14.save(function(err, product14){
  if (err) return console.log(err);
  console.log('Product 14 Added!', product14);
});

var product15 = new Product({
  name: "Ecostore Shampoo",
  description: "A nourishing shampoo to gently cleanse baby's fine hair and sensitive scalp, retaining the moisture and leaving it soft, shiny and protected. ", 
  price: 4.40,
  image: "http://cdn.shopify.com/s/files/1/0789/3885/products/221_0eb4a673-6b69-4737-8787-59574981bcad_large.jpeg?v=1430790802",
});

product15.save(function(err, product15){
  if (err) return console.log(err);
  console.log('Product 15 Added!', product15);
});

var product16 = new Product({
  name: "NAN H.A. 1 Gold",
  description: "NAN H.A. 1 Gold is a premium specially treated (partially hydrolysed) starter infant formula that is easy to digest. NAN H.A. 1 Gold helps to support your infant's digestive and immune systems. ", 
  price: 13.40,
  image: "http://cdn.shopify.com/s/files/1/0789/3885/products/323_ae41edf2-3c3e-4dec-a285-6006346335f1_large.jpeg?v=1430790860",
});

product16.save(function(err, product16){
  if (err) return console.log(err);
  console.log('Product 16 Added!', product16);
});


var product17 = new Product({
  name: "Aveeno Daily Lotion",
  description: "Aveeno Baby Daily Moisture Lotion contains natural colloidal oatmeal blended with rich emollients that soothe and help protect your baby's delicate skin.  ", 
  price: 9.90,
  image: "http://cdn.shopify.com/s/files/1/0789/3885/products/241_f209ad68-65fc-47dc-94b2-f58f5ddedb2b_large.jpeg?v=1430790818",
});

product17.save(function(err, product17){
  if (err) return console.log(err);
  console.log('Product 17 Added!', product17);
});

var product18 = new Product({
  name: "Heinz Organic Apple Pouch",
  description: "An ideal first food with all the goodness of certified organic ingredients. ", 
  price: 1.20,
  image: "http://cdn.shopify.com/s/files/1/0789/3885/products/051_1c3d59cc-4229-4c24-af41-01a3d609a74d_large.jpeg?v=1430790669",
});

product18.save(function(err, product18){
  if (err) return console.log(err);
  console.log('Product 18 Added!', product18);
});

var product19 = new Product({
  name: "Treasures Toddler 36",
  description: "Treasures Toddler is a premium nappy with a multi layer protection system which quickly draws liquid away to keep your baby's skin dry. ", 
  price: 11.20,
  image: "http://cdn.shopify.com/s/files/1/0789/3885/products/175_cbedb297-9ed0-4b58-a686-6c980f89aa6a_large.jpeg?v=1430790773",
});

product19.save(function(err, product19){
  if (err) return console.log(err);
  console.log('Product 19 Added!', product19);
});


var product20 = new Product({
  name: "Bamford Soap",
  description: "Molded from a heart-shaped pebble found on a beach, Bamford's herbaceous soap combines notes of Egyptian Geranium and Lavender with uplifting Peppermint and Blue Gum Eucalyptus, underscored with spicy Tonka Bean.", 
  price: 12.20,
  image: "http://cache.net-a-porter.com/images/products/441269/441269_in_pp.jpg",
});

product20.save(function(err, product20){
  if (err) return console.log(err);
  console.log('Product 20 Added!', product20);
});

var product21 = new Product({
  name: "Sapling underwear",
  description: "Dusty Pink with heart on bottom. Printed with 100% GOTS approved water based dyes and made from super soft, high quality, double jersey organic cotton", 
  price: 5.25,
  image: "http://cdn.shopify.com/s/files/1/0648/0625/products/pink-bloomers-with-heart_1024x1024.jpg?v=1423709764",
});

product21.save(function(err, product21){
  if (err) return console.log(err);
  console.log('Product 21 Added!', product21);
});

var product22 = new Product({
  name: "Adien + Anais Short sleeve bodysuit",
  description: "Short sleeve body suit with blue star print. Printed with 100% GOTS approved water based dyes and made from super soft, high quality, double jersey organic cotton", 
  price: 13.30,
  image: "https://cdn.adenandanais.com/content/files/images/productimages/large/2362_1-kimono-muslin-short-sleeve-blue-star.jpg",
});

product22.save(function(err, product21){
  if (err) return console.log(err);
  console.log('Product 22 Added!', product22);
});




