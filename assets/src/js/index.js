$(function () {

	$('.nav-open').on('click', function (e) {
		var $target = $(e.target),
			$nav = $('.nav-mobile');

		$nav.toggleClass('nav-mobile-open');

	});


}($));