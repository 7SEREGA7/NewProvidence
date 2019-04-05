$(document).on('ready', function() {
	$(".customers-slider").slick({
		dots: false,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		autoplay: true,
		prevArrow: $('.prev'),
		nextArrow: $('.next')
	});
});