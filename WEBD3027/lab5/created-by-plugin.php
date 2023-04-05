<?php
/*
Plugin Name: Created By Plugin
Description: Adds a "Created By" option to the footer of your WordPress site.
Version: 1.0
Author: Bruno Freitas W0448225
*/

// Start admin settings

// Add a "Created By" option to the WordPress admin settings
function created_by_plugin_settings() {
    add_settings_field(
        'created_by', // ID of the setting
        'Created By', // Label for the setting
        'created_by_callback', // Callback function to display the setting
        'general' // Page to display the setting on
    );

    register_setting(
        'general',
        'created_by'
    );
}
add_action('admin_init', 'created_by_plugin_settings');

function created_by_callback() {
    $value = get_option('created_by');
    echo '<input type="text" id="created_by" name="created_by" value="' . esc_attr($value) . '" />';
}

// End of admin settings

// Filter to footer

// Add the "Created By" text to the footer of the WordPress site
function created_by_plugin_footer() {
    $created_by = get_option('created_by');
    if ($created_by) {
        echo '<p>This WordPress site was created by ' . esc_html($created_by) . '.</p>';
    }
}
add_filter('wp_footer', 'created_by_plugin_footer');

// End filter to footer