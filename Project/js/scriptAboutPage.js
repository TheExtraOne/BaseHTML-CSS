$(document).ready(function() {
	$('.slider').slick({
		arrows: true,
		dots: true,
		adaptiveHeight: true,
		speed: 1500,
		easing:"ease",
		autoplay: true,
		autoplaySpeed: 2800,
	});
});
$(document).ready(function() {
    $('.sliderTeacher').slick({
        arrows: false,
        dots: true,
        adaptiveHeight: true,
        slidesToShow:4,
        slidesToScroll: 4,
        speed: 1500,
        easing:"ease",
        autoplay: true,
        autoplaySpeed: 3200,
        responsive:[
            {
                breakpoint:1081,
                settings:{
                    slidesToShow:3,
                    slidesToScroll: 3, 
                }  
            },{
                breakpoint:821,
                settings:{
                    slidesToShow:2,
                    slidesToScroll: 2,   
                }
            }
        ]
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
