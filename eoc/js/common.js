
function bgImageAdaptive(){
	var w_Widht = $(window).width();
	if ($('div').is('.home-page')) {
		$('.home-page-svg').css('right', ''+(((w_Widht-1170)-700)/2)+'px');
	}
	if ($('div').is('.wired')) {
		$('.wired').css('left', ''+(-(1920-w_Widht)/2)+'px');
	}
	if ($('div').is('.clouds')) {
		$('.clouds').css('left', ''+(-(1920-w_Widht)/2)+'px');
	}
	if ($('div').is('.wereless')) {
		$('.wereless').css('left', ''+(-(1920-w_Widht)/2)+'px');
		$('.how-it-works').css('left', ''+(-(1200-w_Widht)/2)+'px');
	}
	if ($('div').is('.tab-category-content-wrapper')) {
		$('.tab-category-content').each(function(index, el) {
			var countLi = $('li', this).length;
			if (countLi > 40) {
				var plusWidth = (Math.ceil((countLi - 40)/4))*($('li', this).width());
				var width = 1120 + plusWidth;
				$(this).width(width);
			}
		});
		$('.tab-content').height((100+($('.active-content').height()-17)));
	}
	
}



jQuery(document).ready(function($) {
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


	var scrollValue,
	scrollBottom,
	werelessBottom,
	howItWorksTop,
	howItWorksBottom,
	firstLinePosition,
	tvWrapperActivePoint;



	defineVar();

	function defineVar(){
		scrollValue = $(window).scrollTop();
		scrollBottom = scrollValue + $(window).height();
		if ($('div').is('.wired')) {
			werelessBottom = $('.wired-description').offset().top + $('.wired-description').height();
		}
		if ($('div').is('.wereless')) {
			werelessBottom = $('.wereless-description').offset().top + $('.wereless-description').height();
			howItWorksTop = $('.how-it-works-description').offset().top;
			howItWorksBottom = howItWorksTop + $('.how-it-works-description').height();
			firstLinePosition = (scrollBottom -howItWorksBottom);
		}
		if ($('div').is('.tv-wrapper')) {
			tvWrapperActivePoint = $('.tv-wrapper').offset().top + 300;
		}
	}
	function scrollAnimation(){
		scrollValue = $(window).scrollTop();
		scrollBottom = scrollValue + $(window).height();

		if ($('div').is('.wereless')) {
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
		if ($('div').is('.wired')) {
			if ($(window).width() > 1023) {
				if (scrollValue<werelessBottom) {
					$('.back-line').attr('style', 'transform: translateY('+(scrollValue*0.4)+'px);');
					$('.second-line').attr('style', 'transform: translateY('+(scrollValue*0.25)+'px);');
				}
			} else {
				$('.back-line, .second-line').removeAttr('style');
			}
		}
	}

	function scrollLoadTrigger(){
		if ($('div').is('.tv-wrapper')) {
			if ($(window).width() > 1023) {
				if (scrollBottom > tvWrapperActivePoint) {
					$('.tv-wrapper').addClass('tv-active');
				}
			} else {
				$('.tv-wrapper').addClass('tv-active');
			}
		}
	}
	$(window).scroll(function(event) {
		scrollAnimation();
		scrollLoadTrigger();
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


	var isDragging = false;
	$(".hidden-menu").mousedown(function() {isDragging = false;}).mousemove(function() {isDragging = true;}).mouseup(function() {var wasDragging = isDragging; isDragging = false;
		if (!wasDragging) {
			console.log('works')
		}
	});
	bgImageAdaptive();
	scrollLoadTrigger();
	if ($(window).width() < 736) {
		$('.wired-map-desc').click(function(event) {
			$('.wired-map-desc p').slideToggle(400);
		});
	}
	var dragged = false;
	$('.dragging-scrolling').mousedown(function(event) {
		dragged = true;
		var start = event.pageX;
		var startScroll = $(this).scrollLeft();
		var wrapperWidth = $(this).width();
		var innerWidth = $('.dragging-scrolling-content', this).width();
		$(this).mousemove(function(event) {
			if (innerWidth > wrapperWidth) {
				if (dragged) {
						var currentMouse = event.pageX;
						var scrolling = (start - currentMouse);
						$(this).scrollLeft((startScroll+scrolling));
					
				}
			}
		});

	});
	$(document).mouseup(function(event) {
		dragged = false;
	});
	var timerScroll
	$('.tab-category-content-wrapper').on( "mouseup touchend", function(e){
		clearTimeout(timerScroll);
		timerScroll = setTimeout(function(){
			var point = Math.round($('.tab-category-content-wrapper').scrollLeft()/110).toFixed(0);
			var target = $('.tab-category-content li').width()*point;
			$('.tab-category-content-wrapper').animate({scrollLeft: target}, 200);
		},350)
	});
	$('.tab-menu-wrapper').on( "mouseup touchend", function(e){
		var menu = $(this);
		clearTimeout(timerScroll);
		timerScroll = setTimeout(function(){
			var point = Math.round(menu.scrollLeft()/$('.tab-item').width()).toFixed(0);
			var target = $('.tab-item').width()*point;
			$('.tab-menu-wrapper').animate({scrollLeft: target}, 200);
		},350)
	});
	$('.dragging-scrolling-content img').mousedown(function(event) {
		event.preventDefault();

	});
	var scrolling = false;

	$('.dragging-scrolling-content a').mousedown(function(event) {
		var target = $(this)
		var triggered = true;

		$(this).mousemove(function(event) {
			if (triggered) {
				scrolling = true;
			}
		});
		$(this).click(function(event) {
			event.preventDefault();
			if (!scrolling) {
				location.href = $(this).attr('href');
				return false;
			} 
		});
		$(this).mouseup(function(event) {
			setTimeout(function(){
				triggered = false;
				scrolling = false;
			},1)
		});
		
	});
	if ($('div').is('.rate-description')) {
		$('.speed-circle').each(function(index, el) {
			var _value = $(this).attr('value');
			var _load = $(this).attr('load');
			$(this).circleProgress({
				value: _load,
				emptyFill: 'rgba(222, 222, 222, .05)',
				animation: {
					duration: 2000,
					easing: 'circleProgressEasing'
				},
				size: 140,
				thickness: 3,
				startAngle: -Math.PI / 4 * 2,
				fill: {gradient: [['#37bcf1', .5], ['#37bcf1', .5]], gradientAngle: Math.PI / 4}
			}).on('circle-animation-progress', function(event, progress, stepValue) {
				$(this).find('strong').html((progress.toFixed(2)*_value).toFixed(0));
			});
			
		});
		
	}
});





