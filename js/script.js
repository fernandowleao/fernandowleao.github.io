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

        $('#owl-procedimentos').owlCarousel({
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






   $('#owl-instafeed').owlCarousel({
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
                            items:4
                        }
                      }
                    })



   








 }); 

//----------------------------------

function transfereImagens() {

   let fotos = $(".instagram-item");
   let i;

   for (i=0; i < fotos.length; i++){
    $('#owl-instafeed').owlCarousel().trigger('add.owl.carousel', fotos[i]) .trigger('refresh.owl.carousel');
   }


   $("#instafeed").remove();
}

//---------------






const menuItems = document.querySelectorAll('.nav-item a[href^="#"');

menuItems.forEach(item => {
    item.addEventListener('click', scrollToIdOnClick);
})

function getScrollTopByHref(element){
    const id = element.getAttribute('href');
    return document.querySelector(id).offsetTop;
}


function scrollToIdOnClick(event){
  event.preventDefault();
  const to = getScrollTopByHref(event.target)

  scrollToPotision(to);
}

function scrollToPotision(to){
    smoothScrollTo(0, to, 500)
}


//--smooth scroll para funcionar no safari

/**
 * Smooth scroll animation
 * @param {int} endX: destination x coordinate
 * @param {int} endY: destination y coordinate
 * @param {int} duration: animation duration in ms
 */
function smoothScrollTo(endX, endY, duration) {
  const startX = window.scrollX || window.pageXOffset;
  const startY = window.scrollY || window.pageYOffset;
  const distanceX = endX - startX;
  const distanceY = endY - startY;
  const startTime = new Date().getTime();

  duration = typeof duration !== 'undefined' ? duration : 400;

  // Easing function
  const easeInOutQuart = (time, from, distance, duration) => {
    if ((time /= duration / 2) < 1) return distance / 2 * time * time * time * time + from;
    return -distance / 2 * ((time -= 2) * time * time * time - 2) + from;
  };

  const timer = setInterval(() => {
    const time = new Date().getTime() - startTime;
    const newX = easeInOutQuart(time, startX, distanceX, duration);
    const newY = easeInOutQuart(time, startY, distanceY, duration);
    if (time >= duration) {
      clearInterval(timer);
    }
    window.scroll(newX, newY);
  }, 1000 / 60); // 60 fps
};


////////////////////////////////////////////
