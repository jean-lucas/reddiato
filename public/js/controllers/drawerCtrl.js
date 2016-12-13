angular.module('drawerCtrl', [])
.controller('drawerController', function($scope) {
  var self = this;
  // set title L
  this.title = "Reddiato";

  this.goTo = function(subreddit) {
    // Create new Tab
    var newTab = $scope.createTab(subreddit[0]);
    $scope.tabs.prepend(newTab);
    $scope.switchContent(subreddit[1]);

    // Close drawer
    $scope.subredditDrawer.trigger('click');
  }


});
