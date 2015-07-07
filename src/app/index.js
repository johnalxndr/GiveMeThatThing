'use strict';

angular.module('dailysteals', ['restangular', 'ui.router', 'ui.bootstrap', 'firebase'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'app/main/main.html',
                controller: 'MainCtrl',
                controllerAs: 'main'
            });

        $urlRouterProvider.otherwise('/');
    })
    .config(function (RestangularProvider) {
        RestangularProvider.setBaseUrl('https://www.kimonolabs.com/api/');
        RestangularProvider.setDefaultRequestParams({
            apikey: 'lxZzI5UKXbWL2JK3DL0U2g2uCfMjFUgd',
        });
    });
//Ebay API 
$(document).ready(function(){
$.ajax({
  type:'GET',
  url:'http://www.ddservice.ebay.com/feeds/new/xml?siteid=2&count=6',
  dataType:'xml',
  success: function(xml){
    var title = $(xml).find('Title').text();
    var image = $(xml).find('ImageURL').text();
    console.log(xml);
    console.log(title);
    $('.title').append(title);
    $('.image').attr('src', image);
  }
})
})
    