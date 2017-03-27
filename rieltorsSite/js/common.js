$(function() {

	var anchors = new Array();
	function clearActive(){
		$(".scr-mnu li").each(function(index, el) {
			$(this).removeClass('active')
		});
	};
function nextSlide(){
	$('.slider-nav .slick-next').trigger('click');
}


	/*--------------------------------------------Слайдер комментариев--------------------------------------------*/
jQuery(document).ready(function($) {
	$('.slider-wrapper').slick({
		dots: true,
		infinite: true,
		speed: 600,
		slidesToShow: 1,
		slidesToScroll: 1,
		centerMode: true,
		variableWidth: true
	});
	$(".slide").width($(".container").width());
	
	$(".comments-next").click(function(event) {
		$(".slick-next").trigger('click');
	});	

	$(".comments-prev").click(function(event) {
		$(".slick-prev").trigger('click');
	});


	var sliderTimer;
	sliderTimer=setInterval(nextSlide,5000);
	 $('.slider-nav, .slider-for').hover(function(){
		clearInterval(sliderTimer);
	},function(){
		sliderTimer=setInterval(nextSlide,5000);
	});
});

$(window).resize(function(event) {
	$(".slide").width($(".container").width());
});

/*--------------------------------------слайдер модального окна-----------------------------------------*/
 $('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
	asNavFor: '.slider-for',
	dots: false,
	centerMode: true,
	focusOnSelect: true,
	infinite: true,
	slidesToShow: 5,
	slidesToScroll: 1
});

/*-------------------------------------------------------------------------------------------------------------*/







	/*--------------------------------------------Скроллинг по странице--------------------------------------------*/
    $(".top-menu, .top-mobile, .scr-mnu, .arrow-up-wrapper, .button-service, .button-section-two").on("click","a", function (event) {
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();
        //забираем идентификатор бока с атрибута href
        var id  = $(this).attr('href'),
        //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;
         
        //анимируем переход на расстояние - top
        $('body,html').animate({scrollTop: top}, 1000);
    });
    /*-------------------------------------------------------------------------------------------------------------*/








	/*--------------------------------------------Функции при скроллинге--------------------------------------------*/
	$(window).scroll(function() {
	var st = $(this).scrollTop();
	/*Выделенная секция меню*/
	if((st >= $("#about").offset().top) && (st < $("#service").offset().top)){
		clearActive();
		$(".anchor-about").addClass('active');
	} else if((st >= $("#service").offset().top) && (st < $("#objects").offset().top)){
		clearActive();
		$(".anchor-service").addClass('active');
	} else if((st >= $("#objects").offset().top) && (st < $("#comments").offset().top)){
		clearActive();
		$(".anchor-objects").addClass('active');
	} else if((st >= $("#comments").offset().top) && (st < $("#contacts").offset().top)){
		clearActive();
		$(".anchor-comments").addClass('active');
	} else if((st >= $("#contacts").offset().top)){
		clearActive();
		$(".anchor-contacts").addClass('active');
	};

	if(window.matchMedia('(max-width: 768px)').matches){
    // do functionality on screens smaller than 768px
} else {
	$(".wrapper-parallax").css('transform', 'translateY('+(-st/25)+'%)');
}



		var menuOpened = false;

		if(st>1070){
			$(".arrow-up").css('display', 'block');
			$(".scrolling-menu").css('top', '0px');
		} else {
			$(".scrolling-menu").css('top', ''+(st-1070)+'px');
			$(".arrow-up").css('display', 'none');
		}
	});

	$(".toggle-menu").click(function() {
		$(".top-mobile").slideToggle(400)
	});


	/*--------------------------------------------------------------------------------------------------*/

/*------------------------------- прелоадер сайта -----------------------------*/
document.body.style.overflow = 'hidden';
$(window).on('load', function () {

    var $preloader = $('.pre-loader'),
        $spinner   = $preloader.find('.dots, span');

    $spinner.fadeOut();
    $preloader.delay(350).fadeOut('slow');
    $("body").css('overflow', '');
});
/*-----------------------------------------------------------------------------*/

/*----------------------------модальное окно -----------------------------------*/
$('.object-elem').click(function(event) {
	/* Act on the event */
	nextSlide();
	$('.slider-nav .slick-prev').trigger('click');
	$('.modal-window').fadeIn('slow');
	$('html').css('overflow-y', 'hidden');
});
$('.modal-bg').click(function(event) {
	/* Act on the event */
		$('.modal-window').fadeOut('slow');
		$('html').css('overflow-y', 'scroll');
});
$('.modal-close').click(function(event) {
	/* Act on the event */
		$('.modal-window').fadeOut('slow');
		$('html').css('overflow-y', 'scroll');
});
/*------------------------------------------------------------------------------*/
});
