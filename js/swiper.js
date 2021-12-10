// Initialize Swiper
const carouselSwiper = new Swiper("#carousel-swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  effect: "coverflow",

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Initialize Swiper
// 常數，定義好後不會再去改動的，用const
// origin   4 欄位
// <= 992px 3 欄位
// <= 768px 2 欄位
// <= 540px 1 欄位
const productSwiper = new Swiper("#product-swiper", {
  slidesPerView: 1,
  breakpoints: {
    // when window width is >= 541px
    541: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    // when window width is >= 769px
    769: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    // when window width is >= 993px
    993: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
