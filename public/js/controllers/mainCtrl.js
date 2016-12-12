angular.module('mainCtrl', [])
	.controller('mainController', function($scope) {
		var self = this;

		this.title = "Reddiato";

		$scope.openThread = function(){
			$('#modal').modal('show');
		};
	});
