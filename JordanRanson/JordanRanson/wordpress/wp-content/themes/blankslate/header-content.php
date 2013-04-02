    </head>

    <body>
    <div class="wrapper"> 
    
        <div class="overlay"></div>
        <canvas class="canvas" id="background-canvas"></canvas>
    
        <nav id="main" class="slide-in no-transitions">
            <h1>Jordan Ranson</h1>
            <ul class="unstyled">
                <li><a href="<?php echo get_permalink(get_page_by_path("latest")); ?>" data-query="?api=1" data-color="green">Projects</a></li>
                <li><a href="" data-color="blue">Portfolio</a></li>
                <li><a href="" data-color="yellow">Contact</a></li>
            </ul>
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