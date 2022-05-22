$(document).ready(function(){
	$('.blockTitle').click(function(event) {
		$(this).toggleClass('show').next().slideToggle(300);
	});
});