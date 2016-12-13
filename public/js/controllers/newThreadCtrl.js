angular.module('newThreadCtrl', [])
    .controller('newThreadController', function($scope) {
        var self = this;
        this.toggleVal;
        $("#newThreadModal").modal('show');

    }).filter('filterArray', function($filter) {
        return function(list, arrayFilter) {
            if (arrayFilter) {
                return $filter("filter")(list, function(listItem) {
                    return listItem[0].includes(arrayFilter);
                });
            } else {
                return list;
            }

        }
    });
