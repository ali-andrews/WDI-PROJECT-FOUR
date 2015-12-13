angular
  .module("babyBagApp")
  .controller("MainController", MainController)
  .controller("ProductController", ProductController)
  .controller("ProductViewController", ProductViewController);

ProductController.$inject = ['Product'];
ProductViewController.$inject = [$stateParams, 'Product'];

function MainController() {
}

function ProductController(Product) {
  this.products = Product.query();
}

function ProductViewController($stateParams, Product) {
  this.product = Product.get({ id: $stateParams.id });
}