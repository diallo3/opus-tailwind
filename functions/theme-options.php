<?php

/**
 * Theme setup.
 */
function tailpress_setup() {
	// Let WordPress manage the document title.
	add_theme_support( 'title-tag' );

	// This theme uses wp_nav_menu() in one location.
	register_nav_menus(
		array(
			'primary' => __( 'Primary Menu', 'tailpress' ),
		)
	);

	// Switch default core markup for search form, comment form, and comments
	// to output valid HTML5.
	add_theme_support(
		'html5',
		array(
			'search-form',
			'comment-form',
			'comment-list',
			'gallery',
			'caption',
		)
	);

	// Adding Thumbnail basic support.
	add_theme_support( 'post-thumbnails' );

	// Block editor.
	add_theme_support( 'align-wide' );

	add_theme_support( 'wp-block-styles' );

	add_theme_support( 'editor-styles' );
	add_editor_style();

	$tailpress = tailpress_get_data();

	$colors = array_map(
		function ( $color, $hex ) {
			return array(
				'name'  => ucfirst( $color ),
				'slug'  => $color,
				'color' => $hex,
			);
		},
		array_keys( $tailpress['colors'] ),
		$tailpress['colors']
	);

	$font_sizes = array_map(
		function ( $size, $px ) {
			return array(
				'name' => ucfirst( $size ),
				'size' => $px,
				'slug' => $size,
			);
		},
		array_keys( $tailpress['fontSizes'] ),
		$tailpress['fontSizes']
	);

	add_theme_support( 'editor-color-palette', $colors );
	add_theme_support( 'editor-font-sizes', $font_sizes );
}

add_action( 'after_setup_theme', 'tailpress_setup' );

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
add_filter( 'timber_context', 'tailpress_timber_context'  );

function tailpress_timber_context( $context ) {
    // $context['options'] = get_fields('option');
    return $context;
}