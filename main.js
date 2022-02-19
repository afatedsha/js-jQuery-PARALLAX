
/* TABS */

$('.nav-link').on('click',function(){
  let currTab = $(this).index();

  $('.nav-link').removeClass('active');
  $(this).addClass('active');

  $('.tab-pane').removeClass('show active');
  $('.tab-pane').eq(currTab).addClass('show active');
})

/* PARALLAX */

const scene = document.getElementById('scene');
const parallaxInstance = new Parallax(scene);

/* HAMBURGER */

$('.mobile_menu').on('click',function(){
  $('.mobile-menu-wrapper').toggle();
})

$('#closeMenu').on('click',function(){
  $('.mobile-menu-wrapper').hide();
});

/* SLIDER */
const mySwiper = new Swiper ('.swiper-container', {
    loop : true,
    stopOnLastSlide : false,
    autoplay : {
        delay: 5500
    }
})

/* Modal window */

const btnOpen = document.getElementById('btn-open');
const modal = document.getElementById('wrapper-modal');

const overlay = document.getElementById('overlay');
const btnClose = document.getElementById('btn-close');

btnOpen.addEventListener('click',function(){
    modal.classList.add('active');
});

function closeModal(){
    modal.classList.remove('active');
}

overlay.addEventListener('click',closeModal);
btnClose.addEventListener('click',closeModal);

//Валидация и отправка формы

$(document).ready(function() {
  $('[data-submit]').on('click', function(e) {
      e.preventDefault();
      $(this).parent('form').submit();
  })
  $.validator.addMethod(
      "regex",
      function(value, element, regexp) {
          var re = new RegExp(regexp);
          return this.optional(element) || re.test(value);
      },
      "Please check your input."
  );

  // Функция валидации и вывода сообщений
  function valEl(el) {
      el.validate({
          rules: {
            phone: {
                  required: true,
                  regex: '^([\+]+)*[0-9\x20\x28\x29\-]{5,20}$'
              },
              name: {
                  required: true,
                  regex: "[A-Za-z]{1,32}"
              },
              email: {
                  required: true,
                  email: true
              }
          },
          messages: {
            phone: {
                  required: 'Required field',
                  regex: 'Phone may contain characters + - ()'
              },
              name: {
                  required: 'Required field',
              },
              email: {
                  required: 'Required field',
                  email: 'Wrong format E-mail'
              }
          },

          // Начинаем проверку id="" формы
          submitHandler: function(form) {
              $('#loader').fadeIn();
              var $form = $(form);
              var $formId = $(form).attr('id');
              switch ($formId) {
                  // Если у формы id="popupResult" - делаем:
                  case 'form-book':
                      $.ajax({
                              type: 'POST',
                              url: $form.attr('action'),
                              data: $form.serialize()
                          })
                          .done(function() {
                              console.log('Success');
                          })
                          .fail(function() {
                              console.log('Fail');
                          })
                          .always(function() {
                              console.log('Always');
                              setTimeout(function() {
                                  $('#message-for-user').fadeIn();
                                  $form.trigger('reset');
                                  //строки для остлеживания целей в Я.Метрике и Google Analytics
                              }, 1100);
                              $('#message-for-user').on('click', function(e) {
                                  $(this).fadeOut();
                              });

                          });
                      break;
                      case 'input-form':
                        $.ajax({
                                type: 'POST',
                                url: $form.attr('action'),
                                data: $form.serialize()
                            })
                            .done(function() {
                                console.log('Success');
                            })
                            .fail(function() {
                                console.log('Fail');
                            })
                            .always(function() {
                                console.log('Always');
                                setTimeout(function() {
                                    $('#message-for-user').fadeIn();
                                    $form.trigger('reset');
                                    //строки для остлеживания целей в Я.Метрике и Google Analytics
                                }, 1100);
                                $('#message-for-user').on('click', function(e) {
                                    $(this).fadeOut();
                                });
  
                            });
                        break;
                        case 'form-modal':
                          $.ajax({
                                  type: 'POST',
                                  url: $form.attr('action'),
                                  data: $form.serialize()
                              })
                              .done(function() {
                                  console.log('Success');
                              })
                              .fail(function() {
                                  console.log('Fail');
                              })
                              .always(function() {
                                  console.log('Always');
                                  setTimeout(function() {
                                      $('#message-for-user').fadeIn();
                                      $form.trigger('reset');
                                      //строки для остлеживания целей в Я.Метрике и Google Analytics
                                  }, 1100);
                                  $('#message-for-user').on('click', function(e) {
                                      $(this).fadeOut();
                                  });
    
                              });
                          break;
              }
              return false;
          }
      })
  }

  // Запускаем механизм валидации форм, если у них есть класс .js-form
  $('.js-form').each(function() {
      valEl($(this));
  });
  
});

(function ($)
  { "use strict"
  
/* 1. Preloder (готовый код, можно использовать в любом проекте) */
    $(window).on('load', function () {
      $('#preloader-active').delay(450).fadeOut('slow');
      $('body').delay(450).css({
        'overflow': 'visible'
      });
    });

/* 2. Sticky And Scroll UP */
    $(window).on('scroll', function () {
      var scroll = $(window).scrollTop();
      if (scroll < 400) {
        $(".header-sticky").removeClass("sticky-bar");
        $('#back-top').fadeOut(500);
      } else {
        $(".header-sticky").addClass("sticky-bar");
        $('#back-top').fadeIn(500);
      }
    });

  // Scroll Up
    $('#back-top a').on("click", function () {
      $('body,html').animate({
        scrollTop: 0
      }, 800);
      return false;
    });

    $('button.btn-lg').click(function() {
      var parent = $(this).attr('data-parent');
      var modal = $(this).attr('data-target')
      $(modal).find('input[name=target]').val(parent);
  })
  

})(jQuery);