$(document).ready(function() {
  "use strict";

  // -------------- On Scroll Navbar Effect -------------- 

    var window_width = $(window).width();

    $(window).on("scroll", function(){  
      "use strict"; 
      var scroll = $(window).on("scrollTop")();
      if( scroll > 60 ){
        $(".navbar").addClass("scroll-fixed-navbar");
      } else {
        $(".navbar").removeClass("scroll-fixed-navbar");
      }
    });

  // -------------- Carousel -------------- 

    $('.carousel').carousel({
      interval: 3000,
      pause: false
    });

  // -------------- Wow -------------- 

    var wow = new WOW(
    {
      animateClass: 'animated',
      offset: 100,
      mobile: false
    }
    );
    wow.init();

    
  // -------------- Parallax -------------- 

  var window_width = $(window).on("width")();
  
  if( window_width > 992 ){
    $('.event-list').parallax("50%", 0.1);
    $('.event-countdown').parallax("50%", 0.1);
    $('.join-us').parallax("50%", 0.1);
    $('.banner-overlay').parallax("50%", 0.1);
  }

  // ----------------------- Slick ------------------------

  $('.artist-grid-container').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false, 
    autoplay: true,
    dots: true,
    autoplaySpeed: 5000,
    responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }]
  });

    var slickGalleryImageWrap = {
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: false,
    autoplaySpeed: 1000,
    fade: true,
    draggable: true,
    pauseOnHover: false
  };

  $('.gallery-image-wrap').slick(slickGalleryImageWrap);

    $(".gallery-item").on("mouseenter", function() {
      $(this).find('.gallery-image-wrap').slick("play");
    });

    $(".gallery-item").on("mouseleave", function() {
      $(this).find('.gallery-image-wrap').slick("pause");
    });


   $('.shop-item-large').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.thumbnail-wrap'
  });

  $('.thumbnail-wrap').slick({
    slidesToShow: 3,
    asNavFor: '.shop-item-large',
    dots: false,
    vertical: true,
    arrows: false,
    focusOnSelect: true,
  });

  // -------------- Fancybox -------------- 

  $('.fancybox').fancybox({
    helpers: {
      overlay: {
        locked: false
      }
    }
  });
  
  // -------------- Navbar Toggle Animation ----------------

  document.getElementById('hamburgler').addEventListener('click', checkNav);
  window.addEventListener("keyup", function(e) {
    if (e.keyCode == 27) closeNav();
  }, false);

  function checkNav() {
    if (document.body.classList.contains('hamburgler-active')) {
      closeNav();
    } else {
      openNav();
    }
  }

  function closeNav() {
    document.body.classList.remove('hamburgler-active');
  }

  function openNav() {
    document.body.classList.add('hamburgler-active');
  }

  // -------------- Countdown -------------- 

  $('.countdown').downCount({
    date: '06/10/2018 12:00:00',
    offset: +10
  }, function () {
    alert('WOOT WOOT, done!');
  });

  // -------------- Hide/Show JPlayer Toggle -------------- 

  $('.hsp-toggle').on("click", function(){
    $(this).parent('.jp-interface').toggleClass('hide-current hide-clicked');
    $(this).toggleClass('hide-current hide-clicked');
  });

  $(window).on("scroll", function() {
      if($(window).on("scrollTop")() + $(window).height() == $(document).height()) {
        $('.jp-interface').addClass('hide-current');
        $('.hsp-toggle').addClass('hide-current');
      }
      else if (!$('.jp-interface').hasClass('hide-clicked') && !$('.hsp-toggle').hasClass('hide-clicked')) {
        $('.jp-interface').removeClass('hide-current');
        $('.hsp-toggle').removeClass('hide-current');
      }
  });

  $('.pl-toggle').on("click", function(){
    $('.jp-playlist').slideToggle('500');
    $(this).toggleClass('open');
  });

  // ----------------------- Popover ---------------------- 

  $(function(){
    $('.popover-custom').popover({
        container: 'body',
        html: true,
        trigger: "manual",
        content: function () {
            var clone = $($(this).data('popover-content')).clone(true).removeClass('hide');
            return clone;
        }
    }).on("click", function(e) {
        e.preventDefault();
    }).on("mouseenter", function () {
      var _this = this;
      $(this).popover("show");
      $(".popover").on("mouseleave", function () {
          $(_this).popover('hide');
      });
    }).on("mouseleave", function () {
      var _this = this;
      setTimeout(function () {
        if (!$(".popover:hover").length) {
          $(_this).popover("hide");
        }
      }, 100);
    });
  });



  // ---------------------- Tooltip ----------------------- 

  $('[data-toggle="tooltip"]').tooltip();

  // -------------- nstSlider (Range Slider) -------------- 

  $('.price-filter-slider').nstSlider({
    "crossable_handles": false,
    "left_grip_selector": ".left-handle",
    "right_grip_selector": ".right-handle",
    "value_bar_selector": ".price-filter-bar",
    "value_changed_callback": function(cause, leftValue, rightValue) {
        $(this).parent().find('.leftLabel').text(leftValue);
        $(this).parent().find('.rightLabel').text(rightValue);
      }
  });
});

