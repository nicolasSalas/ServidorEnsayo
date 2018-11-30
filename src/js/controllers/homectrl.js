'use strict';

var app = angular.module('Server');

app.controller('HomeCtrl', function ($scope, MyServices, $log) {
   
  $scope.yourName = 'Server';
});
