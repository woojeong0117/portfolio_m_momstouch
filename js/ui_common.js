$(function () {
  var header = $('#header');
  $(window)
    .on('scroll', function () {
      var st = $(this).scrollTop();

      if (st > 0) {
        header.addClass('fixed');
      } else {
        header.removeClass('fixed');
        $('.sub_header').addClass('fixed');
      }
    })
    .trigger('scroll');

  // 메인 슬라이더
  var mainSlider = new Swiper('.main_slider', {
    loop: true,
    speed: 700,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  });

  // gnb 아코디언
  $('.gnb_wrap .gnb>li>a').on('click', function (e) {
    e.preventDefault();
    $(this).toggleClass('active').parent().siblings().find('>a').removeClass('active');
    $(this).toggleClass('on').parent().siblings().find('>a').removeClass('on');
    $(this).next().slideToggle();
    $(this).parent().siblings().find('.depth02').slideUp();
  });

  $('#header .gnb_open').on('click', function () {
    $('.gnb_area').addClass('on');
    $('body').addClass('on');
  });

  $('.gnb_area .gnb_close').on('click', function () {
    $('.gnb_area').removeClass('on');
    $('body').removeClass('on');
    $('.gnb_wrap .gnb>li>a').removeClass('active');
    $('.gnb_wrap .gnb>li>a').removeClass('on');
    $('.gnb_wrap .gnb>li').siblings().find('.depth02').slideUp();
  });

  $('.gnb_area .depth02 a').on('click', function () {
    setTimeout(function () {
      $('.gnb_area').removeClass('on');
      $('body').removeClass('on');
      $('.gnb_wrap .gnb>li>a').removeClass('active');
      $('.gnb_wrap .gnb>li>a').removeClass('on');
      $('.gnb_wrap .gnb>li').siblings().find('.depth02').slideUp();
    }, 5);
  });

  // 메뉴슬라이더
  var menuSlider = new Swiper('.menu_slider', {
    slidesPerView: 2,
    spaceBetween: 20,
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
  });

  // 이벤트 슬라이더
  var eventSlider = new Swiper('.event_slider', {
    loop: true,
    speed: 700,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
  });

  // 메뉴리스트
  $('.sub_container .lnb li').on('click', function () {
    $(this).addClass('active').siblings().removeClass('active');
    var menu = $(this).data('menu');

    if (menu === 'all') {
      $('.menu_list li').show();
    } else {
      $('.menu_list li').hide();
      $('.menu_list li[data-menu=' + menu + ']').show();
      $('.menu_list li[data-menu2=' + menu + ']').show();
    }
  });

  // 스크롤 애니메이션
  var animate = $('.animate_fade_up');
  animate.each(function (i, v) {
    var _this = $(this);

    $(window)
      .on('scroll', function () {
        var st = $(this).scrollTop();
        var posY = _this.offset().top - $(this).height() + 50;

        if (st >= posY) {
          _this.addClass('on');
        } else {
          _this.removeClass('on');
        }
      })
      .trigger('scroll');
  });

  //faq search 버튼
  $('.faq .btn_clear').on('click', function () {
    $('.search_box input').val('').focus();
    $(this).hide();
  });

  $('.search_box input').on('keydown', function () {
    $('.faq .btn_clear').show();
  });

  // faq 리스트
  $('.faq .lnb li').on('click', function () {
    $(this).addClass('active').siblings().removeClass('active');
    var faq = $(this).data('faq');

    if (faq === 'all') {
      $('.faq_list_wrap dl').show();
    } else {
      $('.faq_list_wrap dl').hide();
      $('.faq_list_wrap dl[data-faq=' + faq + ']').show();
    }
  });

  // faq
  $('.faq .faq_list_wrap dd').hide();
  $('.faq .faq_list_wrap dt').on('click', function (e) {
    e.preventDefault();
    $(this).find('a').toggleClass('on');
    $(this).parent().siblings().find('a').removeClass('on');
    $(this).next().slideToggle();
    $(this).parent().siblings().find('dd').slideUp();
  });
});
