$(document).ready(function() {

	var swiper = new Swiper('.swiper-container', {

			slidesPerView:1, 
			loop: true,
			pagination: {
			el: '.swiper-pagination',
			clickable: true,
	  },
	  navigation: {
	  	nextEl: '.button_slider',
	  }
	});


	var swiper = new Swiper('.swiper-container1', {

			slidesPerView:1, 
			loop: true,
			pagination: {
			el: '.swiper-pagination1',
			clickable: true,
	  },
	});

$('#menu').on("click", "a", function (event) {
	event.preventDefault();

	var id = $(this).attr('href'),

	top = $(id).offset().top;
	$('body, html').animate({scrollTop: top}, 2000);
});

});