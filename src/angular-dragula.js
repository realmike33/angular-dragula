;(function(dragula){
  'use strict';

  angular.module('angular-dragula', [])

    .factory('ngDragulaFactory', function(){
      return {};
    })

    .directive('ngDragula', ['ngDragulaFactory', function(ngDragulaFactory){
      return {
        restrict: 'A',
        scope: {
          config: '='
        },
        link: function(scope, element, attrs){
          var drag = scope.config;
          ngDragulaFactory[drag.name] = drag;
          dragula(drag.elements, drag);
        }
      }
    }]);
}(dragula));
