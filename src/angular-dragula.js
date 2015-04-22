;(function(dragula){
  'use strict';

   angular.module('angular-dragula', [])

    .factory('ngDragulaFactory', ['$timeout', function($timeout){
      function get(name){
        return $timeout(function(){
          if(name === 'get'){
            throw new Error('RESERVE_WORD');
          }
          if(this[name]){
            return this[name]
          }else{
            throw new Error('NOT_FOUND');
          }
        }.bind(this), 500)
      };
      return {
        get: get
      };
    }])

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
