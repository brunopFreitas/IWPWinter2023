<?php

get_header();

if ( have_posts() ) :
    while ( have_posts() ) : the_post();?>
        <h2><?php the_title(); ?></h2>
        <?php the_content(); ?>
<?php
    endwhile;
else :
    _e( 'Sorry, no posts matched your criteria.', 'textdomain' );
endif;

echo "<div>This is the index.php</div>";

get_footer();

?>