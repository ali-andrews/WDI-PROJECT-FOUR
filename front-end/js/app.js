angular
  .module("babyBagApp", ['ngResource', 'ui.router'])
  .config(MainRouter);

function MainRouter($stateProvider, $urlRouterProvider) {
  $stateProvider
      .state('home', {
        url: "/",
        templateUrl: "partials/home.html",
      })
      .state('products', {
        url: "/products",
        templateUrl: "partials/products.html",
      })
      .state('viewProduct', {
        url: "/products/:id",
        templateUrl: "partials/product.html",
        controller: 'ProductViewController'
      })
      .state('about', {
        url: "/about",
        templateUrl: "partials/about.html",
      })
      .state('login', {
        url: "/login",
        templateUrl: "partials/login.html",
      })
      .state('register', {
        url: "/register",
        templateUrl: "partials/register.html",
      });
}