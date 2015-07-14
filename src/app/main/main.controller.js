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
        
        api.woot.then(function (data) {
        self.wootData = data.results.collection1[0];
    });
}])