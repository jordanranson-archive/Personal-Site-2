<?php
/*
Template Name: Latest
 */
?>
<div class="row-fluid page-title">
    <h1>Latest Posts</h1>
</div>
<div class="row-fluid latest-posts">
    <div class="span12">
<?php 
    $post_id = 0;
    $num_posts = 10;
    $width = 0;
    
    if(isset($_GET["post_id"])) {
        $post_id = $_GET["post_id"];
    }
    
    $args = array(
    'numberposts' => $num_posts,
    'offset' => $post_id,
    'category' => 0,
    'orderby' => 'post_date',
    'order' => 'DESC',
    'post_type' => 'post',
    'post_status' => 'draft, publish, future, pending, private',
    'suppress_filters' => true );

    $recent_posts = wp_get_recent_posts( $args, $output = ARRAY_A );
    
    foreach($recent_posts as $i_post) :
        $post_categories = wp_get_post_categories($i_post["ID"]);
        $post_class = " post";        
?>
    <div class="row-fluid">
        <div class="span2 date-tag">
            <div><?php echo mysql2date('M', $i_post["post_date"]); ?></div>
            <div><?php echo mysql2date('d', $i_post["post_date"]); ?></div>
        </div>
        <div class="span10 post">
            <header>
                <h1><a href="<?php echo get_permalink($i_post["ID"]); ?>?post_id=<?php echo $i_post["ID"]; ?>" class="post-link"><?php echo $i_post["post_title"] ?></a></h1>
            </header>
            <article>
	            <?php //echo $i_post["post_excerpt"] ?>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur quam augue, vehicula quis, tincidunt vel, varius vitae, nulla. Sed convallis orci. Duis libero orci, pretium a, convallis quis, pellentesque a, dolor. Curabitur vitae nisi non dolor vestibulum consequat.</p>
            </article>
            <footer>
            <?php 
                $posttags = get_the_tags($i_post["ID"]);
                if ($posttags) {
                    foreach($posttags as $tag) {
                        echo "<a href='' class='tag'>" . $tag->name . "</a>"; 
                    }
                }
            ?>
            </footer>
        </div>
    </div>

<?php endforeach; ?>
    </div>
</div>