angular
  .module('babyBagApp')
  .controller('UserController', UserController)

UserController.$inject = ['User', 'TokenService']
function UserController(User, TokenService) {
  var self = this;

  self.all    = [];
  self.user  = {};

 function handleLogin(res) {
   var token = res.token ? res.token:null;
  
   if (token) {
     console.log(res);
     self.getUsers();
     self.user = TokenService.getUser();
   }

   self.message = res.message;
 }

  self.authorize = function() {
    User.authorize(self.user, handleLogin);
    console.log("click I DONT WORK")
  }

  self.join = function() {
    User.join(self.user, handleLogin);
    console.log(self.user);
  }

  self.disappear = function() {
    TokenService.removeToken();
    self.all = [];
    self.user = {};
  }

  self.getUsers = function() {
    self.all = User.query();
  }

  self.isLoggedIn = function() {
    // return !!TokenService.getToken();
  }

  if(self.isLoggedIn()) {
    self.getUsers();
    self.user = TokenService.getUser();
  }
}