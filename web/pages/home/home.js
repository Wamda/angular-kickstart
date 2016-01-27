/* global angular */
angular.module('angularKickstart.home')
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {
            controller: 'HomeCtrl as ctrl',
            templateUrl: 'pages/home/home.html'
         })
     }])

.controller('HomeCtrl', ['$scope', function($scope) {}])
