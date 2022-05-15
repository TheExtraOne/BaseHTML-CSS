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