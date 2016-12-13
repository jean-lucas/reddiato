angular.module('subredditCtrl', [])
	.controller('subredditController', function($scope) {
		var self = this;

		this.title = "Reddiato";


		this.currentUserId = 0; // index to allUsers array

		//open a user tab page
		this.goToUserPage = function(ind) {

      if (typeof(ind) == 'string') {
        for (var i = 0; i < self.allUsers.length; i++) {
          if (self.allUsers[i].username == ind) {
            self.currentUserId = i;
            break;
          }
        }
      }
      else {
        self.currentUserId = ind;
      }

			var uName = self.allUsers[self.currentUserId].username;

			var newTab = $scope.createTab("/u/"+ uName);
		    $scope.tabs.prepend(newTab);
		    $scope.switchContent("/u/"+ uName);
		}




		$scope.openNewThread = function(){
			$('#newThreadModal').modal('show');
		};









		// List of users

		this.allUsers =  [
  {
    "id": 0,
    "username": "ReddiatoUser",
    "karma": 1670,
    "memberSince": "2015-11-07T05:50:26",
    "comments": [
      {
        "originalPost": "fugiat occaecat duis reprehenderit",
        "text": "culpa labore minim labore non culpa cupidatat eiusmod fugiat sint ipsum sint qui tempor magna esse",
        "date": "2016-11-15T02:25:24"
      },
      {
        "originalPost": "irure cillum velit tempor cupidatat",
        "text": "in fugiat incididunt eiusmod qui",
        "date": "2016-07-19T09:27:25"
      },
      {
        "originalPost": "velit minim proident laboris quis",
        "text": "do dolore excepteur dolore pariatur id sint excepteur Lorem aute do voluptate",
        "date": "2014-08-12T08:46:15"
      },
      {
        "originalPost": "cillum culpa nostrud occaecat pariatur",
        "text": "sint est ut reprehenderit cupidatat ea ullamco ad ad irure ex adipisicing laboris laboris officia nulla cillum",
        "date": "2016-01-30T02:38:05"
      },
      {
        "originalPost": "cillum qui culpa laboris aliqua",
        "text": "excepteur nisi non sit nisi sit",
        "date": "2015-02-07T08:27:13"
      },
      {
        "originalPost": "amet tempor incididunt in commodo",
        "text": "proident id in ullamco id non laborum nisi nostrud",
        "date": "2015-05-27T12:50:32"
      },
      {
        "originalPost": "eiusmod nulla aliquip cillum",
        "text": "eiusmod ipsum ex ex exercitation exercitation sit elit fugiat reprehenderit cupidatat ipsum",
        "date": "2014-12-19T08:10:08"
      },
      {
        "originalPost": "nulla incididunt ullamco",
        "text": "est deserunt elit sunt do ea magna aliquip in",
        "date": "2014-03-13T11:47:54"
      },
      {
        "originalPost": "commodo fugiat proident ipsum",
        "text": "laboris dolore aliquip ipsum ullamco laboris veniam voluptate velit amet culpa culpa",
        "date": "2015-03-04T12:35:56"
      },
      {
        "originalPost": "duis amet commodo labore qui",
        "text": "anim ut labore sunt amet mollit deserunt occaecat consectetur incididunt Lorem esse ea in adipisicing laborum eu",
        "date": "2016-08-21T08:08:44"
      },
      {
        "originalPost": "dolor cillum dolor in",
        "text": "sint culpa fugiat quis labore do ipsum",
        "date": "2015-01-09T04:07:18"
      },
      {
        "originalPost": "adipisicing sit cillum",
        "text": "exercitation enim non sint amet aliquip voluptate velit",
        "date": "2015-07-29T06:44:06"
      }
    ],
    "posts": [
      {
        "title": "do adipisicing eiusmod",
        "type": "undefined",
        "text": "labore Lorem cupidatat eu proident elit aliqua voluptate velit fugiat magna est ut eu",
        "date": "2014-10-22T09:14:02",
        "numVotes": 870,
        "numComments": 419
      },
      {
        "title": "laborum mollit amet",
        "type": "undefined",
        "text": "magna nisi consectetur aliqua dolore qui ex officia veniam in proident et eiusmod dolore ut eiusmod",
        "date": "2016-07-26T05:28:01",
        "numVotes": 366,
        "numComments": 437
      },
      {
        "title": "aliquip mollit Lorem deserunt ipsum",
        "type": "undefined",
        "text": "cillum nisi esse officia aliquip commodo laboris esse et et sint nulla elit id anim in",
        "date": "2016-02-23T07:37:09",
        "numVotes": 861,
        "numComments": 544
      },
      {
        "title": "minim qui ex in",
        "type": "undefined",
        "text": "incididunt quis anim ut pariatur ex cupidatat tempor cupidatat",
        "date": "2016-10-05T02:31:14",
        "numVotes": 126,
        "numComments": 958
      }
    ]
  },
  {
    "id": 1,
    "username": "Kristin_nostrud",
    "karma": 681,
    "memberSince": "2015-06-13T09:39:13",
    "comments": [
      {
        "originalPost": "cupidatat voluptate est",
        "text": "esse ex pariatur ullamco minim cupidatat ea id",
        "date": "2015-11-11T11:30:04"
      },
      {
        "originalPost": "non quis reprehenderit",
        "text": "et fugiat dolore id incididunt",
        "date": "2016-08-18T01:28:32"
      },
      {
        "originalPost": "veniam et enim laborum",
        "text": "officia ea duis in incididunt magna cupidatat nisi non exercitation dolor",
        "date": "2014-12-31T07:02:36"
      }
    ],
    "posts": [
      {
        "title": "sint non duis",
        "type": "undefined",
        "text": "labore ad ipsum laborum enim nostrud proident nisi minim consectetur duis irure ea non eiusmod commodo elit",
        "date": "2014-01-14T08:45:18",
        "numVotes": 988,
        "numComments": 855
      },
      {
        "title": "duis labore irure",
        "type": "undefined",
        "text": "minim esse duis ex nulla nostrud sit eiusmod dolore culpa consectetur commodo",
        "date": "2014-06-07T01:24:12",
        "numVotes": 444,
        "numComments": 690
      },
      {
        "title": "ullamco nostrud mollit reprehenderit",
        "type": "undefined",
        "text": "aliquip proident labore sit adipisicing do ipsum consequat ea id mollit ipsum qui cillum do Lorem esse",
        "date": "2014-05-20T10:22:21",
        "numVotes": 855,
        "numComments": 603
      }
    ]
  },
  {
    "id": 2,
    "username": "Francesca_fugiat",
    "karma": 1508,
    "memberSince": "2016-09-01T07:35:32",
    "comments": [
      {
        "originalPost": "eiusmod velit eiusmod qui",
        "text": "ut proident irure eu consectetur exercitation consequat esse mollit",
        "date": "2014-12-07T10:46:02"
      },
      {
        "originalPost": "exercitation cillum proident proident",
        "text": "est pariatur ad voluptate aliqua exercitation proident in commodo laborum et tempor sit duis",
        "date": "2016-07-14T12:21:16"
      },
      {
        "originalPost": "laboris quis consectetur laboris elit",
        "text": "nostrud voluptate velit veniam eu aliquip",
        "date": "2015-03-22T01:41:09"
      },
      {
        "originalPost": "minim commodo aliqua laboris",
        "text": "ut labore eiusmod minim elit duis",
        "date": "2015-05-05T02:36:21"
      },
      {
        "originalPost": "esse sit nostrud culpa velit",
        "text": "mollit enim consequat aliquip laboris fugiat ut non minim et occaecat est exercitation excepteur voluptate ullamco nulla",
        "date": "2014-09-05T02:26:44"
      },
      {
        "originalPost": "voluptate sit duis sunt",
        "text": "sunt nulla commodo amet qui minim excepteur sit tempor non minim commodo id reprehenderit",
        "date": "2014-08-24T07:32:17"
      },
      {
        "originalPost": "et ullamco occaecat Lorem ex",
        "text": "esse exercitation esse nulla qui dolor minim eu reprehenderit voluptate commodo minim fugiat laborum anim excepteur magna",
        "date": "2015-04-23T11:26:58"
      },
      {
        "originalPost": "sit cillum ad excepteur",
        "text": "ipsum occaecat ad et incididunt aliquip",
        "date": "2016-10-20T04:34:50"
      },
      {
        "originalPost": "exercitation laborum adipisicing sunt",
        "text": "qui deserunt exercitation amet fugiat est incididunt ut",
        "date": "2016-05-17T08:34:07"
      }
    ],
    "posts": [
      {
        "title": "eiusmod consequat laborum",
        "type": "undefined",
        "text": "mollit magna in proident incididunt non et reprehenderit tempor do",
        "date": "2014-12-11T08:02:42",
        "numVotes": 771,
        "numComments": 727
      },
      {
        "title": "et nostrud excepteur occaecat sit",
        "type": "undefined",
        "text": "ex magna fugiat pariatur laboris laboris",
        "date": "2014-12-26T08:57:21",
        "numVotes": 454,
        "numComments": 842
      },
      {
        "title": "irure commodo anim",
        "type": "undefined",
        "text": "laboris excepteur veniam laborum qui cillum tempor aliquip non est labore officia aliquip aliquip",
        "date": "2015-08-15T09:43:51",
        "numVotes": 980,
        "numComments": 938
      },
      {
        "title": "id quis mollit velit",
        "type": "undefined",
        "text": "elit eiusmod minim ullamco sint ipsum minim dolor esse cupidatat sint dolor eu minim Lorem",
        "date": "2015-01-01T07:37:22",
        "numVotes": 268,
        "numComments": 446
      },
      {
        "title": "proident magna proident tempor minim",
        "type": "function (){return!!Math.floor(2*Math.random())}",
        "text": "esse deserunt culpa laborum culpa mollit qui enim magna minim fugiat esse duis",
        "date": "2016-07-19T05:33:51",
        "numVotes": 524,
        "numComments": 795
      }
    ]
  },
  {
    "id": 3,
    "username": "Ladonna_labore",
    "karma": 72,
    "memberSince": "2016-03-07T03:26:53",
    "comments": [
      {
        "originalPost": "et commodo deserunt",
        "text": "aute incididunt ex mollit laboris eiusmod aliqua voluptate sunt",
        "date": "2014-03-04T05:19:39"
      },
      {
        "originalPost": "dolore commodo incididunt",
        "text": "tempor Lorem ut id officia",
        "date": "2015-04-06T04:13:28"
      },
      {
        "originalPost": "irure ad minim esse et",
        "text": "cillum veniam eiusmod mollit reprehenderit velit",
        "date": "2015-01-15T04:49:31"
      },
      {
        "originalPost": "cillum cupidatat deserunt",
        "text": "eiusmod aliquip nisi consequat eu Lorem deserunt adipisicing commodo fugiat ipsum sunt cupidatat labore",
        "date": "2014-06-06T06:15:21"
      },
      {
        "originalPost": "enim dolor elit nisi",
        "text": "Lorem consequat exercitation nostrud nulla duis ex nostrud veniam et laborum consequat dolor sunt adipisicing sit",
        "date": "2014-05-20T08:36:59"
      },
      {
        "originalPost": "aliquip quis enim velit sint",
        "text": "deserunt ea proident consectetur mollit irure aute",
        "date": "2015-01-07T09:22:58"
      }
    ],
    "posts": [
      {
        "title": "ullamco officia laborum enim",
        "type": "undefined",
        "text": "elit tempor sunt nulla tempor nisi",
        "date": "2015-11-12T08:26:13",
        "numVotes": 991,
        "numComments": 494
      },
      {
        "title": "amet sunt consectetur aute",
        "type": "function (){return!!Math.floor(2*Math.random())}",
        "text": "voluptate enim incididunt cillum laborum adipisicing ad",
        "date": "2014-09-27T06:05:34",
        "numVotes": 359,
        "numComments": 457
      },
      {
        "title": "enim sint ut",
        "type": "undefined",
        "text": "veniam ullamco consequat pariatur ut",
        "date": "2015-02-07T06:34:08",
        "numVotes": 658,
        "numComments": 155
      },
      {
        "title": "proident adipisicing aliquip est cupidatat",
        "type": "undefined",
        "text": "veniam id nisi labore dolor voluptate incididunt anim voluptate tempor eiusmod non exercitation elit et ex",
        "date": "2016-04-04T08:41:14",
        "numVotes": 731,
        "numComments": 551
      },
      {
        "title": "ea excepteur eiusmod sit ad",
        "type": "undefined",
        "text": "mollit ad cillum voluptate cupidatat elit ut in ullamco",
        "date": "2015-01-03T03:17:12",
        "numVotes": 315,
        "numComments": 307
      },
      {
        "title": "duis laborum cillum ad",
        "type": "undefined",
        "text": "Lorem voluptate quis commodo enim minim non laborum pariatur non fugiat quis",
        "date": "2014-12-24T08:23:20",
        "numVotes": 687,
        "numComments": 125
      },
      {
        "title": "occaecat aliquip velit ex",
        "type": "undefined",
        "text": "ullamco consequat mollit aliqua quis officia proident laboris fugiat minim officia nostrud laboris elit laboris ipsum Lorem",
        "date": "2016-11-26T07:09:17",
        "numVotes": 367,
        "numComments": 391
      }
    ]
  },
  {
    "id": 4,
    "username": "Emerson_ad",
    "karma": 842,
    "memberSince": "2016-01-20T09:02:11",
    "comments": [
      {
        "originalPost": "laborum duis ex dolore",
        "text": "sit ex anim quis tempor tempor dolore",
        "date": "2016-06-17T10:17:52"
      },
      {
        "originalPost": "ipsum et ipsum proident minim",
        "text": "sunt excepteur sunt proident esse",
        "date": "2014-05-31T06:18:16"
      },
      {
        "originalPost": "amet eiusmod est",
        "text": "mollit proident Lorem non Lorem cillum quis consectetur id ut irure labore culpa ad non commodo ipsum",
        "date": "2014-11-25T12:00:27"
      },
      {
        "originalPost": "id eu enim ad",
        "text": "est tempor elit mollit aliquip ex ullamco veniam elit magna occaecat voluptate culpa",
        "date": "2015-11-25T05:05:27"
      },
      {
        "originalPost": "minim nostrud eiusmod eu veniam",
        "text": "mollit sunt sit commodo velit",
        "date": "2016-03-08T03:53:59"
      },
      {
        "originalPost": "veniam voluptate cupidatat",
        "text": "est dolor veniam exercitation nisi aute minim aliqua incididunt laborum et mollit",
        "date": "2016-04-01T08:41:35"
      },
      {
        "originalPost": "occaecat pariatur excepteur est veniam",
        "text": "consequat laborum tempor nulla aute eiusmod occaecat sunt ad dolor elit deserunt aliqua ipsum sunt",
        "date": "2016-10-21T06:05:18"
      },
      {
        "originalPost": "elit Lorem nulla",
        "text": "do ullamco sit consectetur nostrud sit est pariatur",
        "date": "2016-02-03T12:12:42"
      },
      {
        "originalPost": "deserunt laborum nulla",
        "text": "ex voluptate dolor voluptate laboris exercitation ut quis",
        "date": "2015-12-05T09:22:04"
      },
      {
        "originalPost": "ad pariatur proident et",
        "text": "aliquip magna anim labore exercitation mollit dolore magna id ea labore laborum",
        "date": "2016-03-20T02:16:46"
      }
    ],
    "posts": [
      {
        "title": "amet anim ex ut",
        "type": "undefined",
        "text": "proident ad et anim ad ipsum non anim sint ad ad irure aliquip nulla nostrud dolor aliquip",
        "date": "2015-05-13T07:03:02",
        "numVotes": 585,
        "numComments": 385
      },
      {
        "title": "ex non sint ad",
        "type": "undefined",
        "text": "nostrud mollit in dolore proident excepteur veniam",
        "date": "2016-01-23T03:38:07",
        "numVotes": 141,
        "numComments": 532
      },
      {
        "title": "officia incididunt dolor est",
        "type": "undefined",
        "text": "occaecat aute anim ullamco est eu mollit dolore non voluptate in occaecat commodo Lorem aute voluptate nisi",
        "date": "2014-07-20T09:30:39",
        "numVotes": 701,
        "numComments": 335
      },
      {
        "title": "duis non consectetur consectetur dolor",
        "type": "undefined",
        "text": "fugiat deserunt eu dolor ut quis aliqua anim dolor reprehenderit dolor aliqua proident esse consectetur non",
        "date": "2016-08-16T09:27:28",
        "numVotes": 173,
        "numComments": 777
      }
    ]
  },
  {
    "id": 5,
    "username": "Lydia_adipisicing",
    "karma": 421,
    "memberSince": "2015-12-17T02:23:10",
    "comments": [
      {
        "originalPost": "nulla non Lorem cillum",
        "text": "tempor minim ad reprehenderit nisi dolor irure duis ut ea id pariatur consectetur",
        "date": "2014-07-14T08:47:49"
      },
      {
        "originalPost": "mollit irure nostrud ex",
        "text": "irure sint culpa in elit nostrud ex esse culpa",
        "date": "2015-10-09T07:37:34"
      },
      {
        "originalPost": "ex officia sunt",
        "text": "aliqua dolor quis anim non officia occaecat quis enim irure ullamco in",
        "date": "2014-09-02T02:49:23"
      },
      {
        "originalPost": "quis cillum eiusmod voluptate elit",
        "text": "Lorem nostrud in voluptate et incididunt qui commodo laboris magna laborum consectetur minim velit veniam ea",
        "date": "2014-10-14T03:04:05"
      },
      {
        "originalPost": "ex sunt officia",
        "text": "anim qui incididunt nisi aliqua excepteur adipisicing sint",
        "date": "2015-09-20T05:48:00"
      },
      {
        "originalPost": "quis esse adipisicing",
        "text": "dolor qui aliqua duis cillum aute dolore reprehenderit laborum ex irure consequat velit duis incididunt",
        "date": "2014-12-14T09:59:57"
      },
      {
        "originalPost": "elit ipsum laborum ea",
        "text": "deserunt do sunt aliqua commodo reprehenderit labore amet velit pariatur nostrud",
        "date": "2015-12-17T07:20:02"
      },
      {
        "originalPost": "irure enim enim qui est",
        "text": "magna tempor magna in nostrud velit",
        "date": "2014-10-06T01:05:14"
      },
      {
        "originalPost": "qui Lorem incididunt",
        "text": "elit do sint nulla aliquip veniam incididunt Lorem Lorem duis aute velit proident ad consequat",
        "date": "2014-05-21T11:41:46"
      },
      {
        "originalPost": "cillum officia laborum",
        "text": "sint id veniam esse eiusmod magna dolor est cillum cupidatat",
        "date": "2016-10-16T02:59:27"
      }
    ],
    "posts": [
      {
        "title": "exercitation tempor do est cillum",
        "type": "undefined",
        "text": "anim nulla ullamco laborum cillum ut qui proident aute proident",
        "date": "2015-11-20T05:24:41",
        "numVotes": 327,
        "numComments": 787
      },
      {
        "title": "eu eiusmod velit Lorem et",
        "type": "undefined",
        "text": "cupidatat veniam ex quis non dolor et",
        "date": "2015-03-14T04:44:05",
        "numVotes": 435,
        "numComments": 433
      },
      {
        "title": "excepteur reprehenderit amet nisi commodo",
        "type": "undefined",
        "text": "aliquip laboris Lorem eiusmod pariatur elit elit sint reprehenderit proident pariatur magna commodo magna",
        "date": "2014-07-21T05:27:15",
        "numVotes": 604,
        "numComments": 826
      },
      {
        "title": "ipsum sint magna deserunt",
        "type": "undefined",
        "text": "occaecat sunt ullamco labore consectetur irure cillum dolor eiusmod incididunt mollit anim sint in deserunt esse",
        "date": "2015-12-03T05:19:10",
        "numVotes": 219,
        "numComments": 858
      },
      {
        "title": "do adipisicing dolore aliquip tempor",
        "type": "undefined",
        "text": "pariatur laborum sunt est commodo anim officia duis voluptate deserunt ea do deserunt nulla sunt",
        "date": "2016-07-09T01:42:08",
        "numVotes": 233,
        "numComments": 563
      },
      {
        "title": "pariatur adipisicing ullamco incididunt",
        "type": "undefined",
        "text": "ea voluptate anim incididunt ex minim amet",
        "date": "2015-01-02T08:33:29",
        "numVotes": 571,
        "numComments": 390
      },
      {
        "title": "ullamco dolore et ipsum",
        "type": "undefined",
        "text": "cupidatat labore aute id enim veniam ex dolor enim et cupidatat in elit tempor id non",
        "date": "2014-01-27T02:31:01",
        "numVotes": 280,
        "numComments": 668
      },
      {
        "title": "non reprehenderit reprehenderit minim",
        "type": "undefined",
        "text": "incididunt veniam ullamco pariatur laborum occaecat cupidatat non occaecat consequat nostrud magna elit amet aute ea",
        "date": "2016-11-21T06:21:46",
        "numVotes": 457,
        "numComments": 835
      },
      {
        "title": "magna aliquip nulla elit",
        "type": "undefined",
        "text": "consequat velit adipisicing ex dolor ea laboris sunt",
        "date": "2016-01-22T09:01:43",
        "numVotes": 239,
        "numComments": 469
      },
      {
        "title": "consectetur magna voluptate",
        "type": "undefined",
        "text": "nostrud dolor sit laboris mollit est enim adipisicing",
        "date": "2014-01-15T10:55:44",
        "numVotes": 514,
        "numComments": 535
      },
      {
        "title": "culpa magna duis",
        "type": "undefined",
        "text": "voluptate esse velit excepteur amet",
        "date": "2015-03-23T02:09:54",
        "numVotes": 622,
        "numComments": 458
      },
      {
        "title": "esse officia adipisicing consequat et",
        "type": "undefined",
        "text": "dolor in qui officia veniam",
        "date": "2014-05-17T10:38:29",
        "numVotes": 536,
        "numComments": 542
      }
    ]
  },
  {
    "id": 6,
    "username": "Rose_laboris",
    "karma": 59,
    "memberSince": "2016-07-21T01:08:13",
    "comments": [
      {
        "originalPost": "velit cupidatat sit consectetur",
        "text": "dolore ex reprehenderit in aute sunt",
        "date": "2015-03-05T11:12:51"
      },
      {
        "originalPost": "laboris proident Lorem",
        "text": "Lorem incididunt sit Lorem laboris officia fugiat in occaecat labore ut dolor",
        "date": "2015-06-13T10:56:16"
      },
      {
        "originalPost": "esse excepteur ut",
        "text": "adipisicing esse laboris quis do",
        "date": "2015-08-28T11:16:19"
      },
      {
        "originalPost": "adipisicing et labore cupidatat",
        "text": "ea velit labore do culpa",
        "date": "2015-03-28T04:19:47"
      },
      {
        "originalPost": "ipsum adipisicing pariatur aliqua enim",
        "text": "ex reprehenderit velit esse et veniam reprehenderit dolor ad fugiat dolor laboris est amet ut commodo",
        "date": "2015-12-25T08:53:37"
      }
    ],
    "posts": [
      {
        "title": "consectetur Lorem ea ad",
        "type": "undefined",
        "text": "sint Lorem labore dolor quis ipsum deserunt officia",
        "date": "2015-08-24T08:46:37",
        "numVotes": 379,
        "numComments": 422
      },
      {
        "title": "non veniam amet amet laboris",
        "type": "undefined",
        "text": "consectetur aliquip ea culpa est est ut dolor exercitation consectetur",
        "date": "2014-09-23T11:17:18",
        "numVotes": 712,
        "numComments": 541
      },
      {
        "title": "aliquip id excepteur",
        "type": "undefined",
        "text": "cillum amet esse id ullamco",
        "date": "2015-10-09T07:00:32",
        "numVotes": 102,
        "numComments": 743
      },
      {
        "title": "consequat velit occaecat occaecat",
        "type": "undefined",
        "text": "nisi minim esse enim culpa aliquip ipsum non deserunt velit nisi ad anim dolore velit eu culpa",
        "date": "2015-05-14T12:30:00",
        "numVotes": 183,
        "numComments": 821
      },
      {
        "title": "officia sunt dolore adipisicing",
        "type": "undefined",
        "text": "aliquip nisi labore adipisicing commodo est exercitation excepteur adipisicing magna Lorem sint dolor dolor exercitation",
        "date": "2014-03-10T06:09:50",
        "numVotes": 116,
        "numComments": 343
      },
      {
        "title": "et esse tempor",
        "type": "undefined",
        "text": "mollit laboris sint fugiat qui est duis enim commodo enim aliquip tempor eiusmod minim aliquip commodo fugiat",
        "date": "2016-08-09T05:51:04",
        "numVotes": 132,
        "numComments": 999
      },
      {
        "title": "laborum ut aute",
        "type": "undefined",
        "text": "eu officia aliquip eu eu",
        "date": "2016-05-09T09:18:54",
        "numVotes": 765,
        "numComments": 378
      },
      {
        "title": "tempor quis magna do dolore",
        "type": "undefined",
        "text": "minim laboris eiusmod consectetur veniam ex ullamco aute sint consectetur nisi elit velit",
        "date": "2016-06-24T07:35:55",
        "numVotes": 462,
        "numComments": 827
      },
      {
        "title": "aliquip aliqua dolor Lorem et",
        "type": "undefined",
        "text": "nisi ex quis labore cupidatat sit incididunt eiusmod ut id ad exercitation aute ea voluptate",
        "date": "2016-12-05T03:23:20",
        "numVotes": 730,
        "numComments": 381
      },
      {
        "title": "ullamco labore fugiat ullamco",
        "type": "undefined",
        "text": "in irure qui nulla dolor fugiat excepteur nisi culpa excepteur quis non pariatur",
        "date": "2015-12-11T12:20:25",
        "numVotes": 563,
        "numComments": 437
      }
    ]
  },
  {
    "id": 7,
    "username": "Tate_exercitation",
    "karma": 1068,
    "memberSince": "2016-03-14T12:57:42",
    "comments": [
      {
        "originalPost": "sint velit proident consectetur elit",
        "text": "cillum duis qui Lorem pariatur magna",
        "date": "2014-05-28T07:17:55"
      },
      {
        "originalPost": "duis amet est culpa",
        "text": "enim ad cillum occaecat ut exercitation excepteur",
        "date": "2014-09-18T08:56:49"
      },
      {
        "originalPost": "irure dolor exercitation sit in",
        "text": "ea adipisicing mollit velit magna labore eiusmod ad elit occaecat magna et ullamco nulla",
        "date": "2014-09-23T01:15:17"
      },
      {
        "originalPost": "mollit mollit ex id",
        "text": "nisi minim irure duis cillum ad quis ad do reprehenderit",
        "date": "2014-04-26T09:45:25"
      },
      {
        "originalPost": "id et eiusmod qui",
        "text": "est anim labore cupidatat do ipsum esse est elit occaecat velit duis aliquip sint exercitation",
        "date": "2016-08-07T08:36:15"
      },
      {
        "originalPost": "enim veniam tempor laboris",
        "text": "laboris laborum ea voluptate ex qui",
        "date": "2015-01-21T02:53:43"
      },
      {
        "originalPost": "incididunt esse cillum",
        "text": "id Lorem nostrud exercitation pariatur",
        "date": "2015-12-03T03:14:42"
      },
      {
        "originalPost": "sit reprehenderit officia",
        "text": "quis minim ipsum cillum dolore deserunt culpa non labore magna ad Lorem aliqua",
        "date": "2016-02-04T10:54:59"
      },
      {
        "originalPost": "exercitation culpa esse proident",
        "text": "amet veniam adipisicing reprehenderit commodo esse tempor eiusmod duis adipisicing eu consequat et velit proident ipsum proident",
        "date": "2015-12-25T06:35:23"
      },
      {
        "originalPost": "voluptate dolor laboris commodo amet",
        "text": "labore aliqua ad est in velit do culpa",
        "date": "2014-07-26T07:02:28"
      },
      {
        "originalPost": "elit excepteur fugiat laborum",
        "text": "tempor laborum voluptate in ut tempor culpa exercitation",
        "date": "2015-04-24T02:47:26"
      },
      {
        "originalPost": "Lorem enim est",
        "text": "commodo exercitation sit sint sunt sunt mollit ipsum",
        "date": "2015-06-01T08:49:58"
      }
    ],
    "posts": [
      {
        "title": "cillum commodo veniam laboris",
        "type": "undefined",
        "text": "ex ullamco esse esse labore ex nisi sint anim officia",
        "date": "2016-08-01T10:23:29",
        "numVotes": 980,
        "numComments": 728
      },
      {
        "title": "Lorem exercitation consequat",
        "type": "undefined",
        "text": "laborum ea sint sint voluptate enim Lorem officia voluptate ut sint tempor nostrud laboris excepteur",
        "date": "2016-01-19T03:56:15",
        "numVotes": 623,
        "numComments": 874
      },
      {
        "title": "voluptate nisi id",
        "type": "undefined",
        "text": "aliqua Lorem labore aliquip reprehenderit ad fugiat enim qui",
        "date": "2015-06-09T06:27:21",
        "numVotes": 493,
        "numComments": 924
      },
      {
        "title": "fugiat pariatur ut qui voluptate",
        "type": "undefined",
        "text": "est nisi in sit culpa laboris voluptate enim cillum velit ut irure eiusmod ullamco",
        "date": "2014-04-04T09:24:58",
        "numVotes": 526,
        "numComments": 676
      },
      {
        "title": "nisi et officia",
        "type": "undefined",
        "text": "sint velit nulla quis id reprehenderit ea elit excepteur dolor minim laborum voluptate",
        "date": "2014-10-18T09:29:05",
        "numVotes": 190,
        "numComments": 435
      },
      {
        "title": "consectetur elit incididunt",
        "type": "undefined",
        "text": "irure sint esse tempor deserunt non consequat minim et",
        "date": "2016-03-07T04:27:24",
        "numVotes": 610,
        "numComments": 516
      }
    ]
  }
]
	});
