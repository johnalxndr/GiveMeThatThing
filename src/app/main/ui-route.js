'use strict';

angular.module('dailysteals', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'restangular', 'ui.router', 'ui.bootstrap'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/main/main.html',
                controller: 'apples',
                controllerAs: 'main'
            });
        $urlRouterProvider.otherwise('/');
    });