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
        
        $featured = false;
        $post_categories = wp_get_post_categories($i_post["ID"]);
        $post_width = 6;
        $new_line = false;
        $post_class = " post";
        
        // Check categories for featured
        foreach($post_categories as $c) {
            $cat = get_category( $c );
            if($cat->slug === "featured") {
                $featured = true;
                break;
            }
        }
        
        // Check if we can make a new row 
        if($width % 12 === 0) {
            $new_line = true;   
        }
        
        // Do stuff if featured
        if($featured) {
            $post_class .= " post-featured";
            if($new_line) {
                $post_width = 12;
                $post_class .= " post-featured-full";
            } else {   
                $post_class .= " post-featured-small";
            }
        }
            
?>
<?php if($new_line === true) : ?>
<div class="row-fluid" style="margin-bottom: 20px">
<?php endif; ?>
    
    <div class="span<?php echo $post_width.$post_class ?>">
        <h1><a href=""><?php echo $i_post["post_title"] ?></a></h1>
        <article>
	        <?php //echo $i_post["post_excerpt"] ?>
            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Curabitur quam augue, vehicula quis, tincidunt vel, varius vitae, nulla. Sed convallis orci. Duis libero orci, pretium a, convallis quis, pellentesque a, dolor. Curabitur vitae nisi non dolor vestibulum consequat.</p>
        </article>
    </div>
<?php if(($width + $post_width - 1) % 12 === 11) : ?>
</div>
<?php endif; ?>


<?php 
        // Add post width to current width
        $width += $post_width;    
    endforeach; 
?>

</div>