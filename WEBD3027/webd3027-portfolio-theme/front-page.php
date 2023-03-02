<?php get_header(); ?>

<main class="container">

    <?php    
    /************* Custom Logo **********************/
    if ( function_exists( 'the_custom_logo' ) ) {        
        $custom_logo_id = get_theme_mod( 'custom_logo' );
        $image = wp_get_attachment_image_src( $custom_logo_id , 'medium' );
        $logo = $image[0];

        echo '<img src="'.$logo.'">';
    }
    ?>

    <h2><?php echo get_bloginfo("description"); ?></h2>

    <p>
        <a href="#" class="btn btn-primary">Let's Talk</a>
    </p>

    <hr>

    <?php
    /*************** Get the categories ********************/
    $categories = get_categories(array(
        'orderby' => 'name',
        'order'   => 'ASC'));

    foreach($categories as $category) {
        $category_link = get_category_link($category);
        $category_name = $category->name;
        
        echo '<h3><a href="'.$category_link.'">'.$category_name.'</a></h3>';

        /*********** Get the posts for this category *************/
        $posts = get_posts(array(
            "numberposts" => 1,
            "orderby"     => 'date',
            "order"       => 'desc',
            "category"    => $category->term_id));

        foreach($posts as $fp) {
            // full, large, medium, thumbnail
            $url_thumbnail = get_the_post_thumbnail_url($fp->ID, "medium"); // The featured image
            $excerpt = get_the_excerpt($fp->ID);
            $url_post = get_permalink($fp->ID);
            $title = $fp->post_title;
            $date = $fp->post_date;

            echo '<img src="'.$url_thumbnail.'" class="img-fluid"><br>';
            echo '<a href="'.$url_post.'">'.$title .'</a><br>';
            echo $date . "<br>";
            echo $excerpt . "<br>";
        }
    
    }
    ?>

</main>

<div>This is the front-page.php</div>

<?php get_footer(); ?>