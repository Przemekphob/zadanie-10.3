$(function(){
    var carouselList = $("#carousel ul");

 
    var timer = setInterval(changeSlide, 5000);
 
    function restartTime() {
        clearInterval(timer);
        timer = setInterval(changeSlide, 5000);
    }
   
    function getActiveDotIndex() {
        var currentDotIdx;
        $("#dots li").each(function(idx) {
            if($(this).hasClass("active")) {
                currentDotIdx = idx;
                return;
            }
        });
        return currentDotIdx;
    }
   
    function dotActiveToLeft() {
        var currentDotIdx = getActiveDotIndex();
        if(currentDotIdx <= 0) {
            currentDotIdx = $("#dots li").length - 1;
        } else {
            currentDotIdx--;
        }
        carouselList.animate({'marginLeft': (currentDotIdx * -100) + "%"}, 500);
        $("#dots li.active").removeClass("active");
        $("#dots li").eq(currentDotIdx).addClass("active");
    }
   
    function dotActiveToRight() {
        var currentDotIdx = getActiveDotIndex();
        if(currentDotIdx >= $("#dots li").length - 1) {
            currentDotIdx = 0;
        } else {
            currentDotIdx++;
        };
        carouselList.animate({'marginLeft': (currentDotIdx * -100) + "%"}, 500);
        $("#dots li.active").removeClass("active");
        $("#dots li").eq(currentDotIdx).addClass("active");
    }
   
    function changeSlide () {
        dotActiveToRight();
    }
 
    $( ".next" ).click(function() {
        dotActiveToRight();
        restartTime();
       
    });
 
    $( ".prev" ).click(function() {
        dotActiveToLeft();
        restartTime();
       
    });
 
    $('#dots').children().each(function(idx, val) {
        $(this).click(function() {
            if(getActiveDotIndex() != idx) {
                carouselList.animate({'marginLeft': (idx * -100) + "%"}, 500);
                $("#dots li.active").removeClass("active");
                $(this).addClass("active");
            }
            restartTime();
        });
    });
});