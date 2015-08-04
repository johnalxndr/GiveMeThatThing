
'use strict';

angular.module('dailysteals', ['restangular', 'ui.router', 'ui.bootstrap', 'firebase','$http'])
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
//Ebay deals Api 

$(document).ready(function(){
$.ajax({
  type:'GET',
  url:'http://www.ddservice.ebay.com/feeds/new/xml?siteid=2&count=1',
  dataType:'xml',
  success: function(xml){
    var title = $(xml).find('Title').text();
    var image = $(xml).find('ImageURL').text();
    var listprice = $(xml).find('ListPrice').text(); 
    var saleprice = $(xml).find('SalePrice').text();
    var dealUrl = $(xml).find('DealURL').text();  

    $('.title').append(title);
    $('#listprice').append(listprice);
    $('#saleprice').append(saleprice);      
    $('.image').attr('src', image);
    $('#ebay').attr('href', dealUrl);
  }
})
})
    