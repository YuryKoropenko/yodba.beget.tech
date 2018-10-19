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

	/* Подписка на рассылку - фокус */
	$('.f-subscription__input').focusin(function() {
		$(this).parent().parent('.f-subscription__form').addClass('f-subscription__form-focus');
	});
	$('.f-subscription__input').focusout(function() {
		$(this).parent().parent('.f-subscription__form').removeClass('f-subscription__form-focus');
	});
	$('.f-subscription__input').keyup(function(e) {
		var email = $(this).val()
		/*var emailvalidator = email.indexOf('!');*/
		var simvol = $(this).val().substr(-1);
		if(!(simvol == '!' || simvol == '%' || simvol == '$' || simvol == '*' || simvol == '#' || simvol == '+' || simvol == '=' /*|| emailvalidator > 0*/)) {
			$(this).parent().parent('.f-subscription__form').removeClass('f-subscription__form-error');
		} else {
			$(this).parent().parent('.f-subscription__form').addClass('f-subscription__form-error');
		}
	});

	/* Фильтр */
	$('.p-filter__toggle').on('click', function() {
		$(this).toggleClass('active');
		$(this).parent().parent().children('.p-filter__list').slideToggle(200);
		return false;
	});
	$('.p-filter__mobbtn').on('click', function() {
		$(this).toggleClass('active');
		$(this).parent().children('.p-filter').slideToggle(200);
		$(document).click(function(event) {
			if ($(event.target).closest('.p-filter').length) return;
			$('.p-filter__mobbtn').removeClass('active');
			$('.p-filter').slideUp(200);
			event.stopPropagation();
		});
		return false;
	});

	/* Сортировка */
	$('.p-catsort__select').change( function() {
		$('.p-catsort__hidden').html( $('.p-catsort__select').val() );
		$('.p-catsort__select').width( $('.p-catsort__hidden').width() );
	});

	/* Акордион - карточка товара */
	$('.p-cardcontent__accordbtn').on('click', function() {
		if($(this).hasClass('active') == true) {
			return false;
		} else {
			$('.p-cardcontent__accordbtn').removeClass('active');
			$('.p-cardcontent__accordcontent').slideUp(200);
			$(this).toggleClass('active');
			$(this).parent().children('.p-cardcontent__accordcontent').slideToggle(200);
			return false;
		}
	});

	/*Убрать классы*/
	if ($(window).width() < 767) {
		$('.page__p-orderform .col-md-5').removeClass('order-2');
		$('.page__p-orderform .col-md-7').removeClass('order-1');
		$('.p-order__item .row').removeClass('align-items-center');
		$('.p-favourites__item .row').removeClass('align-items-center');
	}
});