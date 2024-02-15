const blockchains = new Swiper('.swiper-blockchain', {
    watchOverflow: true,
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    navigation: {
        nextEl: '.blockchain-next',
        prevEl: '.blockchain-prev',
      },
  });


  const games = new Swiper('.swiper-games', {
    watchOverflow: true,
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    navigation: {
        nextEl: '.games-next',
        prevEl: '.games-prev',
      },
      pagination: {
        el: '.games-pagination',
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
            slidesPerView: 1.5,
            spaceBetween: 20,
        },
        992: {
            slidesPerView: 2.2,
        },
        1400: {
            slidesPerView: 3.2,
        },
    }
  
  });

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


  const artocles = new Swiper('.swiper-artocles', {
    watchOverflow: true,
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    navigation: {
        nextEl: '.artocles-next',
        prevEl: '.artocles-prev',
      },
      pagination: {
        el: '.artocles-pagination',
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
            slidesPerView: 2.2,
        },
        1400: {
            slidesPerView: 3.2,
        },
    }
  
  });

  
const gallery = new Swiper('.swiper-gallery', {
  watchOverflow: true,
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  navigation: {
      nextEl: '.gallery-next',
      prevEl: '.gallery-prev',
    },
    pagination: {
      el: '.gallery-pagination',
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
          slidesPerView: 2.2,
      },
      1400: {
          slidesPerView: 3.2,
      },
  }

});

const explanation = new Swiper('.swiper-explanation', {
  watchOverflow: true,
  slidesPerView: 1,
  spaceBetween: 20,
  loop: true,
  navigation: {
      nextEl: '.explanation-next',
      prevEl: '.explanation-prev',
    },
    pagination: {
      el: '.explanation-pagination',
      clickable: true,
    },
  breakpoints: {
      320: {
          slidesPerView: 1,
          spaceBetween: 10,
      },
      768: {
          slidesPerView: 2.2,
          spaceBetween: 15,
      },
      992: {
          slidesPerView: 2.2,
      },
      1400: {
          slidesPerView: 3.2,
      },
  }

});