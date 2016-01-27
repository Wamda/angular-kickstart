/* global angular */
angular.module('angularKickstart.home')
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/samplepage', {
            controller: 'PageCtrl as ctrl',
            templateUrl: 'pages/sample-page/sample-page.html'
         })
     }])

.controller('PageCtrl', ['$scope', function($scope) {}])
