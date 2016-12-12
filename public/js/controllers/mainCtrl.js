angular.module('mainCtrl', [])
	.controller('mainController', function($scope) {
		var self = this;

		this.title = "Reddiato";


		//open a user tab page
		this.goToUserPage = function() {
			var newTab = $scope.createTab("My Account");
		    $scope.tabs.prepend(newTab);
		    $scope.switchContent("My Account");
		}

		$scope.openThread = function(){
			$('#modal').modal('show');

		};
	});
