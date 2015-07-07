'use strict';

angular.module('dailysteals')

.controller('MainCtrl', ['api', 'Auth', '$firebaseArray','$firebaseObject',
	function (api, Auth, $firebaseArray, $firebaseObject) {
    var self = this;
   
//Slow Scroll 
        $(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
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
  
//Facebook Log in         
	this.loginbox = true;
	this.logout = Auth.logout;
	Auth.onAuth(function(user){
		self.user = user;
	if (user === null){
		console.log('null');
	} else {
		console.log(user);
	}
	});
	if (this.user){
		this.loginbox = false;
	}
var userInfo = new Firebase('https://givemethatthing.firebaseio.com/users');
 
	this.obj = $firebaseArray(userInfo);
	console.log(this.obj);

	this.userArray = {};
	
	this.fbLogin = Auth.fbLogin;
    
//End FB Log in      
        
//Start Kimono API Call        
        api.woot.then(function (data) {
        self.wootData = data.results.collection1[0];
    });
        api.dealgenius.then(function (data) {
        self.dealgeniusData = data.results.collection1[0];        
    });
        api.wootshirt.then(function (data) {
        self.wootShirtData = data.results.collection1[0]; 
    });
        api.woothome.then(function (data) {
        self.wootHomeData = data.results.collection1[0];
    });
        api.wootsport.then(function (data) {
        self.wootSportData = data.results.collection1[0];
    });
       api.wootelectronics.then(function (data) {
        self.wootElectronicsData = data.results.collection1[0];
    });
        api.wootcomputers.then(function (data) {
        self.wootComputersData = data.results.collection1[0];
    });
        api.woottoolsgarden.then(function (data) {
        self.wootToolsGardenData = data.results.collection1[0];
    });
//        api.ebay.then(function (data) {
//        self.ebayData = data.results.collection1[0];  
//    });
        api.amazon.then(function (data) {
        self.amazonData = data.results.collection1[0];  
    });
        api.yugster.then(function (data) {
        self.yugsterData = data.results.collection1[0];  
    });
//        Ebayapi.all('').getList(); 
//        console.log(0)
//End API CALLS     
}])