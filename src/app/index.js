'use strict';

angular.module('dailysteals', ['ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'restangular', 'ui.router', 'ui.bootstrap'])
    .config(function (RestangularProvider) {
        RestangularProvider.setBaseUrl('https://www.kimonolabs.com/api/as777lwi?');
        RestangularProvider.setDefaultRequestParams({
            apikey: 'lxZzI5UKXbWL2JK3DL0U2g2uCfMjFUgd',
        });
    });