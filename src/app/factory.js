'use strict';

angular.module('dailysteals')

.factory('api', ['Restangular', function (Restangular) {
    return {
        steepcheap: Restangular.one('2ji2tx0c').get(),
        dealgenius: Restangular.one('af2vnwdy').get(),
        woot: Restangular.one('as777lwi').get(),
        wootelectronics: Restangular.one('9ye1jinc').get(),
        wootshirt: Restangular.one('7uigadhy').get(),
        wootsport: Restangular.one('8vsr5cbi').get(),
        woothome: Restangular.one('1wvn1eqw').get()
    };
}]);