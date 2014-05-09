$(document).ready(function(){
	
	var hide= function(id){
		$(id).css("display", "none");
	};

	var show= function(id){
		$(id).css("display", "block");
	};

	hide(".p1");
	
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
		show("#first_intro");
		hide("#second_intro");
		show(".p1");
		show("#first_intro_next");
		hide("#second_intro_next");
		show("#first_cotidiano");
	});

	$('#second').click(function(){
		show("#transforme");
			$(this).animate({width:"90%"},{"duration": 1000});
		$("#first").animate({width:"10%"},{"duration": 1000});
		hide("#conheca");
		$("#flor").fadeOut(1000);
		hide("#first_intro");
		show("#second_intro");
		hide("#first_intro_next");
		show("#second_intro_next");
	});
		
	$('#logo').click(function(){
		$("#first").animate({width:"50%"},{"duration": 1000});
		$("#second").animate({width:"50%"},{"duration": 1000});
		show("h1");
		$("#flor").fadeIn(2000);
		hide("#first_intro");
		hide("#second_intro");
		hide("#first_intro_next");
		hide(".p1");
	});
});			


