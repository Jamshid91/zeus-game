const nft = new Swiper('.swiper-nft', {
    watchOverflow: true,
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    navigation: {
        nextEl: '.nft-next',
        prevEl: '.nft-prev',
      },
      pagination: {
        el: '.nft-pagination',
        clickable: true,
      },
    breakpoints: {
        320: {
            slidesPerView: 1.2,
            spaceBetween: 10,
        },
        576: {
            slidesPerView: 1.5,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 2.2,
            spaceBetween: 15,
        },
        992: {
            slidesPerView: 3,
        },
        1400: {
            slidesPerView: 4,
        },
    }
  });

