angular.module('threadCtrl', [])
    .controller('threadController', function($scope) {
        var self = this;
        // set title L
        this.title = "AJDOASOUDASUODASOUDH!";
        $scope.comments = [{
            "username": "plukovga",
            "comment": "Do you think he got into that job excited about hundreds of strangers probing his rectum, or did he just shrug his shoulders and figure \"eh it\'s a job, beats retail anyways\"Haven't decided which one is funnier to me",
            score: 1136,
            timesince: "1 day",
            hidden: false
        }, {
            "username": "usertwo.name",
            "comment": "Do you think he got into that job excited about hundreds of strangers probing his rectum, or did he just shrug his shoulders and figure \"eh it\'s a job, beats retail anyways\"Haven't decided which one is funnier to me",
            score: 745,
            timesince: "22 hours",
            hidden: false
        }, {
            "username": "usertwo.name",
            "comment": "Do you think he got into that job excited about hundreds of strangers probing his rectum, or did he just shrug his shoulders and figure \"eh it\'s a job, beats retail anyways\"Haven't decided which one is funnier to me",
            score: 745,
            timesince: "22 hours",
            hidden: false
        }, {
            "username": "usertwo.name",
            "comment": "Do you think he got into that job excited about hundreds of strangers probing his rectum, or did he just shrug his shoulders and figure \"eh it\'s a job, beats retail anyways\"Haven't decided which one is funnier to me",
            score: 745,
            timesince: "22 hours",
            hidden: false
        }, {
            "username": "usertwo.name",
            "comment": "Do you think he got into that job excited about hundreds of strangers probing his rectum, or did he just shrug his shoulders and figure \"eh it\'s a job, beats retail anyways\"Haven't decided which one is funnier to me",
            score: 745,
            timesince: "22 hours",
            hidden: false
        }];
        // Define new comment items
        $scope.commentError = "";
        $scope.newcomment = {
            "username": "",
            "comment": ""
        };
        // Set voting variable
        self.userVoted = false;
        self.score = 1226;
        $scope.show = true;
        $("#viewThreadModal").modal('show');

        $scope.upvote = function() {
            if (self.userVoted == 0) {
                self.score = self.score + 1;
                self.userVoted = true;
            } else {
                self.score = self.score - 1;
                self.userVoted = false;
            }
            // toggle color class
        };

        $scope.downvote = function() {
            if (self.userVoted == 0) {
                self.score = self.score - 1;
                self.userVoted = true;
            } else {
                self.score = self.score + 1;
                self.userVoted = false;
            }
            // toggle color class
        };

        // Minimize the comments
        $scope.minimize = function(index) {
            $scope.show = !$scope.show;
            $scope.comments[index].hidden = !$scope.comments[index].hidden;

        };
        $scope.submit = function() {
            if ($scope.newcomment.comment !== "") {
              
            } else {
                $scope.commentError = "Comment cannot be left empty";
            }
        };
    });
