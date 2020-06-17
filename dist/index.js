$(document)
    .ready(function() {
        $('.nav a').click(function(){
            $(".active").removeClass("active");
            $(this).addClass("active");

            $('html, body').stop().animate({
                scrollTop: $($(this).attr('href')).offset().top - 160
                // TODO: Fix issue with animation
            }, 300);
            return false;
        });

    });
