$(document).ready(function() {
										
	// определяем массивы имен для месяцев и дней недели
	var monthNames = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря" ]; 
	var dayNames= ["воскресенье","понедельник","вторник","среда","четверг","пятница","суббота"]

	// создаем новый объект для хранения даты
	var newDate = new Date();
	 
	// извлекаем текущую дату в новый объект
	newDate.setDate(newDate.getDate());
	 
	// выводим день число месяц и год
	$('#Date').html(newDate.getDate() + ' ' + monthNames[newDate.getMonth()]);

	setInterval( function() {
		// создаем новый объект для хранения секунд
		var seconds = new Date().getSeconds();
		// добавляем отсутствующий ноль
		$("#sec").html(( seconds < 10 ? "0" : "" ) + seconds);
	},1000);

	setInterval( function() {
		// создаем новый объект для хранения минут
		var minutes = new Date().getMinutes();
		// добавляем отсутствующий ноль
		$("#min").html(( minutes < 10 ? "0" : "" ) + minutes);
	},1000);

	setInterval( function() {
		// создаем новый объект для хранения часов
		var hours = new Date().getHours();
		// добавляем отсутствующий ноль
		$("#hours").html(( hours < 10 ? "0" : "" ) + hours);
	}, 1000);





	function colCenterResize(){
		if ((navigator.userAgent.match(/IEMobile/i))||(navigator.userAgent.match(/Opera Mini/i))||(navigator.userAgent.match(/iPhone|iPad|iPod/i))||(navigator.userAgent.match(/BlackBerry/i))||(navigator.userAgent.match(/Android/i))) {
			$('.col-center .page-container').addClass('mobile');
		} else {
			$('.col-center .page-container').removeClass('mobile');
		}
		var sideColsWidth = $('.col-left').width() + $('.col-right').width();
		var mainWidth = $('body').width();
		var newWidth = mainWidth - sideColsWidth;


		$('.col-center').width(newWidth);
		$('.col-center .page-container').width(newWidth + 40);

		liveMatchResize();
		loadProgressBar();
		if ($('div').is('.home-page-menu-wrapper')) {

			if ($(window).height() < 500){
				$('.home-page-menu-wrapper').height($(window).height() - 73);
			} else {
				$('.home-page-menu').height($(window).height() - 73);
			}
		}
	}
	function containersHeight(){
		var hHeight = $('header').height();
		var wHeight = $(window).height();
		var newHeight = wHeight - hHeight;
		$('.page-container').css('height', ''+newHeight+'px');
		$('.baron__scroller').css('max-height', ''+newHeight+'px');
	}
	function liveMatchResize(){
		if ($('div').is('.live-match-current')) {
			$('.live-match-current').each(function(index, el) {
				var infoWidth = $('.live-match-info', this).width() + 40;
				var wrapperWidth = $(this).parent().width();
				$('.live-match-bets', this).width(wrapperWidth-infoWidth);
			});
		}
	}
	function loadProgressBar(){

		if ($('div').is('.col-right-match-info-progressbar')) {
			var progressMatch = $('.col-right-match-info-progressbar').attr('progress');
			var width = $('.col-right-match-info-progressbar').width();
			$('.col-right-match-info-progressbar .bar').css('width', ''+(progressMatch*width)+'px');
			if ($('div').is('.col-right-match-info-progressbar .event')) {
				$('.col-right-match-info-progressbar .event').each(function(index, el) {
					var timing = $(this).attr('timing');
					$(this).css('left', ''+((width*timing)-3)+'px');
				});
			}
		}
	}


	function initCircle(target){

		var value_team_1 = Number($(''+target+'').attr('team_1'));
		var value_team_2 = Number($(''+target+'').attr('team_2'));
		var total = value_team_1 + value_team_2;
		var value = value_team_2 / total;
		if (!value_team_2) {
			value = 0.5;
		}
		$(''+target+'').circleProgress({
			startAngle: -Math.PI * value,
			value: value,
			size: 35,
			animation: false,
			fill: {gradient: ['#ff0202', '#ff0202']},
			emptyFill: "#f2e513"
		})
	}


	function initLineStat(target){

		var bar = $(''+target+' .line-bar');
		var value_team_1 = Number($(''+target+'').attr('team_1'));
		var value_team_2 = Number($(''+target+'').attr('team_2'));
		var total = value_team_1 + value_team_2;
		var width = $(''+target+'').width();
		var barWidth = width * (value_team_1 / total);

		bar.width(barWidth);
	}

	containersHeight();
	colCenterResize();
	$(window).resize(function(event) {
		colCenterResize();
		containersHeight();
	});
	$('.to-favorite').click(function(event) {
		$(this).toggleClass('active');
	});
	$('.col-left-toggle').click(function(event) {
		$(this).toggleClass('active');
		if ($(this).hasClass('active')) {
			$('.col-left-live-now').css('display', 'none');
			$('.col-left-main-categories > li span').css('display', 'none');
			$('.col-left-main-categories > li i').css('margin', '0');
			$('.col-left').css({
				width: '55px',
			});
			colCenterResize();
			$('.col-left-main-categories').css('width', '44px');
			$('.col-left-search').addClass('no-placeholder');
			$('.col-left-search input').css('display', 'none');
			$('.col-left-search button').css('display', 'none');
			$('.col-left-toggle').css({
				left: '3px',
				'margin-bottom': '5px'
			});
			$('.col-left-content').addClass('toggled');
		}else{
			$('.col-left').css({
				width: '290px',
				padding: '0'
			});
			colCenterResize();
			$('.col-left-search input').css('display', 'block');
			$('.col-left-search button').css('display', 'inline-block');
			$('.col-left-toggle').removeAttr('style');
			$('.col-left-main-categories').css('width', '100%');
			$('.col-left-main-categories > li span').css('display', 'inline-block');
			$('.col-left-main-categories > li i').css('margin-right', '15px');
			$('.col-left-content').removeClass('toggled');
			$('.col-left-live-now').css('display', 'block');
		}
	});
	$('.left-col-categories-level-2-trigger').click(function(event) {
		var parent = $(this).parent();
		$(this).toggleClass('active');
		$('.left-col-category-level-3', parent).slideToggle(400);
		$('.col-left-live-match-info', parent).slideToggle(400);
	});
	$('.left-col-categories-level-1-trigger').click(function(event) {
		var parent = $(this).parent();
		$(this).toggleClass('active');
		$('.left-col-category-level-2', parent).slideToggle(400);
	});
	$('.left-col-category-name').click(function(event) {
		$('.left-col-category-name').removeClass('active');
		$(this).addClass('active');
	});
	$('.live-match-bet, .additional-bets-bet').click(function(event) {
		if (!$(this).hasClass('bet-closed')) {
			$(this).toggleClass('active-bet');
		}
	});
	$('.col-left-live-match').click(function(event) {
		$('.col-left-live-match-wrapper').removeClass('active');
		$(this).parent().addClass('active');
	});
	$('.col-center-block-name').click(function(event) {
		$(this).toggleClass('closed');
		var parent = $(this).parent();
		if ($(this).hasClass('closed')) {
			$('.col-center-block-container', parent).attr('height', ''+$('.col-center-block-container', parent).height()+'');
			$('.col-center-block-container', parent).animate({
				height: 0},
				400, function() {
					$('.col-center-block-name', parent).css({
						'border-bottom-left-radius': '5px',
						'border-bottom-right-radius': '5px'
					});
			});
		}else{
			$('.col-center-block-name', parent).css({
				'border-bottom-left-radius': '0px',
				'border-bottom-right-radius': '0px'
			});
			$('.col-center-block-container', parent).animate({
				height: $('.col-center-block-container', parent).attr('height')},
				400, function() {
					$('.col-center-block-container', parent).removeAttr('style');
			});
		}
		
	});
	$('.col-right-func-audio').click(function(event) {
		$(this).toggleClass('toggled');
	});
	$('.col-center-live-soon-category-name').click(function(event) {
		var parent = $(this).parent();
		$(this).toggleClass('active');
		$('.col-center-live-soon-category-inner', parent).slideToggle(400);
	});
	$('.col-right-func-stream').click(function(event) {
		$('.col-right-func-stream').removeClass('active');
		$(this).addClass('active');
	});
	$('.col-right-func-resize').click(function(event) {
		$(this).toggleClass('toggled');
		$('.col-right').toggleClass('big-right-menu');
		colCenterResize();
	});
	$('.col-right-func-toggle').click(function(event) {
		$('.col-right-match-info').slideToggle(400);
		$(this).toggleClass('active');
	});
	$('.match-lock-toggle').click(function(event) {
		$(this).toggleClass('locked');
	});

	$('.col-right-match-info-stat-trigger').click(function(event) {
		$(this).toggleClass('active');
		$('.col-right-additional-stat').slideToggle(400);
	});
	$('.col-right-match-bet-coupon-header').click(function(event) {
		$('.col-right-match-bet-coupon-content').slideToggle(400);
	});

	$('.col-right-func-select-header, .col-right-func-select-toggle').click(function(event) {
		var parent = $(this).parent();
		$('.col-right-func-select-options', parent).slideToggle(400);
	});
	$('.col-right-func-select-options li').click(function(event) {
		var target = $(this).closest('.col-right-func-select');
		$('.col-right-func-select-header',target).html($(this).html());
		console.log(target)
		$(this).parent().slideToggle(400);
	});
	$('.col-center-sort-header').click(function(event) {
		var parent = $(this).parent();
		if ($('div').is('.col-center-live-bet-content', parent)) {
			$('.col-center-live-bet-content', parent).slideToggle(400);
			$(this).toggleClass('toggled');
		}
	});
	$('.match-additional-bets-toggle').click(function(event) {
		$(this).toggleClass('toggled');
		var parent = $(this).closest('li');
		$('.additional-bets', parent).slideToggle(400);
	});
	$('.col-right-block-header').click(function(event) {
		var parent = $(this).parent();
		$(this).toggleClass('toggled');
		$('.col-right-block-content', parent).slideToggle(400);
	});

	$('.additional-bets-line-header').click(function(event) {
		$(this).toggleClass('toggled');
		var parent = $(this).parent();
		$('.additional-bets-container', parent).slideToggle(400)
	});
	$('.button-stream').click(function(event) {
		var parent = $(this).parent();
		$('.button-stream', parent).removeClass('active');
		$(this).addClass('active')
	});
	$('.col-center-live-tabs li').click(function(event) {
		var parent = $(this).closest('.col-center-block-container')
		$('.col-center-live-tabs li', parent).removeClass('active');
		$(this).addClass('active');
		var id = $(this).attr('id');
		$('.tab', parent).removeClass('active');
		$('.'+id+'', parent).addClass('active');
	});
	$('.language-select-content li').click(function(event) {
		$('.language-select-content li').removeClass('selected');
		$(this).addClass('selected');
	});
	function baronInit(){
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
			// Element to be used as interactive track. Note: it could be different from 'track' param of baron.
			track: '.baron__track',
			forward: '.baron__down',
			backward: '.baron__up'
		})
	}

	baronInit();
	if ($('div').is('.col-right-additional-stat-circle-block')) {
		$('.col-right-additional-stat-circle-block').each(function(index, el) {
			var id = '#'+$(this).attr('id');
			initCircle(id);
		});
	}

	if ($('div').is('.col-right-additional-stat-line-block')) {
		$('.col-right-additional-stat-line-block').each(function(index, el) {
			var id = '#'+$(this).attr('id');
			initLineStat(id);
		});
	}

	var currentTime = new Date();
	$('#gmt_plus').html(-(currentTime.getTimezoneOffset()/60));



}); 
