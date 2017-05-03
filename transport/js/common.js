$(function() {

	$(".exit").click(function(event) {
		$(".side-menu").toggleClass('activemenu');
		if($(".side-menu").hasClass('activemenu')){
			menuOpened();
			$(".side-menu").css('width', '285px');
		} else {
			menuClosed();
			$(".side-menu").css('width', '70px');
		}
	});

	function menuOpened() {
		var mainWrapperWidth = $(window).width() - 285;
		$(".menu").width(mainWrapperWidth);
	}

	function menuClosed() {
		var mainWrapperWidth = $(window).width() - 70;
		$(".menu").width(mainWrapperWidth);

	}

	$(window).resize(function(event) {
		section_size();
		if($(".side-menu").hasClass('activemenu')){
			menuOpened();
		} else {
			menuClosed();
		}
		sideScrollMenuResize();
	});

	$(document).ready(function() {
		menuClosed();
		sideScrollMenuResize();
	});


	function sideScrollMenuResize() {
		var height = $(".side-menu").height() - 200;
		$(".side-scroll-menu").height(height);
	}

	$(".dropdown-toggle").click(function(event) {
		var parent = $(this).parent();
		$(">.dropdown-div", parent).slideToggle(400);
	});

	$(".dropdown-div li").click(function(event) {
		var tiltType = $(this).html();
		var parent = $(this).parent().parent().parent();

		$(".dropdown-toggle", parent).html(tiltType);
		$(".dropdown-div", parent).slideToggle(400);
	});

	$(".body-type-dropdown-toggle").click(function(event) {
		$(this).toggleClass('active');

		if ($(this).hasClass('active')) {
			$(".bg-blackout").css('display', 'block');
			$(".bg-blackout").animate({opacity: 1}, 400);
			$(".body-type-dropdown-filter").css('display', 'block');
			$(".body-type-dropdown-filter").animate({height: "345px"}, 400)
		} else {
			
			$(".body-type-dropdown-filter").animate({height: 0}, 400, function () {
				$(".body-type-dropdown-filter").css('display', 'none');
				$(".bg-blackout").animate({opacity: 1}, 400, function () {
					$(".bg-blackout").css('display', 'none');
				});
			});

		}
	});

	$(".bg-blackout").click(function(event) {
		
		$(".body-type-dropdown-filter").animate({height: 0}, 400, function () {
			$(".body-type-dropdown-filter").css('display', 'none');
			$(".bg-blackout").animate({opacity: 1}, 400, function () {
				$(".bg-blackout").css('display', 'none');
			});
		});
		$(".body-type-dropdown-toggle").toggleClass('active');
	});
});


function section_size() {
	var height = $(window).height(),
		width = $(window).width();

	if($("section")){
		$("section").height(height);
	}
	if ($("div").is(".car-result-wrapper")) {
		$(".car-result-wrapper").width(width-400);
	}
	if ($("div").is(".main-map-wrapper")) {
		$(".main-map-wrapper").width(width-420);
	}
	$("footer").width(width-70);

}


function filter_toggle(toggle) {
	var filter = toggle.parent().find('.filter-toggled');
	if(toggle.hasClass('active')){
		filter.css('display', 'inline-block');
		filter.animate({left: 0}, 400);
		if($(window).width()>480){
			toggle.animate({left: 350}, 400)
		}
		

	} else {
		filter.animate({
			left: -350}, 400, function() {
			filter.css('display', 'none');
		});
		toggle.animate({left: -10}, 400)
	}

}


window.onload = function() {
	section_size();
	baron({
		root: '.baron',
		scroller: '.baron__scroller',
		bar: '.baron__bar',
		scrollingCls: '_scrolling',
		draggingCls: '_dragging'
	}).fix({
		elements: '.header__title',
		outside: 'header__title_state_fixed',
		before: 'header__title_position_top',
		after: 'header__title_position_bottom',
		clickable: true
	}).controls({
		track: '.baron__track',
		forward: '.baron__down',
		backward: '.baron__up'
	})


	$(".page-scroll").click(function(event) {
		var w_top = $(window).scrollTop(),
			w_bottom = $(window).height()+w_top,
			current,
			target;


		$("section").each(function() {
			if(($(this).offset().top+80>w_top)&&($(this).offset().top+80<w_bottom)){
				current = $(this).attr('id');
			}
		});

		if ($(this).hasClass('selected-page-arrow-down')){
			target = screen_down(current);
		} else{
			target = screen_up(current);
		}
		$('html, body').animate({ scrollTop: $(target).offset().top }, 500);
	});

	function screen_down(current) {
		target = Number(current.match(/\d+$/)[0])+1;
		if (target > 3) {
			$(".selected-page-arrow-down").css('display', 'none');
		}
		$(".selected-page-arrow-up").css('display', 'inline-block');
		target = "#section-"+target;
		return target;
	}

	function screen_up(current) {
		target = Number(current.match(/\d+$/)[0])-1;
		if (target < 2) {
			$(".selected-page-arrow-up").css('display', 'none');
		}
		$(".selected-page-arrow-down").css('display', 'inline-block');
		target = "#section-"+target;
		return target;
	}


	if($("div").is('.page-scroll')){
		var current, target,
			w_top = $(window).scrollTop(),
			w_bottom = $(window).height()+w_top;

		$("section").each(function() {
			if(($(this).offset().top+80>w_top)&&($(this).offset().top+80<w_bottom)){
				current = $(this).attr('id');
			}
		});
		target = Number(current.match(/\d+$/)[0]);
		if(target == 1){
			$(".selected-page-arrow-up").css('display', 'none');
		} 
		if (target == 4){
			$(".selected-page-arrow-down").css('display', 'none');
		}
	}

	$(".filter-toggle").click(function(event) {
		$(this).toggleClass('active');
		filter_toggle($(this));
	});
}

