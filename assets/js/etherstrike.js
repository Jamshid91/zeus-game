const checks = document.querySelectorAll('.check-bg'),
      activeBg = document.querySelector('.etherstrike-bg')


checks.forEach(check => {
    check.addEventListener('click', () => {
        checks.forEach(elem => {
            elem.classList.remove('checked')
        })
        check.classList.add('checked')
        activeBg.src = check.src
    });
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

