$(window).scroll(function(event) {
	var scrollValue = $(window).scrollTop();
	$('.back-line').attr('style', 'transform: translateY('+(scrollValue*0.2)+'px);');
	$('.second-line').attr('style', 'transform: translateY('+(scrollValue*0.08)+'px);');
});