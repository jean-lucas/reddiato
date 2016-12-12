angular.module('subredditCtrl', [])
	.controller('subredditController', function($scope) {
		var self = this;

		this.title = "Reddiato";


		this.currentUserId = 0; // index to allUsers array

		//open a user tab page
		this.goToUserPage = function() {
			var newTab = $scope.createTab(self.allUsers[self.currentUserId].username);
		    $scope.tabs.prepend(newTab);
		    $scope.switchContent(self.allUsers[self.currentUserId].username);
		}

		$scope.openThread = function(){
			$('#modal').modal('show');
		};









		// List of users

		this.allUsers = [
			{
				"username" : "dog",
				'id' : 0,
				"karma" : 1000,
				"memberSince" : new Date(),
				"comments" : ["1","2","3"],
				"posts" : ["a","b","c"]
			},

			{
				"username" : "cat",
				'id' : 1,
				"karma" : 1000,
				"memberSince" : new Date(),
				"comments" : ["1","2","3"],
				"posts" : ["a","b","c"]
			},

			{
				"username" : "bill",
				'id' : 2,
				"karma" : 1000,
				"memberSince" : new Date(),
				"comments" : ["1","2","3"],
				"posts" : ["a","b","c"]
			},

			{
				"username" : "bob",
				'id' : 3,
				"karma" : 1000,
				"memberSince" : new Date(),
				"comments" : ["1","2","3"],
				"posts" : ["a","b","c"]
			},

			{
				"username" : "dude",
				'id' : 4,
				"karma" : 1000,
				"memberSince" : new Date(),
				"comments" : ["1","2","3"],
				"posts" : ["a","b","c"]
			}
		]
	});
