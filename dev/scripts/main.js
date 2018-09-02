$(function() {
    const ohHey = "Hello World";

    console.log(ohHey);


    // responsive menu - hamburger
    const onResize = function () {
        if ($(window).width() < 950) {
            $('.logoSocials').addClass('open--logoSocials');
            $('.hamburger--clickContainer').click(
                function() {
                    $('.hamburger').toggleClass('open--hamburger');
                }
            );
            openHamStyles();
        } else {
            $('.logoSocials').removeClass('open--logoSocials');
            $('.hamburger').removeClass('open--hamburger');
        }
    }

    // open hamburger menu
    function openHamStyles() {
        $('nav').addClass('hamburgerNav');
        $('nav a').click(
            function() {
                $('.hamburger').removeClass('open--hamburger');
            }
        )
    }

    // width on load, width on resize
    $(document).ready(onResize);
    $(window).resize(onResize);


    // Smooth scroll
    $('a').smoothScroll({
        speed: 1350
    });

    // hover and click effect on nav a
    $('nav a').hover(function(){
            $('nav a').addClass('navOpacity');
            $(this).removeClass('navOpacity');
        }, function(){
            $('nav a').removeClass('navOpacity');
        }
    ).click(function() {
            $('nav a').removeClass('navSelected');
            $(this).addClass('navSelected');
        }
    );

}); //end ready