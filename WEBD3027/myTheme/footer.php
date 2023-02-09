<footer>
<hr>
<div class="row">
        <div class="col-md-4">
            <div class="d-flex justify-content-start">
                <h1 class="pe-5 me-2"><a href="<?php echo get_home_url(); ?>" class="text-decoration-none text-dark "><?php echo get_bloginfo("name"); ?></a></h1>
            </div>
        </div>

        <div class="col-md-4">
        </div>
        <div class="col-md-4 text-end">
        <div class="d-flex justify-content-end">
                <ul class="list-inline">
                <?php 
                $pages = get_pages();
                foreach($pages as $page)
                {
                    echo '<li><h5><a href="'.$page->url.'" class="nav-link text-decoration-none text-dark myLinks">'.$page->post_title.'</a></h5></li>'; //$menu_item->url." ".$menu_item->title ."<br>";
                }
                ?>
                </ul>
            </div>
        </div>
    </div>
</footer>

</div><!-- /container -->

<?php wp_footer(); ?>

</body>
</html>