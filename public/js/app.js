angular.module('reddiato', ['ngRoute', 'mainCtrl', 'drawerCtrl' ,'threadCtrl', 'chatCtrl','userPageCtrl'])


.config(function($routeProvider, $locationProvider){
	$routeProvider

	.when('/', {
		templateUrl: '/index.html'
	})

	.otherwise({
		templateUrl: '/views/error.html'
	});

	// $locationProvider.html5Mode(true);

})

.directive('rFront', function() {
	return {
		restrict: 'A',
		templateUrl: '../views/rFront.html'
	}
})

.directive('rPics', function() {
	return {
		restrict: 'A',
		templateUrl: '../views/rPics.html'
	}
})

.directive('drawerSection', function() {
	return {
		restrict: 'A',
		templateUrl: '../views/drawer.html'
	}
})


.directive('newThread', function() {
	return {
		restrict: 'A',
		templateUrl: '../views/newThread.html'
	}
})

.directive('userPage', function() {
	return {
		restrict: 'A',
		templateUrl: '../views/userPage.html'
	}
})


.directive('chatModule', function() {
	return {
		restrict: 'A',
		templateUrl: '../views/chatModule.html'
	}
});
