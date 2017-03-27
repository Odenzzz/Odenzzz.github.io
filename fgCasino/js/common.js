$(window).on('load', function () {
	var $preloader = $('#page-preloader'),
		$spinner   = $preloader.find('.spinner');
		$spinners   = $preloader.find('.spinner-inner');
	$spinners.fadeOut();
	$spinner.fadeOut();
	$preloader.delay(500).fadeOut('slow');
});


	var winner = new Array()
		winner[0] = '<span class="winners-name">Thomas H</span><span class="other-text"> just won </span><span class="winners-value">1.8</span> <span class="winners-currency">RUB</span><span class="other-text"> in </span><span class="winners-game">Vikings Go Wild</span>',
		winner[2] = '<span class="winners-name">Jonh G</span><span class="other-text"> just won </span><span class="winners-value">2.8</span> <span class="winners-currency">EURO</span><span class="other-text"> in </span><span class="winners-game">Vikings</span>',
		winner[1] = '<span class="winners-name">Marry L</span><span class="other-text"> just won </span><span class="winners-value">11</span> <span class="winners-currency">USD</span><span class="other-text"> in </span><span class="winners-game">Vikings</span>',
		winner[3] = '<span class="winners-name">Marry G</span><span class="other-text"> just won </span><span class="winners-value">11</span> <span class="winners-currency">USD</span><span class="other-text"> in </span><span class="winners-game">Vikings</span>',
		winner[4] = '<span class="winners-name">Marry K</span><span class="other-text"> just won </span><span class="winners-value">11</span> <span class="winners-currency">USD</span><span class="other-text"> in </span><span class="winners-game">Vikings</span>'
		winner[5] = '<span class="winners-name">Marry U</span><span class="other-text"> just won </span><span class="winners-value">11</span> <span class="winners-currency">USD</span><span class="other-text"> in </span><span class="winners-game">Vikings</span>'
		winner[6] = '<span class="winners-name">Marry R</span><span class="other-text"> just won </span><span class="winners-value">11</span> <span class="winners-currency">USD</span><span class="other-text"> in </span><span class="winners-game">Vikings</span>'
	var count = 0;

function curryncyUpdate(){
		$('.winners-currency').each(function(index, el) {
			var currency = $(this).text()
			if (currency == 'USD') {
				$(this).addClass('usd')
				$(this).text('')
			} else if (currency == 'RUB') {
				$(this).addClass('rub')
				$(this).text('')
			} else if (currency == 'EURO') {
				$(this).addClass('euro')
				$(this).text('')
			} else{
				return;
			}
		});
	}

function winnerBorderUpdate(){
	$('.winner-item').each(function(index, el) {
		if ($(this).text() == 0) {
			$(this).css('border', 'none');
		} else{
			$(this).removeAttr('style');
		}
	});
}
function animateMenu(){
	$('.second-menu-item').each(function(i, el){
		$("a",el).removeClass('animate-menu');
		setTimeout(function(){
		$("a",el).addClass('animate-menu');
		},1000 + ( i * 1000 ));
	});
}

$(function() {
	
	function winnerUpdate(){
			$('.win-currency').addClass('win-currency-trig');
			setTimeout (function(){
				$('.win-currency').removeClass('win-currency-trig');
			}.bind('.win-currency'), 1100);
			
			var newWinnerCurrency = $('.prev-winner .winners-currency').text()
			if (newWinnerCurrency == 'USD') {
				$('.win-currency').children().removeClass()
				$('.win-currency').children().addClass('usd')
			} else if (newWinnerCurrency == 'RUB') {
				$('.win-currency').children().removeClass()
				$('.win-currency').children().addClass('rub')
			} else if (newWinnerCurrency == 'EURO') {
				$('.win-currency').children().removeClass()
				$('.win-currency').children().addClass('euro')
			}
			$('.winner-item-prev').css('margin-top', '20px');
			$('.winner-item-prev').animate({
				'margin-left': '25px'
			}, 700,function(){
				$('.winner-item').last().html('');
				$('.winner-item').last().html($('.winner-item:eq(6)').html());
				$('.winner-item:eq(6)').html('');
				$('.winner-item:eq(6)').html($('.winner-item:eq(5)').html());
				$('.winner-item:eq(5)').html('');
				$('.winner-item:eq(5)').html($('.winner-item:eq(4)').html());
				$('.winner-item:eq(4)').html('');
				$('.winner-item:eq(4)').html($('.winner-item:eq(3)').html());
				$('.winner-item:eq(3)').html('');
				$('.winner-item:eq(3)').html($('.winner-item:eq(2)').html());
				$('.winner-item:eq(2)').html('');
				$('.winner-item:eq(2)').html($('.winner-item:eq(1)').html());
				$('.winner-item:eq(1)').html('');
				$('.winner-item:eq(1)').html($('.winner-item').first().html());
				$('.winner-item').first().html('');
				$('.winner-item').first().html($('.winner-item-prev').html());
				$('.winner-item-prev').html('');
				$('.winner-item-prev').css('margin-left', '-345px');
				//$('.winner-item-prev').css('margin-top', '0px');
				winnerBorderUpdate()
			})

			curryncyUpdate();
			return setTimeout(function(){
				$('.winner-item-prev').html(winner[count]);
				if (count == 4){
					count = 0;
				} else {
					count ++;
				}
				return winnerUpdate();
			},6000)
	};
	
	winnerUpdate();
});

$('.search').keyup(function(event) {
	if($('.menu-line .search input').val().length > 0){
		$('.menu-line .button-search').removeClass('search-icon');
		$('.menu-line .button-search').addClass('close-icon');
		$('.menu-line .button-search').removeAttr('onclick');
		$('.menu-line .button-search').attr('onclick', 'clearSearch()');
	} else{
		$('.menu-line .button-search').removeClass('close-icon');
		$('.menu-line .button-search').addClass('search-icon');
		$('.menu-line .button-search').removeAttr('onclick');
		$('.menu-line .button-search').attr('onclick', 'startSearch()');
		
	}
});
function startSearch(){
	$('.menu-line .search input').focus()
}
function clearSearch(){
	$('.menu-line .search input').val('');
	$('.menu-line .button-search').removeClass('close-icon');
	$('.menu-line .button-search').addClass('search-icon');
	$('.menu-line .button-search').removeAttr('onclick');
	$('.menu-line .button-search').attr('onclick', 'startSearch()');
}


function helpBlockClose(){
	$('.help-block').animate({
		right: '-360px'
	},
		500, function() {
		$('.help-block').css('display', 'none');
		$('.help-toggle').css('display', 'inline-block');
		$('.help-toggle').animate({right: '-20px'}, 300)
	});
}

function helpBlockOpen(){
	$('.help-toggle').animate({
		right: '-70px'
	},
		300, function() {
		$('.help-toggle').css('display', 'none');
		$('.help-block').css('display', 'block');
		$('.help-block').animate({
			right: '-17px'
		},
			500, function() {
			
		});
	});
}

function closeFirstScreenHelp() {
	$('.help-back').css('display', 'inline-block');
	$('.first-screen').animate({
		top: '-'+($(".first-screen").height()+100)+'px'},
		1000, function() {
			$(".first-screen").css('display', 'none');
	});
}
function openFirstScreenHelp() {
	$('.help-back').css('display', 'none');
	$(".first-screen").css('display', 'block');
		$(".other-screen").each(function(index, el) {
			$(this).animate({
				top: ''+($(".other-screen").height()+100)+'px'
			},1000, function() {
				$(this).css('display', 'none');
			});
		});

	$('.first-screen').animate({top: 0}, 1000);
}


// function fullScreenCancel() {
//   if(document.requestFullscreen) {
//     document.requestFullscreen();
//   } else if(document.webkitRequestFullscreen ) {
//     document.webkitRequestFullscreen();
//   } else if(document.mozRequestFullscreen) {
//     document.mozRequestFullScreen();
//   }
// }
function fullScreenCancel() {
	 if(document.exitFullscreen) {
			document.exitFullscreen();
		} else if(document.mozCancelFullScreen) {
			document.mozCancelFullScreen();
		} else if(document.webkitExitFullscreen) {
			document.webkitExitFullscreen();
		}
}
function fullScreenOpen() {
	var element = document.body;
		var req = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen;
		if(req){
			req.call(element);
		}else{
			var wscript = new ActiveXObject("Wscript.shell");
			wscript.SendKeys("{F11}");
		}
	 return false;
}


function resizeGame(clearGame){
	var h, w;
	if (clearGame) {
		h = 150
		w = 50
	} else {
		h = 300
		w = 200
	}
	$('.game').height($(window).height()-h)
	$('.game').width($('.game').height()*1.6)
	if (($(window).width()-w) < $('.game').width()) {
		$('.game').width($(window).width()-w)
		$('.game').height($('.game').width()*0.6)
	}
}

function modalWindowOpen(){
	$('.modal-content > div').css('display', 'none');
	$('.modal-window').css('display', 'block');
	$('.modal-window').animate({opacity: 1}, 300);
	$('.body-container').attr('style', 'filter: blur(5px);');
	$('.modal-dialog').css('width', '535px');
}
function modalLogin(){
	$('.login-wrapper').css('display', 'block');
	$('.register-wrapper').css('display', 'none');
	$('#login-form').css('display', 'block');
	$('.forgot').css('display', 'block');
	$('#forgot-form').css('display', 'none');
}
var leftMenuOpened = false;

function leftMenuToggleOn(){
	$('.left-navigation-hover').css('display', 'none');
	$('.left-navigation').addClass('toggled');
	$('.left-navigation span').css('display', 'none');
	$('.left-navigation-wrapper').animate({width: 50}, 200)
}
function leftMenuToggleOff(){
	$('.left-navigation').removeClass('toggled');
	$('.menu-expand').animate({left: '-400px'}, 200)
	$('.left-navigation-wrapper').animate({
		width: 80},
		200, function() {
		$('.menu-expand').css('display', 'none');
		$('.left-navigation span').css('display', 'block');
		$('.left-navigation-hover').css('display', 'block');
		$('.left-navigation li').each(function(index, el) {
			$(this).removeClass('active');
		});
		$('.left-navigation li a').each(function(index, el) {
			$(this).removeClass('pToggled');
		});
		$('.lobby').addClass('active');
	});
	leftMenuOpened = false;
}

function openLeftElement(elem){
	if ($('.'+elem+' > a').hasClass('pToggled')) {
			$('.'+elem+' > a').removeClass('pToggled');
			leftMenuToggleOff();
		} else {
			$('.'+elem+' > a').addClass('pToggled');
			leftMenuOpened = false
			if (!leftMenuOpened) {
				leftMenuOpened = true;
				$('.left-navigation li').each(function(index, el) {
					$(this).removeClass('active');
				});
				$('.'+elem+'').addClass('active');
				leftMenuToggleOn();
				$('.menu-expand').css('display', 'none');
				$('#menu-expand-'+elem+'').css('display', 'block');
				$('#menu-expand-'+elem+'').animate({
					left: 0},400);
			} else{
				leftMenuToggleOff();
			}
		}
}

function nextSlide(){
	$('.slick-next').trigger('click');
}
if ($('.menu-line').length>0) {var topMenuOffset = $('.menu-line').offset().top}
if ($('.second-menu').length>0) {var secondMenuOffset = $('.second-menu').offset().top}

function scrollUpMenuShow(){
	if ($(window).scrollTop()>topMenuOffset) {
		$('.menu-line').css({
			position: 'fixed',
			top: '0px',
			border: 'none',
			background: '#041a25',
			width: '1020px',
			padding: '0 5px'
		});
	} else {
		$('.menu-line').removeAttr('style');
	}
}
function scrollDownMenuHide(){
	$('.menu-line').removeAttr('style');
}
function scrollDownSecondMenu(){
	if ($(window).scrollTop()>secondMenuOffset) {
		if ($('.menu-line')[0].hasAttribute("style")) {
			$('.second-menu').css({
				position: 'fixed',
				top: '26px',
				width: '1020px'
			});
			$('.second-menu nav').css('background', '#041a25');
			$('.second-menu i').css('opacity', '0');
			$('.second-menu input').css('margin-top', '39px');
		}else{
			$('.second-menu').css({
				position: 'fixed',
				top: '-38px',
				width: '1020px'
			});
			$('.second-menu nav').css('background', '#041a25');
			$('.second-menu i').css('opacity', '0');
			$('.second-menu input').css('margin-top', '39px');
		}
	} else {
		$('.second-menu').removeAttr('style');
		$('.second-menu nav').removeAttr('style');
		$('.second-menu i').removeAttr('style');
		$('.second-menu input').removeAttr('style');
	}
}



function addLastGame(game){
	var link = $('a', game).attr('href');
	var image = $('.game-link-icon', game).attr('style');
	var name = game.attr('name');
	var prevGames = JSON.parse(localStorage.getItem('prevGames')) || [];
	var newGame = {
		'game-link': link,
		'game-image': image,
		'game-name': name
	};
	prevGames.forEach(function(n, id) {
		if (prevGames[id]['game-name'] == name) {
			prevGames.splice(id, 1);
		}
	});
	prevGames.push(newGame);
	localStorage.setItem('prevGames', JSON.stringify(prevGames));
	return insertLastGamesLastGames();
}

function insertLastGamesLastGames(){
	$('.last-games-wrapper').html('')
	var prevGames = JSON.parse(localStorage.getItem('prevGames')) || [];
	var showedGames = prevGames.slice(-5);
	var insertedHTML = '';
	showedGames.forEach(function(n, id) {
		insertedHTML +='<div class="prev-game"><a href="'+showedGames[id]['game-link']+'"><div class="prev-game-icon" style="'+showedGames[id]['game-image']+'"></div></a></div>'
	});
	$('.last-games-wrapper').html(insertedHTML);
}
function languageTrigger(){
	modalWindowOpen();
	$('.select-language').css('display', 'block');
}
function languageSet(current){
	var language = JSON.parse(localStorage.getItem('currentLanguage')) || [];
	var currentLanguage = {
		'language': current
	}
	language.push(currentLanguage);
	localStorage.setItem('language', JSON.stringify(currentLanguage));
}

jQuery(document).ready(function($) {


	if (!localStorage.getItem('language')){
		languageTrigger();
	}
	
	insertLastGamesLastGames();
	$('.slick-list').trigger('click')
	var clearGames = false
	winnerBorderUpdate()
	curryncyUpdate()

	var winnersOpened = false;

	$('.current-winner').click(function(event) {
		if (winnersOpened) {
			$('.last-winners-dropdown').animate({'height': '0px'}, 500)
			winnersOpened = false
		} else {
			$('.last-winners-dropdown').animate({'height': '310px'}, 500)
			winnersOpened = true
		}
	});


	$('.top-slider-content').slick({
		dots: true,
		speed: 600,
		slidesToShow: 1
	});

	var sliderTimer;
	sliderTimer=setInterval(nextSlide,5000);
	 $('.top-slider-content').hover(function(){
		clearInterval(sliderTimer);
	},function(){
		sliderTimer=setInterval(nextSlide,5000);
	});
	var lastScrollTop = 0;
	$(window).scroll(function(event) {

		var botLine = $(this).scrollTop()+$(this).height()
		if ($('footer')) {
			if (botLine > $('footer').offset().top) {
				$('.footer-info-line').css({
					position: 'absolute',
					top: '-60px',
					bottom: 'auto',
				});
			} else {
				$('.footer-info-line').css({
					position: 'fixed',
					top: 'auto',
					bottom: '0',
				});
			}
		}

		var st = $(this).scrollTop();
		if (st > lastScrollTop){
			scrollDownMenuHide()
			scrollDownSecondMenu()
		} else {
			scrollUpMenuShow()
			scrollDownSecondMenu()
		}
		lastScrollTop = st;
	});



animateMenu();
setInterval(animateMenu,11000);





	var secondMenuWidth2 = (735-(($('.second-menu-item').length-1)*10)) / ($('.second-menu-item').length);
	var secondMenuWidth = (1020-(($('.second-menu-item').length-1)*0)) / ($('.second-menu-item').length);

	$('.second-menu-item').css('width', ''+secondMenuWidth+'px');

	$('.search-second-menu-button').click(function(event) {
		$(this).toggleClass('search-active');
		if ($(this).hasClass('search-active')) {
			$('.second-menu-item').animate({width: secondMenuWidth2, "font-size": 12}, 400);
			$('.second-menu .search').animate({width: 280}, 400);
			$('.second-menu-item a').css('min-height', '70px');
			$('.second-menu-item span').css('font-size', '10px');
		} else {
			$('.second-menu-item').animate({width: secondMenuWidth, "font-size": 14}, 400);
			$('.second-menu .search').animate({width: 0}, 400);
			$('.second-menu-item a').css('min-height', '70px');
			$('.second-menu-item span').css('font-size', '14px');
		}
	});



	$('.second-menu-trigger').click(function(event) {
		if ($(this).hasClass('active')) {
			$(this).removeClass('active')
		} else {
			$('.second-menu-trigger').each(function(index, el) {
				$(this).removeClass('active')
			});
			$(this).addClass('active')
		}
	});







	$(window).resize(function(event) {
		$('.help-content').css('height', ''+($(window).height()-46)+'px');
		var hc = $('.help-content').height();
		//$('.question-wrapper').css('height', ''+(-($('.header-faq').height())+hc)+'px');
		$('.question-wrapper').css('height', '690px');
		$('.body-container').height($(window).height())
		resizeGame(clearGames)
	});
	var newDate = new Date();
	newDate.setDate(newDate.getDate());
	 setInterval( function() {
			// Создаем объект newDate() и показывает минуты
			var minutes = new Date().getMinutes();
			// Добавляем ноль в начало цифры, которые до 10
			$(".minutes").html(( minutes < 10 ? "0" : "" ) + minutes);

		},2000);
 
		setInterval( function() {
			// Создаем объект newDate() и показывает часы
			var hours = new Date().getHours();
			// Добавляем ноль в начало цифры, которые до 10
			$(".hours").html(( hours < 10 ? "0" : "" ) + hours);

		},2000);

		$('.help-content').css('height', ''+($(window).height()-46)+'px');
		var hc = $('.help-content').height();
		//$('.question-wrapper').css('height', ''+(-($('.header-faq').height())+hc)+'px');
		$('.question-wrapper').css('height', '690px');
		$('.body-container').height($(window).height())
		resizeGame(clearGames)

		$('.help-close').click(function(event) {
			helpBlockClose();
		});
		$('.help-toggle').click(function(event) {
			helpBlockOpen();
		});

		$('.help-back').click(function(event) {
			openFirstScreenHelp()
		});
		$('.live-chat').click(function(event) {
			$('.chat-screen').css('display', 'block');
			closeFirstScreenHelp();
			$('.chat-screen').animate({
				top: 0},
				1000, function() {
				/* stuff to do after animation is complete */
			});
		});
		$('.support-message').click(function(event) {
			$('.message-to-support').css('display', 'block');
			closeFirstScreenHelp();
			$('.message-to-support').animate({
				top: 0},
				1000, function() {
				/* stuff to do after animation is complete */
			});
		});
		$('.find-answers').click(function(event) {
			$('.faq').css('display', 'block');
			closeFirstScreenHelp();
			$('.faq').animate({
				top: 0},
				1000, function() {
				/* stuff to do after animation is complete */
			});
		});
		$('.question').click(function(event) {
			$(this).toggleClass("active");
			$('.answer', this).slideToggle(400)
			$('.category-question').each(function(index, el) {
				var check = $('.question', this).length
				var check2 = check
				$('.question', this).each(function(index, el) {
					if ($(this).hasClass('active')) {
						check2--
					}
				});
				console.log($(this))
				console.log(check)
				console.log(check2)
				if (check > check2) {
					$(this).addClass('triggered')
				} else {
					$(this).removeClass('triggered')
				}
			});
		});
		$('.trigger-category').click(function(event) {
			var target = $(this).parent()
			$('ul', target).slideToggle(400)
			$(this).toggleClass('opened-help')
		});

	$('.left-navigation li').hover(function(event) {
		var top = $(this).position().top
		$('.left-navigation-hover').css('top', ''+top+'px');
	}, function(){
		$('.left-navigation-hover').css('top', '0px');
	});



	$('.deposit a').click(function(event) {
		openLeftElement('deposit');
	});
	$('.account a').click(function(event) {
		openLeftElement('account');
	});
	$('.withdraw a').click(function(event) {
		openLeftElement('withdraw');
	});



	$('.dropdown-toggle').click(function(event) {
		$('.bootstrap-select .dropdown-menu').slideToggle(400);
		console.log('asdsa')
	});


	$('.bootstrap-select > .dropdown-menu > ul > li').click(function(event) {
		var text = $(".text", this).text()
		$('.bootstrap-select .dropdown-menu').slideToggle(400);
		$('.dropdown-toggle .filter-option').text(text);

	});
	$('.modal-bg').click(function(event) {
		$('.modal-window').animate({
			opacity: 0},
			300, function() {
			$('.modal-window').css('display', 'none');
		});
		$('.body-container').removeAttr('style');
	});


	$('.fullscreen').click(function(event) {
		$(this).toggleClass('fsa');
		if ($(this).hasClass('fsa')) {
			fullScreenOpen();
		}else{
			fullScreenCancel();
		}
	});

	$('.hide-menus').click(function(event) {
		$(this).toggleClass('fsa');

		$('.bottom-game-menu').slideToggle(400);

			if ($(this).hasClass('fsa')) {
				clearGames = true
				resizeGame(clearGames)
				$('.left-navigation-wrapper').animate({
					left: '-100px'},
					400, function() {
					$('.left-navigation-wrapper').css('display', 'none');
				});
				$('.help-toggle').animate({
					right: '-100px'},
					400, function() {
					$('.help-toggle').css('display', 'none');
				});
			}else{
				clearGames = false
				resizeGame(clearGames)
				$('.left-navigation-wrapper').css('display', 'block');
				$('.help-toggle').css('display', 'inline-block');
				$('.left-navigation-wrapper').animate({left: '0px'},400);
				$('.help-toggle').animate({right: '-20px'},200);}
	});

	$('.close-tabs, .footer-buttons a').click(function(event) {
		$(this).toggleClass('other-games-opened');
		$('.other-games').slideToggle(400)
	});


	$('.games-slider').slick({
		infinite: false,
		speed: 300,
		slidesToShow: 14,
		variableWidth: true,
		slidesToScroll: 1,
		responsive: [
			{
				breakpoint: 1600,
				settings: {
					slidesToShow: 12,
					slidesToScroll: 1
				}
			},{
				breakpoint: 1400,
				settings: {
					slidesToShow: 10,
					slidesToScroll: 1
				}
			},{
				breakpoint: 1200,
				settings: {
					slidesToShow: 8,
					slidesToScroll: 1
				}
			},{
				breakpoint: 1000,
				settings: {
					slidesToShow: 6,
					slidesToScroll: 1
				}
			},{
				breakpoint: 800,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1
				}
			},{
				breakpoint: 600,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			}
		]
	});

	$("label[for='filterToggle']").click(function(event) {
		$(this).toggleClass('filterActive');
		if ($(this).hasClass('filterActive')) {
			$('.filter-copy').html('')
			$('.filter-copy').html('filter on')
		} else {
			$('.filter-copy').html('')
			$('.filter-copy').html('filter off')
		}
	});


	$('.filter').change(function(event) {
		if($(this).val() == 'providers'){
			$('.providers-option').css('display', 'block');
			$('.filters-option').css('display', 'none');
		} else{
			$('.providers-option').css('display', 'none');
			$('.filters-option').css('display', 'block');
		}
	});
	$('.filter-label').click(function(event) {
		$(this).toggleClass('selected');
	});
	$('#remember-password').click(function(event) {
		$('#login-form').hide('100');
		$('.forgot').hide('100');
		$('#forgot-form').show('100');
	});

	$('.top-forgot-account').click(function(event) {
		modalWindowOpen();
		modalLogin();
		$('#login-form').css('display', 'none');
		$('.forgot').css('display', 'none');
		$('#forgot-form').show('100');
	});
	$('.register').click(function(event) {
		modalWindowOpen();
		modalLogin();
	});
	$('.login-btn').click(function(event) {
		modalWindowOpen();
		modalLogin();
	});
	$("a.ancLinks").click(function () { 
		var elementClick = $(this).attr("href");
		var destination = $(elementClick).offset().top;
		$('html,body').animate( { scrollTop: destination }, 1100 );
		return false;
	});

	$('#account-settings').click(function(event) {
		openLeftElement('account')
		$('.deposit-content').css('display', 'none');
		$('.account-content').css('display', 'block');
		$('.modal-account-wrapper').css('display', 'block');

	});
	$('.modal-account-bg').click(function(event) {
		$('.modal-account-wrapper').css('display', 'none');
	});
	$('.account-settings-p').click(function(event) {
		$('.account-container').css('display', 'none');
		$('.account-settings-container').css('display', 'block');
		$('.account-settings-navigation').removeClass('active');
		$(this).addClass('active')
	});
	$('#account-gamelimits').click(function(event) {
		$('.account-container').css('display', 'none');
		$('.account-gamelimits-container').css('display', 'block');
		$('.account-settings-navigation').removeClass('active')
		$(this).addClass('active')
	});
	$('#account-transactions').click(function(event) {
		$('.account-container').css('display', 'none');
		$('.account-transactions-container').css('display', 'block');
		$('.account-settings-navigation').removeClass('active')
		$(this).addClass('active')
	});
	$('#account-gamingtransactions').click(function(event) {
		$('.account-container').css('display', 'none');
		$('.account-gamingtransactions-container').css('display', 'block');
		$('.account-settings-navigation').removeClass('active')
		$(this).addClass('active')
	});
	$('#account-kyc').click(function(event) {
		$('.account-container').css('display', 'none');
		$('.account-kyc-container').css('display', 'block');
		$('.account-settings-navigation').removeClass('active')
		$(this).addClass('active')
	});
	$('.css-label').click(function(event) {
		$(this).toggleClass('css-label-toggled');
	});
	$('.register').click(function(event) {
		modalWindowOpen()
		$('.createaccount').css('display', 'block');
		$('.modal-dialog').css('width', '1000px');
	});
	$('.deposit-open').click(function(event) {
		openLeftElement('deposit')
		$('.deposit-content').css('display', 'block');
		$('.account-content').css('display', 'none');
		$('.modal-account-wrapper').css('display', 'block');
	});
	$('.close-btn').click(function(event) {
		$('.modal-window').animate({
			opacity: 0},
			300, function() {
			$('.modal-window').css('display', 'none');
		});
		$('.body-container').removeAttr('style');
	});
	$('.login-button').click(function(event) {
		modalWindowOpen();
		modalLogin();
		$('#login-form').css('display', 'block');
		$('.forgot').css('display', 'none');
	});

	$('.notification-btn').click(function(event) {
		$(this).parent().animate({
			left: 400},
			400, function() {
			$(this).css('display', 'none');
		});
	});

	$('.last-game-trigger').click(function(event) {
		$(this).toggleClass('active');
		if ($(this).hasClass('active')) {
			if ($('footer').length > 0) {
				if ($(window).scrollTop()+$(window).height() > $('footer').offset().top) {
					$('.footer-info-line').animate({top: '-80px'}, 400)
				}
				$('.footer-last-games').animate({
					height: 80},
					200, function() {
					$('.last-games-wrapper').css('display', 'block');
					$('.language-selector').css('margin-top', '11px');
				});
			} else{
				$('.footer-last-games').animate({
					height: 50},
					200, function() {
					$('.last-games-wrapper').css('display', 'block');
					$('.language-selector').css('margin-top', '11px');
				});
			}
		} else {
			if ($('footer').length > 0 ) {
				$('.last-games-wrapper').css('display', 'none');
				$('.language-selector').removeAttr('style')
				$('.footer-last-games').animate({height: 30}, 200)
				if ($(window).scrollTop()+$(window).height() > $('footer').offset().top) {
					$('.footer-info-line').animate({top: '-60px'}, 100)
				}
			} else {
				$('.last-games-wrapper').css('display', 'none');
				$('.language-selector').removeAttr('style');
				$('.footer-last-games').animate({height: 30}, 200);
			}
		}
	});
	$('.game-link').click(function(event) {
		addLastGame($(this));
	});

	$('.language-set').click(function(event) {
		var current = $('.language:checked').val();
		$('.modal-window').animate({
			opacity: 0},
			300, function() {
			$('.modal-window').css('display', 'none');
		});
		$('.body-container').removeAttr('style');
		languageSet(current);
	});
	$('.by-provider a').click(function(event) {
		modalWindowOpen();
		$('.providers').css('display', 'block');
	});
	$('.providers-set').click(function(event) {
		$('.modal-window').animate({
			opacity: 0},
			300, function() {
			$('.modal-window').css('display', 'none');
		});
		$('.body-container').removeAttr('style');
	});
	$('.volatility-value').change(function(event) {
		if ($(this).val() == 'low') {
			$('.volatility').removeClass('mid');
			$('.volatility').removeClass('high');
			$('.volatility').addClass('low');
		} else if ($(this).val() == 'mid') {
			$('.volatility').removeClass('low');
			$('.volatility').removeClass('high');
			$('.volatility').addClass('mid');
		} else {
			$('.volatility').removeClass('mid');
			$('.volatility').removeClass('low');
			$('.volatility').addClass('high');
		}
	});
	if (!($('.game-footer').length>0)) {
		$('.last-game-trigger').trigger('click');
	}
	$('.left-navigation-toggle').click(function(event) {
		$(this).toggleClass('active');
		if ($(this).hasClass('active')) {
			$('.left-navigation-wrapper').css('display', 'block');
		} else {
			$('.left-navigation-wrapper').css('display', 'none');
		}
	});
});




