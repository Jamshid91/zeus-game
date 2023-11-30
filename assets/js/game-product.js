const product_activeery = new Swiper('.swiper-product-active', {
    speed: 500,
    effect: 'fade',
    slidesPerView: 1,
    centeredSlides: true,
    loop: true,
    loopedSlides: 5,
    watchOverflow: true,
  });

  const product = new Swiper('.swiper-product', {
    watchOverflow: true,
    slidesPerView: 5.2,
    spaceBetween: 10,
    loop: true,
    slideToClickedSlide: true,

    navigation: {
        nextEl: '.product-next',
        prevEl: '.product-prev',
      },
  
  });

  product_activeery.controller.control = product;
  product.controller.control = product_activeery;


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

  var starRatingControl = new StarRating('.star-rating',{
    maxStars: 5,
});
