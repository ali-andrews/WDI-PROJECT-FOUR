angular
  .module('babyBagApp')
  .factory('User', User);

User.$inject = ['$resource'];

function User($resource) {
  return $resource('http://localhost:3000/users/:id', null, {
    'authorize': { method:"POST", url: '/authorize' },
    'join': { method:"POST", url: '/join' }
  });
};

