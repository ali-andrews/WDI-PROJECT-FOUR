angular
  .module("babyBagApp")
  // .controller("MainController", MainController)
  .controller("ProductController", ProductController)
  .controller("ProductViewController", ProductViewController)
  .controller("CartController", CartController);

// MainController.$inject = ['User', 'TokenService']
// function MainController() {
// }

ProductController.$inject = ['Product'];
function ProductController(Product) {
  this.products = Product.query();
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

CartController.$inject = ["$window"];
function CartController($window) {
  var totalAmount = 0;  
  this.products = angular.fromJson($window.localStorage.getItem("cart"));  

  this.products.forEach(function(p) {    
    totalAmount += p.price;
  });

  this.totalAmount = totalAmount;
}