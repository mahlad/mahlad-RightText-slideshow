// //Right Text Slideshow JavaScript
// $(function(){
// 	var imgs=$('div.rightext div.rt-img > img');
// 	var firstimg=$('div.rightext div.rt-img > img:first-child');
// 	var next=firstimg.next();
// 	var last=imgs.last();
// 	a=firstimg.index();
// 	b=last.index();
// 	c=next.index();

	
// 		imgs.each(function(){
			
// 			if(a==b)
// 				a=firstimg.index();
// 			alert(a);
// 			a++;
// 		});
		
	
	
// 		// imgs.animate({opacity:'1','z-index':10},1000,function(){
// 		// 	$(this).animate({'z-index':9},1000);
			
// 		// 	$(this).next().addClass('active');

		
		
// 	// firstimg.css({
// 	// 		'z-index':'9'
// 	// 	});
// 	// next.css({opacity:'0'})
// 	// 	.css({'z-index':'10'})
// 	// 	.animate({opacity:1},1000,function(){
// 	// 		next.css({'z-index':'9'});
// 	// 	});
// 	// });
// });

// // function slideSwitch() {
// //     var active = $('.rightext .rt-img img.active');
// //     var next = active.next();

// //     active.addClass('last-active');
        
// //     next.css({opacity: 0.0})
// //         .addClass('active')
// //         .animate({opacity: 1.0}, 1000, function() {
// //             active.removeClass('active last-active');
// //         });
// // }

// // $(function() {
// //     setInterval( "slideSwitch()", 5000 );
// // });
// Zepto/jQuery fadeLoop plugin for fade slide show effects
(function($){
	$.extend($.fn,{
		fadeLoop :function(options){

			options=$.extend({
				duration : 2500,
				delay : 2000,
				startIndex : -1,
				fadeFirstImage : true
			},options);

			var nextPic,
				pics    =this,
				indx    =options.startIndex,
				plen    =this.length,
				fadeIn  ={opacity:1},
				fadeOut ={opacity:0},
				ease = !!window.Zepto ? 'ease-in-out' : 'swing';

			pics.css(fadeOut);
			options.fadeFirstImage || pics.eq(0).css(fadeIn);

			(nextPic=function(){
				pics.eq(indx).animate(fadeOut,options.duration,ease);
				indx=indx<plen-1?indx+1:0;
				pics.eq(indx).animate(fadeIn,options.duration,ease,function(){
					setTimeout(nextPic,options.delay);
				});
			})();
		}
	});
})($)

$(function(){
	$('.rightext > div.rt-img').fadeLoop(1000);
});

