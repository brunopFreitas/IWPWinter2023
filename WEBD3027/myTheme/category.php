<?php

get_header();

$category_name = single_cat_title('',false);

echo '<h2>'.$category_name.'</h2><br>';

if ( have_posts() ) :
    while ( have_posts() ) : the_post();
        $id = get_the_ID();

        $title = get_the_title($id);
        $excerpt = get_the_excerpt($id);
        $url_post = get_permalink($id);
        $url_thumbnail = get_the_post_thumbnail_url($fp->ID, "medium"); // The featured image

        echo '<div class="row"><div class="col-md-3">';        
        echo '<img src="'.$url_thumbnail.'" class="img-fluid"></div><div class="col-md-9">';
        echo '<h3><a href="'.$url_post.'" class="img-fluid">'.$title.'</a></h3>';
        echo $excerpt;
        echo '</div></div>';

    endwhile;
else :
    _e( 'Sorry, no posts matched your criteria.', 'textdomain' );
endif;

get_footer();

?>