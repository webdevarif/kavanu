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