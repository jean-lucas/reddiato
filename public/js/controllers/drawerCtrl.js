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


})

.filter('filterArray', function($filter){
  return function(list, arrayFilter) {
    if (arrayFilter) {
      return $filter("filter")(list, function(listItem) {
        return listItem[0].includes(arrayFilter);
      });
    } else {
      return list;
    }

    }
});
