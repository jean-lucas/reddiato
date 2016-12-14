angular.module('subredditCtrl', [])
.controller('subredditController', function($scope, $timeout) {
	var self = this;

	// this.currentUserId = 0; // index to allUsers array

		//open a user tab page
  this.goToUserPage = function(ind) {

      if (typeof(ind) == 'string') {
				for (var i = 0; i < $scope.allUsers.length; i++) {
          if ($scope.allUsers[i].username == ind) {
            $scope.currentUserId = i;
            break;
          }
        }
      }
      else {
        $scope.currentUserId = ind;
      }

      var uName = $scope.allUsers[$scope.currentUserId].username;
      var newTab = $scope.createTab("/u/"+ uName);
      $scope.tabs.prepend(newTab);
			$scope.switchContent("/u/"+ uName);
		}

	$scope.openNewThread = function(){
		$('#newThreadModal').modal('show');
	};

	this.selectedThread = -1;

	this.viewThread = function(index) {
		$("#viewThreadModal").modal('show');
		self.selectedThread = index;
	};

	this.userVoted = false;
	this.upvote = function($event, index) {
		if (typeof index == 'undefined') {
			index = self.selectedThread;
		}
    if ($('.down-arrow-select').length === 0 ) {
			if (!self.userVoted) {
				self.frontPosts[index]['votes'] ++;
				self.userVoted = true;
			} else {
				self.frontPosts[index]['votes'] --;
				self.userVoted = false;
			}
			// toggle color class
			$($event.currentTarget).toggleClass("up-arrow-select");
		}
	};

	this.downvote = function($event, index) {
		if (typeof index == 'undefined') {
			index = self.selectedThread;
		}
    if ($('.up-arrow-select').length === 0 ) {
			if (!self.userVoted) {
				self.frontPosts[index]['votes'] --;
				self.userVoted = true;
			} else {
				self.frontPosts[index]['votes'] ++;
				self.userVoted = false;
			}
			// toggle color class
			$($event.currentTarget).toggleClass("down-arrow-select");
		}
	};

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
	$scope.show = true;
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

	this.frontPosts = [
		{
			name: "Someone isn't to be trusted",
			img: 'http://i.imgur.com/Rg4zkoN.jpg?1',
			user: 'GallowBoob',
			subreddit: '/r/aww',
			timeSincePost: '5 hours',
			votes: 7223,
			numComments: 176
		},
		{
			name: 'Birth of a Veterinarian',
			img: 'https://i.redd.it/bj70zjl196kx.jpg',
			user: 'Auggernaut88',
			subreddit: '/r/funny',
			timeSincePost: '7 hours.',
			votes: 63867,
			numComments: 2382
		},
		{
			name: 'Dunkirk - Official Poster',
			img: 'http://www.dunkirkmovie.com/assets/images/gallery/poster.jpg',
			user: 'annekar',
			subreddit: '/r/movies',
			timeSincePost: '8 hours',
			votes: 37356,
			numComments: 2160
		},
		{
			name: 'Ski resort in Skeikampen Norway',
			img: 'http://i.imgur.com/q7rBB8Y.jpg',
			user: 'iBleeedorange',
			subreddit:'/r/pics',
			timeSincePost:'22 hours',
			votes:9631,
			numComments:145
		},
		{
			name: 'This landscape looks like a real life version of a Halo Reach map',
			img: 'http://i.imgur.com/dWTKNtv.jpg',
			user: 'dustofoblivion123',
			subreddit:'/r/pics',
			timeSincePost:'1 day',
			votes:7108,
			numComments:152
		},
		{
			name: 'Just a peek',
			img: 'https://i.redd.it/cfw21jscl03y.jpg',
			user: 'Business__Socks',
			subreddit:'/r/pics',
			timeSincePost:'1 day',
			votes:4892,
			numComments:38
		},
		{
			name: "LPT If you're having trouble gifting for a person, tell them you've already gotten them something amazing and have them try and guess what it is",
			user: "Dingo_shark",
			subreddit: '/r/LifeProTips',
			timeSincePost: '1 hour',
			votes: '7',
			numComments: '175'
		},
		{
			name: "I'm Dmitry Glukhovsky, the author of Metro 2033, base of the Metro video games. My new novel Metro 2035 has just come out. AMA!",
			user: "DmitryGlukhovsky",
			subreddit: "/r/books",
			timeSincePost: "6 hours",
			votes: 2162,
			numComments: 369
		},
		{
			name: "ELI5: How do radio stations know how many listeners they have?",
			user: "Dre_wj",
			subreddit: "/r/explainlikeimfive",
			timeSincePost: "13 hours",
			votes:6738,
			numComments: 668
		},
		{
			name: "30yo, 40k debt, No assets, No job. So overwhelmed don't know what to do.",
			user: "kushybushy12345678",
			subreddit: "/r/personalfinance",
			timeSincePost: "10 hours",
			votes: 2154,
			numComments: 544
		},
		{
			name: "Reddit, What's the Best White Elephant / Gag Gift That You've Ever Seen?",
			user: "calikings20",
			subreddit: "/r/AskReddit",
			timeSincePost: "15 hours",
			votes: 15495,
			numComments: 7703
		},
		{
			name: "The commission on the Sistine Chapel was 3000 ducats. The tomb of Pope Julius II was 10,000 ducats.",
			user: "HirsuiteHeathen",
			subreddit: "/r/history",
			timeSincePost: "7 hours",
			votes: 1040,
			numComments: 89
		}

	];

});
