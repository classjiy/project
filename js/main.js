$(document).ready(function () {

  // depth2
  $(".depth2").hide();
  $(".gnb > li").mouseenter(function () {
    $(this).find(".depth2").stop().fadeIn();
  });
  $(".gnb > li").mouseleave(function () {
    $(this).find(".depth2").stop().fadeOut();
  });

  //mgnb
  // $(".mgnb_wrap").hide();
  // $(".ham").click(function () {
  //   $(".mgnb_wrap").slideDown();
  // });

  // mgnb_wrap left:-100% -> left:0 animate
  $(".ham").click(function () {
    $(".mgnb_wrap").animate({
      "left": "0",
    }, 300);
  });
  $(".mgnb_close").click(function () {
    $(".mgnb_wrap").animate({
      "left": "-100%",
    });
  });

  // search
  $(".search").hide();
  $(".btn_search").click(function () {
    $(".search").fadeIn();
  });
  $(".search_close").click(function () {
    $(".search").fadeOut();
  });
  // .btn_search 클릭하면 .search fadeIn
  // .search_close 클릭하면 .search fadeOut

  // movie
  $(".movie").hide();
  $(".btn_play").click(function () {
    $(".movie").fadeIn();
  });
  $(".movie_close").click(function () {
    $(".movie").fadeOut();
  });

  const brand_txt = new Swiper(".brand_txt", {
    effect: "fade",
    fadeEffect: {
      crossFade: true,
    },
  }); // brand_txt

  const brand_img = new Swiper(".brand_img", {
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    speed: 1000,
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
      clickable: true,
    },
  }); // brand_img

  brand_txt.controller.control = brand_img;
  brand_img.controller.control = brand_txt;

  const info_list = new Swiper(".info_list", {
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    centeredSlides: true, // 첫번째 슬라이드가 중앙에
    loop: true, // 슬라이드 무한 반복
    speed: 1000,
    slidesPerView: "1", // 기본값 = 모바일 기준
    breakpoints: {
      768: {  // 768px 이상에서 보이는 개수
        slidesPerView: 2,
      },
      1200: {  // 1200px 이상에서 보이는 개수
        slidesPerView: 3,
      },
    },
    navigation: {
      nextEl: '.swiper-button-next', // 다음 버튼
      prevEl: '.swiper-button-prev', // 이전 버튼
    },
  }); // brand_img


});


