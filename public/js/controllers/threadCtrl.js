angular.module('threadCtrl', [])
    .controller('threadController', function($scope) {
        var self = this;
        // set title L
        this.title = "AJDOASOUDASUODASOUDH!";

        // Set voting variable
        self.userVoted = false;
        self.score = 2312;



        $("#modal").modal('show');

        $scope.upvote = function() {
            if (self.userVoted == 0){
              self.score = self.score + 1;
              self.userVoted = true;
            }else{
              self.score = self.score - 1;
              self.userVoted = false;
            }

        };
        $scope.downvote = function() {
            if (self.userVoted == 0){
              self.score = self.score - 1;
              self.userVoted = true;
            }else{
              self.score = self.score + 1;
              self.userVoted = false;
            }
        };
    });
