'use strict';

angular.module('dailysteals', ['restangular','ui.router', 'ui.bootstrap', 'firebase'])
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

    $('.title').append(title);
    $('#listprice').append(listprice);
    $('#saleprice').append(saleprice);      
    $('.image').attr('src', image);
  }
})
})
    