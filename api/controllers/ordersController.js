function checkout(req, res) {
  var stripe = require("stripe")(
    "sk_test_rReIqRuAFiWgyu3hQlnx2uYT"
  );
  stripe.charges.create({
    amount: req.params.amount,
    currency: "gbp",
    card: {
        number: '4242424242424242',
        exp_month: 12,
        exp_year: 2016,
        cvc: '123'
      },
    description: "Charge for test@example.com"
  }, function(err, charge) {
    if (err) {
      res.status(500).send();
    }
    else {
      res.status(200).send();
    }

    res.status(200).send();
  });
}


module.exports = {
  checkout:  checkout,
}