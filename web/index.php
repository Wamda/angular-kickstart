<?php $buildAssets = json_decode(file_get_contents('_build/rev-manifest.json'), true); ?>
<!DOCTYPE html>
<html lang="en" ng-app="angularKickstart">
    <head>
        <base href="/" />
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
        <global-nav></global-nav>
        <div class="container">
            <ng-view class="view" autoscroll></ng-view>
        </div>
        <script src="<?php echo '/_build/'.$buildAssets['vendor.min.js']; ?>"></script>
        <script src="<?php echo '/_build/'.$buildAssets['app.min.js']; ?>"></script>
    </body>
</html>
