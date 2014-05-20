$(function(){
	$('.curtain-links').click(function(e) {
        e.preventDefault();
			$(this).parent('li').parent('ul').children('li').removeClass('active');	
			$(this).parent('li').addClass('active');	
    });
	$('.navbar-toggle').click(function(e) {
		$('.navbar-toggle').toggleClass('active');
    });
	$('.controls').click(function(e) {
			$(this).parent('li').parent('ul').children('li').removeClass('active');	
    });
});