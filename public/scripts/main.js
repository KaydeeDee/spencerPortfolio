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

// media query listener on resize
function mediaSize() {
    if (window.matchMedia('(max-width: 950px)').matches) {
        $('.logoSocials').addClass('open--logoSocials');
    } else {
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
    });
    openHamStyles();
}

// open hamburger menu 
function openHamStyles() {
    $('nav').addClass('hamburgerNav');
    $('nav li a').click(function () {
        $('.hamburger').removeClass('open--hamburger');
    });
};

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
    });
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

function generalStyles() {
    hoverClick();
    smoothScrollOn();
    scrollNav();

    openHamburger();
    // sectionListeners();
}

$(function () {
    var ohHey = "Hello World";

    console.log(ohHey);

    mediaSize();

    generalStyles();
}); //end ready

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBSTtBQUNKLFNBQVMsU0FBVCxHQUFvQjtBQUNaLE1BQUUsTUFBRixFQUFVLE1BQVYsQ0FBaUIsWUFBWTtBQUM3QixZQUFJLEVBQUUsTUFBRixFQUFVLFNBQVYsS0FBd0IsRUFBNUIsRUFBZ0M7QUFDNUIsY0FBRSxLQUFGLEVBQVMsUUFBVCxDQUFrQixhQUFsQixFQUFpQyxRQUFqQyxDQUEwQyxXQUExQyxFQUF1RCxXQUF2RCxDQUFtRSxjQUFuRTtBQUNILFNBRkQsTUFFTztBQUNILGNBQUUsS0FBRixFQUFTLFdBQVQsQ0FBcUIsYUFBckIsRUFBb0MsV0FBcEMsQ0FBZ0QsV0FBaEQsRUFBNkQsUUFBN0QsQ0FBc0UsY0FBdEU7QUFDSDtBQUNKLEtBTkc7QUFPUDs7QUFFRDtBQUNBLFNBQVMsU0FBVCxHQUFxQjtBQUNqQixRQUFJLE9BQU8sVUFBUCxDQUFrQixvQkFBbEIsRUFBd0MsT0FBNUMsRUFBcUQ7QUFDakQsVUFBRSxjQUFGLEVBQWtCLFFBQWxCLENBQTJCLG1CQUEzQjtBQUNILEtBRkQsTUFHSztBQUNELFVBQUUsY0FBRixFQUFrQixXQUFsQixDQUE4QixtQkFBOUI7QUFDQSxVQUFFLFlBQUYsRUFBZ0IsV0FBaEIsQ0FBNEIsaUJBQTVCO0FBQ0g7QUFDSjs7QUFFRDtBQUNBLE9BQU8sZ0JBQVAsQ0FBd0IsUUFBeEIsRUFBa0MsU0FBbEMsRUFBNkMsS0FBN0M7O0FBRUEsU0FBUyxhQUFULEdBQXlCO0FBQ3JCLE1BQUUsNEJBQUYsRUFBZ0MsS0FBaEMsQ0FBc0MsWUFBWTtBQUM5QyxVQUFFLFlBQUYsRUFBZ0IsV0FBaEIsQ0FBNEIsaUJBQTVCO0FBQ0EsZ0JBQVEsR0FBUixDQUFZLFNBQVo7QUFDSCxLQUhEO0FBS0E7QUFDSDs7QUFHRztBQUNBLFNBQVMsYUFBVCxHQUF5QjtBQUNyQixNQUFFLEtBQUYsRUFBUyxRQUFULENBQWtCLGNBQWxCO0FBQ0EsTUFBRSxVQUFGLEVBQWMsS0FBZCxDQUNJLFlBQVc7QUFDUCxVQUFFLFlBQUYsRUFBZ0IsV0FBaEIsQ0FBNEIsaUJBQTVCO0FBQ0gsS0FITDtBQUtIOztBQUdEO0FBQ0osU0FBUyxjQUFULEdBQXlCO0FBQ3JCLE1BQUUsR0FBRixFQUFPLFlBQVAsQ0FBb0I7QUFDaEIsZUFBTztBQURTLEtBQXBCO0FBR0g7O0FBRUQ7QUFDQSxTQUFTLFVBQVQsR0FBcUI7QUFDckIsTUFBRSxPQUFGLEVBQVcsS0FBWCxDQUFpQixZQUFZO0FBQ3pCLFVBQUUsT0FBRixFQUFXLFFBQVgsQ0FBb0IsWUFBcEI7QUFDQSxVQUFFLElBQUYsRUFBUSxXQUFSLENBQW9CLFlBQXBCO0FBQ0gsS0FIRCxFQUdHLFlBQVk7QUFDWCxVQUFFLE9BQUYsRUFBVyxXQUFYLENBQXVCLFlBQXZCO0FBQ0gsS0FMRDtBQU9DOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTLGFBQVQsR0FBd0I7QUFDcEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDSDs7QUFJRCxFQUFFLFlBQVk7QUFDVixRQUFNLFFBQVEsYUFBZDs7QUFFQSxZQUFRLEdBQVIsQ0FBWSxLQUFaOztBQUVBOztBQUdBO0FBRUgsQ0FWRCxFLENBVUkiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbigpe2Z1bmN0aW9uIHIoZSxuLHQpe2Z1bmN0aW9uIG8oaSxmKXtpZighbltpXSl7aWYoIWVbaV0pe3ZhciBjPVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmU7aWYoIWYmJmMpcmV0dXJuIGMoaSwhMCk7aWYodSlyZXR1cm4gdShpLCEwKTt2YXIgYT1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK2krXCInXCIpO3Rocm93IGEuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixhfXZhciBwPW5baV09e2V4cG9ydHM6e319O2VbaV1bMF0uY2FsbChwLmV4cG9ydHMsZnVuY3Rpb24ocil7dmFyIG49ZVtpXVsxXVtyXTtyZXR1cm4gbyhufHxyKX0scCxwLmV4cG9ydHMscixlLG4sdCl9cmV0dXJuIG5baV0uZXhwb3J0c31mb3IodmFyIHU9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZSxpPTA7aTx0Lmxlbmd0aDtpKyspbyh0W2ldKTtyZXR1cm4gb31yZXR1cm4gcn0pKCkiLCIgICAgLy8gc3RpY2t5IG5hdlxuZnVuY3Rpb24gc2Nyb2xsTmF2KCl7XG4gICAgICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoJCh3aW5kb3cpLnNjcm9sbFRvcCgpID4gNzApIHtcbiAgICAgICAgICAgICQoJ25hdicpLmFkZENsYXNzKCduYXYtLXNjcm9sbCcpLmFkZENsYXNzKCdmYWRlSW5OYXYnKS5yZW1vdmVDbGFzcygnaW5uZXJXcmFwcGVyJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKCduYXYnKS5yZW1vdmVDbGFzcygnbmF2LS1zY3JvbGwnKS5yZW1vdmVDbGFzcygnZmFkZUluTmF2JykuYWRkQ2xhc3MoJ2lubmVyV3JhcHBlcicpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbi8vIG1lZGlhIHF1ZXJ5IGxpc3RlbmVyIG9uIHJlc2l6ZVxuZnVuY3Rpb24gbWVkaWFTaXplKCkge1xuICAgIGlmICh3aW5kb3cubWF0Y2hNZWRpYSgnKG1heC13aWR0aDogOTUwcHgpJykubWF0Y2hlcykge1xuICAgICAgICAkKCcubG9nb1NvY2lhbHMnKS5hZGRDbGFzcygnb3Blbi0tbG9nb1NvY2lhbHMnKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgICQoJy5sb2dvU29jaWFscycpLnJlbW92ZUNsYXNzKCdvcGVuLS1sb2dvU29jaWFscycpO1xuICAgICAgICAkKCcuaGFtYnVyZ2VyJykucmVtb3ZlQ2xhc3MoJ29wZW4tLWhhbWJ1cmdlcicpO1xuICAgIH1cbn07XG5cbi8vIEF0dGFjaCB0aGUgZnVuY3Rpb24gdG8gdGhlIHJlc2l6ZSBldmVudCBsaXN0ZW5lciBcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBtZWRpYVNpemUsIGZhbHNlKTtcblxuZnVuY3Rpb24gb3BlbkhhbWJ1cmdlcigpIHtcbiAgICAkKCcuaGFtYnVyZ2VyLS1jbGlja0NvbnRhaW5lcicpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnLmhhbWJ1cmdlcicpLnRvZ2dsZUNsYXNzKCdvcGVuLS1oYW1idXJnZXInKTtcbiAgICAgICAgY29uc29sZS5sb2coJ2NsaWNrZWQnKTtcbiAgICB9XG4gICAgKTtcbiAgICBvcGVuSGFtU3R5bGVzKCk7XG59XG5cblxuICAgIC8vIG9wZW4gaGFtYnVyZ2VyIG1lbnUgXG4gICAgZnVuY3Rpb24gb3BlbkhhbVN0eWxlcygpIHtcbiAgICAgICAgJCgnbmF2JykuYWRkQ2xhc3MoJ2hhbWJ1cmdlck5hdicpO1xuICAgICAgICAkKCduYXYgbGkgYScpLmNsaWNrKFxuICAgICAgICAgICAgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgJCgnLmhhbWJ1cmdlcicpLnJlbW92ZUNsYXNzKCdvcGVuLS1oYW1idXJnZXInKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgIH07XG5cblxuICAgIC8vIFNtb290aCBzY3JvbGxcbmZ1bmN0aW9uIHNtb290aFNjcm9sbE9uKCl7IFxuICAgICQoJ2EnKS5zbW9vdGhTY3JvbGwoe1xuICAgICAgICBzcGVlZDogMTM1MFxuICAgIH0pO1xufVxuXG4vLyBob3ZlciBhbmQgY2xpY2sgZWZmZWN0IG9uIG5hdiBhXG5mdW5jdGlvbiBob3ZlckNsaWNrKCl7XG4kKCduYXYgYScpLmhvdmVyKGZ1bmN0aW9uICgpIHtcbiAgICAkKCduYXYgYScpLmFkZENsYXNzKCduYXZPcGFjaXR5Jyk7XG4gICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnbmF2T3BhY2l0eScpO1xufSwgZnVuY3Rpb24gKCkge1xuICAgICQoJ25hdiBhJykucmVtb3ZlQ2xhc3MoJ25hdk9wYWNpdHknKTtcbn1cbilcbn1cblxuLy8gd2F5cG9pbnRzIGZvciBzY3JvbGwgbmF2XG4vLyBmdW5jdGlvbiBzZWN0aW9uTGlzdGVuZXJzKCl7XG4vLyB2YXIgd2F5cG9pbnQgPSBuZXcgV2F5cG9pbnQoe1xuLy8gICAgIGVsZW1lbnQ6IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXJUaXRsZXMnKSxcbi8vICAgICBoYW5kbGVyOiBmdW5jdGlvbiAoZGlyZWN0aW9uKSB7XG4vLyAgICAgICAgICQoJ25hdiBhJykucmVtb3ZlQ2xhc3MoJ25hdk9wYWNpdHknKTtcbi8vICAgICB9LFxuLy8gICAgIG9mZnNldDogJy0xNSUnXG4vLyB9KTtcblxuLy8gdmFyIHdheXBvaW50ID0gbmV3IFdheXBvaW50KHtcbi8vICAgICBlbGVtZW50OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9BYm91dCcpLFxuLy8gICAgIGhhbmRsZXI6IGZ1bmN0aW9uKGRpcmVjdGlvbikge1xuLy8gICAgICAgICAkKCduYXYgYScpLmFkZENsYXNzKCduYXZPcGFjaXR5JykucmVtb3ZlQ2xhc3MoJ25hdlNlbGVjdGVkJyk7XG4vLyAgICAgICAgICQoJyN0b0Fib3V0TGluaycpLnJlbW92ZUNsYXNzKCduYXZPcGFjaXR5JykuYWRkQ2xhc3MoJ25hdlNlbGVjdGVkJyk7XG4vLyAgICAgfSxcbi8vICAgICBvZmZzZXQ6ICcxMCUnXG4vLyB9KTtcblxuLy8gdmFyIHdheXBvaW50ID0gbmV3IFdheXBvaW50KHtcbi8vICAgICBlbGVtZW50OiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndG9SZXNlYXJjaCcpLFxuLy8gICAgIGhhbmRsZXI6IGZ1bmN0aW9uIChkaXJlY3Rpb24pIHtcbi8vICAgICAgICAgJCgnbmF2IGEnKS5hZGRDbGFzcygnbmF2T3BhY2l0eScpLnJlbW92ZUNsYXNzKCduYXZTZWxlY3RlZCcpO1xuLy8gICAgICAgICAkKCcjdG9SZXNlYXJjaExpbmsnKS5yZW1vdmVDbGFzcygnbmF2T3BhY2l0eScpLmFkZENsYXNzKCduYXZTZWxlY3RlZCcpO1xuLy8gICAgIH0sXG4vLyAgICAgb2Zmc2V0OiAnMTAlJ1xuLy8gfSk7XG5cbi8vIHZhciB3YXlwb2ludCA9IG5ldyBXYXlwb2ludCh7XG4vLyAgICAgZWxlbWVudDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvRWR1Y2F0aW9uJyksXG4vLyAgICAgaGFuZGxlcjogZnVuY3Rpb24gKGRpcmVjdGlvbikge1xuLy8gICAgICAgICAkKCduYXYgYScpLmFkZENsYXNzKCduYXZPcGFjaXR5JykucmVtb3ZlQ2xhc3MoJ25hdlNlbGVjdGVkJyk7XG4vLyAgICAgICAgICQoJyN0b0VkdWNhdGlvbkxpbmsnKS5yZW1vdmVDbGFzcygnbmF2T3BhY2l0eScpLmFkZENsYXNzKCduYXZTZWxlY3RlZCcpO1xuLy8gICAgIH0sXG4vLyAgICAgb2Zmc2V0OiAnMTAlJ1xuLy8gfSk7XG5cbi8vIHZhciB3YXlwb2ludCA9IG5ldyBXYXlwb2ludCh7XG4vLyAgICAgZWxlbWVudDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvUHVibGljYXRpb25zJyksXG4vLyAgICAgaGFuZGxlcjogZnVuY3Rpb24gKGRpcmVjdGlvbikge1xuLy8gICAgICAgICAkKCduYXYgYScpLmFkZENsYXNzKCduYXZPcGFjaXR5JykucmVtb3ZlQ2xhc3MoJ25hdlNlbGVjdGVkJyk7XG4vLyAgICAgICAgICQoJyN0b1B1YmxpY2F0aW9uc0xpbmsnKS5yZW1vdmVDbGFzcygnbmF2T3BhY2l0eScpLmFkZENsYXNzKCduYXZTZWxlY3RlZCcpO1xuLy8gICAgIH0sXG4vLyAgICAgb2Zmc2V0OiAnMTAlJ1xuLy8gfSk7XG5cbi8vIHZhciB3YXlwb2ludCA9IG5ldyBXYXlwb2ludCh7XG4vLyAgICAgZWxlbWVudDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvU2tpbGxzJyksXG4vLyAgICAgaGFuZGxlcjogZnVuY3Rpb24gKGRpcmVjdGlvbikge1xuLy8gICAgICAgICAkKCduYXYgYScpLmFkZENsYXNzKCduYXZPcGFjaXR5JykucmVtb3ZlQ2xhc3MoJ25hdlNlbGVjdGVkJyk7XG4vLyAgICAgICAgICQoJyN0b1NraWxsc0xpbmsnKS5yZW1vdmVDbGFzcygnbmF2T3BhY2l0eScpLmFkZENsYXNzKCduYXZTZWxlY3RlZCcpO1xuLy8gICAgIH0sXG4vLyAgICAgb2Zmc2V0OiAnMTAlJ1xuLy8gfSk7XG5cbi8vIHZhciB3YXlwb2ludCA9IG5ldyBXYXlwb2ludCh7XG4vLyAgICAgZWxlbWVudDogZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RvQ29udGFjdCcpLFxuLy8gICAgIGhhbmRsZXI6IGZ1bmN0aW9uICgpIHtcbi8vICAgICAgICAgJCgnbmF2IGEnKS5hZGRDbGFzcygnbmF2T3BhY2l0eScpLnJlbW92ZUNsYXNzKCduYXZTZWxlY3RlZCcpO1xuLy8gICAgICAgICAkKCcjdG9Db250YWN0TGluaycpLnJlbW92ZUNsYXNzKCduYXZPcGFjaXR5JykuYWRkQ2xhc3MoJ25hdlNlbGVjdGVkJyk7XG4vLyAgICAgfVxuLy8gfSk7XG4vLyB9XG5cbmZ1bmN0aW9uIGdlbmVyYWxTdHlsZXMoKXtcbiAgICBob3ZlckNsaWNrKCk7XG4gICAgc21vb3RoU2Nyb2xsT24oKTtcbiAgICBzY3JvbGxOYXYoKTtcblxuICAgIG9wZW5IYW1idXJnZXIoKTtcbiAgICAvLyBzZWN0aW9uTGlzdGVuZXJzKCk7XG59XG5cblxuXG4kKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCBvaEhleSA9IFwiSGVsbG8gV29ybGRcIjtcblxuICAgIGNvbnNvbGUubG9nKG9oSGV5KTtcblxuICAgIG1lZGlhU2l6ZSgpO1xuXG5cbiAgICBnZW5lcmFsU3R5bGVzKCk7XG5cbn0pOyAvL2VuZCByZWFkeSJdfQ==
