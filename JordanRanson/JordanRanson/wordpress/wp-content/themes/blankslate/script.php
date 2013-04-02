<?php if(!isset($_GET["api"])): ?>
        <script>
            window.state = {
                baseUrl: "<?php bloginfo('url'); ?>",
                query: "?api=1",
                depth: <?php echo $page_depth; ?>,
                title: document.title,
                siteTitle: "<?php bloginfo('name'); ?>",
                color: "<?php echo $page_color; ?>"
            };
        </script>
<?php endif; ?>