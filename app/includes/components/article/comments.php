<div id="comment-wall" class="comment-wall">
	<div class="wrapper">
		<div class="main">
		    <div class="fb-comments" data-href="http://developers.facebook.com/docs/plugins/comments/" data-width="100%" data-numposts="20" data-colorscheme="light"></div>            		
		</div>
		
		<?php 
		   $path = $_SERVER['DOCUMENT_ROOT'];
		   $path .= "/includes/layouts/right-rail.php";
		   include_once($path);
		?>

		<?php include($path); ?>

	</div>
</div>
