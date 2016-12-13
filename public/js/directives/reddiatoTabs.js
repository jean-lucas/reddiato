angular.module('reddiato')
.directive('reddiatoTabs', function($compile) {
  var linkFn;
  linkFn = function(scope, element, attrs) {
    scope.subredditDrawer = angular.element(element.children()[0]);
    scope.tabs = angular.element(element.children()[1]);
    var newThread = angular.element(element.children()[3]);
    scope.currentUserId = 0;

    $(scope.subredditDrawer).on('click', function() {
      $('#drawer').slideToggle("slow");
    });

    // Handle switching tabs
    $('header').on('click', '.tabs .tab', function() {
      $('.tab').removeClass('active');
      $(this).addClass('active');
      var name = $(this).text().trim();
      // Gets rid of the x in the name from the close button
      name = name.substring(0, name.length -1);
      var template_name = name;
      if (name.startsWith('/r/')){
        template_name = getTemplateName(name);
      }
      //   else if (name.startsWith('/u/')) {
      //   var username = name.substring(3);
      //   for (var i = 0; i < scope.allUsers.length; i++) {
      //     if (scope.allUsers[i].username == name) {
      //       scope.currentUserId = i;
      //       break;
      //     }
      //   }
      // }

      scope.switchContent(template_name);
    });

    // Handle closing tabs
    $('header').on('click', '.tabs .tab .close', function(evt) {
      evt.stopPropagation();
      var num_tabs = scope.tabs.children().length;
      $(this).parent().remove();
      scope.tabs.children().first().addClass('active');

      var name = scope.tabs.children().first().text().trim();
      // Gets rid of the x in the name from the close button
      name = name.substring(0, name.length -1);

      if (scope.tabs.children().length == 0) {
        scope.tabs.append(scope.createTab('/r/front'));
        name = '/r/front';
      }

      var template_name = name;
      if (name.startsWith('/r/')){
        template_name = getTemplateName(name);
      }

      scope.switchContent(template_name);


    });

    scope.createTab = function(name) {
      var subreddit = angular.element('<span class="subreddit_name">'+name+'</span>');
      var close = angular.element('<span class="close">x</span>');
      var tab = angular.element('<div class="tab active"></div>');
      tab.append(subreddit);
      tab.append(close);
      // before returning tab, remove all active classes
      $('.tab').removeClass('active');

      if (name.includes('/u/')) {
        var id = "u-" + name.substring(3);
        var userDirective = angular.element('<div id="'+id+'" user-page>test</div>');
        $('.content').append(userDirective);
        $compile(userDirective)(scope)
      }
      return tab;
    };

    scope.switchContent = function(tabName) {
      var tabType = tabName.split('/')[1];
      var content_id = '#'+ tabType +'-' + tabName.substring(3);
      $('body').find('.content').children().fadeOut(0,function() {
        $(content_id).fadeIn(0)
      });
    };

    getTemplateName = function(name) {
      var template_name = "/r/front";
      var localSubs = scope.subreddits;
      for(var i = 0; i < localSubs.length; i++) {
        if (localSubs[i][0].toLowerCase() === name.toLowerCase()) {
          template_name = localSubs[i][1];
        }
      }

      return template_name;
    };

    scope.subreddits = [
      ['/r/AskReddit','/r/askreddit'],
      ['/r/IAmA','/r/multi'],
      ['/r/bestof','/r/pics'],
      ['/r/fatpeoplestories','/r/askreddit'],
      ['/r/pettyrevenge','/r/multi'],
      ['/r/TalesFromRetail','/r/pics'],
      ['/r/DoesAnybodyElse','/r/askreddit'],
      ['/r/CrazyIdeas','/r/multi'],
      ['/r/WTF','/r/pics'],
      ['/r/webdev','/r/askreddit'],
      ['/r/aww','/r/multi'],
      ['/r/cringepics','/r/pics'],
      ['/r/cringe','/r/askreddit'],
      ['/r/MorbidReality','/r/multi'],
      ['/r/rage','/r/pics'],
      ['/r/mildlyinfuriating','/r/askreddit'],
      ['/r/creepy','/r/multi'],
      ['/r/creepyPMs','/r/pics'],
      ['/r/nosleep','/r/askreddit'],
      ['/r/nostalgia','/r/multi'],
      ['/r/gaming','/r/pics'],
      ['/r/leagueoflegends','/r/askreddit'],
      ['/r/pokemon','/r/multi'],
      ['/r/Minecraft','/r/pics'],
      ['/r/starcraft','/r/askreddit'],
      ['/r/Games','/r/multi'],
      ['/r/DotA2','/r/pics'],
      ['/r/skyrim','/r/askreddit'],
      ['/r/tf2','/r/multi'],
      ['/r/magicTCG','/r/pics'],
      ['/r/wow','/r/askreddit'],
      ['/r/KerbalSpaceProgram','/r/multi'],
      ['/r/mindcrack','/r/pics'],
      ['/r/Fallout','/r/askreddit'],
      ['/r/roosterteeth','/r/multi'],
      ['/r/Planetside','/r/pics'],
      ['/r/gamegrumps','/r/askreddit'],
      ['/r/battlefield3','/r/multi'],
      ['/r/zelda','/r/pics'],
      ['/r/darksouls','/r/askreddit'],
      ['/r/masseffect','/r/multi'],
      ['/r/arresteddevelopment','/r/pics'],
      ['/r/gameofthrones','/r/askreddit'],
      ['/r/doctorwho','/r/multi'],
      ['/r/mylittlepony','/r/pics'],
      ['/r/community','/r/askreddit'],
      ['/r/breakingbad','/r/multi'],
      ['/r/adventuretime','/r/pics'],
      ['/r/startrek','/r/askreddit'],
      ['/r/TheSimpsons','/r/multi'],
      ['/r/futurama','/r/pics'],
      ['/r/HIMYM','/r/askreddit'],
      ['/r/DunderMifflin','/r/multi'],
      ['/r/thewalkingdead','/r/pics'],
      ['/r/Music','/r/askreddit'],
      ['/r/movies','/r/multi'],
      ['/r/harrypotter','/r/pics'],
      ['/r/StarWars','/r/askreddit'],
      ['/r/DaftPunk','/r/multi'],
      ['/r/hiphopheads','/r/pics'],
      ['/r/anime','/r/askreddit'],
      ['/r/comicbooks','/r/multi'],
      ['/r/geek','/r/pics'],
      ['/r/batman','/r/askreddit'],
      ['/r/TheLastAirbender','/r/multi'],
      ['/r/Naruto','/r/pics'],
      ['/r/FanTheories','/r/askreddit'],
      ['/r/funny','/r/multi'],
      ['/r/AdviceAnimals','/r/pics'],
      ['/r/fffffffuuuuuuuuuuuu','/r/askreddit'],
      ['/r/4chan','/r/multi'],
      ['/r/ImGoingToHellForThis','/r/pics'],
      ['/r/firstworldanarchists','/r/askreddit'],
      ['/r/circlejerk','/r/multi'],
      ['/r/MURICA','/r/pics'],
      ['/r/facepalm','/r/askreddit'],
      ['/r/Jokes','/r/multi'],
      ['/r/wheredidthesodago','/r/pics'],
      ['/r/polandball','/r/askreddit'],
      ['/r/TrollXChromosomes','/r/multi'],
      ['/r/comics','/r/pics'],
      ['/r/nottheonion','/r/askreddit'],
      ['/r/britishproblems','/r/multi'],
      ['/r/TumblrInAction','/r/pics'],
      ['/r/onetruegod','/r/askreddit'],
      ['/r/pics','/r/pics'],
      ['/r/videos','/r/pics'],
      ['/r/gifs','/r/askreddit'],
      ['/r/reactiongifs','/r/multi'],
      ['/r/mildlyinteresting','/r/pics'],
      ['/r/woahdude','/r/askreddit'],
      ['/r/FiftyFifty','/r/multi'],
      ['/r/wallpapers','/r/pics'],
      ['/r/youtubehaiku','/r/askreddit'],
      ['/r/Unexpected','/r/multi'],
      ['/r/photoshopbattles','/r/pics'],
      ['/r/AnimalsBeingJerks','/r/askreddit'],
      ['/r/cosplay','/r/multi'],
      ['/r/awwnime','/r/pics'],
      ['/r/PerfectTiming','/r/askreddit'],
      ['/r/OldSchoolCool','/r/multi'],
      ['/r/Pareidolia','/r/pics'],
      ['/r/tumblr','/r/askreddit'],
      ['/r/techsupportgore','/r/multi'],
      ['/r/PrettyGirls','/r/pics'],
      ['/r/itookapicture','/r/askreddit'],
      ['/r/todayilearned','/r/multi'],
      ['/r/science','/r/pics'],
      ['/r/askscience','/r/askreddit'],
      ['/r/space','/r/multi'],
      ['/r/AskHistorians','/r/pics'],
      ['/r/YouShouldKnow','/r/askreddit'],
      ['/r/explainlikeimfive','/r/multi'],
      ['/r/showerthoughts', '/r/askreddit'],
      ['/r/LifeProTips', '/r/askreddit'],
      ['/r/books', '/r/askreddit'],
      ['/r/history', '/r/askreddit']
    ];

    // List of users
    scope.allUsers =  [
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
      },
      {
        "id": 110,
        "username": "GallowBoob",
        "karma": 349,
        "memberSince": "2014-04-29T02:47:43",
        "comments": [
          {
            "originalPost": "ullamco occaecat officia mollit",
            "text": "ullamco aliquip proident culpa magna culpa mollit non proident Lorem adipisicing ipsum",
            "date": "2014-08-28T04:46:35"
          },
          {
            "originalPost": "do do velit amet",
            "text": "pariatur ad non duis elit",
            "date": "2015-05-02T08:18:41"
          },
          {
            "originalPost": "ea ut dolor deserunt ea",
            "text": "elit do sit proident deserunt",
            "date": "2015-07-29T08:06:20"
          },
          {
            "originalPost": "reprehenderit sit magna aliqua id",
            "text": "cillum est mollit mollit reprehenderit non voluptate aliqua occaecat magna anim voluptate",
            "date": "2016-01-19T06:58:20"
          },
          {
            "originalPost": "adipisicing ad aliquip",
            "text": "consectetur voluptate Lorem culpa reprehenderit mollit ut",
            "date": "2016-10-29T02:08:54"
          },
          {
            "originalPost": "adipisicing occaecat eu irure",
            "text": "ex eiusmod aliqua culpa labore Lorem culpa irure aliquip ea in mollit cupidatat eiusmod",
            "date": "2014-03-31T07:05:43"
          },
          {
            "originalPost": "ex voluptate excepteur duis quis",
            "text": "sunt aute voluptate Lorem id aliquip fugiat amet duis pariatur pariatur in veniam proident eu cupidatat laboris",
            "date": "2016-05-02T02:22:03"
          },
          {
            "originalPost": "incididunt deserunt mollit anim consectetur",
            "text": "laboris eu elit eiusmod ex anim enim ex id do pariatur laborum",
            "date": "2015-05-14T02:51:10"
          },
          {
            "originalPost": "nisi aliqua labore",
            "text": "sit dolore ad eiusmod velit do magna voluptate ut nulla exercitation cupidatat occaecat quis",
            "date": "2016-05-21T02:33:39"
          },
          {
            "originalPost": "cupidatat magna in nisi",
            "text": "reprehenderit elit sunt exercitation elit consectetur",
            "date": "2014-03-15T03:45:54"
          }
        ],
        "posts": [
          {
            "title": "laborum do aliqua officia sunt",
            "type": "undefined",
            "text": "amet labore deserunt sint cupidatat culpa anim sunt pariatur ea Lorem cupidatat officia esse ullamco",
            "date": "2015-09-24T11:26:03",
            "numVotes": 923,
            "numComments": 966
          },
          {
            "title": "id excepteur commodo occaecat ex",
            "type": "undefined",
            "text": "eu quis magna ut cupidatat do qui nisi eu ut deserunt",
            "date": "2014-10-01T08:26:47",
            "numVotes": 343,
            "numComments": 646
          },
          {
            "title": "eiusmod excepteur irure cupidatat enim",
            "type": "undefined",
            "text": "pariatur laboris quis et fugiat",
            "date": "2016-01-27T01:49:24",
            "numVotes": 953,
            "numComments": 364
          },
          {
            "title": "adipisicing consequat et in",
            "type": "undefined",
            "text": "ad dolore pariatur officia voluptate pariatur ut incididunt",
            "date": "2014-09-29T02:06:56",
            "numVotes": 742,
            "numComments": 681
          },
          {
            "title": "proident sit ullamco eiusmod ad",
            "type": "undefined",
            "text": "elit quis Lorem voluptate dolore consequat veniam qui",
            "date": "2016-03-26T03:57:14",
            "numVotes": 760,
            "numComments": 655
          },
          {
            "title": "elit nisi aliqua",
            "type": "function (){return!!Math.floor(2*Math.random())}",
            "text": "adipisicing laboris anim velit et non aliquip non consequat ex laborum nisi laborum tempor",
            "date": "2015-10-16T04:59:31",
            "numVotes": 875,
            "numComments": 866
          },
          {
            "title": "nisi nulla ipsum",
            "type": "undefined",
            "text": "voluptate eiusmod non culpa quis aliqua laborum ex magna veniam ad est proident",
            "date": "2016-11-06T06:56:37",
            "numVotes": 837,
            "numComments": 938
          }
        ]
      },
      {
        "id": 1,
        "username": "Auggernaut88",
        "karma": 1226,
        "memberSince": "2014-06-19T10:26:31",
        "comments": [
          {
            "originalPost": "aute esse elit elit",
            "text": "mollit adipisicing adipisicing anim sint pariatur ea nulla fugiat Lorem quis",
            "date": "2016-10-02T05:04:53"
          },
          {
            "originalPost": "officia ea sint voluptate",
            "text": "tempor esse sint enim elit laboris qui nostrud officia",
            "date": "2015-02-22T12:08:43"
          },
          {
            "originalPost": "eu velit nisi enim",
            "text": "qui aute sint aliquip dolore est et deserunt in velit duis",
            "date": "2016-08-09T04:46:01"
          },
          {
            "originalPost": "tempor incididunt irure elit esse",
            "text": "et culpa incididunt id do incididunt adipisicing enim ipsum minim ad culpa",
            "date": "2016-02-10T11:12:41"
          },
          {
            "originalPost": "ipsum nisi cillum do culpa",
            "text": "consectetur velit exercitation sunt esse velit dolore deserunt ullamco qui",
            "date": "2015-03-10T12:56:08"
          },
          {
            "originalPost": "veniam aliqua deserunt reprehenderit duis",
            "text": "quis et amet ex cupidatat aliqua aliquip",
            "date": "2014-02-24T01:57:02"
          },
          {
            "originalPost": "culpa enim amet velit",
            "text": "quis ex laborum proident aute elit ea ullamco ullamco",
            "date": "2016-08-15T06:02:17"
          }
        ],
        "posts": [
          {
            "title": "sint laborum nostrud culpa commodo",
            "type": "undefined",
            "text": "proident nulla sint labore Lorem amet sit excepteur excepteur deserunt non id aliquip ut",
            "date": "2016-11-29T04:37:34",
            "numVotes": 671,
            "numComments": 305
          },
          {
            "title": "labore cillum irure id",
            "type": "undefined",
            "text": "voluptate consequat enim ex est aute voluptate adipisicing velit",
            "date": "2016-07-18T05:55:33",
            "numVotes": 595,
            "numComments": 455
          },
          {
            "title": "ullamco elit irure voluptate ut",
            "type": "undefined",
            "text": "incididunt adipisicing labore adipisicing nisi ex enim veniam eu officia mollit eiusmod reprehenderit culpa",
            "date": "2015-06-25T01:51:51",
            "numVotes": 544,
            "numComments": 309
          },
          {
            "title": "cupidatat veniam ut id",
            "type": "undefined",
            "text": "deserunt officia amet consequat dolore ipsum adipisicing est occaecat eiusmod quis esse nisi",
            "date": "2014-04-13T01:22:58",
            "numVotes": 535,
            "numComments": 200
          },
          {
            "title": "enim ex amet",
            "type": "undefined",
            "text": "culpa eu deserunt culpa irure irure id laboris",
            "date": "2014-06-05T03:58:20",
            "numVotes": 597,
            "numComments": 395
          },
          {
            "title": "excepteur enim exercitation",
            "type": "undefined",
            "text": "in enim reprehenderit nisi qui ex voluptate qui ad",
            "date": "2014-07-15T12:06:53",
            "numVotes": 157,
            "numComments": 874
          },
          {
            "title": "aliquip quis nisi labore deserunt",
            "type": "undefined",
            "text": "et et quis mollit nisi pariatur commodo Lorem esse laboris cupidatat deserunt",
            "date": "2016-05-18T03:02:02",
            "numVotes": 494,
            "numComments": 875
          },
          {
            "title": "labore eiusmod ad quis laborum",
            "type": "undefined",
            "text": "minim commodo reprehenderit occaecat consequat",
            "date": "2014-10-13T02:14:55",
            "numVotes": 914,
            "numComments": 512
          },
          {
            "title": "ex veniam proident",
            "type": "undefined",
            "text": "minim est deserunt ipsum enim laboris tempor ad consequat mollit eu ad",
            "date": "2015-07-11T04:19:41",
            "numVotes": 553,
            "numComments": 723
          },
          {
            "title": "velit proident pariatur",
            "type": "undefined",
            "text": "amet reprehenderit cupidatat magna officia cillum nisi",
            "date": "2015-08-04T05:18:36",
            "numVotes": 960,
            "numComments": 808
          },
          {
            "title": "est mollit reprehenderit enim proident",
            "type": "undefined",
            "text": "sit eiusmod pariatur deserunt quis dolore excepteur ex sit sunt aliqua excepteur pariatur veniam labore",
            "date": "2015-10-30T07:21:44",
            "numVotes": 236,
            "numComments": 463
          },
          {
            "title": "in aute commodo consectetur",
            "type": "undefined",
            "text": "pariatur nulla non ipsum ut dolor id nisi nisi",
            "date": "2016-12-02T11:01:41",
            "numVotes": 367,
            "numComments": 379
          }
        ]
      },
      {
        "id": 2,
        "username": "annekar",
        "karma": 562,
        "memberSince": "2015-01-20T10:48:48",
        "comments": [
          {
            "originalPost": "anim ex reprehenderit voluptate consectetur",
            "text": "non irure ut magna ea qui laboris minim ex exercitation ex id occaecat cupidatat",
            "date": "2015-01-28T09:08:48"
          },
          {
            "originalPost": "labore aliquip incididunt pariatur cillum",
            "text": "voluptate laboris pariatur nulla deserunt laboris",
            "date": "2016-03-05T01:07:08"
          },
          {
            "originalPost": "dolor qui nisi adipisicing elit",
            "text": "excepteur incididunt qui in amet",
            "date": "2016-07-12T07:37:14"
          },
          {
            "originalPost": "eu ut consequat aliqua",
            "text": "est adipisicing excepteur sit laboris ea non amet quis id et amet incididunt veniam cillum fugiat ipsum",
            "date": "2016-08-29T03:05:14"
          },
          {
            "originalPost": "aliquip enim incididunt et ex",
            "text": "deserunt pariatur aliqua commodo culpa voluptate et elit consequat velit",
            "date": "2014-05-03T09:11:21"
          },
          {
            "originalPost": "aliquip fugiat dolor",
            "text": "ad proident ex in aute incididunt aute occaecat",
            "date": "2014-09-20T08:00:49"
          },
          {
            "originalPost": "commodo incididunt exercitation",
            "text": "elit adipisicing cupidatat aliqua in ipsum mollit",
            "date": "2014-01-21T02:25:21"
          },
          {
            "originalPost": "labore nisi irure magna",
            "text": "anim ut Lorem adipisicing id commodo nulla eu Lorem irure quis",
            "date": "2014-09-16T05:29:06"
          }
        ],
        "posts": [
          {
            "title": "elit culpa pariatur ut",
            "type": "undefined",
            "text": "ea tempor magna dolor adipisicing laboris",
            "date": "2014-07-04T01:32:54",
            "numVotes": 365,
            "numComments": 412
          },
          {
            "title": "reprehenderit ad quis irure",
            "type": "function (){return!!Math.floor(2*Math.random())}",
            "text": "cillum consectetur reprehenderit eu nostrud ex sit Lorem officia deserunt laborum proident duis est",
            "date": "2016-03-24T08:32:57",
            "numVotes": 481,
            "numComments": 864
          },
          {
            "title": "proident commodo incididunt nulla ad",
            "type": "undefined",
            "text": "duis labore anim dolore magna nulla",
            "date": "2016-01-27T11:58:00",
            "numVotes": 715,
            "numComments": 969
          },
          {
            "title": "cillum voluptate exercitation",
            "type": "undefined",
            "text": "occaecat incididunt est veniam voluptate sint aute magna veniam laboris",
            "date": "2016-04-14T10:56:24",
            "numVotes": 957,
            "numComments": 881
          },
          {
            "title": "minim laborum dolore duis",
            "type": "undefined",
            "text": "sint nisi nostrud eu et commodo culpa irure excepteur nulla occaecat voluptate nisi aliquip minim dolore irure",
            "date": "2014-06-26T04:03:48",
            "numVotes": 267,
            "numComments": 417
          },
          {
            "title": "labore adipisicing anim dolor laborum",
            "type": "undefined",
            "text": "minim voluptate ea id est laborum in proident et",
            "date": "2016-01-23T03:13:31",
            "numVotes": 893,
            "numComments": 577
          },
          {
            "title": "aute irure labore culpa",
            "type": "undefined",
            "text": "cillum incididunt magna reprehenderit pariatur et laborum eu consectetur exercitation exercitation eu mollit nulla",
            "date": "2014-09-06T01:25:22",
            "numVotes": 402,
            "numComments": 445
          },
          {
            "title": "minim aute pariatur sunt ex",
            "type": "undefined",
            "text": "in cillum duis fugiat labore incididunt pariatur ex",
            "date": "2016-06-15T06:39:29",
            "numVotes": 449,
            "numComments": 644
          },
          {
            "title": "consequat esse sunt aliqua veniam",
            "type": "undefined",
            "text": "elit tempor officia tempor duis id nostrud in ullamco proident ut",
            "date": "2015-07-01T04:06:54",
            "numVotes": 714,
            "numComments": 531
          },
          {
            "title": "eu fugiat exercitation",
            "type": "undefined",
            "text": "minim elit adipisicing pariatur et qui pariatur reprehenderit eu qui ipsum ipsum velit sint ex deserunt consectetur",
            "date": "2015-05-20T12:21:23",
            "numVotes": 663,
            "numComments": 233
          },
          {
            "title": "veniam incididunt non",
            "type": "undefined",
            "text": "officia consequat consectetur fugiat in consequat veniam aliqua labore ipsum veniam cillum ex adipisicing",
            "date": "2016-10-08T03:03:06",
            "numVotes": 715,
            "numComments": 410
          },
          {
            "title": "ipsum officia enim",
            "type": "undefined",
            "text": "occaecat aliqua est occaecat magna esse voluptate minim deserunt esse occaecat qui nostrud",
            "date": "2015-09-21T11:02:37",
            "numVotes": 324,
            "numComments": 142
          }
        ]
      },
      {
        "id": 3,
        "username": "iBleeedorange",
        "karma": 704,
        "memberSince": "2014-05-31T04:04:48",
        "comments": [
          {
            "originalPost": "culpa ipsum id irure magna",
            "text": "nostrud dolore ex proident aliqua ipsum reprehenderit sit aliqua incididunt",
            "date": "2014-09-02T10:26:13"
          },
          {
            "originalPost": "nostrud officia et",
            "text": "est ut labore dolor anim commodo culpa duis commodo",
            "date": "2015-06-13T04:21:54"
          },
          {
            "originalPost": "duis excepteur labore dolor",
            "text": "ipsum consectetur occaecat quis reprehenderit laboris qui est",
            "date": "2016-03-02T02:59:32"
          },
          {
            "originalPost": "et eiusmod velit laborum",
            "text": "qui cupidatat eiusmod tempor sit est excepteur ad magna officia veniam irure aute exercitation et",
            "date": "2016-07-26T03:36:11"
          },
          {
            "originalPost": "incididunt amet sint officia in",
            "text": "ea ullamco est nostrud dolor nostrud laborum deserunt minim quis occaecat pariatur commodo qui culpa",
            "date": "2015-06-21T06:33:11"
          },
          {
            "originalPost": "adipisicing elit ex",
            "text": "consequat fugiat non anim et cupidatat",
            "date": "2016-04-24T03:06:21"
          },
          {
            "originalPost": "ipsum anim sit dolore",
            "text": "mollit est aliquip laborum adipisicing cupidatat aliqua excepteur ex minim laboris deserunt velit cillum anim",
            "date": "2015-05-11T09:11:20"
          },
          {
            "originalPost": "esse adipisicing in do",
            "text": "fugiat qui incididunt eiusmod duis deserunt laborum commodo occaecat excepteur officia consequat aliquip",
            "date": "2015-01-06T10:22:30"
          },
          {
            "originalPost": "et reprehenderit commodo laborum",
            "text": "ipsum irure consectetur eu id sunt do occaecat quis exercitation cillum ex aliquip aliquip magna mollit",
            "date": "2014-08-13T12:09:18"
          }
        ],
        "posts": [
          {
            "title": "proident velit velit",
            "type": "function (){return!!Math.floor(2*Math.random())}",
            "text": "magna ullamco nostrud Lorem nostrud laboris quis aute et dolore labore nostrud voluptate esse nostrud",
            "date": "2014-12-07T10:28:12",
            "numVotes": 288,
            "numComments": 975
          },
          {
            "title": "magna ea quis",
            "type": "undefined",
            "text": "enim Lorem ipsum aute excepteur",
            "date": "2014-05-21T05:46:09",
            "numVotes": 120,
            "numComments": 802
          },
          {
            "title": "consectetur duis laboris qui sint",
            "type": "undefined",
            "text": "anim laboris pariatur cillum eiusmod est elit dolore eiusmod culpa deserunt excepteur sunt ipsum consectetur",
            "date": "2015-08-10T08:55:33",
            "numVotes": 360,
            "numComments": 110
          },
          {
            "title": "id Lorem et dolor Lorem",
            "type": "undefined",
            "text": "quis reprehenderit non excepteur laboris deserunt sunt anim consectetur laborum exercitation in veniam",
            "date": "2014-08-22T08:18:33",
            "numVotes": 277,
            "numComments": 435
          },
          {
            "title": "enim sunt reprehenderit irure",
            "type": "undefined",
            "text": "exercitation cupidatat duis commodo ex enim laborum tempor ipsum ut anim sit cupidatat officia mollit et minim",
            "date": "2014-03-07T11:22:39",
            "numVotes": 196,
            "numComments": 830
          },
          {
            "title": "minim esse officia duis cupidatat",
            "type": "function (){return!!Math.floor(2*Math.random())}",
            "text": "fugiat anim quis officia pariatur veniam enim incididunt voluptate laboris veniam",
            "date": "2016-09-17T05:16:12",
            "numVotes": 480,
            "numComments": 221
          },
          {
            "title": "id fugiat anim excepteur",
            "type": "undefined",
            "text": "quis ex reprehenderit cillum qui veniam laboris tempor sit",
            "date": "2014-10-07T10:51:57",
            "numVotes": 854,
            "numComments": 283
          },
          {
            "title": "sunt fugiat in amet",
            "type": "undefined",
            "text": "dolor aliquip in exercitation aliqua sint",
            "date": "2015-11-22T06:53:23",
            "numVotes": 636,
            "numComments": 888
          },
          {
            "title": "sunt cillum enim",
            "type": "undefined",
            "text": "ea exercitation qui duis aute mollit eu velit magna minim aliqua deserunt commodo amet anim",
            "date": "2015-07-05T10:38:43",
            "numVotes": 534,
            "numComments": 145
          },
          {
            "title": "consectetur nisi officia amet eiusmod",
            "type": "undefined",
            "text": "proident reprehenderit esse duis nulla excepteur voluptate do excepteur non ea eu magna aliquip dolor",
            "date": "2015-01-18T12:12:45",
            "numVotes": 160,
            "numComments": 649
          }
        ]
      },
      {
        "id": 4,
        "username": "dustofoblivion123",
        "karma": 1967,
        "memberSince": "2016-09-21T07:21:45",
        "comments": [
          {
            "originalPost": "elit elit in",
            "text": "amet non aute non exercitation voluptate officia reprehenderit irure ut et eu eiusmod occaecat quis",
            "date": "2014-05-23T03:13:58"
          },
          {
            "originalPost": "fugiat incididunt mollit",
            "text": "mollit consectetur amet pariatur ex qui",
            "date": "2014-06-20T05:24:21"
          },
          {
            "originalPost": "occaecat veniam exercitation labore dolor",
            "text": "nulla voluptate ad minim incididunt fugiat esse id consequat ad cupidatat",
            "date": "2016-04-04T12:50:39"
          }
        ],
        "posts": [
          {
            "title": "dolore id consequat aliquip",
            "type": "undefined",
            "text": "ullamco mollit excepteur et enim id ut ut consectetur adipisicing veniam aliqua laboris",
            "date": "2016-06-07T02:09:34",
            "numVotes": 141,
            "numComments": 120
          },
          {
            "title": "minim reprehenderit laboris anim",
            "type": "undefined",
            "text": "laboris quis sunt commodo in",
            "date": "2014-11-10T08:02:09",
            "numVotes": 340,
            "numComments": 156
          },
          {
            "title": "incididunt fugiat esse veniam laboris",
            "type": "undefined",
            "text": "tempor ea mollit deserunt ea ut nulla irure veniam exercitation cupidatat dolor",
            "date": "2015-07-26T08:52:27",
            "numVotes": 795,
            "numComments": 834
          },
          {
            "title": "sint irure ipsum ex qui",
            "type": "undefined",
            "text": "laborum cillum ipsum est veniam veniam nostrud minim veniam nostrud laboris fugiat reprehenderit minim laboris",
            "date": "2016-02-10T12:59:18",
            "numVotes": 503,
            "numComments": 489
          },
          {
            "title": "laboris voluptate excepteur",
            "type": "undefined",
            "text": "quis sunt cillum eiusmod duis laboris ullamco quis sit est",
            "date": "2014-10-18T05:01:57",
            "numVotes": 287,
            "numComments": 822
          },
          {
            "title": "culpa tempor incididunt sunt sint",
            "type": "undefined",
            "text": "ad laborum Lorem voluptate pariatur est esse reprehenderit ex",
            "date": "2014-10-07T12:59:03",
            "numVotes": 998,
            "numComments": 521
          }
        ]
      },
      {
        "id": 5,
        "username": "Business__Socks",
        "karma": 1795,
        "memberSince": "2015-05-27T06:51:51",
        "comments": [
          {
            "originalPost": "aliqua sunt et",
            "text": "aliquip ad cillum non exercitation id tempor laborum anim ipsum",
            "date": "2016-06-05T03:51:58"
          },
          {
            "originalPost": "cillum et voluptate",
            "text": "veniam proident minim do laboris eu ullamco dolor aliquip",
            "date": "2014-06-06T10:28:00"
          },
          {
            "originalPost": "sit velit ullamco Lorem",
            "text": "qui ea nulla anim commodo anim aute velit ex ipsum mollit",
            "date": "2016-06-12T09:03:22"
          },
          {
            "originalPost": "occaecat qui esse non aliquip",
            "text": "aliquip id ad irure sit",
            "date": "2014-03-19T06:17:52"
          }
        ],
        "posts": [
          {
            "title": "elit fugiat enim dolor esse",
            "type": "undefined",
            "text": "esse incididunt sint ipsum eiusmod",
            "date": "2014-02-24T03:52:26",
            "numVotes": 879,
            "numComments": 342
          },
          {
            "title": "pariatur anim sunt sunt qui",
            "type": "undefined",
            "text": "proident tempor esse non enim cupidatat do aute",
            "date": "2016-10-03T02:26:39",
            "numVotes": 695,
            "numComments": 927
          },
          {
            "title": "ad in quis in",
            "type": "undefined",
            "text": "aliquip sunt nulla magna fugiat irure exercitation consectetur qui consequat dolor est",
            "date": "2015-08-04T10:17:11",
            "numVotes": 534,
            "numComments": 203
          },
          {
            "title": "enim qui esse",
            "type": "undefined",
            "text": "ex voluptate et eiusmod ullamco mollit in id",
            "date": "2016-04-14T02:33:34",
            "numVotes": 478,
            "numComments": 144
          },
          {
            "title": "anim fugiat mollit",
            "type": "undefined",
            "text": "ullamco pariatur do quis nisi est officia mollit voluptate consequat cillum",
            "date": "2015-12-27T10:58:54",
            "numVotes": 938,
            "numComments": 288
          },
          {
            "title": "adipisicing irure reprehenderit",
            "type": "undefined",
            "text": "consequat minim officia id nisi incididunt reprehenderit sit aliquip",
            "date": "2015-03-16T02:34:25",
            "numVotes": 510,
            "numComments": 488
          },
          {
            "title": "proident incididunt nulla magna elit",
            "type": "function (){return!!Math.floor(2*Math.random())}",
            "text": "deserunt Lorem qui nisi duis aliqua sunt reprehenderit elit non magna culpa voluptate Lorem mollit ullamco",
            "date": "2016-05-26T10:00:08",
            "numVotes": 989,
            "numComments": 941
          }
        ]
      },
      {
        "id": 16,
        "username": "Dingo_shark",
        "karma": 1647,
        "memberSince": "2016-10-29T08:41:45",
        "comments": [
          {
            "originalPost": "irure proident ea duis",
            "text": "pariatur cillum proident id nostrud consectetur irure ipsum labore id",
            "date": "2015-06-18T01:07:26"
          },
          {
            "originalPost": "aliquip dolor et",
            "text": "cupidatat qui esse officia reprehenderit pariatur dolore do quis adipisicing",
            "date": "2015-03-13T02:41:18"
          },
          {
            "originalPost": "cillum nisi eu",
            "text": "ea sunt amet commodo labore in voluptate",
            "date": "2015-10-14T12:56:11"
          },
          {
            "originalPost": "elit consectetur fugiat",
            "text": "excepteur culpa sit commodo amet dolore exercitation duis voluptate esse elit fugiat fugiat duis excepteur ad cupidatat",
            "date": "2015-02-18T08:28:55"
          },
          {
            "originalPost": "duis eu ullamco anim",
            "text": "ullamco laborum dolor cillum laboris ullamco consequat eiusmod ea",
            "date": "2014-01-12T07:32:38"
          },
          {
            "originalPost": "duis amet tempor est",
            "text": "amet velit voluptate culpa pariatur aliqua et",
            "date": "2015-09-27T03:42:31"
          },
          {
            "originalPost": "in id cillum nisi",
            "text": "adipisicing est in nulla dolor",
            "date": "2014-04-28T01:37:55"
          },
          {
            "originalPost": "ea laboris labore non cupidatat",
            "text": "occaecat culpa commodo cillum amet",
            "date": "2016-08-07T09:00:57"
          },
          {
            "originalPost": "occaecat id ex eu esse",
            "text": "nisi ad id sint duis mollit",
            "date": "2014-07-05T06:03:02"
          }
        ],
        "posts": [
          {
            "title": "ex occaecat commodo aliquip culpa",
            "type": "undefined",
            "text": "eiusmod exercitation dolor sit ea consequat amet do labore",
            "date": "2015-03-16T05:09:58",
            "numVotes": 637,
            "numComments": 341
          },
          {
            "title": "voluptate velit excepteur duis",
            "type": "undefined",
            "text": "sit elit fugiat cupidatat et pariatur dolore pariatur est anim dolor dolor",
            "date": "2016-05-16T07:13:14",
            "numVotes": 922,
            "numComments": 298
          },
          {
            "title": "est culpa est",
            "type": "undefined",
            "text": "non veniam fugiat adipisicing in velit ullamco sunt ut",
            "date": "2016-04-27T04:43:31",
            "numVotes": 690,
            "numComments": 434
          },
          {
            "title": "in do voluptate quis",
            "type": "undefined",
            "text": "officia laboris labore commodo ex aliquip ut",
            "date": "2016-08-17T10:10:28",
            "numVotes": 876,
            "numComments": 443
          },
          {
            "title": "pariatur sint velit",
            "type": "undefined",
            "text": "nulla minim consequat aliqua officia cupidatat dolor ipsum ullamco mollit laborum consequat excepteur do nisi aliquip",
            "date": "2014-02-07T03:02:56",
            "numVotes": 140,
            "numComments": 744
          },
          {
            "title": "Lorem laborum occaecat irure mollit",
            "type": "undefined",
            "text": "ullamco mollit Lorem do voluptate",
            "date": "2014-04-16T08:00:03",
            "numVotes": 101,
            "numComments": 820
          },
          {
            "title": "esse irure sint quis",
            "type": "function (){return!!Math.floor(2*Math.random())}",
            "text": "Lorem tempor aliqua amet amet enim ullamco incididunt id",
            "date": "2014-08-04T06:52:03",
            "numVotes": 825,
            "numComments": 108
          },
          {
            "title": "sunt adipisicing minim",
            "type": "undefined",
            "text": "fugiat ipsum proident aliquip tempor velit est cillum veniam proident commodo sint magna aliqua",
            "date": "2015-11-09T04:33:57",
            "numVotes": 899,
            "numComments": 176
          }
        ]
      },
      {
        "id": 7,
        "username": "DmitryGlukhovsky",
        "karma": 1819,
        "memberSince": "2014-10-11T06:00:49",
        "comments": [
          {
            "originalPost": "anim pariatur amet Lorem",
            "text": "qui quis aliquip esse laboris commodo elit reprehenderit tempor officia aliqua reprehenderit commodo ipsum dolore",
            "date": "2014-03-05T04:48:29"
          },
          {
            "originalPost": "nulla adipisicing incididunt ea est",
            "text": "est proident consectetur id laborum culpa in pariatur",
            "date": "2014-09-08T10:38:04"
          },
          {
            "originalPost": "nisi dolor eu ea laborum",
            "text": "quis duis enim eiusmod consequat ullamco",
            "date": "2016-12-05T06:02:17"
          },
          {
            "originalPost": "mollit incididunt aute sit amet",
            "text": "culpa esse labore in dolore excepteur cupidatat occaecat velit",
            "date": "2015-04-08T07:36:13"
          },
          {
            "originalPost": "quis proident veniam voluptate",
            "text": "elit reprehenderit adipisicing nulla occaecat consectetur voluptate culpa mollit nulla ipsum reprehenderit minim ullamco consectetur reprehenderit ex",
            "date": "2015-01-03T05:47:38"
          },
          {
            "originalPost": "ex et ad",
            "text": "cupidatat cillum veniam deserunt voluptate consequat cillum deserunt occaecat",
            "date": "2014-10-10T01:03:58"
          }
        ],
        "posts": [
          {
            "title": "est aliqua dolore in",
            "type": "undefined",
            "text": "ipsum laboris aute cillum velit pariatur in labore veniam anim tempor tempor irure ad enim",
            "date": "2014-11-06T09:20:48",
            "numVotes": 256,
            "numComments": 972
          },
          {
            "title": "fugiat minim labore irure",
            "type": "undefined",
            "text": "laboris esse tempor dolor occaecat non velit duis",
            "date": "2015-07-09T09:47:40",
            "numVotes": 937,
            "numComments": 687
          },
          {
            "title": "qui duis dolor",
            "type": "undefined",
            "text": "labore irure consectetur et pariatur consectetur velit labore tempor magna qui sunt labore veniam cupidatat",
            "date": "2014-11-18T09:40:12",
            "numVotes": 412,
            "numComments": 777
          },
          {
            "title": "ut incididunt magna duis adipisicing",
            "type": "undefined",
            "text": "officia deserunt mollit dolor fugiat do ad sint adipisicing Lorem amet",
            "date": "2015-02-27T07:41:44",
            "numVotes": 783,
            "numComments": 465
          },
          {
            "title": "ea reprehenderit aliqua",
            "type": "undefined",
            "text": "sint fugiat aliquip dolore occaecat amet",
            "date": "2016-12-05T09:16:50",
            "numVotes": 237,
            "numComments": 258
          },
          {
            "title": "consequat elit aliquip",
            "type": "undefined",
            "text": "minim eu et id ut dolor sunt minim",
            "date": "2016-04-23T02:13:33",
            "numVotes": 699,
            "numComments": 781
          },
          {
            "title": "consectetur cillum ex magna",
            "type": "undefined",
            "text": "incididunt labore aliquip excepteur occaecat velit excepteur voluptate mollit consectetur pariatur veniam enim labore Lorem",
            "date": "2016-03-17T03:08:42",
            "numVotes": 504,
            "numComments": 434
          },
          {
            "title": "qui enim proident",
            "type": "undefined",
            "text": "ipsum elit veniam reprehenderit adipisicing in cillum amet quis quis",
            "date": "2015-04-29T05:01:31",
            "numVotes": 273,
            "numComments": 868
          },
          {
            "title": "consectetur culpa ex tempor",
            "type": "undefined",
            "text": "fugiat eiusmod incididunt incididunt ea officia voluptate",
            "date": "2015-11-20T06:07:07",
            "numVotes": 281,
            "numComments": 557
          },
          {
            "title": "ut non dolore aliqua",
            "type": "undefined",
            "text": "incididunt et sit tempor fugiat ad cillum aliquip sunt",
            "date": "2014-04-28T11:43:12",
            "numVotes": 459,
            "numComments": 902
          }
        ]
      },
       {
        "id": 7,
        "username": "Dre_wj",
        "karma": 1819,
        "memberSince": "2014-10-11T06:00:49",
        "comments": [
          {
            "originalPost": "anim pariatur amet Lorem",
            "text": "qui quis aliquip esse laboris commodo elit reprehenderit tempor officia aliqua reprehenderit commodo ipsum dolore",
            "date": "2014-03-05T04:48:29"
          },
          {
            "originalPost": "nulla adipisicing incididunt ea est",
            "text": "est proident consectetur id laborum culpa in pariatur",
            "date": "2014-09-08T10:38:04"
          },
          {
            "originalPost": "nisi dolor eu ea laborum",
            "text": "quis duis enim eiusmod consequat ullamco",
            "date": "2016-12-05T06:02:17"
          },
          {
            "originalPost": "mollit incididunt aute sit amet",
            "text": "culpa esse labore in dolore excepteur cupidatat occaecat velit",
            "date": "2015-04-08T07:36:13"
          },
          {
            "originalPost": "quis proident veniam voluptate",
            "text": "elit reprehenderit adipisicing nulla occaecat consectetur voluptate culpa mollit nulla ipsum reprehenderit minim ullamco consectetur reprehenderit ex",
            "date": "2015-01-03T05:47:38"
          },
          {
            "originalPost": "ex et ad",
            "text": "cupidatat cillum veniam deserunt voluptate consequat cillum deserunt occaecat",
            "date": "2014-10-10T01:03:58"
          }
        ],
        "posts": [
          {
            "title": "est aliqua dolore in",
            "type": "undefined",
            "text": "ipsum laboris aute cillum velit pariatur in labore veniam anim tempor tempor irure ad enim",
            "date": "2014-11-06T09:20:48",
            "numVotes": 256,
            "numComments": 972
          },
          {
            "title": "fugiat minim labore irure",
            "type": "undefined",
            "text": "laboris esse tempor dolor occaecat non velit duis",
            "date": "2015-07-09T09:47:40",
            "numVotes": 937,
            "numComments": 687
          },
          {
            "title": "qui duis dolor",
            "type": "undefined",
            "text": "labore irure consectetur et pariatur consectetur velit labore tempor magna qui sunt labore veniam cupidatat",
            "date": "2014-11-18T09:40:12",
            "numVotes": 412,
            "numComments": 777
          },
          {
            "title": "ut incididunt magna duis adipisicing",
            "type": "undefined",
            "text": "officia deserunt mollit dolor fugiat do ad sint adipisicing Lorem amet",
            "date": "2015-02-27T07:41:44",
            "numVotes": 783,
            "numComments": 465
          },
          {
            "title": "ea reprehenderit aliqua",
            "type": "undefined",
            "text": "sint fugiat aliquip dolore occaecat amet",
            "date": "2016-12-05T09:16:50",
            "numVotes": 237,
            "numComments": 258
          },
          {
            "title": "consequat elit aliquip",
            "type": "undefined",
            "text": "minim eu et id ut dolor sunt minim",
            "date": "2016-04-23T02:13:33",
            "numVotes": 699,
            "numComments": 781
          },
          {
            "title": "consectetur cillum ex magna",
            "type": "undefined",
            "text": "incididunt labore aliquip excepteur occaecat velit excepteur voluptate mollit consectetur pariatur veniam enim labore Lorem",
            "date": "2016-03-17T03:08:42",
            "numVotes": 504,
            "numComments": 434
          },
          {
            "title": "qui enim proident",
            "type": "undefined",
            "text": "ipsum elit veniam reprehenderit adipisicing in cillum amet quis quis",
            "date": "2015-04-29T05:01:31",
            "numVotes": 273,
            "numComments": 868
          },
          {
            "title": "consectetur culpa ex tempor",
            "type": "undefined",
            "text": "fugiat eiusmod incididunt incididunt ea officia voluptate",
            "date": "2015-11-20T06:07:07",
            "numVotes": 281,
            "numComments": 557
          },
          {
            "title": "ut non dolore aliqua",
            "type": "undefined",
            "text": "incididunt et sit tempor fugiat ad cillum aliquip sunt",
            "date": "2014-04-28T11:43:12",
            "numVotes": 459,
            "numComments": 902
          }
        ]
      },
       {
        "id": 7,
        "username": "kushybushy12345678",
        "karma": 1819,
        "memberSince": "2014-10-11T06:00:49",
        "comments": [
          {
            "originalPost": "anim pariatur amet Lorem",
            "text": "qui quis aliquip esse laboris commodo elit reprehenderit tempor officia aliqua reprehenderit commodo ipsum dolore",
            "date": "2014-03-05T04:48:29"
          },
          {
            "originalPost": "nulla adipisicing incididunt ea est",
            "text": "est proident consectetur id laborum culpa in pariatur",
            "date": "2014-09-08T10:38:04"
          },
          {
            "originalPost": "nisi dolor eu ea laborum",
            "text": "quis duis enim eiusmod consequat ullamco",
            "date": "2016-12-05T06:02:17"
          },
          {
            "originalPost": "mollit incididunt aute sit amet",
            "text": "culpa esse labore in dolore excepteur cupidatat occaecat velit",
            "date": "2015-04-08T07:36:13"
          },
          {
            "originalPost": "quis proident veniam voluptate",
            "text": "elit reprehenderit adipisicing nulla occaecat consectetur voluptate culpa mollit nulla ipsum reprehenderit minim ullamco consectetur reprehenderit ex",
            "date": "2015-01-03T05:47:38"
          },
          {
            "originalPost": "ex et ad",
            "text": "cupidatat cillum veniam deserunt voluptate consequat cillum deserunt occaecat",
            "date": "2014-10-10T01:03:58"
          }
        ],
        "posts": [
          {
            "title": "est aliqua dolore in",
            "type": "undefined",
            "text": "ipsum laboris aute cillum velit pariatur in labore veniam anim tempor tempor irure ad enim",
            "date": "2014-11-06T09:20:48",
            "numVotes": 256,
            "numComments": 972
          },
          {
            "title": "fugiat minim labore irure",
            "type": "undefined",
            "text": "laboris esse tempor dolor occaecat non velit duis",
            "date": "2015-07-09T09:47:40",
            "numVotes": 937,
            "numComments": 687
          },
          {
            "title": "qui duis dolor",
            "type": "undefined",
            "text": "labore irure consectetur et pariatur consectetur velit labore tempor magna qui sunt labore veniam cupidatat",
            "date": "2014-11-18T09:40:12",
            "numVotes": 412,
            "numComments": 777
          },
          {
            "title": "ut incididunt magna duis adipisicing",
            "type": "undefined",
            "text": "officia deserunt mollit dolor fugiat do ad sint adipisicing Lorem amet",
            "date": "2015-02-27T07:41:44",
            "numVotes": 783,
            "numComments": 465
          },
          {
            "title": "ea reprehenderit aliqua",
            "type": "undefined",
            "text": "sint fugiat aliquip dolore occaecat amet",
            "date": "2016-12-05T09:16:50",
            "numVotes": 237,
            "numComments": 258
          },
          {
            "title": "consequat elit aliquip",
            "type": "undefined",
            "text": "minim eu et id ut dolor sunt minim",
            "date": "2016-04-23T02:13:33",
            "numVotes": 699,
            "numComments": 781
          },
          {
            "title": "consectetur cillum ex magna",
            "type": "undefined",
            "text": "incididunt labore aliquip excepteur occaecat velit excepteur voluptate mollit consectetur pariatur veniam enim labore Lorem",
            "date": "2016-03-17T03:08:42",
            "numVotes": 504,
            "numComments": 434
          },
          {
            "title": "qui enim proident",
            "type": "undefined",
            "text": "ipsum elit veniam reprehenderit adipisicing in cillum amet quis quis",
            "date": "2015-04-29T05:01:31",
            "numVotes": 273,
            "numComments": 868
          },
          {
            "title": "consectetur culpa ex tempor",
            "type": "undefined",
            "text": "fugiat eiusmod incididunt incididunt ea officia voluptate",
            "date": "2015-11-20T06:07:07",
            "numVotes": 281,
            "numComments": 557
          },
          {
            "title": "ut non dolore aliqua",
            "type": "undefined",
            "text": "incididunt et sit tempor fugiat ad cillum aliquip sunt",
            "date": "2014-04-28T11:43:12",
            "numVotes": 459,
            "numComments": 902
          }
        ]
      },
        {
        "id": 7,
        "username": "calikings20",
        "karma": 1819,
        "memberSince": "2014-10-11T06:00:49",
        "comments": [
          {
            "originalPost": "anim pariatur amet Lorem",
            "text": "qui quis aliquip esse laboris commodo elit reprehenderit tempor officia aliqua reprehenderit commodo ipsum dolore",
            "date": "2014-03-05T04:48:29"
          },
          {
            "originalPost": "nulla adipisicing incididunt ea est",
            "text": "est proident consectetur id laborum culpa in pariatur",
            "date": "2014-09-08T10:38:04"
          },
          {
            "originalPost": "nisi dolor eu ea laborum",
            "text": "quis duis enim eiusmod consequat ullamco",
            "date": "2016-12-05T06:02:17"
          },
          {
            "originalPost": "mollit incididunt aute sit amet",
            "text": "culpa esse labore in dolore excepteur cupidatat occaecat velit",
            "date": "2015-04-08T07:36:13"
          },
          {
            "originalPost": "quis proident veniam voluptate",
            "text": "elit reprehenderit adipisicing nulla occaecat consectetur voluptate culpa mollit nulla ipsum reprehenderit minim ullamco consectetur reprehenderit ex",
            "date": "2015-01-03T05:47:38"
          },
          {
            "originalPost": "ex et ad",
            "text": "cupidatat cillum veniam deserunt voluptate consequat cillum deserunt occaecat",
            "date": "2014-10-10T01:03:58"
          }
        ],
        "posts": [
          {
            "title": "est aliqua dolore in",
            "type": "undefined",
            "text": "ipsum laboris aute cillum velit pariatur in labore veniam anim tempor tempor irure ad enim",
            "date": "2014-11-06T09:20:48",
            "numVotes": 256,
            "numComments": 972
          },
          {
            "title": "fugiat minim labore irure",
            "type": "undefined",
            "text": "laboris esse tempor dolor occaecat non velit duis",
            "date": "2015-07-09T09:47:40",
            "numVotes": 937,
            "numComments": 687
          },
          {
            "title": "qui duis dolor",
            "type": "undefined",
            "text": "labore irure consectetur et pariatur consectetur velit labore tempor magna qui sunt labore veniam cupidatat",
            "date": "2014-11-18T09:40:12",
            "numVotes": 412,
            "numComments": 777
          },
          {
            "title": "ut incididunt magna duis adipisicing",
            "type": "undefined",
            "text": "officia deserunt mollit dolor fugiat do ad sint adipisicing Lorem amet",
            "date": "2015-02-27T07:41:44",
            "numVotes": 783,
            "numComments": 465
          },
          {
            "title": "ea reprehenderit aliqua",
            "type": "undefined",
            "text": "sint fugiat aliquip dolore occaecat amet",
            "date": "2016-12-05T09:16:50",
            "numVotes": 237,
            "numComments": 258
          },
          {
            "title": "consequat elit aliquip",
            "type": "undefined",
            "text": "minim eu et id ut dolor sunt minim",
            "date": "2016-04-23T02:13:33",
            "numVotes": 699,
            "numComments": 781
          },
          {
            "title": "consectetur cillum ex magna",
            "type": "undefined",
            "text": "incididunt labore aliquip excepteur occaecat velit excepteur voluptate mollit consectetur pariatur veniam enim labore Lorem",
            "date": "2016-03-17T03:08:42",
            "numVotes": 504,
            "numComments": 434
          },
          {
            "title": "qui enim proident",
            "type": "undefined",
            "text": "ipsum elit veniam reprehenderit adipisicing in cillum amet quis quis",
            "date": "2015-04-29T05:01:31",
            "numVotes": 273,
            "numComments": 868
          },
          {
            "title": "consectetur culpa ex tempor",
            "type": "undefined",
            "text": "fugiat eiusmod incididunt incididunt ea officia voluptate",
            "date": "2015-11-20T06:07:07",
            "numVotes": 281,
            "numComments": 557
          },
          {
            "title": "ut non dolore aliqua",
            "type": "undefined",
            "text": "incididunt et sit tempor fugiat ad cillum aliquip sunt",
            "date": "2014-04-28T11:43:12",
            "numVotes": 459,
            "numComments": 902
          }
        ]
      },
      {
        "id": 6,
        "username": "HirsuiteHeathen",
        "karma": 1647,
        "memberSince": "2016-10-29T08:41:45",
        "comments": [
          {
            "originalPost": "irure proident ea duis",
            "text": "pariatur cillum proident id nostrud consectetur irure ipsum labore id",
            "date": "2015-06-18T01:07:26"
          },
          {
            "originalPost": "aliquip dolor et",
            "text": "cupidatat qui esse officia reprehenderit pariatur dolore do quis adipisicing",
            "date": "2015-03-13T02:41:18"
          },
          {
            "originalPost": "cillum nisi eu",
            "text": "ea sunt amet commodo labore in voluptate",
            "date": "2015-10-14T12:56:11"
          },
          {
            "originalPost": "elit consectetur fugiat",
            "text": "excepteur culpa sit commodo amet dolore exercitation duis voluptate esse elit fugiat fugiat duis excepteur ad cupidatat",
            "date": "2015-02-18T08:28:55"
          },
          {
            "originalPost": "duis eu ullamco anim",
            "text": "ullamco laborum dolor cillum laboris ullamco consequat eiusmod ea",
            "date": "2014-01-12T07:32:38"
          },
          {
            "originalPost": "duis amet tempor est",
            "text": "amet velit voluptate culpa pariatur aliqua et",
            "date": "2015-09-27T03:42:31"
          },
          {
            "originalPost": "in id cillum nisi",
            "text": "adipisicing est in nulla dolor",
            "date": "2014-04-28T01:37:55"
          },
          {
            "originalPost": "ea laboris labore non cupidatat",
            "text": "occaecat culpa commodo cillum amet",
            "date": "2016-08-07T09:00:57"
          },
          {
            "originalPost": "occaecat id ex eu esse",
            "text": "nisi ad id sint duis mollit",
            "date": "2014-07-05T06:03:02"
          }
        ],
        "posts": [
          {
            "title": "ex occaecat commodo aliquip culpa",
            "type": "undefined",
            "text": "eiusmod exercitation dolor sit ea consequat amet do labore",
            "date": "2015-03-16T05:09:58",
            "numVotes": 637,
            "numComments": 341
          },
          {
            "title": "voluptate velit excepteur duis",
            "type": "undefined",
            "text": "sit elit fugiat cupidatat et pariatur dolore pariatur est anim dolor dolor",
            "date": "2016-05-16T07:13:14",
            "numVotes": 922,
            "numComments": 298
          },
          {
            "title": "est culpa est",
            "type": "undefined",
            "text": "non veniam fugiat adipisicing in velit ullamco sunt ut",
            "date": "2016-04-27T04:43:31",
            "numVotes": 690,
            "numComments": 434
          },
          {
            "title": "in do voluptate quis",
            "type": "undefined",
            "text": "officia laboris labore commodo ex aliquip ut",
            "date": "2016-08-17T10:10:28",
            "numVotes": 876,
            "numComments": 443
          },
          {
            "title": "pariatur sint velit",
            "type": "undefined",
            "text": "nulla minim consequat aliqua officia cupidatat dolor ipsum ullamco mollit laborum consequat excepteur do nisi aliquip",
            "date": "2014-02-07T03:02:56",
            "numVotes": 140,
            "numComments": 744
          },
          {
            "title": "Lorem laborum occaecat irure mollit",
            "type": "undefined",
            "text": "ullamco mollit Lorem do voluptate",
            "date": "2014-04-16T08:00:03",
            "numVotes": 101,
            "numComments": 820
          },
          {
            "title": "esse irure sint quis",
            "type": "function (){return!!Math.floor(2*Math.random())}",
            "text": "Lorem tempor aliqua amet amet enim ullamco incididunt id",
            "date": "2014-08-04T06:52:03",
            "numVotes": 825,
            "numComments": 108
          },
          {
            "title": "sunt adipisicing minim",
            "type": "undefined",
            "text": "fugiat ipsum proident aliquip tempor velit est cillum veniam proident commodo sint magna aliqua",
            "date": "2015-11-09T04:33:57",
            "numVotes": 899,
            "numComments": 176
          }
        ]
      }

      ];


  };

  return {
    restrict: 'A',
    link: linkFn,
    templateUrl: '../../views/reddiatoTabs.html'
  };
})
