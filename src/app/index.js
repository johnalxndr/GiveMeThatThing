'use strict';

angular.module('dailyapp', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'restangular', 'ui.router', 'ui.bootstrap'])
    .config(function ($stateProvider, $urlRouterProvider, Restangular) {
        Restangular.Provider.setBaseUrl('https://www.kimonolabs.com/api/');
        Restangular.Provider.setDefaultRequestParams({
            apikey: 'lxZzI5UKXbWL2JK3DL0U2g2uCfMjFUgd'
        });
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/main/main.html',
                controller: 'MainCtrl'
            });

        $urlRouterProvider.otherwise('/');
    });