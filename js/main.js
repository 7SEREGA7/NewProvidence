$(document).ready(function() {


	///>>> SCROLL <<<///
	$(window).scroll(function(){
		let wScroll = $(this).scrollTop();
		if (wScroll > 20) {
			$('.header').addClass('active');
		}
		else {
			$('.header').removeClass('active');
		};
	});
	///>>> SCROLL <<<///


	///>>> WOW ANIMATIONS <<<///
	wow = new WOW(
	{
      boxClass:     'wow',      // default
      animateClass: 'animated', // default
      offset:       0,          // default
      mobile:       true,       // default
      live:         true        // default
  }
  )
	wow.init();
	///>>> WOW ANIMATIONS <<<///


	///>>> ANCHOR <<<///
	$(".anchor[href*=#]").on("click", function(e){
		let anchor = $(this);
		$('html, body').stop().animate({
			scrollTop: $(anchor.attr('href')).offset().top
		}, 700);
		e.preventDefault();
		return false;
	});
	///>>> ANCHOR <<<///


	///>>> SLIDE MENU <<<///
	$('#humburger-menu').on('click', function(e){
		e.preventDefault();
		$(this).addClass('open');
		$('#slide-menu').toggleClass('open');

		if ($('#slide-menu').hasClass('open')) {
			$('.close').on('click', function(e){
				e.preventDefault();
				$('#slide-menu').removeClass('open');
			})
		}
	});
	///>>> SLIDE MENU <<<///

});