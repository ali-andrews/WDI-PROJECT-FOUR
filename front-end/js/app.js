angular
  .module("babyBagApp", ['ngResource', 'ui.router'])
  .config(MainRouter);

function MainRouter($stateProvider, $urlRouterProvider) {
  $stateProvider
      .state('home', {
        url: "/",
        templateUrl: "home.html",
      })
      .state('products', {
        url: "/products",
        templateUrl: "products.html",
      })
      .state('about', {
        url: "/about",
        templateUrl: "about.html",
      })
      .state('login', {
        url: "/login",
        templateUrl: "login.html",
      })
      .state('register', {
        url: "/register",
        templateUrl: "register.html",
      });
}