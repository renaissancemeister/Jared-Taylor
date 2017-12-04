<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the id=main div and all content after
 *
 * @package ncf
 */
?>
			</div><!-- close .*-inner (main-content or sidebar, depending if sidebar is used) -->
		</div><!-- close .row -->
	</div><!-- close .container -->
</div><!-- close .main-content -->

<footer id="colophon" class="site-footer" role="contentinfo">
	<div class="container-fluid">
		<div class="row">
			<div class="site-footer-inner col-sm-12">
			    <hr>
				<div class="site-info">
					<p>The contents of this website are copyright &copy; 1990-<?php echo date ( 'Y' ); ?> <a href="http://www.nc-f.org/">New Century Foundation</a>. All Rights Reserved.</p>
				</div><!-- close .site-info -->

			</div><!-- /.row -->
		</div><!-- /.container-fluid -->
	</div><!-- close .container -->
</footer><!-- close #colophon -->

<?php wp_footer(); ?>
<?php include get_stylesheet_directory() . '/_includes/active.php'; ?>
</body>
</html>
