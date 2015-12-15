// scope.$watch("assignments", function (value) {//I change here
//   var val = value || null;            
//   if (val)
//     element.dataTable({"bDestroy": true});
//   });
// }
angular
  .module("babyBagApp")
  .controller("HomeController", HomeController)

function HomeController(){
  $('#fullpage').fullpage({
     sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', 'whitesmoke', '#000']
  });
  
}