function checkout(req, res) {
  var stripe = require("stripe")(
    "sk_test_rReIqRuAFiWgyu3hQlnx2uYT"
  );
  stripe.charges.create({
    amount: req.body.amount,
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
      console.log(err)
      res.status(500).send();
    }
    else {
      res.status(200).send();
    }

    res.status(200).send();
  });
}

// <form action="/checkout" method="POST">
//   <script
//     src="https://checkout.stripe.com/checkout.js" class="stripe-button"
//     data-key="pk_test_sSoPGbR7JSzPPf3HXkfqfaYP"
//     data-amount="2000"
//     data-name="Demo Site"
//     data-description="2 widgets ($20.00)"
//     data-image="/128x128.png"
//     data-locale="auto">
//   </script>
// </form>




module.exports = {
  checkout:  checkout,
}