angular.module('newThreadCtrl', [])
    .controller('newThreadController', function($scope) {
        var self = this;
        $scope.selected = false;
        self.go = function() {
            $scope.selected = !$scope.selected;
        }
        $scope.submitThread = function() {

            postup = true;
            // check all items
            postup = postup && $scope.checkValid("title", "");
            postup = postup && $scope.checkValid("subreddit", "");
            if (!$scope.selected) {
                // link
                postup = postup && $scope.checkValid("link", "");
            } else {
                // text
                postup = postup && $scope.checkValid("text", "");
            }

            if (postup) {
                self.type = "";
                self.text = null;
                self.link = null;
                if (!$scope.selected) {
                    self.element_type = "link";
                    self.link = $("#link").val();
                } else {
                    self.type = "text";
                    self.text = $("#text").val();
                }
                $scope.allUsers[0]["posts"].unshift({
                    title: $("#title").val(),
                    type: self.type,
                    link: self.link,
                    text: self.text,
                    date: new Date(),
                    numVotes: 0,
                    numComments: 0
                });
                // clear field values
                $("#title").val("");
                $("#link").val("");
                $("#text").val("");
                $("#subreddit").val("");
                // remove modal from the screen
                $("#newThreadModal").modal('hide');




            }
        };

        // Check if the item is valid based on a string comparison of two fiven items
        // arg 1: id of the field
        // arg 2: expected value (often left as empty strign for null check)
        $scope.checkValid = function(id, expected) {

            if ($("#".concat(id)).val() === expected) {
                $("#".concat(id)).addClass("border-red");
                return false
            }
            $("#".concat(id)).removeClass("border-red");

            return true;
        };
        //
        // $("#newThreadModal").modal('show');


    }).filter('filterArray', function($filter) {
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
