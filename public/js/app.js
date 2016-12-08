angular.module('reddiato', ['ngRoute', 'mainCtrl', 'threadCtrl'])


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


	.directive('homeSection', function() {
		return {
			restrict: 'A',
			templateUrl: '../views/home.html'
		}
	})

	.directive('tempSection', function() {
		return {
			restrict: 'A',
			templateUrl: '../views/temp.html'
		}
	});
