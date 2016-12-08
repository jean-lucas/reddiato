angular.module('reddiato')
.directive('reddiatoTabs', function() {
  var linkFn;
  linkFn = function(scope, element, attrs) {
    var subredditDrawer = angular.element(element.children()[0]);
    var tabs = angular.element(element.children()[1]);
    var newThread = angular.element(element.children()[3]);

    // Slide drawer to the right
    var out = false;
    $(subredditDrawer).on('click', function() {
      out = !out;
      if (out) {
        $('.subreddits_drawer .caret-r-l').text('<');
        $('#drawer').animate({
          left: '0'
        });
      } else {
        $('.subreddits_drawer .caret-r-l').text('>');
        $('#drawer').animate({
          left: '-250px'
        });
      }
    });

    // Add a tab to the tab menu
    // This will not be mapped the the new thread button later,
    // I just did it for testing purposes!
    $(newThread).on('click', function() {
      var name = '/r/pics';
      $('.tab').removeClass('active');
      tabs.prepend(createTab(name));
      switchContent(name)
    });

    // Handle switching tabs
    $('header').on('click', '.tabs .tab', function() {
      $('.tab').removeClass('active');
      $(this).addClass('active');
      var name = $(this).text().trim();
      // Gets rid of the x in the name from the close button
      name = name.substring(0, name.length -1);
      switchContent(name);
    });

    // Handle closing tabs
    $('header').on('click', '.tabs .tab .close', function(evt) {
      evt.stopPropagation();
      var num_tabs = tabs.children().length;
      $(this).parent().remove();
      tabs.children().first().addClass('active');

      var name = tabs.children().first().text().trim();
      // Gets rid of the x in the name from the close button
      name = name.substring(0, name.length -1);

      if (tabs.children().length == 0) {
        tabs.append(createTab('/r/front'));
        name = '/r/front';
      }

      switchContent(name);


    });

    createTab = function(name) {
      var subreddit = angular.element('<span class="subreddit_name">'+name+'</span>');
      var close = angular.element('<span class="close">x</span>');
      var tab = angular.element('<div class="tab active"></div>');
      tab.append(subreddit);
      tab.append(close);
      return tab;
    };

    switchContent = function(subredditName) {
      var content_id = '#r-' + subredditName.substring(3);
      $('body').find('.content').children().fadeOut('slow', function() {
        $(content_id).fadeIn('slow')
      });

    };

  };

  return {
    restrict: 'A',
    link: linkFn
  };
})
