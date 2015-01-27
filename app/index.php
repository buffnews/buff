<!doctype html>
<!--[if lt IE 7]>      <html class="no-js lt-ie10 lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie10 lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie10 lt-ie9"> <![endif]-->
<!--[if IE 9]>         <html class="no-js lt-ie10"> <![endif]-->
<!--[if gt IE 9]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <?php include(dirname(__FILE__).'/includes/base/head.php'); ?>
    </head>

    <body>

        <div id="fb-root"></div>
        
        <?php include(dirname(__FILE__).'/includes/layouts/header.php'); ?>

        <div class="wrapper">

            <?php include(dirname(__FILE__).'/includes/layouts/article.php'); ?>

            <?php include(dirname(__FILE__).'/includes/layouts/right-rail.php'); ?>
          
        </div>

        <?php include(dirname(__FILE__).'/includes/components/article/recent-stories-loader.php'); ?>

        <div class="fb-comments" data-href="http://developers.facebook.com/docs/plugins/comments/" data-width="100%" data-numposts="20" data-colorscheme="light"></div>

        <?php include(dirname(__FILE__).'/includes/layouts/footer.php'); ?>

    </body>
</html>
