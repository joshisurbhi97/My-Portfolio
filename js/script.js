 
 
$(function(){
	$(".typed").typed({
    strings: [
      " Web Developer.",
      " Web Designer.",
      " Web Freelancer.",
      " Photographer."
  ],
		// Optionally use an HTML element to grab strings from (must wrap each string in a <p>)
		stringsElement: null,
		// typing speed
		typeSpeed: 30,
		// time before typing starts
		startDelay: 1200,
		// backspacing speed
		backSpeed: 20,
		// time before backspacing
		backDelay: 500,
		// loop
		loop: true,
		// false = infinite
		loopCount: 5,
		// show cursor
		showCursor: true,
		// character for cursor
		cursorChar: " |",
		// attribute to type (null == text)
		attr: null,
		// either html or text
		contentType: 'html',
		// call when done callback function
		callback: function() {},
		// starting callback function before each string
		preStringTyped: function() {},
		//callback for every typed string
		onStringTyped: function() {},
		// callback for reset
		resetCallback: function() {}
	});
});


 
$(document).ready(function(){
  $(window).scroll(function(){
      if($(this).scrollTop() > 70){
        $(".my-navbar").removeClass("bg-fixNavbar");

           $(".my-navbar").addClass("bg-scrollNavbar");
      }
      else {
        $(".my-navbar").removeClass("bg-scrollNavbar");

        $(".my-navbar").addClass("bg-fixNavbar");
        
    }
  })
  $('.zoom').magnificPopup({
	type:'image',
	gallery:{
	   enabled:true
	 }
});

var containerEl = document.querySelector('.port-items');
var mixer = mixitup(containerEl);


		$(window).scroll(function(){
			var positiontop = $(document).scrollTop();
			console.log(positiontop);
			 
			 if((positiontop > 400) && (positiontop < 999)){ 
				$('.about-text').addClass('animated fadeInUp');
				$('.about-skills').addClass('animated fadeInUp');
			}
			if((positiontop > 1000) && (positiontop < 1800)){ 
				$('.services-heading').addClass('animated fadeInUp');
				$('.services-para').addClass('animated fadeInUp slow');
			}
      if((positiontop > 1090) && (positiontop < 1800)){ 
				$('.services-info').addClass('animated fadeInUp slow');
		
			}
			if((positiontop > 1850) && (positiontop < 2907)){ 
				$('.portfolio-heading').addClass('animated fadeInUp');
				$('.portfolio-para').addClass('animated fadeInUp slow');
				$('.controls').addClass('animated fadeInUp slower');
			}
      if((positiontop > 2200) && (positiontop < 2907)){ 
				$('.item').addClass('animated fadeInUp slower');
				
			}
			if((positiontop > 2953) && (positiontop < 3280)){ 
				$('.hire-me').addClass('animated fadeInUp slow');
				$('.hire-me-heading').addClass('animated fadeInUp slower');
				$('.hire-me-btn').addClass('animated fadeInUp slower');
			}
			if((positiontop > 3334) && (positiontop < 4282)){ 
				$('.contact-heading').addClass('animated fadeInUp slow');
				$('.contact-para').addClass('animated fadeInUp slower');
			
			}
			if((positiontop > 3582) && (positiontop < 4282)){ 
				$('.contact-info').addClass('animated fadeInUp slower');
		
			}
			if((positiontop > 3882) && (positiontop < 4282)){ 
				$('.c1').addClass('animated fadeInUp slow');
		
			}
			if((positiontop > 4384) && (positiontop < 4782)){ 
				$('.map').addClass('animated fadeInUp slower');
		
			}
		})

});