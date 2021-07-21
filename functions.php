<?php

/**
 * If you are installing Timber as a Composer dependency in your theme, you'll need this block
 * to load your dependencies and initialize Timber. If you are using Timber via the WordPress.org
 * plug-in, you can safely delete this block.
 */
$composer_autoload = __DIR__ . '/vendor/autoload.php';
if ( file_exists( $composer_autoload ) ) {
	require_once $composer_autoload;
	$timber = new Timber\Timber();
}

require get_stylesheet_directory() . '/functions/timber-init.php';
require get_stylesheet_directory() . '/functions/scripts-and-styles.php';
require get_stylesheet_directory() . '/functions/theme-menus.php';
require get_stylesheet_directory() . '/functions/theme-options.php';