<?php
/**
 * The Template for displaying all single posts.
 *
 * @package ncf
 * less comment code
 */

get_header(); ?>

	<?php while ( have_posts() ) : the_post(); ?>

		<?php get_template_part( 'content', 'single' ); ?>

		<?php ncf_content_nav( 'nav-below' ); ?>

	<?php endwhile; // end of the loop. ?>

<?php get_sidebar(); ?>
<?php get_footer(); ?>
