var stripe = require("stripe")(process.env.PROJECT_STRIPE_SECRET);

function checkout(req, res) {
  var stripeToken = req.body.payToken;

  var charge = stripe.charges.create({
     amount: req.body.amount*100, // amount in cents, again
    currency: "gbp",
    source: stripeToken,
    description: "Example charge"
  }, function(err, charge) {
    if (err && err.type === 'StripeCardError') {
      // The card has been declined
    } else {
      console.log(req.body)
      var recieve = req.body
      res.status(200).json({
        message: "Payment OK",
        request: recieve
      })
    }
  });


}
module.exports = {
  checkout:  checkout,
}