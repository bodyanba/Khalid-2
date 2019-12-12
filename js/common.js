$(document).ready(function () {

  var dir = false;
  if ( $("html").attr("dir") == "rtl" ) {
    dir = true;
  };

  $(".owl-1").owlCarousel({
    rtl: dir,
    items: 1,
    smartSpeed: 1000,
    loop: true,
    autoplay: true,
    margin: 20
  });

  $(".owl-2").owlCarousel({
    rtl: dir,
    responsive: {
      576: {
        items: 2,
      },
      768: {
        items: 3,
      },
      992: {
        items: 2,
      },
    },
    items: 1,
    smartSpeed: 1000,
    loop: true,
    autoplay: true,
    margin: 18,
    nav: true,
    navText: ['', ''],
    navContainer: '.owl-navigation .owl-nav',
    dotsContainer: '.owl-navigation .owl-dots'
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

  $('[data-fancybox*="gallery"]').fancybox({
    transitionEffect: "circular",
  });

  var audio = document.getElementById("audio");
  var button = document.getElementById("play-pause");
  function audioPlay() {
    if (audio.paused) {
      audio.play();
      $(button).removeClass("active");
    } else {
      audio.pause();
      $(button).addClass("active");
    };
  };

  if (button) {
    Pace.on('done', function() {
      audioPlay();
    });
    $(button).on("click", function() {
      audioPlay();
    });
  };

});