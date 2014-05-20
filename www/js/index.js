$(function(){
	$('.curtains>li').css('position', 'fixed');
       $('.curtains').curtain({
           scrollSpeed: 200,
           controls: '.menu',
           curtainLinks: '.curtain-links',
		   
    });   
	
	var scrollorama = $.scrollorama({
		blocks:'.curtains'
	});
	scrollorama.animate('#iphone5s',{
    	duration:500,delay:50, property:'left',start:-500, end:0
    });

    scrollorama.animate('#iphone5s',{
    	duration:450,delay:100, property:'rotate',start:0, end:360
    });
    scrollorama.animate('#ipadAir',{
    	duration:500,delay:650, property:'rotate',start:0, end:360
    });
	scrollorama.animate('#macPro',{
	delay:1200, duration:993, property:'left', start:-500, easing:'easeOutBounce'
});
});