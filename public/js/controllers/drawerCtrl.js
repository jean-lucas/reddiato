angular.module('drawerCtrl', [])
.controller('drawerController', function($scope) {
  var self = this;
  // set title L
  this.title = "Reddiato";

  this.goTo = function(subreddit) {
    // Create new Tab
    var newTab = $scope.createTab(subreddit);
    $scope.tabs.prepend(newTab);

    // Close drawer
    $scope.subredditDrawer.trigger('click');
  }

  this.subreddits = [
    '/r/AskReddit',
    '/r/IAmA',
    '/r/bestof',
    '/r/fatpeoplestories',
    '/r/pettyrevenge',
    '/r/TalesFromRetail',
    '/r/DoesAnybodyElse',
    '/r/CrazyIdeas',
    '/r/WTF',
    '/r/webdev',
    '/r/aww',
    '/r/cringepics',
    '/r/cringe',
    '/r/MorbidReality',
    '/r/rage',
    '/r/mildlyinfuriating',
    '/r/creepy',
    '/r/creepyPMs',
    '/r/nosleep',
    '/r/nostalgia',
    '/r/gaming',
    '/r/leagueoflegends',
    '/r/pokemon',
    '/r/Minecraft',
    '/r/starcraft',
    '/r/Games',
    '/r/DotA2',
    '/r/skyrim',
    '/r/tf2',
    '/r/magicTCG',
    '/r/wow',
    '/r/KerbalSpaceProgram',
    '/r/mindcrack',
    '/r/Fallout',
    '/r/roosterteeth',
    '/r/Planetside',
    '/r/gamegrumps',
    '/r/battlefield3',
    '/r/zelda',
    '/r/darksouls',
    '/r/masseffect',
    '/r/arresteddevelopment',
    '/r/gameofthrones',
    '/r/doctorwho',
    '/r/mylittlepony',
    '/r/community',
    '/r/breakingbad',
    '/r/adventuretime',
    '/r/startrek',
    '/r/TheSimpsons',
    '/r/futurama',
    '/r/HIMYM',
    '/r/DunderMifflin',
    '/r/thewalkingdead',
    '/r/Music',
    '/r/movies',
    '/r/harrypotter',
    '/r/StarWars',
    '/r/DaftPunk',
    '/r/hiphopheads',
    '/r/anime',
    '/r/comicbooks',
    '/r/geek',
    '/r/batman',
    '/r/TheLastAirbender',
    '/r/Naruto',
    '/r/FanTheories',
    '/r/funny',
    '/r/AdviceAnimals',
    '/r/fffffffuuuuuuuuuuuu',
    '/r/4chan',
    '/r/ImGoingToHellForThis',
    '/r/firstworldanarchists',
    '/r/circlejerk',
    '/r/MURICA',
    '/r/facepalm',
    '/r/Jokes',
    '/r/wheredidthesodago',
    '/r/polandball',
    '/r/TrollXChromosomes',
    '/r/comics',
    '/r/nottheonion',
    '/r/britishproblems',
    '/r/TumblrInAction',
    '/r/onetruegod',
    '/r/pics',
    '/r/videos',
    '/r/gifs',
    '/r/reactiongifs',
    '/r/mildlyinteresting',
    '/r/woahdude',
    '/r/FiftyFifty',
    '/r/wallpapers',
    '/r/youtubehaiku',
    '/r/Unexpected',
    '/r/photoshopbattles',
    '/r/AnimalsBeingJerks',
    '/r/cosplay',
    '/r/awwnime',
    '/r/PerfectTiming',
    '/r/OldSchoolCool',
    '/r/Pareidolia',
    '/r/tumblr',
    '/r/techsupportgore',
    '/r/PrettyGirls',
    '/r/itookapicture',
    '/r/todayilearned',
    '/r/science',
    '/r/askscience',
    '/r/space',
    '/r/AskHistorians',
    '/r/YouShouldKnow',
    '/r/explainlikeimfive'

  ];
});
