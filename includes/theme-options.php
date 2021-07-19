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
<<<<<<< HEAD
    // $context['options'] = get_fields('option');
=======
    $context['options'] = get_fields('option');
>>>>>>> a7d82a523e589144748a069c44e4d11d94ba622c
    return $context;
}