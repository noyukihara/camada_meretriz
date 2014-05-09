$(document).ready(function(){
	
	var hide= function(id){
		$(id).css("display", "none");
	};

	var show= function(id){
		$(id).css("display", "block");
	};

	
	$('#first').click(function(){
		show("#conheca");
			$(this).animate({width:"90%"},{"duration": 1000});
		$("#second").animate({width:"10%"},{"duration": 1000});
		hide("#transforme");
		$("#flor").fadeOut(1000);
		show("#first_intro");
		hide("#second_intro");

		show("#first_intro_next");
	});

	$('#second').click(function(){
		show("#transforme");
			$(this).animate({width:"90%"},{"duration": 1000});
		$("#first").animate({width:"10%"},{"duration": 1000});
		hide("#conheca");
		$("#flor").fadeOut(1000);
		hide("#first_intro");
		show("#second_intro");
	});
		
	$('#logo').click(function(){
		$("#first").animate({width:"50%"},{"duration": 1000});
		$("#second").animate({width:"50%"},{"duration": 1000});
		show("h1");
		$("#flor").fadeIn(2000);
		hide("#first_intro");
		hide("#second_intro");
	});
});			


