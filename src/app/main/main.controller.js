'use strict';

angular.module('dailysteals')
    .controller('MainCtrl', function ($scope) {
        $scope.sites = [
            {
                'title': 'Woot',
                'url': 'https://angularjs.org/',
                'description': 'HTML enhanced for web apps!',
                'logo': ''
      }
    ];
    });