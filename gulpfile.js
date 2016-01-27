var gulp          = require('gulp'),
    plumber       = require('gulp-plumber'),
    livereload    = require('gulp-livereload'),
    connectPHP    = require('gulp-connect-php');
    sass          = require('gulp-sass'),
    opn           = require('opn'),
    concat        = require('gulp-concat'),
    minifyCSS     = require('gulp-minify-css'),
    rename        = require('gulp-rename'),
    uglify        = require('gulp-uglify'),
    jshint        = require('gulp-jshint'),
    auto_prefixer = require('gulp-autoprefixer'),
    ngTemplates   = require('gulp-ng-templates'),
    rev           = require('gulp-rev'),

    config = require('./config/gulp');

gulp.task('sass', function () {
    return gulp.src(config.sourcePaths.sass)
        .pipe(plumber())
        .pipe(sass())
        .pipe(auto_prefixer())
        .pipe(gulp.dest(config.distPaths.styles));
});

gulp.task('serve', ['templateCache', 'buildstyles', 'buildVendorJS', 'buildapp'], function() {
    connectPHP.server({
        hostname: '0.0.0.0',
        port: 9000,
        base: './web',
        livereload: true
    });
});

gulp.task('templateCache', function () {
    return gulp.src(config.sourcePaths.templates)
        .pipe(ngTemplates({
            'module': 'alRobbanApp',
            'header': 'angular.module("<%= module %>").run(["$templateCache", function($templateCache) {'
        }))
        .pipe(gulp.dest('tmp'));
});

gulp.task('watch', function () {
    gulp.watch('web/assets/scss/*.scss', ['buildstyles']);
    gulp.watch(config.sourcePaths.vendorJS, ['buildVendorJS']);
    gulp.watch(config.sourcePaths.appJS, ['buildapp']);
});

gulp.task('openbrowser', function () {
    opn( 'http://' + server.host + ':' + server.port );
});

gulp.task('buildstyles', ['sass'], function () {
    return gulp.src(config.sourcePaths.compiledCSS)
        .pipe(concat('app.min.css'))
        .pipe(minifyCSS())
        .pipe(rev())
        .pipe(gulp.dest(config.distPaths.appBuild))
        .pipe(rev.manifest('web/_build/rev-manifest.json', { base: config.distPaths.appBuild, merge: true }))
        .pipe(gulp.dest(config.distPaths.appBuild))
});

gulp.task('buildVendorJS', function () {
    return gulp.src(config.sourcePaths.vendorJS)
        .pipe(concat('vendor.min.js'))
        .pipe(uglify())
        .pipe(rev())
        .pipe(gulp.dest(config.distPaths.appBuild))
        .pipe(rev.manifest('web/_build/rev-manifest.json', { base: config.distPaths.appBuild, merge: true }))
        .pipe(gulp.dest(config.distPaths.appBuild))
});

gulp.task('buildapp', function () {
    return gulp.src(config.sourcePaths.appJS)
        .pipe(concat('app.min.js'))
        .pipe(uglify())
        .pipe(rev())
        .pipe(gulp.dest(config.distPaths.appBuild))
        .pipe(rev.manifest('web/_build/rev-manifest.json', { base: config.distPaths.appBuild, merge: true }))
        .pipe(gulp.dest(config.distPaths.appBuild))
});

gulp.task('jsHintProject', function (done) {
    gulp.src(config.sourcePaths.appJS)
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(jshint.reporter('fail'));
});

gulp.task('default', ['serve', 'watch']);
