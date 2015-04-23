'use strict';

angular.module('dailysteals')
    .controller('MainController', ['api', function (api) {
        var self = this;
        api.woot.then(function (data) {
            self.wootData = data.results;
        });
    }]);