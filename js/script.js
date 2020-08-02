$(document).ready(function() {
	$('.header__burger').click(function(event) {
		$('.header__burger,.header__items').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

$(document).ready(function() {
	$('.slidermain__container').slick({
		arrows: false,
		dots: false,
		touchTreshold: 10,
	});
});