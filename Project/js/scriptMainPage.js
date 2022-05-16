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

var el = $('.prewCurses .PrewCursesInfo div');

$(window).scroll(function(){
    if ( $(this).scrollTop() > el.offset().top - 700 ) {
        el.addClass('animation');
    }
});

var tl = $('.prewCurses .PrewCursesLink');

$(window).scroll(function(){
    if ( $(this).scrollTop() > tl.offset().top - 900 ) {
        tl.addClass('animationTwo');
    }
});

var rl = $('.nextCurses .NextCursesAbout div div.mainText, .nextCurses .NextCursesAbout div div.Title ');

$(window).scroll(function(){
    if ( $(this).scrollTop() > rl.offset().top - 700 ) {
        rl.addClass('animation');
    }
});

var yl = $('.nextCurses div.NextCursesLink');

$(window).scroll(function(){
    if ( $(this).scrollTop() > yl.offset().top - 900 ) {
        yl.addClass('animationTwo');
    }
});
$(document).ready(function() {
    $('.studentsWorksLink').click(function(event) {
        $(this).toggleClass('spoiler').next().toggleClass('difficult').slideToggle(300);
    });
    $('#studentsWorksExampls').css('display', 'flex'); /*Проблема в том, что js отображал блоком, а не flex*/
});