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

	/* мобильное меню */
	$('.h-mobnav__btn').on('click', function() {
		$(this).toggleClass('active');
		$('.header__h-mobmenu').slideToggle(200);
		$(document).click(function(event) {
			if ($(event.target).closest('.header__h-mobmenu').length) return;
			$('.h-mobnav__btn').removeClass('active');
			$('.header__h-mobmenu').slideUp(200);
			event.stopPropagation();
		});
		return false;
	});
	$('.h-mobsearch__btn').on('click', function() {
		$('.h-mobnav__btn').toggleClass('active');
		$('.header__h-mobmenu').slideToggle(200);
		$(document).click(function(event) {
			if ($(event.target).closest('.header__h-mobmenu').length) return;
			$('.h-mobnav__btn').removeClass('active');
			$('.header__h-mobmenu').slideUp(200);
			event.stopPropagation();
		});
		return false;
	});

	/* Фильтр */
	$('.p-filter__toggle').on('click', function() {
		$(this).toggleClass('active');
		$(this).parent().parent().children('.p-filter__list').slideToggle(200);
		return false;
	});

	/* Сортировка */
	$('.p-catsort__text').on('click', function() {
		$('.p-catsort__list').slideToggle(200);
		$(document).click(function(event) {
			if ($(event.target).closest('.p-catsort__list').length) return;
			$('.p-catsort__list').slideUp(200);
			event.stopPropagation();
		});
		return false;
	});
	$('.p-catsort__item').on('click', function() {
		var znach = $(this).attr('name');
		var text = $(this).text();
		$('.p-catsort__text').attr('name', znach);
		$('.p-catsort__text').text(text);
		$('.p-catsort__list').slideUp(200);
	});
});