var Product   = require('../models/product');

function productsIndex(req, res) {
  Product.find(function(err, products){
    if (err) return res.status(404).json({message: 'Something went wrong.'});
    res.status(200).send(products);
  });
}

function productsShow(req, res){
  Product.findById(req.params.id, function(err, product){
    if (err) return res.status(404).json({message: 'Something went wrong.'});
    res.status(200).json(product);
  });
}


module.exports = {
  productsIndex:  productsIndex,
  productsShow:   productsShow,
}