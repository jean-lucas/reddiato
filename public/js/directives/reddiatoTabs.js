angular.module('reddiato')
.directive('reddiatoTabs', function() {
  var linkFn;
  linkFn = function(scope, element, attrs) {
    scope.subredditDrawer = angular.element(element.children()[0]);
    scope.tabs = angular.element(element.children()[1]);
    var newThread = angular.element(element.children()[3]);

    // Slide drawer to the right
    var out = false;
    $(scope.subredditDrawer).on('click', function() {
      out = !out;
      // if (out) {
      //   // $('.subreddits_drawer .caret-r-l').text('<');
      //   $('#drawer').animate({
      //     left: '0'
      //   });
      // } else {
      //   // $('.subreddits_drawer .caret-r-l').text('>');
      //   $('#drawer').animate({
      //     left: '-300px'
      //   });
      // }
      $('#drawer').slideToggle("slow");
    });

    // Handle switching tabs
    $('header').on('click', '.tabs .tab', function() {
      $('.tab').removeClass('active');
      $(this).addClass('active');
      var name = $(this).text().trim();
      // Gets rid of the x in the name from the close button
      name = name.substring(0, name.length -1);
      scope.switchContent(name);
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

      scope.switchContent(name);


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
      $('body').find('.content').children().fadeOut('slow', function() {
        $(content_id).fadeIn('slow')
      });

    };

  };

  return {
    restrict: 'A',
    link: linkFn,
    templateUrl: '../../views/reddiatoTabs.html'
  };
})
