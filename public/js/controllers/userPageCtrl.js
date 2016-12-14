angular.module('userPageCtrl', [])



	.controller('userPageCtrl',  function($scope){
		var self = this;

		this.userName = "username";

		this.toggleVal;
		this.selected = true;

		this.startChat = function(name) {

			var chatObj = {
				"id" : $scope.chatList.length,
				"name" :  name,
				"chat" : []
			}
		
			$scope.chatList.push(chatObj);	
			$scope.activeChatId = $scope.chatList.length;


		}

	})
