<!DOCTYPE html>
<html <?php language_attributes(); ?> class="no-js">
<head>
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport" content="width=device-width">
    <link rel="profile" href="http://gmpg.org/xfn/11">
    <link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
    <!--[if lt IE 9]>
    <script src="<?php echo esc_url( get_template_directory_uri() ); ?>/js/html5.js"></script>
    <![endif]-->
    <?php wp_head(); ?>
</head>
 
<body <?php body_class(); ?>>



<header>
    <div class="row bg-warning">
        <div class="col">
            <div class="d-flex justify-content-end">
                <h1 class="justify-content-end"><a href="<?php echo get_home_url(); ?>" class="text-decoration-none text-dark"><?php echo get_bloginfo("name"); ?></a></h1>
            </div>
        </div>

        <div class="col-5 p-0">
            <div class="d-flex justify-content-center align-items-end">
                <ul class="nav">
                <?php 
                $menu = wp_get_nav_menu_items('Primary Menu');

                foreach($menu as $menu_item)
                {
                    echo '<li class="nav-item"><h4><a href="'.$menu_item->url.'" class="nav-link text-decoration-none text-dark myLinks">'.$menu_item->title.'</a></h4></li>'; //$menu_item->url." ".$menu_item->title ."<br>";
                }
                ?>
                </ul>
            </div>
        </div>
        <div class="col"></div>
    </div>
</header>

<div class="container">