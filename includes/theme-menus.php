<?php


use WpTailwindCssThemeBoilerplate\AssetResolver;
use WpTailwindCssThemeBoilerplate\TimberInit;

// Register menus
function register_menus() {
	register_nav_menus(
		array(
			'main-nav'		=> __( 'Primary Menu', 'opus' ),// Main nav in header
			'offcanvas-nav'	=> __( 'Mobile Menu', 'opus' ),	// Off-Canvas nav
			'footer-nav'	=> __( 'Footer Menu', 'opus' )// Secondary nav in footer
		)
	);
}

add_action('init', 'register_menus');
