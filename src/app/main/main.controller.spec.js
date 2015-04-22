'use strict';

describe('controllers', function () {
    var scope;

    beforeEach(module('dailysteals'));

    beforeEach(inject(function ($rootScope) {
        scope = $rootScope.$new();
    }));

    it('should define more than 5 sites', inject(function ($controller) {
        expect(scope.sites).toBeUndefined();

        $controller('MainCtrl', {
            $scope: scope
        });

        expect(angular.isArray(scope.sites)).toBeTruthy();
        expect(scope.sites.length > 5).toBeTruthy();
    }));
});