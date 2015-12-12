angular
  .module("babyBagApp")
  .controller("MainController", MainController)
  .controller("ProductController", ProductController);


function MainController() {

}

function ProductController() {
  this.products = [
    {name: "Awesome product 1", price: 110, description: "Really cool 1!"},
    {name: "Awesome product 2", price: 120, description: "Really cool 2!"},
    {name: "Awesome product 3", price: 130, description: "Really cool 3!"}
  ];
}