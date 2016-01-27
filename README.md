#Angular Kickstart

A simple modular structure, build system and boilerplate for Angular 1 based single page websites.

## Features
- Gulp based build system with versioning
- SCSS file structure based on [7-1 pattern](http://sass-guidelin.es/#the-7-1-pattern)
- Boilerplate examples on pages, services and components
- Includes useful Angular app Bower dependencies
- Service the latest built asset files via a config file and a simple PHP page

## Running the project

### Install node modules
Example: Gulp and it's dependencies

```
npm install
```

### Install frontend vendor file
Example: Angular, it's component and 3rd party libs

```
bower install
```

### Compile, run and watch
```
gulp
```

## Developing

The application is composed of states, which contain re-usable components. States represent pages of the application, while components should be though of as re-usable chunks of code that can be used in any state.

### Pages

Pages should be their own modules w/ their own routing. Make sure to define the page's module at the top of app.js before using. Pages should be in charge of requesting data from an API and passing that data to their template, which is typically made up of components.

Example home page:

```javascript
angular.module('angularKickstart.home')
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/', {
            templateUrl: 'pages/home/home.html',
            controller: 'HomeCtrl',
            controllerAs: 'ctrl'
        });
    }])
    .controller('HomeCtrl', [function() {
        this.msg = 'Hello world!';
    }])
;
```

### Components

Components are re-usable pieces of the application. Components are typically Angular `directives`. Components should include their own templates and JS code. These should all be located in the same directory as the component JavaScript. Component styles for now are available under `web/stylesheets/components` we might want to move them into seperate component directories later

Example component:

```javascript
angular.module('angularKickstart')
    .directive('testComponent', [function() {
        return {
            restrict: 'E',
            templateUrl: 'components/test_component/test_component.html',
            scope: {
                msg: '@'
            }
        };
    }])
;
```
