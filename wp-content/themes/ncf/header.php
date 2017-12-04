<?php
/**
 * The Header for our theme.
 *
 * Displays all of the <head> section and everything up till <div id="main">
 *
 * @package ncf
 */
?><!DOCTYPE html>
<html lang="en-US">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title><?php wp_title( '|', true, 'right' ); ?></title>
<link rel="profile" href="http://gmpg.org/xfn/11">
<link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>">
<?php wp_head(); ?>
<!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
<!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
<!--[if lt IE 9]>
	<script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
	<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
<![endif]-->
</head>

<body <?php body_class(); ?>>
	<?php do_action( 'before' ); ?>
	<?php include get_stylesheet_directory() . '/_includes/navbar.php'; ?>

<header id="masthead" class="site-header" role="banner">
	<div class="container-fluid">
		<div class="row">
			<div class="site-header-inner col-sm-12">
				<div class="jumbotron">
					<h1><?php bloginfo( 'name' ); ?></h1>
					<p class="lead"><?php bloginfo( 'description' ); ?></p>
                </div><!-- /.jumbotron -->

			</div>
		</div>
	</div><!-- /.container-fluid -->
</header><!-- /#masthead -->

<div class="main-content">
	<div class="container-fluid">
		<div class="row">
			<div class="main-content-inner col-sm-12 col-md-8">

