$(document).ready(function() {
	$('.headerBurger').click(function(event) {
		$('.headerBurger,.rightNav').toggleClass('knopka');
		$('body').toggleClass('lock'); /*Для запрета скрола во время открытого меню*/
	});
});

//Функция показа окна Log in//
function surprise(state){
	document.getElementById('window').style.display = state;
	document.getElementById('gray').style.display = state;
}