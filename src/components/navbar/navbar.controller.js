'use strict';

angular.module('dailysteals')
  .controller('NavbarCtrl', function ($scope) {
    $scope.date = new Date();
  });
