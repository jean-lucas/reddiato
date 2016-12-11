angular.module('reddiato', ['ngRoute', 'mainCtrl', 'drawerCtrl' ,'threadCtrl'])


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
});
