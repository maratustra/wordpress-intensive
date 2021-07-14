<?php
// правильный способ подключить стили и скрипты
add_action( 'wp_enqueue_scripts', 'realestate_scripts' );
// add_action('wp_print_styles', 'realestate_scripts'); // можно использовать этот хук он более поздний
function realestate_scripts() {
	wp_enqueue_style( 'main', get_template_directory_uri() . '/css/style.min.css');
  wp_enqueue_script( 'main', get_template_directory_uri() . '/js/main.min.js', array(), '1.0.0', true );
}