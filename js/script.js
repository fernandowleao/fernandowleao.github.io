if (window.SimpleAnime) {
	new SimpleAnime();
}


$(document).ready(function(){

	$(".carousel").swipe({
        swipe: function (event, direction, distance, duration, fingerCount, fingerData) {
            if (direction == 'left') $(this).carousel('next');
            if (direction == 'right') $(this).carousel('prev');
        },
        allowPageScroll: "vertical" 
    });

  	$(".carousel").carousel("pause");	//pausa o carousel Bootstrap

  	//$('.owl-carousel').owlCarousel();   //construct no carousel owl

    $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    stagePadding: 35,
    loop:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,

        },
        600:{
            items:2,
        },
        1000:{
            items:3
        }
    }
})
    
 }); 





