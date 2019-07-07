$(document).ready(function () {
    
  // настройки слайдера в блоке slider
    var mySwiper = new Swiper ('.swiper-container', {
      // Optional parameters
        direction: 'horizontal',
        loop: true,
        navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            type: 'bullets'
        }
    })

  // настройки слайдера в блоке brands
    var mySwiper1 = new Swiper ('.swiper-container-brands', {
      // Optional parameters
      slidesPerView: 5,
      spaceBetween: 0,
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    })

  // Маска ввода для телефонов
    $(".form__phone").mask("+7 (999) 999-99-99");
    
  });