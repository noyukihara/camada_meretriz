$(document).ready(function(){
	/*Fancybox - Configurações*/
	 $('a.fancybox').fancybox()
	 $(".fancybox").fancybox({
		 	padding: 0,
		 	width: 	"100%",
		 	overlayOpacity: 0.5,
		 });
	
	var hide= function(id){
		$(id).css("display", "none");
	};

	var show= function(id){
		$(id).css("display", "block");
	};

	hide(".p1");
	hide(".p2");

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

	$('#first').click(function(){
		show("#conheca");
			$(this).animate({width:"90%"},{"duration": 1000});
		$("#second").animate({width:"10%"},{"duration": 1000});
		hide("#transforme");
		$("#flor").fadeOut(1000);
		
		show(".first");
		hide(".second");
		show(".p1");
		hide(".p2")
	});

	$('#second').click(function(){
		show("#transforme");
			$(this).animate({width:"90%"},{"duration": 1000});
		$("#first").animate({width:"10%"},{"duration": 1000});
		hide("#conheca");
		$("#flor").fadeOut(1000);
		hide(".first");
		show(".second");
		show(".p2");
		hide(".p1");
	});
		
	$('#logo').click(function(){
		$("#first").animate({width:"50%"},{"duration": 1000});
		$("#second").animate({width:"50%"},{"duration": 1000});
		show("h1");
		$("#flor").fadeIn(2000);
		hide(".first");
		hide(".second");
		hide(".p1");
		hide(".p2");
	});
});			


