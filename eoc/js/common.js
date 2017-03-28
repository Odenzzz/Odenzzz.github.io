
function bgImageAdaptive(){
	var w_Widht = $(window).width();
	$('.wereless').css('left', ''+(-(1920-w_Widht)/2)+'px');
	$('.how-it-works').css('left', ''+(-(1200-w_Widht)/2)+'px');
}




jQuery(document).ready(function($) {
	bgImageAdaptive();
	$('.hidden-menu-toggle').click(function(event) {
		$('.hidden-menu-toggle').toggleClass('menu-opened');
		if ($(this).hasClass('menu-opened')) {
			var w_Widht = $(window).width();
			if (w_Widht > 480) {
				$('.body-wrapper').animate({left: '-367px'}, 200);
			} else {
				$('.body-wrapper').animate({left: '-270px'}, 200);
			}
			$('.hidden-menu').css('display', 'block');
			$('.hidden-menu').css('display', 'flex');
			$('.hidden-menu').animate({right: 0}, 200);
		} else{
			$('.hidden-menu').animate({
				right: '-367px'},
				200, function() {
				$('.hidden-menu').css('display', 'none');
			});
			$('.body-wrapper').animate({left: 0}, 200);
		}
	});


	var scrollValue = $(window).scrollTop();
	var scrollBottom = scrollValue + $(window).height();
	var werelessBottom = $('.wereless-description').offset().top + $('.wereless-description').height();
	var howItWorksTop = $('.how-it-works-description').offset().top;
	var howItWorksBottom = howItWorksTop + $('.how-it-works-description').height();
	var firstLinePosition = (scrollBottom -howItWorksBottom);
	function defineVar(){
		scrollValue = $(window).scrollTop();
		scrollBottom = scrollValue + $(window).height();
		werelessBottom = $('.wereless-description').offset().top + $('.wereless-description').height();
		howItWorksTop = $('.how-it-works-description').offset().top;
		howItWorksBottom = howItWorksTop + $('.how-it-works-description').height();
		firstLinePosition = (scrollBottom -howItWorksBottom);
	}
	function scrollAnimation(){

		scrollValue = $(window).scrollTop();
		scrollBottom = scrollValue + $(window).height();
		firstLinePosition = (scrollBottom -howItWorksBottom);

		if ($(window).width() > 1023) {
			if (scrollValue<werelessBottom) {
				$('.back-line').attr('style', 'transform: translateY('+(scrollValue*0.4)+'px);');
				$('.second-line').attr('style', 'transform: translateY('+(scrollValue*0.25)+'px);');
			}

			if (((scrollBottom-250)>howItWorksTop)&&(scrollBottom<howItWorksBottom)) {
				$('.front-tower-line').attr('style', 'transform: translateY('+(Math.abs(firstLinePosition*9))+'px);');
			}

			if (((scrollBottom)>(howItWorksBottom-300))&&(scrollBottom<howItWorksBottom)) {
				$('.back-tower-line').attr('style', 'transform: translateY('+(Math.abs(firstLinePosition*20))+'px);');
			}

			if (scrollBottom>howItWorksBottom) {
				$('.front-tower-line').attr('style', 'transform: translateY(0px);');
				$('.back-tower-line').attr('style', 'transform: translateY(0px);');
			}

			if (scrollBottom > $('.list-icon').offset().top) {
				$('.list-icon').each(function(index, el) {
					if ($(this).offset().top<scrollBottom){
						$(this).addClass('triggered');
					}
				});
			}
		} else {
			$('.back-line, .second-line, .front-tower-line, .back-tower-line').removeAttr('style');
		}
	}


	$(window).scroll(function(event) {
		scrollAnimation();
	});

	scrollAnimation();


	$(window).resize(function(event) {
		defineVar();
		bgImageAdaptive();
		scrollAnimation();
		var w_Widht = $(window).width();
		if (w_Widht > 1120) {
			$('.hidden-menu-toggle').removeClass('menu-opened');
			$('.hidden-menu').css({display: 'none', right: '-367px'});
			$('.body-wrapper').css('left', '0');
		}
		if ($('.hidden-menu-toggle').hasClass('menu-opened')) {
			if (w_Widht > 480) {
				$('.body-wrapper').css('left', '-367px');
			} else{
				$('.body-wrapper').css('left', '-270px');
			}
		}
	});
});





