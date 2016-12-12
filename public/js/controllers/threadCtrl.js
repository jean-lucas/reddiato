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
            "comment": "",
            score: 1,
            timesince: "0 minutes",
            hidden: false
        };
        // Set voting variable
        self.userVoted = false;
        self.score = 1226;
        $scope.show = true;
        // $("#viewThreadModal").modal('show');

        $scope.upvote = function() {
            if ($('.down-arrow-select').length === 0) {

                if (self.userVoted) {
                    self.score = self.score + 1;
                    self.userVoted = true;
                } else {
                    self.score = self.score - 1;
                    self.userVoted = false;
                }
                // toggle color class
                $("#uparrow").toggleClass("up-arrow-select");
            }
        };

        $scope.downvote = function() {
            if ($('.up-arrow-select').length === 0) {

                if (self.userVoted) {
                    self.score = self.score - 1;
                    self.userVoted = true;
                } else {
                    self.score = self.score + 1;
                    self.userVoted = false;
                }
                // toggle color class
                $("#downarrow").toggleClass("down-arrow-select");
                // code
            }
        };

        // Minimize the comments
        $scope.minimize = function(index) {
            $scope.show = !$scope.show;
            $scope.comments[index].hidden = !$scope.comments[index].hidden;

        };
        $scope.submit = function(user) {
            // console.log(username);
            console.log(user)
            if ($scope.newcomment.comment !== "") {


                $scope.newcomment["username"] = user.username;

                console.log($scope.newcomment)
                $scope.comments.push(JSON.parse(JSON.stringify($scope.newcomment)));
                // clear new comment obj
                // $scope.newcomment["username"] = ;
                $scope.newcomment["comment"] = "";
                var objDiv = document.getElementById("comments");
                objDiv.scrollTop = objDiv.scrollHeight;
            } else {
                $scope.commentError = "Comment cannot be left empty";
            }
        };
    });
