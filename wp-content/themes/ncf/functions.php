<?php
/**
 * ncf functions and definitions
 *
 * @package ncf
 */

/**
 * Set the content width based on the theme's design and stylesheet.
 */
if ( ! isset( $content_width ) )
	$content_width = 750; /* pixels */

if ( ! function_exists( 'ncf_setup' ) ) :
/**
 * Set up theme defaults and register support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which runs
 * before the init hook. The init hook is too late for some features, such as indicating
 * support post thumbnails.
 */
function ncf_setup() {
    global $cap, $content_width;

    // This theme styles the visual editor with editor-style.css to match the theme style.
    add_editor_style();

    if ( function_exists( 'add_theme_support' ) ) {

		/**
		 * Add default posts and comments RSS feed links to head
		*/
		add_theme_support( 'automatic-feed-links' );

		/**
		 * Enable support for Post Thumbnails on posts and pages
		 *
		 * @link http://codex.wordpress.org/Function_Reference/add_theme_support#Post_Thumbnails
		*/
		add_theme_support( 'post-thumbnails' );

		/**
		 * Enable support for Post Formats
		*/
		add_theme_support( 'post-formats', array( 'aside', 'image', 'video', 'quote', 'link' ) );

		/**
		 * Setup the WordPress core custom background feature.
		*/
		add_theme_support( 'custom-background', apply_filters( 'ncf_custom_background_args', array(
			'default-color' => 'ffffff',
			'default-image' => '',
		) ) );

    }

	/**
	 * Make theme available for translation
	 * Translations can be filed in the /languages/ directory
	 * If you're building a theme based on ncf, use a find and replace
	 * to change 'ncf' to the name of your theme in all the template files
	*/
	load_theme_textdomain( 'ncf', get_template_directory() . '/languages' );

	/**
	 * This theme uses wp_nav_menu() in one location.
	*/
    register_nav_menus( array(
        'primary'  => __( 'Header bottom menu', 'ncf' ),
    ) );

}
endif; // ncf_setup
add_action( 'after_setup_theme', 'ncf_setup' );

/**
 * Register widgetized area and update sidebar with default widgets
 */
function ncf_widgets_init() {
	register_sidebar( array(
		'name'          => __( 'Sidebar', 'ncf' ),
		'id'            => 'sidebar-1',
		'before_widget' => '<aside id="%1$s" class="widget %2$s">',
		'after_widget'  => '</aside>',
		'before_title'  => '<h5 class="widget-title">',
		'after_title'   => '</h5>',
	) );
}
add_action( 'widgets_init', 'ncf_widgets_init' );

/**
 * Enqueue scripts and styles
 */
function ncf_scripts() {
	// load bootstrap css
	wp_enqueue_style( 'ncf-bootstrap', 'http://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css', false, '3.3.4' );

	// load font awesome css
	wp_enqueue_style( 'font-awesome', 'http://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css', false, '4.3.0' );

	// load site style
	wp_enqueue_style( 'ncf-style', get_stylesheet_uri(), array( 'ncf-bootstrap' ) );

	/* disable WordPress' built-in jQuery */
	wp_deregister_script('jquery');
	/* use CDN version, and load it in the footer */
	wp_enqueue_script('jquery', 'http://cdnjs.cloudflare.com/ajax/libs/jquery/1.11.2/jquery.min.js', false, '1.11.2', true);

	// load bootstrap js
	wp_enqueue_script('ncf-bootstrapjs', 'http://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js', array( 'jquery' ), '3.3.4', true );

	// load bootstrap wp js
	wp_enqueue_script( 'ncf-bootstrapwp', get_template_directory_uri() . '/includes/js/bootstrap-wp.js', array( 'jquery' ), '20130115', true );

	wp_enqueue_script( 'ncf-skip-link-focus-fix', get_template_directory_uri() . '/includes/js/skip-link-focus-fix.js', array(), '20130115', true );

/*
	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
*/

	if ( is_singular() && wp_attachment_is_image() ) {
		wp_enqueue_script( 'ncf-keyboard-image-navigation', get_template_directory_uri() . '/includes/js/keyboard-image-navigation.js', array( 'jquery' ), '20120202' );
	}
}
add_action( 'wp_enqueue_scripts', 'ncf_scripts' );

/**
 * Implement the Custom Header feature.
 */
require get_template_directory() . '/includes/custom-header.php';

/**
 * Custom template tags for this theme.
 */
require get_template_directory() . '/includes/template-tags.php';

/**
 * Custom functions that act independently of the theme templates.
 */
require get_template_directory() . '/includes/extras.php';

/**
 * Customizer additions.
 */
require get_template_directory() . '/includes/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
require get_template_directory() . '/includes/jetpack.php';

/**
 * Load Jetpack compatibility file.
 */
require get_template_directory() . '/includes/bootstrap-wp-navwalker.php';
