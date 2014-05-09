$(document).ready(function(){
	
	var hide= function(id){
		$(id).css("display", "none");
	};

	var show= function(id){
		$(id).css("display", "block");
	};

	
	$('#first').click(function(){
		$("#conheca").css("display", "block");
			$(this).animate({width:"90%"},{"duration": 1000});
		$("#second").animate({width:"10%"},{"duration": 1000});
		hide("#transforme");
		$("#flor").fadeOut(1000);
		show("#first_intro");
		hide("#second_intro");

		$("#first_intro_next").css("display","block");
	});

	$('#second').click(function(){
		$("#transforme").css("display", "block");
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
		$("h1").css("display", "block");
		$("#flor").fadeIn(2000);
		$("#first_intro").css("display", "none");
		$("#second_intro").css("display", "none");
	});
});			


