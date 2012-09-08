//Right Text Slideshow JavaScript
$(function(){
	eachimg=$('div.rightext div.rt-img > img');
	eachimg.each(function(){
		//alert($(this).next().index());
		$(this).animate({
			opacity:1
		},500);
		eachimg.next().animate({
			opacity:0
		},500);
	});
});
