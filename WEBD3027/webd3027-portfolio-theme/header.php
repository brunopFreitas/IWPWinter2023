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

<h1><a href="<?php echo get_home_url(); ?>"><?php echo get_bloginfo("name"); ?></a></h1>

<ul class="nav">
<?php 
$menu = wp_get_nav_menu_items('Primary Menu');

foreach($menu as $menu_item)
{
    echo '<li class="nav-item"><a href="'.$menu_item->url.'">'.$menu_item->title.'</a></li>'; //$menu_item->url." ".$menu_item->title ."<br>";
}
?>
</ul>