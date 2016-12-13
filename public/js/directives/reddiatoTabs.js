angular.module('reddiato')
.directive('reddiatoTabs', function() {
  var linkFn;
  linkFn = function(scope, element, attrs) {
    scope.subredditDrawer = angular.element(element.children()[0]);
    scope.tabs = angular.element(element.children()[1]);
    var newThread = angular.element(element.children()[3]);

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
      if (name.startsWith('/r/'))
        template_name = getTemplateName(name);

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

      var template_name = getTemplateName(name);

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


  };

  return {
    restrict: 'A',
    link: linkFn,
    templateUrl: '../../views/reddiatoTabs.html'
  };
})
