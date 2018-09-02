(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

$(function () {
    var ohHey = "Hello World";

    console.log(ohHey);

    // responsive menu - hamburger
    var onResize = function onResize() {
        if ($(window).width() < 950) {
            $('.logoSocials').addClass('open--logoSocials');
            $('.hamburger--clickContainer').click(function () {
                $('.hamburger').toggleClass('open--hamburger');
            });
            openHamStyles();
        } else {
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

    // width on load, width on resize
    $(document).ready(onResize);
    $(window).resize(onResize);

    // Smooth scroll
    $('a').smoothScroll({
        speed: 1350
    });

    // hover and click effect on nav a
    $('nav a').hover(function () {
        $('nav a').addClass('navOpacity');
        $(this).removeClass('navOpacity');
    }, function () {
        $('nav a').removeClass('navOpacity');
    }).click(function () {
        $('nav a').removeClass('navSelected');
        $(this).addClass('navSelected');
    });
}); //end ready

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQSxFQUFFLFlBQVc7QUFDVCxRQUFNLFFBQVEsYUFBZDs7QUFFQSxZQUFRLEdBQVIsQ0FBWSxLQUFaOztBQUdBO0FBQ0EsUUFBTSxXQUFXLFNBQVgsUUFBVyxHQUFZO0FBQ3pCLFlBQUksRUFBRSxNQUFGLEVBQVUsS0FBVixLQUFvQixHQUF4QixFQUE2QjtBQUN6QixjQUFFLGNBQUYsRUFBa0IsUUFBbEIsQ0FBMkIsbUJBQTNCO0FBQ0EsY0FBRSw0QkFBRixFQUFnQyxLQUFoQyxDQUNJLFlBQVc7QUFDUCxrQkFBRSxZQUFGLEVBQWdCLFdBQWhCLENBQTRCLGlCQUE1QjtBQUNILGFBSEw7QUFLQTtBQUNILFNBUkQsTUFRTztBQUNILGNBQUUsY0FBRixFQUFrQixXQUFsQixDQUE4QixtQkFBOUI7QUFDQSxjQUFFLFlBQUYsRUFBZ0IsV0FBaEIsQ0FBNEIsaUJBQTVCO0FBQ0g7QUFDSixLQWJEOztBQWVBO0FBQ0EsYUFBUyxhQUFULEdBQXlCO0FBQ3JCLFVBQUUsS0FBRixFQUFTLFFBQVQsQ0FBa0IsY0FBbEI7QUFDQSxVQUFFLE9BQUYsRUFBVyxLQUFYLENBQ0ksWUFBVztBQUNQLGNBQUUsWUFBRixFQUFnQixXQUFoQixDQUE0QixpQkFBNUI7QUFDSCxTQUhMO0FBS0g7O0FBRUQ7QUFDQSxNQUFFLFFBQUYsRUFBWSxLQUFaLENBQWtCLFFBQWxCO0FBQ0EsTUFBRSxNQUFGLEVBQVUsTUFBVixDQUFpQixRQUFqQjs7QUFHQTtBQUNBLE1BQUUsR0FBRixFQUFPLFlBQVAsQ0FBb0I7QUFDaEIsZUFBTztBQURTLEtBQXBCOztBQUlBO0FBQ0EsTUFBRSxPQUFGLEVBQVcsS0FBWCxDQUFpQixZQUFVO0FBQ25CLFVBQUUsT0FBRixFQUFXLFFBQVgsQ0FBb0IsWUFBcEI7QUFDQSxVQUFFLElBQUYsRUFBUSxXQUFSLENBQW9CLFlBQXBCO0FBQ0gsS0FITCxFQUdPLFlBQVU7QUFDVCxVQUFFLE9BQUYsRUFBVyxXQUFYLENBQXVCLFlBQXZCO0FBQ0gsS0FMTCxFQU1FLEtBTkYsQ0FNUSxZQUFXO0FBQ1gsVUFBRSxPQUFGLEVBQVcsV0FBWCxDQUF1QixhQUF2QjtBQUNBLFVBQUUsSUFBRixFQUFRLFFBQVIsQ0FBaUIsYUFBakI7QUFDSCxLQVRMO0FBWUgsQ0F2REQsRSxDQXVESSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIiQoZnVuY3Rpb24oKSB7XG4gICAgY29uc3Qgb2hIZXkgPSBcIkhlbGxvIFdvcmxkXCI7XG5cbiAgICBjb25zb2xlLmxvZyhvaEhleSk7XG5cblxuICAgIC8vIHJlc3BvbnNpdmUgbWVudSAtIGhhbWJ1cmdlclxuICAgIGNvbnN0IG9uUmVzaXplID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPCA5NTApIHtcbiAgICAgICAgICAgICQoJy5sb2dvU29jaWFscycpLmFkZENsYXNzKCdvcGVuLS1sb2dvU29jaWFscycpO1xuICAgICAgICAgICAgJCgnLmhhbWJ1cmdlci0tY2xpY2tDb250YWluZXInKS5jbGljayhcbiAgICAgICAgICAgICAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgJCgnLmhhbWJ1cmdlcicpLnRvZ2dsZUNsYXNzKCdvcGVuLS1oYW1idXJnZXInKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgb3BlbkhhbVN0eWxlcygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJCgnLmxvZ29Tb2NpYWxzJykucmVtb3ZlQ2xhc3MoJ29wZW4tLWxvZ29Tb2NpYWxzJyk7XG4gICAgICAgICAgICAkKCcuaGFtYnVyZ2VyJykucmVtb3ZlQ2xhc3MoJ29wZW4tLWhhbWJ1cmdlcicpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gb3BlbiBoYW1idXJnZXIgbWVudVxuICAgIGZ1bmN0aW9uIG9wZW5IYW1TdHlsZXMoKSB7XG4gICAgICAgICQoJ25hdicpLmFkZENsYXNzKCdoYW1idXJnZXJOYXYnKTtcbiAgICAgICAgJCgnbmF2IGEnKS5jbGljayhcbiAgICAgICAgICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICQoJy5oYW1idXJnZXInKS5yZW1vdmVDbGFzcygnb3Blbi0taGFtYnVyZ2VyJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIClcbiAgICB9XG5cbiAgICAvLyB3aWR0aCBvbiBsb2FkLCB3aWR0aCBvbiByZXNpemVcbiAgICAkKGRvY3VtZW50KS5yZWFkeShvblJlc2l6ZSk7XG4gICAgJCh3aW5kb3cpLnJlc2l6ZShvblJlc2l6ZSk7XG5cblxuICAgIC8vIFNtb290aCBzY3JvbGxcbiAgICAkKCdhJykuc21vb3RoU2Nyb2xsKHtcbiAgICAgICAgc3BlZWQ6IDEzNTBcbiAgICB9KTtcblxuICAgIC8vIGhvdmVyIGFuZCBjbGljayBlZmZlY3Qgb24gbmF2IGFcbiAgICAkKCduYXYgYScpLmhvdmVyKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAkKCduYXYgYScpLmFkZENsYXNzKCduYXZPcGFjaXR5Jyk7XG4gICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCduYXZPcGFjaXR5Jyk7XG4gICAgICAgIH0sIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAkKCduYXYgYScpLnJlbW92ZUNsYXNzKCduYXZPcGFjaXR5Jyk7XG4gICAgICAgIH1cbiAgICApLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJCgnbmF2IGEnKS5yZW1vdmVDbGFzcygnbmF2U2VsZWN0ZWQnKTtcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ25hdlNlbGVjdGVkJyk7XG4gICAgICAgIH1cbiAgICApO1xuXG59KTsgLy9lbmQgcmVhZHkiXX0=
