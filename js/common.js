$(document).ready(function () {

  $(".owl-1").owlCarousel({
    items: 1,
    smartSpeed: 1000,
    loop: true,
    autoplay: true,
  });

  $(".navbar-toggler").on("click", function() {
    $(this).toggleClass("active");
  });

  $(window).enllax();

  $('.jarallax').jarallax({});

  AOS.init({
    duration: 1500,
    disable: 'mobile'
  });

});