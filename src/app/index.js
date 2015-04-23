'use strict';

angular.module('dailysteals', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'restangular', 'ui.router', 'ui.bootstrap'])
    .config(['RestangularProvider', function (RestangularProvider, $stateProvider) {
        RestangularProvider.setBaseUrl('https://www.kimonolabs.com/api/as777lwi');
        RestangularProvider.setDefaultRequestParams({
            apikey: 'lxZzI5UKXbWL2JK3DL0U2g2uCfMjFUgd',
        });
        console.log(RestangularProvider);
    }]);



//    .config(function ($stateProvider, $urlRouterProvider) {
//        $stateProvider
//            .state('home', {
//                url: '/',
//                templateUrl: 'app/main/main.html',
//                controller: 'MainCtrl'
//            });
//        $urlRouterProvider.otherwise('/');
//    });