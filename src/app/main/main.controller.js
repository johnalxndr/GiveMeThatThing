'use strict';

angular.module('dailysteals')

.controller('MainCtrl', ['api', function (api) {
    var self = this;

    api.woot.then(function (data) {
        self.wootData = data.results;
        console.log(data.results.collection1[0].price);
    });
    api.steepcheap.then(function (data) {
        self.steepcheapData = data.results;
        console.log(data.results.collection1[0].price);
    });
    api.dealgenius.then(function (data) {
        self.dealgeniusData = data.results;
        console.log(data.results.collection1[0].price);
    });
}]);