angular
  .module("babyBagApp")
  // .controller("MainController", MainController)
  .controller("ProductController", ProductController)
  .controller("ProductViewController", ProductViewController)
  .controller("CartController", CartController);

// MainController.$inject = ['User', 'TokenService']
// function MainController() {
// }

function chunk(arr, size) {
  var newArr = [];
  for (var i=0; i<arr.length; i+=size) {
    newArr.push(arr.slice(i, i+size));
  }
  return newArr;
}

ProductController.$inject = ['Product'];
function ProductController(Product) {
  var self = this;
  Product.query(function(data) {
    self.products = chunk(data, 3);
  });
}

ProductViewController.$inject = ["$window", "$stateParams", 'Product'];
function ProductViewController($window, $stateParams, Product) {
  this.product = Product.get({ id: $stateParams.id });

  this.addToCart = function() {
    var cart = $window.localStorage.getItem("cart");
    var items;

    if (cart) {
      items = angular.fromJson(cart);
      items.push(this.product);
    } else {
      items = [this.product];      
    }
    
    $window.localStorage.setItem("cart", angular.toJson(items));
    $window.alert('added to cart');
  }
}

CartController.$inject = ["$window", "$scope", "Checkout"];
function CartController($window, $scope, Checkout) {
  var totalAmount = 0;  
  this.products = angular.fromJson($window.localStorage.getItem("cart")) || [];  

  this.products.forEach(function(p) {    
    totalAmount += p.price;
  });

  var amountToSend = totalAmount; //sends to back end

    jQuery(function($) {    //creates token
      $('#payment-form').submit(function(event) {
        var $form = $(this);

        // Disable the submit button to prevent repeated clicks
        $form.find('button').prop('disabled', true);

        Stripe.card.createToken($form, stripeResponseHandler);

        // Prevent the form from submitting with the default action
        return false;
      });
    });

    function stripeResponseHandler(status, response) {
      var $form = $('#payment-form');

      if (response.error) {
        // Show the errors on the form
        $form.find('.payment-errors').text(response.error.message);
        $form.find('button').prop('disabled', false);
      } else {
        // response contains id and card, which contains additional card details
        var token = response.id;
        var data = {
          payToken: token,
          amount:amountToSend
        }
        Checkout.checkout(data, function() {
          console.log('done')
          $window.location="/#profile"
        })

      }
    };

}
