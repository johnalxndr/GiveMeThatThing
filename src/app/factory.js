'use strict';

angular.module('dailysteals')

// Global configuration
.config(function(RestangularProvider) {
   RestangularProvider.setBaseUrl('http://api.woot.com/2/events.json?site=www.woot.com&eventType=Daily&key=aec95152c1c742328ccfb666ffe29e61');
})

.factory('Auth', function($firebaseObject){
		var auth = new Firebase('https://givemethatthing.firebaseio.com/');
		var currentUser = {};	
	return {
		onAuth: function(creds){
			auth.onAuth(function(data){
				creds(updateUser(data));
			});
		},
		fbLogin: function(){
		
			return auth.authWithOAuthPopup('facebook', function(error, authData){
			if (error) {
			console.log('Login Failed!', error);
			} else {
				console.log('Authenticated successfully with payload, authData');
			}
			}, {remember: 'sessionOnly'});
		},
		logout: function(){
			auth.unauth();
			console.log('goodbye');
		},
		loggedIn: function(){
			if(auth.getAuth()){
				return true;
			} else {
				console.log('nope');
			}
		}	
	};
	function updateUser(authdUser){
	if ( authdUser === null){
		return null;	
	}
	//set facebook user as child of users
	var user = auth.child('users').child(authdUser.facebook.id);
	
	//sending to firebase
	user.update({
		fb: authdUser.facebook,
		uid: authdUser.facebook.id,
		fullName: authdUser.facebook.displayName
	});
	user = $firebaseObject(auth.child('users').child(authdUser.facebook.id));
	return user;
	}
	});