angular.module('reddiato', ['ngRoute', 'mainCtrl'])


.config(function($routeProvider, $locationProvider){
	  $routeProvider

	  	.when('/', {
	  		templateUrl: '/index.html'
	  	})

	    .otherwise({
	      templateUrl: '/views/error.html'
	    });

	    // $locationProvider.html5Mode(true);

	});
