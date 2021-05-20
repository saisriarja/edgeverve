$(document).ready(function () {
  $('.bannerr-carousell').owlCarousel({
    // loop: true,
    nav: true,
    smartSpeed: 700,
    navText: ['<img src="images/left-arrow.png" alt="">', '<img src="images/right-arrow.png" alt="">'],
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 1,
        nav: true
      },
      1000: {
        items: 1,
        nav: true
      }
    }
  });
  $('.team-carousell').owlCarousel({
    loop: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3,
        loop: false
      }
    }
  });
  $('.counter').each(function () {
    var $this = $(this),
      countTo = $this.attr('data-count');

    $({ countNum: $this.text() }).animate({
      countNum: countTo
    },

      {

        duration: 3000,
        easing: 'linear',
        step: function () {
          $this.text(Math.floor(this.countNum));
        },
        complete: function () {
          $this.text(this.countNum);
          //alert('finished');
        }

      });
  });
  $('.header-search-wrapper .search-main').click(function () {
    $('.search-form-main').toggleClass('active-search');
    $('.search-form-main .search-field').focus();
  });
  // ===== Scroll to Top ==== 
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
      $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
      $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
  });
  $('#return-to-top').click(function () {      // When arrow is clicked
    $('body,html').animate({
      scrollTop: 0                       // Scroll to top of body
    }, 500);
  });

  var stickyNavTop = $('.nav-menu').offset().top;
  var stickyNav = function () {
    var scrollTop = $(window).scrollTop();
    if (scrollTop > stickyNavTop) {
      $('.nav-menu').addClass('sticky');
    } else {
      $('.nav-menu').removeClass('sticky');
    }
  };
  stickyNav();
  $(window).scroll(function () {
    stickyNav();
  });

  $('.contact-form').submit(function () {
    // alert('hi');
    $flag = true;
    $(this).find('.required').each(function () {
      if ($(this).val() == "") {
        $flag = false;
        $(this).addClass('blank').siblings('.spn').children('small').html($(this).attr("name") + " field is requred").css('font-size', '12px');
      }
      else {
        $(this).removeClass('blank').siblings('.spn').children('small').html('');
      }
    });
    return $flag;
  });
  //set button id on click to hide first modal
  $("#signin").on("click", function () {
    $('#myModal1').modal('hide');
  });
  //trigger next modal
  $("#signin-2").on("click", function () {
    $('#myModal2').modal('show');
  });
  $("#signin-3").on("click", function () {
    $('#myModal3').modal('show');
  });
  AOS.init();
});
