const roadmap = new Swiper('.swiper-roadmap', {
    watchOverflow: true,
    spaceBetween: 35,
    loop: true,
    watchOverflow: true,
    centeredSlides: true,
    mousewheel: true,
    parallax: true,
    speed: 600,
    breakpoints: {
        320: {
            slidesPerView: 1.5,
        },
        576: {
            slidesPerView: 2.2,
        },
        768: {
            slidesPerView: 2.5,
        },
        992: {
            slidesPerView: 3.2,
        },
        1400: {
            slidesPerView: 5.2,
        },
    }
  });

