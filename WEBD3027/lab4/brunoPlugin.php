<?php
/*
Plugin Name: Bruno's Lab 4 Plugin for WEBD3027
Description: This is a WordPress Plugin developed for WEBD3027 course
Author: Bruno Freitas - W0448225
Version: 1.0
*/

function hello_title($title) {
    if (is_page() || is_post())
    {
    return '<p>Hello Title!!</p>' . $title;
    }
}
add_action( 'the_title', 'hello_title' );

function title_filter( $title ) {
    if (is_page() || is_post())
    {
        return "<i>$title</i>";
    }
}
add_filter( 'the_title', 'title_filter');

function modify_title( $title ) {
    $title = '<h1 style="color: red; text-align: center;">' . $title . '</h1>';
    return $title;
}
add_filter( 'the_title', 'modify_title' );
?>