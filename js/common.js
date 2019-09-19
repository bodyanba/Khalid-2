$(document).ready(function () {

  $(".owl-1").owlCarousel({
    items: 1,
    smartSpeed: 1000,
    loop: true,
    autoplay: true,
    margin: 20
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

  $(window).on("scroll", function() {
    if ($(this).scrollTop() >= 1) {
      $('.fixed-top').addClass("navbar-bg");
    } else {
      $('.fixed-top').removeClass("navbar-bg");
    }
  });

  function footer() {
    var height = $(".page-footer").outerHeight();
    $(".footer-wrapper").outerHeight(height);
  };

  footer();
  $(window).on("resize", function() {
    footer();
  });

  $('[data-fancybox]').fancybox({});

  $('[data-fancybox*="gallery-"]').fancybox({
    transitionEffect: "circular",
  });

});