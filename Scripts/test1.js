'use strict';
requirejs(['jquery', 'bootstrap', 'bootstrap.tour.min'], 
function ($) {

	console.log( $('h1').text() );

	$('.btn').bind('click', function () {
		$(this).popover('show');
	})
});