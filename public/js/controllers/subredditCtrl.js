angular.module('subredditCtrl', [])
	.controller('subredditController', function($scope) {
		var self = this;

		this.title = "Reddiato";

		this.currentUser = "/u/bob";

		//open a user tab page
		this.goToUserPage = function() {
			var newTab = $scope.createTab(self.currentUser);
		    $scope.tabs.prepend(newTab);
		    $scope.switchContent(self.currentUser);
		}

		$scope.openThread = function(){
			$('#modal').modal('show');
		};
	});
