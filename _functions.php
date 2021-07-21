<?php


use WpTailwindCssThemeBoilerplate\AutoLoader;
use WpTailwindCssThemeBoilerplate\View;

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


/*
 * Set up our auto loading class and mapping our namespace to the app directory.
 *
 * The autoloader follows PSR4 autoloading standards so, provided StudlyCaps are used for class, file, and directory
 * names, any class placed within the app directory will be autoloaded.
 *
 * i.e; If a class named SomeClass is stored in app/SomeDir/SomeClass.php, there is no need to include/require that file
 * as the autoloader will handle that for you.
 */
require get_stylesheet_directory() . '/app/AutoLoader.php';
$loader = new AutoLoader();
$loader->register();
$loader->addNamespace( 'WpTailwindCssThemeBoilerplate', get_stylesheet_directory() . '/app' );

// View::$view_dir = get_stylesheet_directory() . '/templates/views';

require get_stylesheet_directory() . '/includes/timber-init.php';
require get_stylesheet_directory() . '/includes/scripts-and-styles.php';
require get_stylesheet_directory() . '/includes/theme-menus.php';
require get_stylesheet_directory() . '/includes/theme-options.php';

