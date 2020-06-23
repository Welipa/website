$(document)
    .ready(function() {
        const $el = $('.menu-container');

        $('.nav-link').click(function(){
            $(".active").removeClass("active");
            $(this).addClass("active");
            const position = $(this)[0].hash === '#contact' ?
                document.body.scrollHeight : $($(this).attr('href')).offset().top;

            $('html, body').stop().animate({
                scrollTop: position
            }, 500);
            return false;
        });
    });
