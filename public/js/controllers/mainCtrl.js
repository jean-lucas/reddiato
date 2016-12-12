angular.module('mainCtrl', [])
	.controller('mainController', function() {
		var self = this;

		this.title = "Reddiato";

		$scope.openThread = function(){
			$('#modal').modal('show');

		};
	});
