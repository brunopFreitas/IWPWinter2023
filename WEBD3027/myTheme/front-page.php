<?php get_header(); ?>

<div class="row">
        <?php    
            $featuredPosts = get_posts(array(
                "numberposts" => 1,
                "orderby"     => 'date',
                "order"       => 'desc',
                "tag"    => 'featured'));
            foreach($featuredPosts as $featuredPost) {

                $url_thumbnail = get_the_post_thumbnail_url($featuredPost->ID, "large"); // The featured image
                $url_post = get_permalink($featuredPost->ID);
                $title = $featuredPost->post_title;
                $post_date = get_the_date('F j, Y', $featuredPost->ID);
                $author = get_the_author_meta('display_name', $featuredPost->post_author);
                $post_excerpt = $excerpt = get_the_excerpt($featuredPost->ID);
                echo '<div class="col-md-6">';
                    echo '<img src="'.$url_thumbnail.'" class="img-fluid"><br>';
                echo '</div>';
                echo '<div class="col-md-6">';
                    echo '<h1><a href="'.$url_post.'" class="text-decoration-none text-dark fw-bold myLinks">'.$title .'</a></h1>';
                    echo '<p>'.$post_date.'</p>';
                    echo '<p>'.'By '.$author.'</p>';
                    echo '<p>'.$post_excerpt.'</p>';
                echo '</div>';
            }
             
        ?>
</div>

<?php
    echo '<div class="row mt-5">';
    $sizeName = "100-100"; //registered name in previous example!
/*************** Get the categories ********************/
$categories = get_categories(array(
    'orderby' => 'name',
    'order'   => 'ASC'));


foreach($categories as $category) {
    $category_link = get_category_link($category);
    $category_name = $category->name;
    echo '<div class="col-md-3">';

    /*********** Get the posts for this category *************/
    $posts = get_posts(array(
        "numberposts" => 3,
        "orderby"     => 'date',
        "order"       => 'desc',
        "category"    => $category->term_id)); //For the main content in the page, pull "tag" here and look up for your tag, example: fature. Try to create a proportion of 2/3 (8 columns to 4 columns on the right)
        echo '<h3><a href="'.$category_link.'" class="text-decoration-none text-dark myLinks">'.$category_name.'</a></h3>';
    $count = 1;    
    foreach($posts as $fp) {
        // full, large, medium, thumbnail
        $url_thumbnail = get_the_post_thumbnail_url($fp->ID, $sizeName); // The featured image
        $url_post = get_permalink($fp->ID);
        $title = $fp->post_title;
        if($count==1){
            echo '<div class="row mt-2">';        
            echo '<img src="'.$url_thumbnail.'" class="img-fluid"><br>';
            echo '<a href="'.$url_post.'" class="text-decoration-none text-dark fw-bold myLinks">'.$title .'</a><br>';
            echo '</div>';
        } else { 
            echo '<div class="row mt-3">';        
            echo '<a href="'.$url_post.'" class="text-decoration-none text-dark fw-bold myLinks">'.$title .'</a><br>';
            echo '</div>';
        }
        $count++;

    }
    echo '</div>';

}
    echo '</div>';
?>

<?php get_footer(); ?>