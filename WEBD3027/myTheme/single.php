<?php

get_header();

if ( have_posts() ) :
    while ( have_posts() ) : the_post();?>
        <?php 
        $id = get_the_ID();        
        $url_thumbnail = get_the_post_thumbnail_url($id, "full"); // The featured image
        echo 
        '<div class="text-center">
            <img src="'.$url_thumbnail.'" class="img-fluid">
        </div>'; 
        ?>        
        <h2 class="mt-5"><?php the_title(); ?></h2>
        <p>
        <?php the_author();?> - <?php echo get_the_date('F j, Y');?>
        </p>
        <?php the_content(); ?>
        
<?php
    endwhile;
else :
    _e( 'Sorry, no posts matched your criteria.', 'textdomain' );
endif;

get_footer();

?>