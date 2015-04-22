app.factory('forecast', ['$http', function ($http) {
    return $http.get('woot.json')
        .success(function (data) {
            return data;
        })
        .error(function (err) {
            return err;
        });
}]);