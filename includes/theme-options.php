<?php

use WpTailwindCssThemeBoilerplate\AssetResolver;

// Theme Options
if( function_exists('acf_add_options_page') ) {
	
	acf_add_options_page(array(
		'page_title' 	=> 'Theme General Settings',
		'menu_title'	=> 'Theme Settings',
		'menu_slug' 	=> 'theme-general-settings',
		'capability'	=> 'edit_posts',
		'redirect'		=> false
	));
	
}

// Theme Options Timber
add_filter( 'timber_context', 'opus_timber_context'  );

function opus_timber_context( $context ) {
    $context['options'] = get_fields('option');
    return $context;
}