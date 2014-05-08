$(document).ready(function(){
	
	$('#first').click(function(){
		$("#conheca").css("display", "block");
			$(this).animate({width:"90%"},{"duration": 1000});
		$("#second").animate({width:"10%"},{"duration": 1000});
		$("#transforme").css("display", "none");
		$("#flor").fadeOut(1000);
		$("#first_intro").css("display", "block");
		$("#second_intro").css("display", "none");

		$("#first_intro_next").css("display","block");
	});

	$('#second').click(function(){
		$("#transforme").css("display", "block");
			$(this).animate({width:"90%"},{"duration": 1000});
		$("#first").animate({width:"10%"},{"duration": 1000});
		$("#conheca").css("display", "none");
		$("#flor").fadeOut(1000);
		$("#first_intro").css("display", "none");
		$("#second_intro").css("display", "block");
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