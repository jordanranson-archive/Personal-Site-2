<!DOCTYPE html>
<?php
    global $global_post_data;
    $global_post_data = array();
?>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title><?php bloginfo('name'); ?> <?php wp_title(); ?></title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="">
        <meta name="author" content="">

        <!-- The styles -->
        <link href="<?php bloginfo('template_directory');?>/css/bootstrap.css" rel="stylesheet">
        <link href="<?php bloginfo('template_directory');?>/css/bootstrap-responsive.css" rel="stylesheet">
        <link href="<?php bloginfo('template_directory');?>/css/font-awesome.min.css" rel="stylesheet">
        <link href="<?php bloginfo('template_directory');?>/style.css" rel="stylesheet">
        <link href="http://fonts.googleapis.com/css?family=Titillium+Web:200,400,600" rel="stylesheet" type="text/css">

        <!-- Fav and touch icons -->
    </head>

    <body>
    <div class="wrapper"> 
    
        <div class="overlay"></div>
        <canvas class="canvas" id="background-canvas"></canvas>
    
        <nav id="main">
            <h1>Jordan Ranson</h1>
            <!--<ul class="unstyled">
                <li><a href="" data-color="yellow">Projects</a></li>
                <li><a href="" data-color="blue">Portfolio</a></li>
                <li><a href="" data-color="green">Contact</a></li>
            </ul>-->
            <?php wp_nav_menu( array( 'menu' => 'primary', 'menu_class' => 'unstyled', 'container' => 'false' ) ); ?>
        </nav>
        
        <aside id="search" class="extra slide-in">
            <div class="aside-container">   
				<?php get_sidebar(); ?>
            </div>
        </aside>
        
        <div id="loading" class="loading slide-in">
            Loading
        </div>
 
        <div class="reading-nav" id="btn-show-menu"><i class="icon-reorder"></i></div>
        <div class="reading-nav" id="btn-search"><i class="icon-search"></i></div>
        <div class="reading-nav" id="btn-close"><i class="icon-remove"></i></div>
        <div id="content" class="content-wrapper">

            <div class="content">
                <div class="content-container"> 
                    <div class="container" id="container">
                        <!-- CONTENT GOES IN ME -->
                    </div>
                </div>
            </div>
        </div>

        
        <!-- The javascript
        ================================================== -->
        <!-- Placed at the end of the document so the pages load faster -->
        <script src="<?php bloginfo('template_directory');?>/js/jquery-1.9.1.min.js"></script>
        <script src="<?php bloginfo('template_directory');?>/js/bootstrap.min.js"></script>
        <script src="<?php bloginfo('template_directory');?>/js/site.js"></script>  
    </div>
    </body>
</html>
