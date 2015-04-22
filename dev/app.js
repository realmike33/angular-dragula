angular.module('app', ['angular-dragula'])

.controller('AppCtrl', function($scope, ngDragulaFactory, $timeout){
  var elements = [left1, right1];
  $scope.config = {
    name: 'test',
    elements: elements
  };
  ngDragulaFactory.get('test').then(function(stuff){
    console.log(stuff);
  });
  console.log(dragula(elements));
})
