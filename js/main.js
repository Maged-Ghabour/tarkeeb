// $(".date").datepicker({
//   format: "التاريخ",
// });

/* Swipper  */
var s1 = new Swiper(".s1", {
  slidesPerView: 6,
  spaceBetween: 20,
  sliderPerGroup: 6,
  loop: true,
  centerSlide: "true",
  fade: "true",

  pagination: {
    el: ".swiper-pagination1",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next1",
    prevEl: ".swiper-button-prev1",
  },

  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    520: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1000: {
      slidesPerView: 4,
    },
    1100: {
      slidesPerView: 5,
    },
    1200: {
      slidesPerView: 5,
    },
  },
});











