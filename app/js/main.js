$(function() {
	if ($(window).width() < 991) {
		$('.h-link').addClass('owl-carousel');
		$('.h-link').owlCarousel({
			loop:true,
			margin:0,
			items:1,
			dots:false,
			nav:true
		});
	}
	else {
		$('.h-link').removeClass('owl-carousel');
	}

});