<?php
	$post_id = 0;
	$post = null;
	
	if(isset($_GET['post_id'])) {
		$post_id = $_GET['post_id'];
		$post = get_post($post_id);
?>
	
<h1><a href=""><?php the_title() ?></a></h1>
<article>
	<?php the_content() ?>
</article>
	
<?php
	}
?>