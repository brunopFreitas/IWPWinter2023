<?php
/*
Plugin Name: My First Plugin
Description: This is my first WordPress Plugin
Author: Bruno Freitas
Version: 1.0
*/

/*
* My Action
*/

// The callback function
function myfirstplugin_action_say_hello() {
    print '<h2>Hello World!</h2>';
    if (is_page())
    {
        print '<h3>This is a Page!</h3>';
    }
}

// Register the action hook
add_action ( 'wp', 'myfirstplugin_action_say_hello');

/*
* My Filter
*/

// The callback function
function myfirstplugin_filter_title( $title ) {
    if (is_page())
    {
        $title = strtoupper($title);
    }
return $title;
}
// Register the filter hook
add_filter( 'the_title', 'myfirstplugin_filter_title');

// The callback function
function nscc_shortcode( $atts = [], $content = null) {
    $content = "Hello from NSCC!";
    return $content;
}

add_shortcode('nscc', 'nscc_shortcode');

function myprefix_change_post_type_params( $post_type_params ) {
	$post_type_params['hierarchical'] = true;
	return $post_type_params;
}
add_filter( 'wporg_post_type_params', 'myprefix_change_post_type_params' );
?>