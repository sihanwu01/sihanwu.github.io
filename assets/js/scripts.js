(function ($) {
  "use strict";

  // Smooth scrolling 
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').on('click', function () {
      if (
          location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
          location.hostname == this.hostname
      ) {
          var target = $(this.hash);
          target = target.length ?
              target :
              $("[name=" + this.hash.slice(1) + "]");
          if (target.length) {
              anime({
                  targets: 'html, body',
                  scrollTop: target.offset().top,
                  duration: 300,
                  easing: 'easeInOutExpo'
              });
              return false;
          }
      }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function () {
      $('.navbar-collapse').collapse('hide');
  });

  // Change Nav bar transparency
  var navbarChange = function () {
      if ($("#mainNav").offset().top > 100 || $(window).width() < 992) {
          $("#mainNav").addClass("navbar-shrink");
      } else {
          $("#mainNav").removeClass("navbar-shrink");
      }
  };

  navbarChange();

  // Change the navbar when page is scrolled or resizes
  $(window).scroll(navbarChange);

  $(window).on('resize', navbarChange);

})(jQuery);

// Text Animation
var animation = {};
animation.opacityIn = [0,1];
animation.scaleIn = [0.2, 1];
animation.scaleOut = 3;
animation.durationIn = 800;
animation.durationOut = 600;
animation.delay = 500;

anime.timeline({loop: true})
  .add({
    targets: '.animation .letters-1',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 500 + 30 * i
  }).add({
    targets: '.animation .letters-1',
    translateX: [0,-30],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 1100,
    delay: (el, i) => 100 + 30 * i
  }).add({
    targets: '.animation .letters-2',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 500 + 30 * i
  }).add({
    targets: '.animation .letters-2',
    translateX: [0,-30],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 1100,
    delay: (el, i) => 100 + 30 * i
  }).add({
    targets: '.animation .letters-3',
    translateX: [40,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutExpo",
    duration: 1200,
    delay: (el, i) => 500 + 30 * i
  }).add({
    targets: '.animation .letters-3',
    translateX: [0,-30],
    opacity: [1,0],
    easing: "easeInExpo",
    duration: 1100,
    delay: (el, i) => 100 + 30 * i
  }).add({
    targets: '.animation',
    opacity: 0,
    duration: 500,
    delay: 500
  });

//hover highlights
function hoverNav(el){
  var e = document.getElementById(el);
  e.style.color = "#50a9ae";
}

function hoverOut(el){
  var e = document.getElementById(el);
  e.style.color = "black";
}

//Get the button
let mybutton = document.getElementById("btn-back-to-top");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (
    document.body.scrollTop > 20 ||
    document.documentElement.scrollTop > 20
  ) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
mybutton.addEventListener("click", backToTop);