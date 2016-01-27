// App.js
angular.module('angularKickstart.home', []);
angular.module('angularKickstart.samplePage', []);

angular.module('angularKickstart', [
        'ngRoute', 
        'ngCookies',
        'ngAnimate',
        'pascalprecht.translate',
        'angularMoment',
        'angularKickstart.home',
        'angularKickstart.samplePage'
    ])

    .config(['$locationProvider', function($locationProvider) {
        $locationProvider.html5Mode(true);
    }])

    .constant('APP_CONFIG', {
        apiEndPoint: 'http://127.0.0.1:9000/'
    })

    .constant('BREAKPOINTS', {
        TABLET: 992
    })

    .controller('MainController', ['$scope', function ($scope) {
        console.log('testing');
    }])

    .run([function () {

    }]);
