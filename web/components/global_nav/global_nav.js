angular.module('angularKickstart')
    .directive('globalNav', [function() {
        return {
            templateUrl: 'components/global_nav/global_nav.html',
            restrict: 'E',
            scope: {},
            link: function($scope, $element, $attrs) {}
        };
    }]);
