angular
  .module("babyBagApp")
  .controller("MainController", MainController)
  .controller("ProductController", ProductController);


ProductController.$inject = ['Product'];

function MainController() {

}

function ProductController(Product) {
  this.products = Product.query();

  this.selectProduct = function(product) {
    this.selectedProduct = Product.get({ id: product._id });
  }
}