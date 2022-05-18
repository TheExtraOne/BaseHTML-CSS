$(document).ready(function() {
	$('.headerBurger').click(function(event) {
		$('.headerBurger,.rightNav').toggleClass('knopka');
		$('body').toggleClass('lock'); /*Для запрета скрола во время открытого меню*/
	});
});