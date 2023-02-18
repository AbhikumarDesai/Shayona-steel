// stickey nav---------------------
// $(document).ready(function() {
//     $(window).scroll(function () { 
  
//       console.log($(window).scrollTop());
  
//       if ($(window).scrollTop() > 150) {
//         $('.scroll_nav').addClass('fixed-top');
//         // $('.scroll_nav').addClass('bg_black');
//       }
  
//       if ($(window).scrollTop() < 0) {
//         $('.scroll_nav').removeClass('fixed-top');
//         // $('.scroll_nav').removeClass('bg_black');
//       }
//     });
//   });



$('.first_carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
autoplayTimeout:5000,
autoplayHoverPause:false,
autoplay: true,
mouseDrag: true,
singleItem: true,
animateIn: 'fadeIn',
animateOut: 'fadeOut',
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

// ------------------

$('.second_carousel').owlCarousel({
    loop:true,
    margin:30,
    nav:false,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1200:{
            items:4
        }
    }
    
})

$('.testimonials_carousel').owlCarousel({
  loop:true,
  margin:30,
  nav:false,
  autoplay:true,
  autoplayTimeout:4000,
  autoplayHoverPause:false,
  animateIn: 'flipInY',
  animateOut: 'slideOutLeft',
  items:1,
  margin:30,
  stagePadding:30,
  smartSpeed:150
});

	/* COUNTER JS*/
	
	var timer = $('.counter');
	if(timer.length) {
		timer.appear(function () {
		  timer.countTo();
	  });
	}
	



// $(document).ready(function(){
//     var owl = $('.second_carousel');
//     owl.owlCarousel({
//       loop:true,
//     });
    
//     // Custom Button
//     $('.customNextBtn').click(function() {
//       owl.trigger('next.owl.carousel');
//     });
//     $('.customPreviousBtn').click(function() {
//       owl.trigger('prev.owl.carousel');
//     });
    
//   })





// side bar ---------

document.querySelectorAll('[data-component~="sidebar"]')
  .forEach((button) => {
    button.addEventListener('click', function() {
      document
        .getElementById(this.dataset.target)
        .classList
        .toggle('active')
    })
  })



//   ------- popup--------
$(function () {
    $('.popup-youtube').magnificPopup({
      disableOn: 320,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos: false
    });
  });



  // animation js --------------

  wow = new WOW();
  wow.init();


  // counto--------------





// -------------------

$(document).ready(function () {
  $(window).scroll(function () {
    if (window.innerWidth < 912) {
      if ($(this).scrollTop() > 150) {
        $('.scroll_nav').addClass('fixed-top');
        $('.scroll_nav').addClass('bg_black');
      }
      else {
        $('.scroll_nav').removeClass('fixed-top');
        $('.scroll_nav').removeClass('bg_black');
      }
    }
    else {
      if (window.innerWidth < 580) {
        if ($(this).scrollTop() > 50) {
          $('.scroll_nav').addClass('fixed-top');
        $('.scroll_nav').addClass('bg_black');
        }
        else {
          $('.scroll_nav').removeClass('fixed-top');
        $('.scroll_nav').removeClass('bg_black');
        }
      }
      else {
        if ($(this).scrollTop() > 200) {
          $('.scroll_nav').addClass('fixed-top');
          $('.scroll_nav').addClass('bg_black');
        }
        else {
          $('.scroll_nav').removeClass('fixed-top');
        $('.scroll_nav').removeClass('bg_black');
        }
      }
      
    }

  });
});



// ------------------------













  // counter --------------

  var timer = $('.counter');
	if(timer.length) {
		timer.appear(function () {
		  timer.countTo();
	  });
	}

  // hover img 
  $( ".card_img" ).hover(
    function() {
      $( this ).addClass( "filter" ); 
    }, function() {
      $( this ).removeClass( "filter" );
    }
  );