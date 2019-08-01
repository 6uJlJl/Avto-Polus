$(document).ready(function () {

  function changeBrandsSlider (number) {
    var mySwiper1 = new Swiper ('.swiper-container-brands', {
      // Optional parameters
      slidesPerView: number,
      spaceBetween: 0,
      slidesPerGroup: 1,
      loop: true,
      loopFillGroupWithBlank: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    })
  }

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
  var width = $(window).width();
  if ( width <= 425) { changeBrandsSlider(1) }
  else if ( width <= 620) { changeBrandsSlider(2) }
    else if ( width <= 900) { changeBrandsSlider(3) }
      else if ( width <= 1200) { changeBrandsSlider(4) }
        else { changeBrandsSlider(5) }

  // настройки слайдера на странице about
  var mySwiper1 = new Swiper ('.swiper-container-about', {
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

  //Скролл к форме на кнопке "Обратный звонок"
  $(".header__callback").click((event)=>{
    event.preventDefault();
    let top = $(".questions").offset().top;
    $('body,html').animate({scrollTop: top}, 1000);
  })

  // Маска ввода для телефонов
  $(".form__phone").mask("+7 (999) 999-99-99");

  // Обработка формы поиска в шапке
  $(".header__search").on("submit", function(event){
    event.preventDefault();
    $(".search").val("");
  })

  $(".secondary__form").on("submit", function(event){
    event.preventDefault();
    $(".secondary__input").val("");
  })

  // Обработка формы "Есть вопрос?"
  $('#form').trigger('reset');
  $('#form').on('submit', function(e){
    e.preventDefault();
    $(".form__button").attr("disabled", "disabled");
    var fd = new FormData( this );
    $.ajax({
      url: '../phpmailer/send.php',
      type: 'POST',
      contentType: false,
      processData: false,
      data: fd,
      success: function(msg){
        $(".form__name").val("");
        $(".form__phone").val("");
        $(".form__text").val("");
        $(".form__button").removeAttr("disabled");
        if(msg == 'ok') {
          alert('Спасибо, Ваша заявка отправлена. Я свяжусь с вами как можно скорее!');
        } else {
          alert('Ошибка отправки. Попробуйте повторить попытку позднее...')
        }
      }
    });
  });

  // мобильное меню
  $(".burger-menu").click(()=>{
    $(".navbar__ul").toggleClass("navbar__ul--active");
  })

  if ($(window).width() <= 900) {
    $(".slider__image--1").attr("src","../img/slider/slide-1-small.png");
    $(".slider__image--2").attr("src","../img/slider/slide-2-small.png");
    $(".slider__image--3").attr("src","../img/slider/slide-3-small.png");
    $(".slider__image--4").attr("src","../img/slider/slide-4-small.png");
    $(".slider__image--5").attr("src","../img/slider/slide-5-small.png");
  }

  $("main").click((event)=>{
      $(".navbar__ul").removeClass("navbar__ul--active");
  });

  $(window).scroll(()=>{
    $(".navbar__ul").removeClass("navbar__ul--active");
  });

  $(window).resize(()=>{
    $(".navbar__ul").removeClass("navbar__ul--active");
    width = $(window).width();
    if ( width <= 425) { changeBrandsSlider(1) }
    else if ( width <= 620) { changeBrandsSlider(2) }
      else if ( width <= 900) { changeBrandsSlider(3) }
        else if ( width <= 1200) { changeBrandsSlider(4) }
          else { changeBrandsSlider(5) }
    if ( width <= 900 ) {
      $(".slider__image--1").attr("src","../img/slider/slide-1-small.png");
      $(".slider__image--2").attr("src","../img/slider/slide-2-small.png");
      $(".slider__image--3").attr("src","../img/slider/slide-3-small.png");
      $(".slider__image--4").attr("src","../img/slider/slide-4-small.png");
      $(".slider__image--5").attr("src","../img/slider/slide-5-small.png");
    }
    else {
      $(".slider__image--1").attr("src","../img/slider/slide-1.png");
      $(".slider__image--2").attr("src","../img/slider/slide-2.png");
      $(".slider__image--3").attr("src","../img/slider/slide-3.png");
      $(".slider__image--4").attr("src","../img/slider/slide-4.png");
      $(".slider__image--5").attr("src","../img/slider/slide-5.png");
    }

    //end resize
  })

  });
