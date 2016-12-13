angular.module('threadCtrl', [])
    .controller('threadController', function($scope) {
        var self = this;

        $scope.comments = [{
            "username": "Kristin_nostrud",
            "comment": "On a similar thought, the word 'truth' has lost all meaning. What one holds to be true is now more a matter of belief rather than a matter of fact. Any point that contradicts the story being told is regarded as the truth.",
            score: 1136,
            timesince: "1 day",
            hidden: false
        }, {
            "username": "Francesca_fugiat",
            "comment": "It's because 'News' and 'Entertainment' are no longer separate concepts.",
            score: 745,
            timesince: "22 hours",
            hidden: false
        }, {
            "username": "Ladonna_labore",
            "comment": "Blame the people who pay nothing and expect quality",
            score: 745,
            timesince: "22 hours",
            hidden: false
        }, {
            "username": "Emerson_ad",
            "comment": "Not weird at all... Sensational/dirty journalism has been around for centuries. The fact that people are aware of it now and have more resources to fact check doesn't change that",
            score: 745,
            timesince: "22 hours",
            hidden: false
        }, {
            "username": "Lydia_adipisicing",
            "comment": "What really boils my blood is seeing Celebrity Activists bemoan the culture of clickbait and fake news on the Internet, meanwhile all their social media pages have been sold to third party ad agencies that spam nothing but fake news and clickbait. George Takei is probably the worst offender for this.",
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


            if ($('.down-arrow-select').length === 0 ) {
              $("#uparrow").toggleClass("up-arrow-select");
                if (self.userVoted) {
                    self.score = self.score - 1;
                    self.userVoted = false;
                } else {
                    self.score = self.score + 1;
                    self.userVoted = true;
                }
                // toggle color class
            }
        };

        $scope.downvote = function() {

            if ($('.up-arrow-select').length === 0) {
              console.log(self.userVoted);
                if (self.userVoted) {
                    self.score = self.score + 1;
                    self.userVoted = false;
                } else {
                    self.score = self.score - 1;
                    self.userVoted = true;
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
