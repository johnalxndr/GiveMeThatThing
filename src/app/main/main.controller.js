'use strict';

angular.module('dailysteals',[])

.controller('MainCtrl', ['$http','$scope',
	function ($http,$scope) {
        var wootDaily = {
      method: 'Get',
      url: "http://api.woot.com/2/events.json?site=www.woot.com&eventType=Daily&key=aec95152c1c742328ccfb666ffe29e61"
    }
    $http(wootDaily)
      .success(function(response) {
        $scope.title = response[0].Offers[0].Title;
        $scope.image = response[0].Offers[0].Photos[0].Url
        $scope.url = response[0].Offers[0].Url
        $scope.writeup = response[0].Offers[0].WriteUp
      });
//Slow Scroll 
        $(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 750);
        return false;
      }
    }
  });
});
//End Slow Scroll         
    
  
}]);