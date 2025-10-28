
export function initSwiper() {
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical'
    slidesPerView: 1,
    effect: 'fade',
    loop: true,
    autoplay: {
      delay: 3000,
    },

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      typeof: 'bullets',
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
}