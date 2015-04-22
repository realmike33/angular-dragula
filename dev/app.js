angular.module('app', ['angular-dragula'])

.controller('AppCtrl', function($scope, ngDragulaFactory, $timeout){
  var elements = [left1, right1];
  $scope.config = {
    name: 'test',
    elements: elements
  };
  $timeout(function(){console.log(ngDragulaFactory)}, 500);
})
