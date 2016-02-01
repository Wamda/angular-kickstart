module.exports = {
    server: {
        host: 'localhost',
        port: '9000'
    },
    watchPaths: {
        scss: [
            'web/**/*.scss',
            '!web/bower_components/**/*.scss',
            '!web/_build/**/*.scss'
        ],

        js: [
            'web/**/*.js',
            '!web/bower_components/**/*.js',
            '!web/_build/**/*.js'
        ],

        html: [
            'web/**/*.html',
            '!web/bower_components/**/*.html',
            '!web/_build/**/*.html'
        ]
    },
    distPaths: {
        styles: 'tmp/css',
        appBuild: 'web/_build'        
    },

    sourcePaths: {
        sass: [
            'web/stylesheets/main.scss'
        ],
        compiledCSS: [
            'tmp/css/**/*.css', 
        ],
        appJS: [
            'web/app.js', 
            'web/services/*.js',
            'web/pages/**/*.js',
            'web/components/**/*.js',
            'web/directives/**/*.js',
            'web/filters/*.js',
            'tmp/templates.min.js'
        ],
        vendorJS: [
            'web/bower_components/angular/angular.min.js', 
            'web/bower_components/angular-route/angular-route.min.js',
            'web/bower_components/angular-cookies/angular-cookies.min.js',
            'web/bower_components/angular-translate/angular-translate.min.js',
            'web/bower_components/angular-animate/angular-animate.min.js',
            'web/bower_components/moment/min/moment.min.js',
            'web/bower_components/angular-moment/angular-moment.min.js'
        ],

        templates: [
            'web/**/*.html',
            '!web/_build/*.html',
            '!web/bower_components/*.html',
            '!web/index.html'
        ]
    }
};
