$(document).ready(function(){
	
	var isBreakPoint = function (bp) {
    	var bps = [320, 480, 768, 1024],
        	w = $(window).width(),
        	min, max;
    	for (var i = 0, l = bps.length; i < l; i++) {
      		if (bps[i] === bp) {
        		min = bps[i-1] || 0
        		max = bps[i]
        		break
      			};
   			 };
   		return w > min && w <= max
	};

	// Usage
	if (isBreakPoint(480)) {
		$('.mobSlider').bxSlider({
	    		slideWidth: 320,
	    		minSlides: 1,
	    		maxSlides: 1,
  			});	
	} // Breakpoint between 320 and 480

	/*Fancybox - Configurações*/
	 $('a.fancybox').fancybox();
	 $(".fancybox").fancybox({
		 	padding: 0,
		 	overlayOpacity: 0.6,
		 });
	
	/*$(window).resize(function(){

       if ($(window).width() <= 770) {  
       		
       }     
	});*/

	/*var flor = $( ".flor" );
	var position = flor.position();

	var width = $(window).width;*/
		
	var hide= function(id){
		$(id).css("display", "none");
	};

	var show= function(id){
		$(id).css("display", "block");
	};

	var flor;
	var flor=0;

	
	/*Função de Abaixar Rápido*/
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash,
	    $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
	
	if ($(window).width() >= 1024 ) {
		hide(".p1");
		hide(".p2");  
		$('#first').click(function(){
			show("#conheca");
				$(this).animate({width:"100%"},{"duration": 1000,}, function(){
					$("#second").css("display", "none");
				});
			$("#second").animate({width:"0%"},{"duration": 1000});
			hide("#transforme");
			$(".flor").animate({left: "+50%"}, 1000);
			
			show(".first");
			hide(".second");
			show(".p1");
			hide(".p2")
			flor=1;
		});

		$('#second').click(function(){
			show("#transforme");
				$(this).animate({width:"100%"},{"duration": 1000}, function(){
					$("#first").css("display", "none");
				});
			$("#first").animate({width:"0%"},{"duration": 1000});
			hide("#conheca");
			$(".flor").animate({left: "-50%"}, 1000);
			hide(".first");
			show(".second");
			show(".p2");
			hide(".p1");
			flor=2;
		});
			
		$('#logo').click(function(){
			$("#first").animate({width:"50%"},{"duration": 1000});
			$("#second").animate({width:"50%"},{"duration": 1000});
			show("h1");
			$(".flor").animate({left: "0%"},{"duration": 1000});
			hide(".first");
			hide(".second");
			hide(".p1");
			hide(".p2");
			flor=0;
		});

		if (flor == 1) {
			hide("body");
				/*$('.flor').click(function(){
					show("#transforme");
					$("#second").animate({width:"100%"},{"duration": 1000}, function(){
						$("#first").css("display", "none");
					});
					$("#first").animate({width:"0%"},{"duration": 1000});
					hide("#conheca");
					$(".flor").animate({left: "-50%"}, 1000);
					hide(".first");
					show(".second");
					show(".p2");
					hide(".p1");
				});*/
			};/*else if(flor == "gotoconheca"){
			$(".flor").css("opacity", "1");
				/*$('.flor').click(function(){
					show("#conheca");
					$("#first").animate({width:"100%"},{"duration": 1000,}, function(){
					$("#second").css("display", "none");
					});
					$("#second").animate({width:"0%"},{"duration": 1000});
					hide("#transforme");
					$(".flor").animate({left: "+50%"}, 1000);
					show(".first");
					hide(".second");
					show(".p1");
					hide(".p2")
				});
			};

		/*if(position<=width){
				$('.flor').click(function(){
					show("#transforme");
					$("#second").animate({width:"100%"},{"duration": 1000}, function(){
						$("#first").css("display", "none");
					});
					$("#first").animate({width:"0%"},{"duration": 1000});
					hide("#conheca");
					$(".flor").animate({left: "-50%"}, 1000);
					hide(".first");
					show(".second");
					show(".p2");
					hide(".p1");
				});
			}
			
			else{
				$('.flor').click(function(){
					show("#conheca");
					$("#first").animate({width:"100%"},{"duration": 1000,}, function(){
					$("#second").css("display", "none");
					});
					$("#second").animate({width:"0%"},{"duration": 1000});
					hide("#transforme");
					$(".flor").animate({left: "+50%"}, 1000);
					show(".first");
					hide(".second");
					show(".p1");
					hide(".p2")
			});
		};*/
	};
});			


