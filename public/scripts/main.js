(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

// sticky nav
function scrollNav() {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 70) {
            $('nav').addClass('nav--scroll').addClass('fadeInNav').removeClass('innerWrapper');
        } else {
            $('nav').removeClass('nav--scroll').removeClass('fadeInNav').addClass('innerWrapper');
        }
    });
}

// responsive menu - hamburger
var onResize = function onResize() {
    if ($(window).width() <= 935) {
        console.log("first: " + $(window).width());
        $('.logoSocials').addClass('open--logoSocials');
        $('.hamburger--clickContainer').click(function () {
            $('.hamburger').toggleClass('open--hamburger');
            console.log('clicked');
        });
        openHamStyles();
    } else {
        console.log("second: " + $(window).width());
        $('.logoSocials').removeClass('open--logoSocials');
        $('.hamburger').removeClass('open--hamburger');
    }
};

// open hamburger menu
function openHamStyles() {
    $('nav').addClass('hamburgerNav');
    $('nav a').click(function () {
        $('.hamburger').removeClass('open--hamburger');
    });
}

// Smooth scroll
function smoothScrollOn() {
    $('a').smoothScroll({
        speed: 1350
    });
}

// hover and click effect on nav a
function hoverClick() {
    $('nav a').hover(function () {
        $('nav a').addClass('navOpacity');
        $(this).removeClass('navOpacity');
    }, function () {
        $('nav a').removeClass('navOpacity');
    }).click(function () {
        $('nav a').removeClass('navSelected');
        $(this).addClass('navSelected');
    });
}

function generalStyles() {
    hoverClick();
    smoothScrollOn();
    scrollNav();
}

$(function () {
    var ohHey = "Hello World";

    console.log(ohHey);

    $(window).ready(onResize);
    $(window).resize(onResize);
    generalStyles();
}); //end ready

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBSTtBQUNKLFNBQVMsU0FBVCxHQUFvQjtBQUNaLE1BQUUsTUFBRixFQUFVLE1BQVYsQ0FBaUIsWUFBWTtBQUM3QixZQUFJLEVBQUUsTUFBRixFQUFVLFNBQVYsS0FBd0IsRUFBNUIsRUFBZ0M7QUFDNUIsY0FBRSxLQUFGLEVBQVMsUUFBVCxDQUFrQixhQUFsQixFQUFpQyxRQUFqQyxDQUEwQyxXQUExQyxFQUF1RCxXQUF2RCxDQUFtRSxjQUFuRTtBQUNILFNBRkQsTUFFTztBQUNILGNBQUUsS0FBRixFQUFTLFdBQVQsQ0FBcUIsYUFBckIsRUFBb0MsV0FBcEMsQ0FBZ0QsV0FBaEQsRUFBNkQsUUFBN0QsQ0FBc0UsY0FBdEU7QUFDSDtBQUNKLEtBTkc7QUFPUDs7QUFFRztBQUNBLElBQU0sV0FBVyxTQUFYLFFBQVcsR0FBWTtBQUN6QixRQUFJLEVBQUUsTUFBRixFQUFVLEtBQVYsTUFBcUIsR0FBekIsRUFBOEI7QUFDMUIsZ0JBQVEsR0FBUixDQUFZLFlBQVksRUFBRSxNQUFGLEVBQVUsS0FBVixFQUF4QjtBQUNBLFVBQUUsY0FBRixFQUFrQixRQUFsQixDQUEyQixtQkFBM0I7QUFDQSxVQUFFLDRCQUFGLEVBQWdDLEtBQWhDLENBQXVDLFlBQVc7QUFDMUMsY0FBRSxZQUFGLEVBQWdCLFdBQWhCLENBQTRCLGlCQUE1QjtBQUNBLG9CQUFRLEdBQVIsQ0FBWSxTQUFaO0FBQ0gsU0FITDtBQUtBO0FBQ0gsS0FURCxNQVNPO0FBQ0gsZ0JBQVEsR0FBUixDQUFZLGFBQWEsRUFBRSxNQUFGLEVBQVUsS0FBVixFQUF6QjtBQUNBLFVBQUUsY0FBRixFQUFrQixXQUFsQixDQUE4QixtQkFBOUI7QUFDQSxVQUFFLFlBQUYsRUFBZ0IsV0FBaEIsQ0FBNEIsaUJBQTVCO0FBQ0g7QUFDSixDQWZEOztBQWlCQTtBQUNBLFNBQVMsYUFBVCxHQUF5QjtBQUNyQixNQUFFLEtBQUYsRUFBUyxRQUFULENBQWtCLGNBQWxCO0FBQ0EsTUFBRSxPQUFGLEVBQVcsS0FBWCxDQUNJLFlBQVc7QUFDUCxVQUFFLFlBQUYsRUFBZ0IsV0FBaEIsQ0FBNEIsaUJBQTVCO0FBQ0gsS0FITDtBQUtIOztBQUdEO0FBQ0osU0FBUyxjQUFULEdBQXlCO0FBQ3JCLE1BQUUsR0FBRixFQUFPLFlBQVAsQ0FBb0I7QUFDaEIsZUFBTztBQURTLEtBQXBCO0FBR0g7O0FBRUQ7QUFDQSxTQUFTLFVBQVQsR0FBcUI7QUFDckIsTUFBRSxPQUFGLEVBQVcsS0FBWCxDQUFpQixZQUFZO0FBQ3pCLFVBQUUsT0FBRixFQUFXLFFBQVgsQ0FBb0IsWUFBcEI7QUFDQSxVQUFFLElBQUYsRUFBUSxXQUFSLENBQW9CLFlBQXBCO0FBQ0gsS0FIRCxFQUdHLFlBQVk7QUFDWCxVQUFFLE9BQUYsRUFBVyxXQUFYLENBQXVCLFlBQXZCO0FBQ0gsS0FMRCxFQU1FLEtBTkYsQ0FNUSxZQUFZO0FBQ2hCLFVBQUUsT0FBRixFQUFXLFdBQVgsQ0FBdUIsYUFBdkI7QUFDQSxVQUFFLElBQUYsRUFBUSxRQUFSLENBQWlCLGFBQWpCO0FBQ0gsS0FURDtBQVdDOztBQUVELFNBQVMsYUFBVCxHQUF3QjtBQUNwQjtBQUNBO0FBQ0E7QUFDSDs7QUFJRCxFQUFFLFlBQVk7QUFDVixRQUFNLFFBQVEsYUFBZDs7QUFFQSxZQUFRLEdBQVIsQ0FBWSxLQUFaOztBQUVBLE1BQUUsTUFBRixFQUFVLEtBQVYsQ0FBZ0IsUUFBaEI7QUFDQSxNQUFFLE1BQUYsRUFBVSxNQUFWLENBQWlCLFFBQWpCO0FBQ0E7QUFFSCxDQVRELEUsQ0FTSSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIiAgICAvLyBzdGlja3kgbmF2XG5mdW5jdGlvbiBzY3JvbGxOYXYoKXtcbiAgICAgICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICgkKHdpbmRvdykuc2Nyb2xsVG9wKCkgPiA3MCkge1xuICAgICAgICAgICAgJCgnbmF2JykuYWRkQ2xhc3MoJ25hdi0tc2Nyb2xsJykuYWRkQ2xhc3MoJ2ZhZGVJbk5hdicpLnJlbW92ZUNsYXNzKCdpbm5lcldyYXBwZXInKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoJ25hdicpLnJlbW92ZUNsYXNzKCduYXYtLXNjcm9sbCcpLnJlbW92ZUNsYXNzKCdmYWRlSW5OYXYnKS5hZGRDbGFzcygnaW5uZXJXcmFwcGVyJyk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuICAgIC8vIHJlc3BvbnNpdmUgbWVudSAtIGhhbWJ1cmdlclxuICAgIGNvbnN0IG9uUmVzaXplID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPD0gOTM1KSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImZpcnN0OiBcIiArICQod2luZG93KS53aWR0aCgpKTtcbiAgICAgICAgICAgICQoJy5sb2dvU29jaWFscycpLmFkZENsYXNzKCdvcGVuLS1sb2dvU29jaWFscycpO1xuICAgICAgICAgICAgJCgnLmhhbWJ1cmdlci0tY2xpY2tDb250YWluZXInKS5jbGljayggZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICQoJy5oYW1idXJnZXInKS50b2dnbGVDbGFzcygnb3Blbi0taGFtYnVyZ2VyJyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjbGlja2VkJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIG9wZW5IYW1TdHlsZXMoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2Vjb25kOiBcIiArICQod2luZG93KS53aWR0aCgpKTtcbiAgICAgICAgICAgICQoJy5sb2dvU29jaWFscycpLnJlbW92ZUNsYXNzKCdvcGVuLS1sb2dvU29jaWFscycpO1xuICAgICAgICAgICAgJCgnLmhhbWJ1cmdlcicpLnJlbW92ZUNsYXNzKCdvcGVuLS1oYW1idXJnZXInKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8vIG9wZW4gaGFtYnVyZ2VyIG1lbnVcbiAgICBmdW5jdGlvbiBvcGVuSGFtU3R5bGVzKCkge1xuICAgICAgICAkKCduYXYnKS5hZGRDbGFzcygnaGFtYnVyZ2VyTmF2Jyk7XG4gICAgICAgICQoJ25hdiBhJykuY2xpY2soXG4gICAgICAgICAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAkKCcuaGFtYnVyZ2VyJykucmVtb3ZlQ2xhc3MoJ29wZW4tLWhhbWJ1cmdlcicpO1xuICAgICAgICAgICAgfVxuICAgICAgICApXG4gICAgfVxuXG5cbiAgICAvLyBTbW9vdGggc2Nyb2xsXG5mdW5jdGlvbiBzbW9vdGhTY3JvbGxPbigpeyBcbiAgICAkKCdhJykuc21vb3RoU2Nyb2xsKHtcbiAgICAgICAgc3BlZWQ6IDEzNTBcbiAgICB9KTtcbn1cblxuLy8gaG92ZXIgYW5kIGNsaWNrIGVmZmVjdCBvbiBuYXYgYVxuZnVuY3Rpb24gaG92ZXJDbGljaygpe1xuJCgnbmF2IGEnKS5ob3ZlcihmdW5jdGlvbiAoKSB7XG4gICAgJCgnbmF2IGEnKS5hZGRDbGFzcygnbmF2T3BhY2l0eScpO1xuICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ25hdk9wYWNpdHknKTtcbn0sIGZ1bmN0aW9uICgpIHtcbiAgICAkKCduYXYgYScpLnJlbW92ZUNsYXNzKCduYXZPcGFjaXR5Jyk7XG59XG4pLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAkKCduYXYgYScpLnJlbW92ZUNsYXNzKCduYXZTZWxlY3RlZCcpO1xuICAgICQodGhpcykuYWRkQ2xhc3MoJ25hdlNlbGVjdGVkJyk7XG59XG4pO1xufVxuXG5mdW5jdGlvbiBnZW5lcmFsU3R5bGVzKCl7XG4gICAgaG92ZXJDbGljaygpO1xuICAgIHNtb290aFNjcm9sbE9uKCk7XG4gICAgc2Nyb2xsTmF2KCk7XG59XG5cblxuXG4kKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBvaEhleSA9IFwiSGVsbG8gV29ybGRcIjtcblxuICAgIGNvbnNvbGUubG9nKG9oSGV5KTtcblxuICAgICQod2luZG93KS5yZWFkeShvblJlc2l6ZSk7XG4gICAgJCh3aW5kb3cpLnJlc2l6ZShvblJlc2l6ZSk7XG4gICAgZ2VuZXJhbFN0eWxlcygpO1xuXG59KTsgLy9lbmQgcmVhZHkiXX0=
