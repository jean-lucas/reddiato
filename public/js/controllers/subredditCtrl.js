angular.module('subredditCtrl', [])
	.controller('subredditController', function($scope) {
		var self = this;

		this.title = "Reddiato";

		$scope.openThread = function(){
			$('#modal').modal('show');
		};
	});
