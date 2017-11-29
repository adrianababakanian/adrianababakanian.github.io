'use strict';

angular.module('myApp.personalsite', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/personalsite', {
    templateUrl: 'personalsite/personalsite.html',
    controller: 'PersonalsiteCtrl'
  });
}])

.controller('PersonalsiteCtrl', [function() {
}]);
