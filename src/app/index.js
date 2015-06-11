'use strict';

angular.module('dailysteals', ['restangular', 'ui.router', 'ui.bootstrap', 'firebase'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/main/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            });

        $urlRouterProvider.otherwise('/');
    })
    .config(function (RestangularProvider) {
        RestangularProvider.setBaseUrl('https://www.kimonolabs.com/api/');
        RestangularProvider.setDefaultRequestParams({
            apikey: 'lxZzI5UKXbWL2JK3DL0U2g2uCfMjFUgd',
        });
    });