<?php
$version = filemtime(get_template_directory() . '/css/style.css');
wp_enqueue_style('my-style', get_template_directory_uri() . '/css/style.css', array(), $version);

$version = filemtime(get_template_directory() . '/js/common.js');
wp_enqueue_script('my-script', get_template_directory_uri() . '/js/common.js', array(), $version, true);