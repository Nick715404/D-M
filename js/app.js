const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
    effect: "fade",
    autoplay: {
      delay: 3500,
      disableOnInteraction: true,
    }
});