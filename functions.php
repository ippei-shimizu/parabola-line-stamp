<?php
function my_theme_styles_and_scripts() {
  if ( ! is_admin() ) {
    $version = filemtime(get_template_directory() . '/css/style.css');
    wp_enqueue_style('my-style', get_template_directory_uri() . '/css/style.css', array(), $version);

    $version = filemtime(get_template_directory() . '/js/common.js');
    wp_enqueue_script('my-script', get_template_directory_uri() . '/js/common.js', array(), $version, true);
  }
}

add_action('wp_enqueue_scripts', 'my_theme_styles_and_scripts');

function my_admin_theme_style() {
  wp_enqueue_style('my-admin-theme', get_template_directory_uri() . '/admin-style.css');
}

add_action('admin_enqueue_scripts', 'my_admin_theme_style');
