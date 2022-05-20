$(document).ready(function() {
	$('.slider').slick({
		arrows: true,
		dots: true,
		adaptiveHeight: true,
		speed: 1000,
		easing:"ease",
		autoplay: true,
		autoplaySpeed: 2000,
	});
});

var el = $('.statistic .studingInfo');

$(window).scroll(function(){
    if ( $(this).scrollTop() > el.offset().top - 700 ) {
        el.addClass('animation');
    }
});

var rl = $('.diploma .diplomaInfo ');

$(window).scroll(function(){
    if ( $(this).scrollTop() > rl.offset().top - 700 ) {
        rl.addClass('animationLeft');
    }
});
