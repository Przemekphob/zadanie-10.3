$(function(){
	var carouselList = $("#carousel ul");

	setInterval(changeSlide, 5000);

	function changeSlide () {
		carouselList.animate({'marginLeft':'-100%'}, 500, moveFirstSlide);
	}

	carouselList.find("li:first").before(carouselList.find("li:last"));

	function moveFirstSlide() {
		var firstItem = carouselList.find("li:first");
		var lastItem = carouselList.find("li:last");

		lastItem.after(firstItem);
		carouselList.css({'marginLeft':0});
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



	$('#dots').children().each(function(idx, val){
		$(this).click(function() { 
			carouselList.animate({'marginLeft': (idx * -100) + "%"}, 500); 
		});
	})




});


