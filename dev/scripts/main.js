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

// media query listener on resize
function mediaSize() {
    if (window.matchMedia('(max-width: 950px)').matches) {
        $('.logoSocials').addClass('open--logoSocials');
    }
    else {
        $('.logoSocials').removeClass('open--logoSocials');
        $('.hamburger').removeClass('open--hamburger');
    }
};

// Attach the function to the resize event listener 
window.addEventListener('resize', mediaSize, false);

function openHamburger() {
    $('.hamburger--clickContainer').click(function () {
        $('.hamburger').toggleClass('open--hamburger');
        console.log('clicked');
    }
    );
    openHamStyles();
}


    // open hamburger menu 
    function openHamStyles() {
        $('nav').addClass('hamburgerNav');
        $('nav li a').click(
            function() {
                $('.hamburger').removeClass('open--hamburger');
            }
        )
    };


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
)
}

// waypoints for scroll nav
// function sectionListeners(){
// var waypoint = new Waypoint({
//     element: document.getElementById('headerTitles'),
//     handler: function (direction) {
//         $('nav a').removeClass('navOpacity');
//     },
//     offset: '-15%'
// });

// var waypoint = new Waypoint({
//     element: document.getElementById('toAbout'),
//     handler: function(direction) {
//         $('nav a').addClass('navOpacity').removeClass('navSelected');
//         $('#toAboutLink').removeClass('navOpacity').addClass('navSelected');
//     },
//     offset: '10%'
// });

// var waypoint = new Waypoint({
//     element: document.getElementById('toResearch'),
//     handler: function (direction) {
//         $('nav a').addClass('navOpacity').removeClass('navSelected');
//         $('#toResearchLink').removeClass('navOpacity').addClass('navSelected');
//     },
//     offset: '10%'
// });

// var waypoint = new Waypoint({
//     element: document.getElementById('toEducation'),
//     handler: function (direction) {
//         $('nav a').addClass('navOpacity').removeClass('navSelected');
//         $('#toEducationLink').removeClass('navOpacity').addClass('navSelected');
//     },
//     offset: '10%'
// });

// var waypoint = new Waypoint({
//     element: document.getElementById('toPublications'),
//     handler: function (direction) {
//         $('nav a').addClass('navOpacity').removeClass('navSelected');
//         $('#toPublicationsLink').removeClass('navOpacity').addClass('navSelected');
//     },
//     offset: '10%'
// });

// var waypoint = new Waypoint({
//     element: document.getElementById('toSkills'),
//     handler: function (direction) {
//         $('nav a').addClass('navOpacity').removeClass('navSelected');
//         $('#toSkillsLink').removeClass('navOpacity').addClass('navSelected');
//     },
//     offset: '10%'
// });

// var waypoint = new Waypoint({
//     element: document.getElementById('toContact'),
//     handler: function () {
//         $('nav a').addClass('navOpacity').removeClass('navSelected');
//         $('#toContactLink').removeClass('navOpacity').addClass('navSelected');
//     }
// });
// }

function generalStyles(){
    hoverClick();
    smoothScrollOn();
    scrollNav();

    openHamburger();
    // sectionListeners();
}



$(function () {
    const ohHey = "Hello World";

    console.log(ohHey);

    mediaSize();


    generalStyles();

}); //end ready