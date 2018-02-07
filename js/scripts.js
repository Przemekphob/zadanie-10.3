$(function(){
	var carouselList = $("#carousel ul");

	setInterval(changeSlide, 3000);

	function changeSlide () {
		carouselList.animate({'marginLeft':-400}, 500, moveFirstSlide);
	}


	function moveFirstSlide() {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");

		lastItem.after(firstItem);
		carouselList.css({marginLeft:0});
	}

	$( ".next" ).click(function() {
		carouselList.animate({'marginLeft':'-100%'}, 500, moveFirstSlide);
	});


	function moveLastSlide() {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");

		firstItem.before(lastItem);
		carouselList.css({'marginLeft':0});
	}


	$( ".prev" ).click(function() {
		carouselList.animate({'marginLeft':'100%'}, 500, moveLastSlide);
	});







/*
	  $('.prev').on('click', function() {

	    carouselList.animate({left: '0%'}, 300, function(){

	      carouselList.css('left', '-100%');

	      $('.slide').first().before($('.slide').last());

	    });


	  });

*/



});









