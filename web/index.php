<?php $buildAssets = json_decode(file_get_contents('_build/rev-manifest.json'), true); ?>
<!DOCTYPE html>
<html lang="en" ng-app="angularKickstart">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="description" content="">
        <meta name="author" content="">
        <link rel="icon" href="assets/images/favicon.ico">
        <title>Angular Kickstart</title>
        <link href="<?php echo '/_build/'.$buildAssets['app.min.css']; ?>" rel="stylesheet" type="text/css">
    </head>
    <body ng-controller="MainController">
    <h1>Angular App Kickstart</h1>
        <nav>
            <a href="/">Home</a>
            <a href="/sample-page">Sample page</a>
        </nav>
        <div>
            A simple modular structure, build system and boilerplate for Angular 1 based single page websites.
            <ul>
                <li>Gulp based build system with versioning</li>
                <li>SCSS file structure based on [7-1 pattern](http://sass-guidelin.es/#the-7-1-pattern)</li>
                <li>Boilerplate examples on pages, services and components</li>
                <li>Includes useful Angular app Bower dependencies</li>
            </ul>
        </div>
        <script src="<?php echo '/_build/'.$buildAssets['vendor.min.js']; ?>"></script>
        <script src="<?php echo '/_build/'.$buildAssets['app.min.js']; ?>"></script>
    </body>
</html>
