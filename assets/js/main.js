;
(function($) {
    $(document).ready(function() {

        /*-------------------------------------------------------------------------------
        javaScript for sticky header
        -------------------------------------------------------------------------------*/
        $(".header-area").sticky();

        $(".navbar-toggler").on("click", function() {
            $(".header-area").toggleClass("active");
        });

        /*---------------------------------
		Javascript for wow animation
		----------------------------------*/
        new WOW().init();

        function animateElements() {
			$('.progressbar').each(function () {
				var elementPos = $(this).offset().top;
				var topOfWindow = $(window).scrollTop();
				var percent = $(this).find('.circle').attr('data-percent');
				var animate = $(this).data('animate');
				if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
					$(this).data('animate', true);
					$(this).find('.circle').circleProgress({
						startAngle: -Math.PI / 2,
						value: percent / 100,
						size: 200,
						thickness: 38,
						emptyFill: "#fff",
						fill: {
							color: '#14BB05'
						}
					}).on('circle-animation-progress', function (event, progress, stepValue) {
						$(this).find('div').text((stepValue*100).toFixed(0) + "%");
					}).stop();
				}
			});
		}

		// Show animated elements
		animateElements();
		$(window).scroll(animateElements);


    });
}(jQuery));



function updateTimer() {
	future  = Date.parse("October 11, 2023 11:30:00");
	now     = new Date();
	diff    = future - now;
	
	days  = Math.floor( diff / (1000*60*60*24) );
	hours = Math.floor( diff / (1000*60*60) );
	mins  = Math.floor( diff / (1000*60) );
	secs  = Math.floor( diff / 1000 );
	
	d = days;
	h = hours - days  * 24;
	m = mins  - hours * 60;
	s = secs  - mins  * 60;
	
	document.getElementById("timer")
		.innerHTML =
		'<div>' + '<div>' + s + '</div>' + '<span> שניות</span></div>' +
		'<div>' + '<div>' + m + '</div>' + '<span> דקות</span></div>' +
		'<div>' + '<div>' + h + '</div>' + '<span> שעה (ות</span></div>' +
		'<div>' + '<div>' + d + '</div>' + '<span> ימים</span></div>' ;
}
setInterval('updateTimer()', 1000 );