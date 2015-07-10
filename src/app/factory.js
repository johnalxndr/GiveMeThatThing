'use strict';

angular.module('dailysteals')

.factory('api', ['Restangular', function (Restangular) {
    return {
        dealgenius: Restangular.one('af2vnwdy').get(),
        woot: Restangular.one('as777lwi').get(),
        wootelectronics: Restangular.one('9ye1jinc').get(),
        wootshirt: Restangular.one('7uigadhy').get(),
        wootsport: Restangular.one('8vsr5cbi').get(),
        woothome: Restangular.one('1wvn1eqw').get(),
        wootcomputers: Restangular.one('ebxbpc0e').get(),
        woottoolsgarden: Restangular.one('42u4f4ew').get(),
        amazon:Restangular.one('3oned4iq').get(),
        yugster:Restangular.one('d5ww42ru').get()
    };
}])
.factory('wootapi', ['Restangular', function (Restangular) {
    
}])
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