'use strict';

angular.module('dailyapp')
  .controller('NavbarCtrl', function ($scope) {
    $scope.date = new Date();
  });
