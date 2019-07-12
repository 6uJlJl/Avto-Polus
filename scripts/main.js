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

  });
