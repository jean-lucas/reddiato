angular.module('userPageCtrl', [])



	.controller('userPageCtrl',  function($scope){



		this.do = function(){
			var newTab = $scope.createTab("test");
			$scope.tabs.prepend(newTab);
		};
	})