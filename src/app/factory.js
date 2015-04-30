'use strict';

angular.module('dailysteals')

.factory('api', ['Restangular', function (Restangular) {
    return {
        steepcheap: Restangular.one('c6zfuiww').get(),
        dealgenius: Restangular.one('af2vnwdy').get(),
        woot: Restangular.one('as777lwi').get(),
        wootelectronics: Restangular.one('9ye1jinc').get(),
        wootshirt: Restangular.one('7uigadhy').get(),
        wootsport: Restangular.one('8vsr5cbi').get(),
        woothome: Restangular.one('1wvn1eqw').get(),
        ebay:Restangular.one('6mt8zb5y').get(),
        amazon:Restangular.one('3oned4iq').get(),
        yugster:Restangular.one('d5ww42ru').get()
    };
}]);