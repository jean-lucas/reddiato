angular.module('reddiato', ['ngRoute', 'subredditCtrl', 'drawerCtrl' ,'threadCtrl', 'chatCtrl','userPageCtrl'])


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


.directive('viewThread', function() {
	return {
		restrict: 'A',
		templateUrl: '../views/viewThreadModal.html'
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
