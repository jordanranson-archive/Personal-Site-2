<?php 
    $post = get_post($_GET["post_id"], ARRAY_A);
?>
<div class="row-fluid page-title">
    <h1><?php echo $post["post_title"]; ?></h1>
</div>
<div class="row-fluid">
    <div class="span12 post post-single">
        <header>
            <h2 class="post-date"><?php echo mysql2date('F j, Y', $post["post_date"]); ?></h2>
            <p class="excerpt">
                <?php echo $post["post_excerpt"]; ?>
            </p>
        </header>
        <article> 
            <?php echo $post["post_content"]; ?>
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