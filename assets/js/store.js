const trending = new Swiper('.swiper-trending', {
    watchOverflow: true,
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    navigation: {
        nextEl: '.trending-next',
        prevEl: '.trending-prev',
      },
      pagination: {
        el: '.trending-pagination',
        clickable: true,
      },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 1.5,
            spaceBetween: 20,
        },
        992: {
            slidesPerView: 2.5,
        },
        1400: {
            slidesPerView: 2.8,
        },
        1600: {
            slidesPerView: 4,
        },
    }
  
  });

  const trending_game = new Swiper('.swiper-trending-game', {
    watchOverflow: true,
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    navigation: {
        nextEl: '.trending-game-next',
        prevEl: '.trending-game-prev',
      },
      pagination: {
        el: '.trending-game-pagination',
        clickable: true,
      },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 1.5,
            spaceBetween: 20,
        },
        992: {
            slidesPerView: 2.5,
        },
        1400: {
            slidesPerView: 2.8,
        },
        1600: {
            slidesPerView: 4,
        },
    }
  
  });

  const featured = new Swiper('.swiper-featured', {
    watchOverflow: true,
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    navigation: {
        nextEl: '.featured-next',
        prevEl: '.featured-prev',
      },
      pagination: {
        el: '.featured-pagination',
        clickable: true,
      },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 10,
        },
        768: {
            slidesPerView: 1.5,
            spaceBetween: 20,
        },
        992: {
            slidesPerView: 2.5,
        },
        1400: {
            slidesPerView: 2.8,
        },
        1600: {
            slidesPerView: 4,
        },
    }
  
  });
