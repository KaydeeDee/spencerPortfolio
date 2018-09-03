    // sticky nav
function scrollNav(){
        $(window).scroll(function () {
        if ($(window).scrollTop() > 70) {
            $('nav').addClass('nav--scroll').addClass('fadeInNav').removeClass('innerWrapper');
        } else {
            $('nav').removeClass('nav--scroll').removeClass('fadeInNav').addClass('innerWrapper');
        }
    });
}

    // responsive menu - hamburger
    const onResize = function () {
        if ($(window).width() <= 935) {
            console.log("first: " + $(window).width());
            $('.logoSocials').addClass('open--logoSocials');
            $('.hamburger--clickContainer').click( function() {
                    $('.hamburger').toggleClass('open--hamburger');
                    console.log('clicked');
                }
            );
            openHamStyles();
        } else {
            console.log("second: " + $(window).width());
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


    // Smooth scroll
function smoothScrollOn(){ 
    $('a').smoothScroll({
        speed: 1350
    });
}

// hover and click effect on nav a
function hoverClick(){
$('nav a').hover(function () {
    $('nav a').addClass('navOpacity');
    $(this).removeClass('navOpacity');
}, function () {
    $('nav a').removeClass('navOpacity');
}
).click(function () {
    $('nav a').removeClass('navSelected');
    $(this).addClass('navSelected');
}
);
}

function generalStyles(){
    hoverClick();
    smoothScrollOn();
    scrollNav();
}



$(function () {
    const ohHey = "Hello World";

    console.log(ohHey);

    $(window).ready(onResize);
    $(window).resize(onResize);
    generalStyles();

}); //end ready