var $screenSm = 768, $screenMd = 1024, $screenLg = 1270;

var $fontSizeRoot = 16, $fontSizeRootComputed = parseInt($('html').css('fontSize'));

var $screenSmMin = $screenSm/$fontSizeRoot + 'em'; console.log('$screenSmMin = ' + $screenSmMin + ' (' + $screenSm + 'px)');
var $screenMdMin = $screenMd/$fontSizeRoot + 'em'; console.log('$screenMdMin = ' + $screenMdMin + ' (' + $screenMd + 'px)');
var $screenLgMin = $screenLg/$fontSizeRoot + 'em'; console.log('$screenLgMin = ' + $screenLgMin + ' (' + $screenLg + 'px)');

var $screenXsMax = ($screenSm - 1)/$fontSizeRoot + 'em'; console.log('$screenXsMax = ' + $screenXsMax);
var $screenSmMax = ($screenMd - 1)/$fontSizeRoot + 'em'; console.log('$screenSmMax = ' + $screenSmMax);
var $screenMdMax = ($screenLg - 1)/$fontSizeRoot + 'em'; console.log('$screenMdMax = ' + $screenMdMax);

$('.lazy').Lazy();


$(function () {
    $('body').on('click', '[data-toggle="menu"]', function (e) {
        e.preventDefault();
        $(this).toggleClass('glyphicon-menu-lines glyphicon-cancel');
        $('.header__panel').fadeToggle(200);
        $('html').toggleClass('opened-panel');
    });
});

$(function () {
    $('html.touchevents').on('click', '.menu__item_submenu:not(.menu__item_opened)>.menu__btn', function (e) {
        e.preventDefault();
        $('.menu__submenu')
            .not($(this).next('.menu__submenu').addClass('menu__submenu_opened').slideDown(200).parent().addClass('menu__item_opened').end())
            .not($(this).parents('.menu__submenu'))
            .removeClass('menu__submenu_opened').slideUp(200).parent().removeClass('menu__item_opened');
    }).on('click', function (e) {
        if (!$(e.target).closest('.menu').length) {
            $('.menu__submenu').removeClass('menu__submenu_opened').slideUp(200).parent().removeClass('menu__item_opened');
        }
    });

    var timerHoverMenuItem;
    $('html.no-touchevents .menu__item_submenu').hover(function (e) {
        var $menuItem = $(this);
        timerHoverMenuItem = setTimeout(function () {
            $menuItem.children('.menu__submenu').addClass('menu__submenu_opened').slideDown(200).parent().addClass('menu__item_opened');
        }, 100);

    }, function (e) {
        var $menuItem = $(this);
        clearTimeout(timerHoverMenuItem);
        $menuItem.children('.menu__submenu').removeClass('menu__submenu_opened').slideUp(200).parent().removeClass('menu__item_opened');
    });

    $(window).on('resize.Submenu', function () {
        $('.menu__submenu .container-fluid').css('padding-left', $('.header__top').width()
            - $('.header__panel').width()
            + parseInt($('.menu__item_lvl_1').css('padding-left')) + parseInt($('.header__top').css('padding-left')) - parseInt($('.menu__btn_lvl_2').css('padding-left')));
    }).triggerHandler('resize.Submenu');
});

$.fancybox.defaults.hash = false;
$.fancybox.defaults.touch = false;
$.fancybox.defaults.btnTpl.smallBtn = '<button data-fancybox-close class="btn popup__btn-close glyphicon glyphicon-cancel" title="Закрыть"></button>';

$(function () {
    //$("[data-fancybox]").fancybox();

    $("[data-fancybox--single]").fancybox({
        smallBtn : false,
        autoFocus : false,
        btnTpl : {
            slideShow  : '<button data-fancybox-play class="fancybox-button fancybox-button--play hide" title="{{PLAY_START}}"></button>',
            fullScreen : '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fullscreen hide" title="{{FULL_SCREEN}}"></button>',
            thumbs     : '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs hide" title="{{THUMBS}}"></button>',
            close      : '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"></button>',

            // This small close button will be appended to your html/inline/ajax content by default,
            // if "smallBtn" option is not set to false
            smallBtn   : '<button data-fancybox-close class="fancybox-close-small glyphicon glyphicon-close-2" title="{{CLOSE}}"></button>'
        },
        keyboard: false,
        arrows: false,
        touch: false,
        onInit: function () {

        },
        beforeClose: function () {

        }
    });

    $("[data-fancybox--group]").fancybox({
        smallBtn : false,
        autoFocus : false,
        btnTpl : {
            slideShow  : '<button data-fancybox-play class="fancybox-button fancybox-button--play hide" title="{{PLAY_START}}"></button>',
            fullScreen : '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fullscreen hide" title="{{FULL_SCREEN}}"></button>',
            thumbs     : '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs hide" title="{{THUMBS}}"></button>',
            close      : '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"></button>',

            // This small close button will be appended to your html/inline/ajax content by default,
            // if "smallBtn" option is not set to false
            smallBtn   : '<button data-fancybox-close class="fancybox-close-small glyphicon glyphicon-close-2" title="{{CLOSE}}"></button>'
        },
        touch: false,
        onInit: function () {

        },
        beforeClose: function () {

        },
        afterClose: function () {

        }
    });

    $("[data-fancybox--gallery]").fancybox({
        smallBtn : false,
        autoFocus : false,
        btnTpl : {
            slideShow  : '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"></button>',
            fullScreen : '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fullscreen" title="{{FULL_SCREEN}}"></button>',
            thumbs     : '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"></button>',
            close      : '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"></button>',

            // This small close button will be appended to your html/inline/ajax content by default,
            // if "smallBtn" option is not set to false
            smallBtn   : '<button data-fancybox-close class="fancybox-close-small glyphicon glyphicon-close-2" title="{{CLOSE}}"></button>'
        },
        onInit: function () {

        },
        beforeClose: function () {

        }
    });
});

$(function () {
    var $form = $('.form-order-call');
    if ($form.length) {
        $form.parsley().on('field:validated', function () {
            var ok = $('.parsley-error').length === 0;
        }).on('form:submit', function (el) {
            var $form = el.$element;
            $form.find('[data-toggle="submit"]').attr('disabled', true);
            var data = $form.serialize();
            var responseMsg = 'Ваше сообщение успешно отправлено, мы Вам перезвоним!';

            $.ajax({
                type: $form.attr('method'),
                url: $form.attr('action'),
                data: data,
                success: function (data, textStatus, jqXHR) {

                },
                error: function (jqXHR, textStatus, errorThrown) {
                    console.log('При отправке возникла ошибка: ' + jqXHR.status);
                    responseMsg = 'При отправке возникла ошибка! "' + jqXHR.statusText + '"';
                },
                complete: function (jqXHR, textStatus) {
                    $form.find('[data-toggle="submit"]').attr('disabled', false).end().find('.text-field').val('').end().find('.checkbox__input').prop('checked', false);
                    $.fancybox.close();
                    $.fancybox.open('<div class="popup popup_size_652 popup_response_feedback container-fluid">' +
                        '<div class="popup__header"><h2 class="popup__title">' + responseMsg + '</h2></div>' +
                        '<button class="btn btn_4" data-fancybox-close="data-fancybox-close">Закрыть</button>' +
                        '</div>');
                }
            });
            return false;
        });
    }
});

function hasVal() {
    $('.text-field').on('blur', function () {
        if ($(this).val()) {
            $(this).addClass('text-field_has-val');
        }
        else {
            $(this).removeClass('text-field_has-val');
        }
    });
}

$(function () {
    hasVal();
    $('[data-mask]').each(function () {
        $(this).addClass('init-mask');
    });
});

$(document).ajaxComplete(function() {
    hasVal();
    $('[data-mask]').each(function () {
        if (!$(this).hasClass('init-mask')) {
            $(this).mask($(this).data('mask')).addClass('init-mask');
        }
    });
    $('[data-parsley-validate]').each(function () {
        $(this).parsley();
    });
});

if ($('.ya-map').length) {
    ymaps.ready(function () {
        var yaMaps = $('.ya-map');

        yaMaps.each(function () {
            var dataPlacemark = $(this).data('placemark');

            var myMap = new ymaps.Map(this, {
                center: dataPlacemark[0].coordinates,
                zoom: 17//,
                //bounds: $(this).hasClass('ya-map-route') ? [dataPlacemark[0].coordinates, dataPlacemark[dataPlacemark.length-1].coordinates] : false,
                //behaviors: ['dblClickZoom', 'multiTouch', 'rightMouseButtonMagnifier']
            });

            var arrCoords = [], myPlacemark;
            for (var i = 0; i < dataPlacemark.length; i++) {
                arrCoords.push(dataPlacemark[i].coordinates);
                myPlacemark = new ymaps.Placemark(dataPlacemark[i].coordinates, {
                    hintContent: dataPlacemark[i].hintContent,
                    balloonContent: dataPlacemark[i].balloonContent,
                    iconContent: ''
                }, {
                    // Опции.
                    // Необходимо указать данный тип макета.
                    iconLayout: 'default#imageWithContent',
                    // Своё изображение иконки метки.
                    iconImageHref: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48IURPQ1RZUEUgc3ZnIFBVQkxJQyAiLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4iICJodHRwOi8vd3d3LnczLm9yZy9HcmFwaGljcy9TVkcvMS4xL0RURC9zdmcxMS5kdGQiPjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjM1LjcyNHB4IiBoZWlnaHQ9IjUwcHgiIHZpZXdCb3g9IjIzOC4xMzggMjMxIDM1LjcyNCA1MCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAyMzguMTM4IDIzMSAzNS43MjQgNTAiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPjxwYXRoIGZpbGw9IiNFRTM0MjIiIGQ9Ik0yNTYuNjMsMjMxLjAxYy0xMC4xNTQtMC4zNDItMTguNDkzLDcuNzg3LTE4LjQ5MywxNy44NjRjMCwxMS40MzYsMTAuOTc1LDE5LjczNSwxNy4xMjYsMzEuNjcxYzAuMzEyLDAuNjA2LDEuMTg1LDAuNjA3LDEuNDk4LDAuMDAxYzUuNTY1LTEwLjc0LDE1LjA3NS0xNy45NDEsMTYuODM4LTI4LjI4OEMyNzUuNDI1LDI0MS41NTIsMjY3LjQ4NSwyMzEuMzc2LDI1Ni42MywyMzEuMDF6IE0yNTYuMDEyLDI1OC4yMzdjLTUuMTcxLDAtOS4zNjItNC4xOTItOS4zNjItOS4zNjNzNC4xOTItOS4zNjMsOS4zNjItOS4zNjNjNS4xNzEsMCw5LjM2Myw0LjE5Miw5LjM2Myw5LjM2M1MyNjEuMTgyLDI1OC4yMzcsMjU2LjAxMiwyNTguMjM3eiIvPjwvZz48L3N2Zz4=",
                    // Размеры метки.
                    iconImageSize: [32, 47],
                    // Смещение левого верхнего угла иконки относительно
                    // её "ножки" (точки привязки).
                    iconImageOffset: [-16, -47]
                });

                myMap.geoObjects.add(myPlacemark);
            }
            //myMap.setBounds(myMap.geoObjects.getBounds());
            $(window).on('resize.YaMap', function () {
                myMap.setCenter(dataPlacemark[0].coordinates);
            });

            /*
             // Создаем ломаную с помощью вспомогательного класса Polyline.
             var myPolyline = new ymaps.Polyline(arrCoords, {
             // Описываем свойства геообъекта.
             // Содержимое балуна.
             balloonContent: ""
             }, {
             // Задаем опции геообъекта.
             // Отключаем кнопку закрытия балуна.
             balloonCloseButton: false,
             // Цвет линии.
             strokeColor: "#d44c3f",
             // Ширина линии.
             strokeWidth: 2,
             // Коэффициент прозрачности.
             strokeOpacity: 1
             });
             // Добавляем линии на карту.
             myMap.geoObjects.add(myPolyline);*/
        });
    });
}

$(function () {
    $('body').on('click', '.stations__item', function (e) {
        e.preventDefault();
        if ($(e.target).attr('data-toggle') !== 'close-station-popup' && !$(e.target).closest('.stations__popup').length) {
            $('.stations__item').not($(this).toggleClass('stations__item_opened').find('.stations__popup').fadeToggle(200).end())
                .removeClass('stations__item_opened').find('.stations__popup').fadeOut(200);
        }
    }).on('click', '[data-toggle="close-station-popup"]', function (e) {
        $(this).closest('.stations__item').removeClass('stations__item_opened').find('.stations__popup').fadeOut(200);
    }).on('click', function (e) {
        if (!$(e.target).closest('.stations__item').length) {
            $('.stations__item').removeClass('stations__item_opened').find('.stations__popup').fadeOut(200);
        }
    });
});

$(function () {
    var $form = $('.form-order-call-2');
    if ($form.length) {
        $form.parsley().on('field:validated', function () {
            var ok = $('.parsley-error').length === 0;
        }).on('form:submit', function (el) {
            var $form = el.$element;
            $form.find('[data-toggle="submit"]').attr('disabled', true);
            var data = $form.serialize();
            var responseMsg = 'Ваше сообщение успешно отправлено, мы Вам перезвоним!';

            $.ajax({
                type: $form.attr('method'),
                url: $form.attr('action'),
                data: data,
                success: function (data, textStatus, jqXHR) {

                },
                error: function (jqXHR, textStatus, errorThrown) {
                    console.log('При отправке возникла ошибка: ' + jqXHR.status);
                    responseMsg = 'При отправке возникла ошибка! "' + jqXHR.statusText + '"';
                },
                complete: function (jqXHR, textStatus) {
                    $form.find('[data-toggle="submit"]').attr('disabled', false).end().find('.text-field').val('').end().find('.checkbox__input').prop('checked', false);
                    $.fancybox.close();
                    $.fancybox.open('<div class="popup popup_size_652 popup_response_feedback container-fluid">' +
                        '<div class="popup__header"><h2 class="popup__title">' + responseMsg + '</h2></div>' +
                        '<button class="btn btn_4" data-fancybox-close="data-fancybox-close">Закрыть</button>' +
                        '</div>');
                }
            });
            return false;
        });
    }
});

$(function () {
    $('.slider-main').slick({
        dots: false,
        arrows: false,
        infinite: true,
        speed: 300,
        fade: true,
        cssEase: 'linear',
        slidesToShow: 1,
        slidesToScroll: 1,
        mobileFirst: true,
        prevArrow: '<button type="button" class="slick-prev glyphicon glyphicon-angle-left"></button>',
        nextArrow: '<button type="button" class="slick-next glyphicon glyphicon-angle-right"></button>',
        autoplay: true,
        autoplaySpeed: 5000,
        zIndex: 1,
        lazyLoad: 'ondemand',
        pauseOnFocus: false,
        pauseOnHover: false,
        adaptiveHeight: false,
        responsive: [
            /*{
                breakpoint: 768,
                settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '40px',
                    slidesToShow: 3
                }
            }*/
        ]
    }).on('lazyLoaded', function (event, slick, image, imageSource) {
        $(image).closest('.slick-slide').removeClass('loading');
    });
});

$(function () {
    $('.slider-clients__inner').slick({
        dots: false,
        arrows: true,
        infinite: true,
        speed: 300,
        fade: false,
        cssEase: 'linear',
        slidesToShow: 1,
        slidesToScroll: 1,
        mobileFirst: true,
        prevArrow: '<button type="button" class="slick-prev glyphicon glyphicon-left-angle-bracket"></button>',
        nextArrow: '<button type="button" class="slick-next glyphicon glyphicon-right-angle-bracket"></button>',
        autoplay: true,
        autoplaySpeed: 5000,
        zIndex: 1,
        lazyLoad: 'ondemand',
        pauseOnFocus: false,
        pauseOnHover: false,
        adaptiveHeight: false,
        responsive: [
            {
                 breakpoint: 479,
                 settings: {
                     slidesToShow: 2
                 }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 1023,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 1269,
                settings: {
                    slidesToShow: 5
                }
            },
            {
                breakpoint: 1599,
                settings: {
                    slidesToShow: 6
                }
            }
        ]
    }).on('lazyLoaded', function (event, slick, image, imageSource) {
        $(image).closest('.slick-slide').removeClass('loading');
    });
});

$(function () {
    var $form = $('.form-feedback');
    if ($form.length) {
        $form.parsley().on('field:validated', function () {
            var ok = $('.parsley-error').length === 0;
        }).on('form:submit', function (el) {
            var $form = el.$element;
            $form.find('[data-toggle="submit"]').attr('disabled', true);
            var data = $form.serialize();
            var responseMsg = 'Ваше сообщение успешно отправлено, мы с Вами свяжемся!';

            $.ajax({
                type: $form.attr('method'),
                url: $form.attr('action'),
                data: data,
                success: function (data, textStatus, jqXHR) {

                },
                error: function (jqXHR, textStatus, errorThrown) {
                    console.log('При отправке возникла ошибка: ' + jqXHR.status);
                    responseMsg = 'При отправке возникла ошибка! "' + jqXHR.statusText + '"';
                },
                complete: function (jqXHR, textStatus) {
                    $form.find('[data-toggle="submit"]').attr('disabled', false).end().find('.text-field').val('').end().find('.checkbox__input').prop('checked', false);
                    $.fancybox.close();
                    $.fancybox.open('<div class="popup popup_size_652 popup_response_feedback container-fluid">' +
                        '<div class="popup__header"><h2 class="popup__title">' + responseMsg + '</h2></div>' +
                        '<button class="btn btn_4" data-fancybox-close="data-fancybox-close">Закрыть</button>' +
                        '</div>');
                }
            });
            return false;
        });
    }
});

$(function () {
    var $teamBox = $('.teambox'), $teamList = $('.teambox .team-list'), $teamView = $('.team-view');

    $('body').on('click', '.team-item__inner', function (e) {
        e.preventDefault();

        var $teamItem = $(this).closest('.team-item');

        var $imgSrc = $teamItem.find('.team-item__img').clone().toggleClass('team-item__img team-view__img').attr('style', '');
        var title = $teamItem.find('.team-item__title').html();
        var position = $teamItem.find('.team-item__position').html();
        var content = $teamItem.find('.team-item__content').html();

        $teamView.find('.team-view__img').remove()
            .end().find('.team-view__title').html('')
            .end().find('.team-view__position').html('')
            .end().find('.team-view__content').html('');

        $teamView.find('.team-view__img-resp').append($imgSrc)
            .end().find('.team-view__title').html(title)
            .end().find('.team-view__position').html(position)
            .end().find('.team-view__content').html(content);

        $teamBox.addClass('teambox_opened');
        //$teamView.find('.team-view__btn-close').focus();
    }).on('click', '[data-toggle="close-team-view"]', function (e) {
        e.preventDefault();

        $teamBox.removeClass('teambox_opened');
        //$teamView.find('.team-view__btn-close').blur();
    });

    $(window).on('resize.teamBox', function () {
        $teamView.css('margin-left', -$teamView.outerWidth()).show();
    }).triggerHandler('resize.teamBox');
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2UuanMiLCJoZWFkZXIuanMiLCJtZW51LmpzIiwicG9wdXAuanMiLCJmb3JtLW9yZGVyLWNhbGwuanMiLCJ0ZXh0LWZpZWxkLmpzIiwiY29udGFjdC1tYXAuanMiLCJzdGF0aW9ucy5qcyIsImZvcm0tb3JkZXItY2FsbC0yLmpzIiwic2xpZGVyLW1haW4uanMiLCJzbGlkZXItY2xpZW50cy5qcyIsImZvcm0tZmVlZGJhY2suanMiLCJ0ZWFtLWJveC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImJsb2Nrcy5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciAkc2NyZWVuU20gPSA3NjgsICRzY3JlZW5NZCA9IDEwMjQsICRzY3JlZW5MZyA9IDEyNzA7XG5cbnZhciAkZm9udFNpemVSb290ID0gMTYsICRmb250U2l6ZVJvb3RDb21wdXRlZCA9IHBhcnNlSW50KCQoJ2h0bWwnKS5jc3MoJ2ZvbnRTaXplJykpO1xuXG52YXIgJHNjcmVlblNtTWluID0gJHNjcmVlblNtLyRmb250U2l6ZVJvb3QgKyAnZW0nOyBjb25zb2xlLmxvZygnJHNjcmVlblNtTWluID0gJyArICRzY3JlZW5TbU1pbiArICcgKCcgKyAkc2NyZWVuU20gKyAncHgpJyk7XG52YXIgJHNjcmVlbk1kTWluID0gJHNjcmVlbk1kLyRmb250U2l6ZVJvb3QgKyAnZW0nOyBjb25zb2xlLmxvZygnJHNjcmVlbk1kTWluID0gJyArICRzY3JlZW5NZE1pbiArICcgKCcgKyAkc2NyZWVuTWQgKyAncHgpJyk7XG52YXIgJHNjcmVlbkxnTWluID0gJHNjcmVlbkxnLyRmb250U2l6ZVJvb3QgKyAnZW0nOyBjb25zb2xlLmxvZygnJHNjcmVlbkxnTWluID0gJyArICRzY3JlZW5MZ01pbiArICcgKCcgKyAkc2NyZWVuTGcgKyAncHgpJyk7XG5cbnZhciAkc2NyZWVuWHNNYXggPSAoJHNjcmVlblNtIC0gMSkvJGZvbnRTaXplUm9vdCArICdlbSc7IGNvbnNvbGUubG9nKCckc2NyZWVuWHNNYXggPSAnICsgJHNjcmVlblhzTWF4KTtcbnZhciAkc2NyZWVuU21NYXggPSAoJHNjcmVlbk1kIC0gMSkvJGZvbnRTaXplUm9vdCArICdlbSc7IGNvbnNvbGUubG9nKCckc2NyZWVuU21NYXggPSAnICsgJHNjcmVlblNtTWF4KTtcbnZhciAkc2NyZWVuTWRNYXggPSAoJHNjcmVlbkxnIC0gMSkvJGZvbnRTaXplUm9vdCArICdlbSc7IGNvbnNvbGUubG9nKCckc2NyZWVuTWRNYXggPSAnICsgJHNjcmVlbk1kTWF4KTtcblxuJCgnLmxhenknKS5MYXp5KCk7XG4iLCIkKGZ1bmN0aW9uICgpIHtcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJ1tkYXRhLXRvZ2dsZT1cIm1lbnVcIl0nLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2dseXBoaWNvbi1tZW51LWxpbmVzIGdseXBoaWNvbi1jYW5jZWwnKTtcbiAgICAgICAgJCgnLmhlYWRlcl9fcGFuZWwnKS5mYWRlVG9nZ2xlKDIwMCk7XG4gICAgICAgICQoJ2h0bWwnKS50b2dnbGVDbGFzcygnb3BlbmVkLXBhbmVsJyk7XG4gICAgfSk7XG59KTsiLCIkKGZ1bmN0aW9uICgpIHtcbiAgICAkKCdodG1sLnRvdWNoZXZlbnRzJykub24oJ2NsaWNrJywgJy5tZW51X19pdGVtX3N1Ym1lbnU6bm90KC5tZW51X19pdGVtX29wZW5lZCk+Lm1lbnVfX2J0bicsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgJCgnLm1lbnVfX3N1Ym1lbnUnKVxuICAgICAgICAgICAgLm5vdCgkKHRoaXMpLm5leHQoJy5tZW51X19zdWJtZW51JykuYWRkQ2xhc3MoJ21lbnVfX3N1Ym1lbnVfb3BlbmVkJykuc2xpZGVEb3duKDIwMCkucGFyZW50KCkuYWRkQ2xhc3MoJ21lbnVfX2l0ZW1fb3BlbmVkJykuZW5kKCkpXG4gICAgICAgICAgICAubm90KCQodGhpcykucGFyZW50cygnLm1lbnVfX3N1Ym1lbnUnKSlcbiAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnbWVudV9fc3VibWVudV9vcGVuZWQnKS5zbGlkZVVwKDIwMCkucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ21lbnVfX2l0ZW1fb3BlbmVkJyk7XG4gICAgfSkub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKCEkKGUudGFyZ2V0KS5jbG9zZXN0KCcubWVudScpLmxlbmd0aCkge1xuICAgICAgICAgICAgJCgnLm1lbnVfX3N1Ym1lbnUnKS5yZW1vdmVDbGFzcygnbWVudV9fc3VibWVudV9vcGVuZWQnKS5zbGlkZVVwKDIwMCkucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ21lbnVfX2l0ZW1fb3BlbmVkJyk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHZhciB0aW1lckhvdmVyTWVudUl0ZW07XG4gICAgJCgnaHRtbC5uby10b3VjaGV2ZW50cyAubWVudV9faXRlbV9zdWJtZW51JykuaG92ZXIoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyICRtZW51SXRlbSA9ICQodGhpcyk7XG4gICAgICAgIHRpbWVySG92ZXJNZW51SXRlbSA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJG1lbnVJdGVtLmNoaWxkcmVuKCcubWVudV9fc3VibWVudScpLmFkZENsYXNzKCdtZW51X19zdWJtZW51X29wZW5lZCcpLnNsaWRlRG93bigyMDApLnBhcmVudCgpLmFkZENsYXNzKCdtZW51X19pdGVtX29wZW5lZCcpO1xuICAgICAgICB9LCAxMDApO1xuXG4gICAgfSwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyICRtZW51SXRlbSA9ICQodGhpcyk7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lckhvdmVyTWVudUl0ZW0pO1xuICAgICAgICAkbWVudUl0ZW0uY2hpbGRyZW4oJy5tZW51X19zdWJtZW51JykucmVtb3ZlQ2xhc3MoJ21lbnVfX3N1Ym1lbnVfb3BlbmVkJykuc2xpZGVVcCgyMDApLnBhcmVudCgpLnJlbW92ZUNsYXNzKCdtZW51X19pdGVtX29wZW5lZCcpO1xuICAgIH0pO1xuXG4gICAgJCh3aW5kb3cpLm9uKCdyZXNpemUuU3VibWVudScsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCgnLm1lbnVfX3N1Ym1lbnUgLmNvbnRhaW5lci1mbHVpZCcpLmNzcygncGFkZGluZy1sZWZ0JywgJCgnLmhlYWRlcl9fdG9wJykud2lkdGgoKVxuICAgICAgICAgICAgLSAkKCcuaGVhZGVyX19wYW5lbCcpLndpZHRoKClcbiAgICAgICAgICAgICsgcGFyc2VJbnQoJCgnLm1lbnVfX2l0ZW1fbHZsXzEnKS5jc3MoJ3BhZGRpbmctbGVmdCcpKSArIHBhcnNlSW50KCQoJy5oZWFkZXJfX3RvcCcpLmNzcygncGFkZGluZy1sZWZ0JykpIC0gcGFyc2VJbnQoJCgnLm1lbnVfX2J0bl9sdmxfMicpLmNzcygncGFkZGluZy1sZWZ0JykpKTtcbiAgICB9KS50cmlnZ2VySGFuZGxlcigncmVzaXplLlN1Ym1lbnUnKTtcbn0pOyIsIiQuZmFuY3lib3guZGVmYXVsdHMuaGFzaCA9IGZhbHNlO1xuJC5mYW5jeWJveC5kZWZhdWx0cy50b3VjaCA9IGZhbHNlO1xuJC5mYW5jeWJveC5kZWZhdWx0cy5idG5UcGwuc21hbGxCdG4gPSAnPGJ1dHRvbiBkYXRhLWZhbmN5Ym94LWNsb3NlIGNsYXNzPVwiYnRuIHBvcHVwX19idG4tY2xvc2UgZ2x5cGhpY29uIGdseXBoaWNvbi1jYW5jZWxcIiB0aXRsZT1cItCX0LDQutGA0YvRgtGMXCI+PC9idXR0b24+JztcblxuJChmdW5jdGlvbiAoKSB7XG4gICAgLy8kKFwiW2RhdGEtZmFuY3lib3hdXCIpLmZhbmN5Ym94KCk7XG5cbiAgICAkKFwiW2RhdGEtZmFuY3lib3gtLXNpbmdsZV1cIikuZmFuY3lib3goe1xuICAgICAgICBzbWFsbEJ0biA6IGZhbHNlLFxuICAgICAgICBhdXRvRm9jdXMgOiBmYWxzZSxcbiAgICAgICAgYnRuVHBsIDoge1xuICAgICAgICAgICAgc2xpZGVTaG93ICA6ICc8YnV0dG9uIGRhdGEtZmFuY3lib3gtcGxheSBjbGFzcz1cImZhbmN5Ym94LWJ1dHRvbiBmYW5jeWJveC1idXR0b24tLXBsYXkgaGlkZVwiIHRpdGxlPVwie3tQTEFZX1NUQVJUfX1cIj48L2J1dHRvbj4nLFxuICAgICAgICAgICAgZnVsbFNjcmVlbiA6ICc8YnV0dG9uIGRhdGEtZmFuY3lib3gtZnVsbHNjcmVlbiBjbGFzcz1cImZhbmN5Ym94LWJ1dHRvbiBmYW5jeWJveC1idXR0b24tLWZ1bGxzY3JlZW4gaGlkZVwiIHRpdGxlPVwie3tGVUxMX1NDUkVFTn19XCI+PC9idXR0b24+JyxcbiAgICAgICAgICAgIHRodW1icyAgICAgOiAnPGJ1dHRvbiBkYXRhLWZhbmN5Ym94LXRodW1icyBjbGFzcz1cImZhbmN5Ym94LWJ1dHRvbiBmYW5jeWJveC1idXR0b24tLXRodW1icyBoaWRlXCIgdGl0bGU9XCJ7e1RIVU1CU319XCI+PC9idXR0b24+JyxcbiAgICAgICAgICAgIGNsb3NlICAgICAgOiAnPGJ1dHRvbiBkYXRhLWZhbmN5Ym94LWNsb3NlIGNsYXNzPVwiZmFuY3lib3gtYnV0dG9uIGZhbmN5Ym94LWJ1dHRvbi0tY2xvc2VcIiB0aXRsZT1cInt7Q0xPU0V9fVwiPjwvYnV0dG9uPicsXG5cbiAgICAgICAgICAgIC8vIFRoaXMgc21hbGwgY2xvc2UgYnV0dG9uIHdpbGwgYmUgYXBwZW5kZWQgdG8geW91ciBodG1sL2lubGluZS9hamF4IGNvbnRlbnQgYnkgZGVmYXVsdCxcbiAgICAgICAgICAgIC8vIGlmIFwic21hbGxCdG5cIiBvcHRpb24gaXMgbm90IHNldCB0byBmYWxzZVxuICAgICAgICAgICAgc21hbGxCdG4gICA6ICc8YnV0dG9uIGRhdGEtZmFuY3lib3gtY2xvc2UgY2xhc3M9XCJmYW5jeWJveC1jbG9zZS1zbWFsbCBnbHlwaGljb24gZ2x5cGhpY29uLWNsb3NlLTJcIiB0aXRsZT1cInt7Q0xPU0V9fVwiPjwvYnV0dG9uPidcbiAgICAgICAgfSxcbiAgICAgICAga2V5Ym9hcmQ6IGZhbHNlLFxuICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICB0b3VjaDogZmFsc2UsXG4gICAgICAgIG9uSW5pdDogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIH0sXG4gICAgICAgIGJlZm9yZUNsb3NlOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgJChcIltkYXRhLWZhbmN5Ym94LS1ncm91cF1cIikuZmFuY3lib3goe1xuICAgICAgICBzbWFsbEJ0biA6IGZhbHNlLFxuICAgICAgICBhdXRvRm9jdXMgOiBmYWxzZSxcbiAgICAgICAgYnRuVHBsIDoge1xuICAgICAgICAgICAgc2xpZGVTaG93ICA6ICc8YnV0dG9uIGRhdGEtZmFuY3lib3gtcGxheSBjbGFzcz1cImZhbmN5Ym94LWJ1dHRvbiBmYW5jeWJveC1idXR0b24tLXBsYXkgaGlkZVwiIHRpdGxlPVwie3tQTEFZX1NUQVJUfX1cIj48L2J1dHRvbj4nLFxuICAgICAgICAgICAgZnVsbFNjcmVlbiA6ICc8YnV0dG9uIGRhdGEtZmFuY3lib3gtZnVsbHNjcmVlbiBjbGFzcz1cImZhbmN5Ym94LWJ1dHRvbiBmYW5jeWJveC1idXR0b24tLWZ1bGxzY3JlZW4gaGlkZVwiIHRpdGxlPVwie3tGVUxMX1NDUkVFTn19XCI+PC9idXR0b24+JyxcbiAgICAgICAgICAgIHRodW1icyAgICAgOiAnPGJ1dHRvbiBkYXRhLWZhbmN5Ym94LXRodW1icyBjbGFzcz1cImZhbmN5Ym94LWJ1dHRvbiBmYW5jeWJveC1idXR0b24tLXRodW1icyBoaWRlXCIgdGl0bGU9XCJ7e1RIVU1CU319XCI+PC9idXR0b24+JyxcbiAgICAgICAgICAgIGNsb3NlICAgICAgOiAnPGJ1dHRvbiBkYXRhLWZhbmN5Ym94LWNsb3NlIGNsYXNzPVwiZmFuY3lib3gtYnV0dG9uIGZhbmN5Ym94LWJ1dHRvbi0tY2xvc2VcIiB0aXRsZT1cInt7Q0xPU0V9fVwiPjwvYnV0dG9uPicsXG5cbiAgICAgICAgICAgIC8vIFRoaXMgc21hbGwgY2xvc2UgYnV0dG9uIHdpbGwgYmUgYXBwZW5kZWQgdG8geW91ciBodG1sL2lubGluZS9hamF4IGNvbnRlbnQgYnkgZGVmYXVsdCxcbiAgICAgICAgICAgIC8vIGlmIFwic21hbGxCdG5cIiBvcHRpb24gaXMgbm90IHNldCB0byBmYWxzZVxuICAgICAgICAgICAgc21hbGxCdG4gICA6ICc8YnV0dG9uIGRhdGEtZmFuY3lib3gtY2xvc2UgY2xhc3M9XCJmYW5jeWJveC1jbG9zZS1zbWFsbCBnbHlwaGljb24gZ2x5cGhpY29uLWNsb3NlLTJcIiB0aXRsZT1cInt7Q0xPU0V9fVwiPjwvYnV0dG9uPidcbiAgICAgICAgfSxcbiAgICAgICAgdG91Y2g6IGZhbHNlLFxuICAgICAgICBvbkluaXQ6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICB9LFxuICAgICAgICBiZWZvcmVDbG9zZTogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIH0sXG4gICAgICAgIGFmdGVyQ2xvc2U6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAkKFwiW2RhdGEtZmFuY3lib3gtLWdhbGxlcnldXCIpLmZhbmN5Ym94KHtcbiAgICAgICAgc21hbGxCdG4gOiBmYWxzZSxcbiAgICAgICAgYXV0b0ZvY3VzIDogZmFsc2UsXG4gICAgICAgIGJ0blRwbCA6IHtcbiAgICAgICAgICAgIHNsaWRlU2hvdyAgOiAnPGJ1dHRvbiBkYXRhLWZhbmN5Ym94LXBsYXkgY2xhc3M9XCJmYW5jeWJveC1idXR0b24gZmFuY3lib3gtYnV0dG9uLS1wbGF5XCIgdGl0bGU9XCJ7e1BMQVlfU1RBUlR9fVwiPjwvYnV0dG9uPicsXG4gICAgICAgICAgICBmdWxsU2NyZWVuIDogJzxidXR0b24gZGF0YS1mYW5jeWJveC1mdWxsc2NyZWVuIGNsYXNzPVwiZmFuY3lib3gtYnV0dG9uIGZhbmN5Ym94LWJ1dHRvbi0tZnVsbHNjcmVlblwiIHRpdGxlPVwie3tGVUxMX1NDUkVFTn19XCI+PC9idXR0b24+JyxcbiAgICAgICAgICAgIHRodW1icyAgICAgOiAnPGJ1dHRvbiBkYXRhLWZhbmN5Ym94LXRodW1icyBjbGFzcz1cImZhbmN5Ym94LWJ1dHRvbiBmYW5jeWJveC1idXR0b24tLXRodW1ic1wiIHRpdGxlPVwie3tUSFVNQlN9fVwiPjwvYnV0dG9uPicsXG4gICAgICAgICAgICBjbG9zZSAgICAgIDogJzxidXR0b24gZGF0YS1mYW5jeWJveC1jbG9zZSBjbGFzcz1cImZhbmN5Ym94LWJ1dHRvbiBmYW5jeWJveC1idXR0b24tLWNsb3NlXCIgdGl0bGU9XCJ7e0NMT1NFfX1cIj48L2J1dHRvbj4nLFxuXG4gICAgICAgICAgICAvLyBUaGlzIHNtYWxsIGNsb3NlIGJ1dHRvbiB3aWxsIGJlIGFwcGVuZGVkIHRvIHlvdXIgaHRtbC9pbmxpbmUvYWpheCBjb250ZW50IGJ5IGRlZmF1bHQsXG4gICAgICAgICAgICAvLyBpZiBcInNtYWxsQnRuXCIgb3B0aW9uIGlzIG5vdCBzZXQgdG8gZmFsc2VcbiAgICAgICAgICAgIHNtYWxsQnRuICAgOiAnPGJ1dHRvbiBkYXRhLWZhbmN5Ym94LWNsb3NlIGNsYXNzPVwiZmFuY3lib3gtY2xvc2Utc21hbGwgZ2x5cGhpY29uIGdseXBoaWNvbi1jbG9zZS0yXCIgdGl0bGU9XCJ7e0NMT1NFfX1cIj48L2J1dHRvbj4nXG4gICAgICAgIH0sXG4gICAgICAgIG9uSW5pdDogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIH0sXG4gICAgICAgIGJlZm9yZUNsb3NlOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgfVxuICAgIH0pO1xufSk7IiwiJChmdW5jdGlvbiAoKSB7XG4gICAgdmFyICRmb3JtID0gJCgnLmZvcm0tb3JkZXItY2FsbCcpO1xuICAgIGlmICgkZm9ybS5sZW5ndGgpIHtcbiAgICAgICAgJGZvcm0ucGFyc2xleSgpLm9uKCdmaWVsZDp2YWxpZGF0ZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgb2sgPSAkKCcucGFyc2xleS1lcnJvcicpLmxlbmd0aCA9PT0gMDtcbiAgICAgICAgfSkub24oJ2Zvcm06c3VibWl0JywgZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgICB2YXIgJGZvcm0gPSBlbC4kZWxlbWVudDtcbiAgICAgICAgICAgICRmb3JtLmZpbmQoJ1tkYXRhLXRvZ2dsZT1cInN1Ym1pdFwiXScpLmF0dHIoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgICAgICAgICB2YXIgZGF0YSA9ICRmb3JtLnNlcmlhbGl6ZSgpO1xuICAgICAgICAgICAgdmFyIHJlc3BvbnNlTXNnID0gJ9CS0LDRiNC1INGB0L7QvtCx0YnQtdC90LjQtSDRg9GB0L/QtdGI0L3QviDQvtGC0L/RgNCw0LLQu9C10L3Qviwg0LzRiyDQktCw0Lwg0L/QtdGA0LXQt9Cy0L7QvdC40LwhJztcblxuICAgICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgICAgICB0eXBlOiAkZm9ybS5hdHRyKCdtZXRob2QnKSxcbiAgICAgICAgICAgICAgICB1cmw6ICRmb3JtLmF0dHIoJ2FjdGlvbicpLFxuICAgICAgICAgICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEsIHRleHRTdGF0dXMsIGpxWEhSKSB7XG5cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfQn9GA0Lgg0L7RgtC/0YDQsNCy0LrQtSDQstC+0LfQvdC40LrQu9CwINC+0YjQuNCx0LrQsDogJyArIGpxWEhSLnN0YXR1cyk7XG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlTXNnID0gJ9Cf0YDQuCDQvtGC0L/RgNCw0LLQutC1INCy0L7Qt9C90LjQutC70LAg0L7RiNC40LHQutCwISBcIicgKyBqcVhIUi5zdGF0dXNUZXh0ICsgJ1wiJztcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMpIHtcbiAgICAgICAgICAgICAgICAgICAgJGZvcm0uZmluZCgnW2RhdGEtdG9nZ2xlPVwic3VibWl0XCJdJykuYXR0cignZGlzYWJsZWQnLCBmYWxzZSkuZW5kKCkuZmluZCgnLnRleHQtZmllbGQnKS52YWwoJycpLmVuZCgpLmZpbmQoJy5jaGVja2JveF9faW5wdXQnKS5wcm9wKCdjaGVja2VkJywgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAkLmZhbmN5Ym94LmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgICAgICQuZmFuY3lib3gub3BlbignPGRpdiBjbGFzcz1cInBvcHVwIHBvcHVwX3NpemVfNjUyIHBvcHVwX3Jlc3BvbnNlX2ZlZWRiYWNrIGNvbnRhaW5lci1mbHVpZFwiPicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJwb3B1cF9faGVhZGVyXCI+PGgyIGNsYXNzPVwicG9wdXBfX3RpdGxlXCI+JyArIHJlc3BvbnNlTXNnICsgJzwvaDI+PC9kaXY+JyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnPGJ1dHRvbiBjbGFzcz1cImJ0biBidG5fNFwiIGRhdGEtZmFuY3lib3gtY2xvc2U9XCJkYXRhLWZhbmN5Ym94LWNsb3NlXCI+0JfQsNC60YDRi9GC0Yw8L2J1dHRvbj4nICtcbiAgICAgICAgICAgICAgICAgICAgICAgICc8L2Rpdj4nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfVxufSk7IiwiZnVuY3Rpb24gaGFzVmFsKCkge1xuICAgICQoJy50ZXh0LWZpZWxkJykub24oJ2JsdXInLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICgkKHRoaXMpLnZhbCgpKSB7XG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCd0ZXh0LWZpZWxkX2hhcy12YWwnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ3RleHQtZmllbGRfaGFzLXZhbCcpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbiQoZnVuY3Rpb24gKCkge1xuICAgIGhhc1ZhbCgpO1xuICAgICQoJ1tkYXRhLW1hc2tdJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2luaXQtbWFzaycpO1xuICAgIH0pO1xufSk7XG5cbiQoZG9jdW1lbnQpLmFqYXhDb21wbGV0ZShmdW5jdGlvbigpIHtcbiAgICBoYXNWYWwoKTtcbiAgICAkKCdbZGF0YS1tYXNrXScpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoISQodGhpcykuaGFzQ2xhc3MoJ2luaXQtbWFzaycpKSB7XG4gICAgICAgICAgICAkKHRoaXMpLm1hc2soJCh0aGlzKS5kYXRhKCdtYXNrJykpLmFkZENsYXNzKCdpbml0LW1hc2snKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgICQoJ1tkYXRhLXBhcnNsZXktdmFsaWRhdGVdJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykucGFyc2xleSgpO1xuICAgIH0pO1xufSk7IiwiaWYgKCQoJy55YS1tYXAnKS5sZW5ndGgpIHtcbiAgICB5bWFwcy5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB5YU1hcHMgPSAkKCcueWEtbWFwJyk7XG5cbiAgICAgICAgeWFNYXBzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGRhdGFQbGFjZW1hcmsgPSAkKHRoaXMpLmRhdGEoJ3BsYWNlbWFyaycpO1xuXG4gICAgICAgICAgICB2YXIgbXlNYXAgPSBuZXcgeW1hcHMuTWFwKHRoaXMsIHtcbiAgICAgICAgICAgICAgICBjZW50ZXI6IGRhdGFQbGFjZW1hcmtbMF0uY29vcmRpbmF0ZXMsXG4gICAgICAgICAgICAgICAgem9vbTogMTcvLyxcbiAgICAgICAgICAgICAgICAvL2JvdW5kczogJCh0aGlzKS5oYXNDbGFzcygneWEtbWFwLXJvdXRlJykgPyBbZGF0YVBsYWNlbWFya1swXS5jb29yZGluYXRlcywgZGF0YVBsYWNlbWFya1tkYXRhUGxhY2VtYXJrLmxlbmd0aC0xXS5jb29yZGluYXRlc10gOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAvL2JlaGF2aW9yczogWydkYmxDbGlja1pvb20nLCAnbXVsdGlUb3VjaCcsICdyaWdodE1vdXNlQnV0dG9uTWFnbmlmaWVyJ11cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB2YXIgYXJyQ29vcmRzID0gW10sIG15UGxhY2VtYXJrO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkYXRhUGxhY2VtYXJrLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgYXJyQ29vcmRzLnB1c2goZGF0YVBsYWNlbWFya1tpXS5jb29yZGluYXRlcyk7XG4gICAgICAgICAgICAgICAgbXlQbGFjZW1hcmsgPSBuZXcgeW1hcHMuUGxhY2VtYXJrKGRhdGFQbGFjZW1hcmtbaV0uY29vcmRpbmF0ZXMsIHtcbiAgICAgICAgICAgICAgICAgICAgaGludENvbnRlbnQ6IGRhdGFQbGFjZW1hcmtbaV0uaGludENvbnRlbnQsXG4gICAgICAgICAgICAgICAgICAgIGJhbGxvb25Db250ZW50OiBkYXRhUGxhY2VtYXJrW2ldLmJhbGxvb25Db250ZW50LFxuICAgICAgICAgICAgICAgICAgICBpY29uQ29udGVudDogJydcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIC8vINCe0L/RhtC40LguXG4gICAgICAgICAgICAgICAgICAgIC8vINCd0LXQvtCx0YXQvtC00LjQvNC+INGD0LrQsNC30LDRgtGMINC00LDQvdC90YvQuSDRgtC40L8g0LzQsNC60LXRgtCwLlxuICAgICAgICAgICAgICAgICAgICBpY29uTGF5b3V0OiAnZGVmYXVsdCNpbWFnZVdpdGhDb250ZW50JyxcbiAgICAgICAgICAgICAgICAgICAgLy8g0KHQstC+0ZEg0LjQt9C+0LHRgNCw0LbQtdC90LjQtSDQuNC60L7QvdC60Lgg0LzQtdGC0LrQuC5cbiAgICAgICAgICAgICAgICAgICAgaWNvbkltYWdlSHJlZjogXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlkWFJtTFRnaVB6NDhJVVJQUTFSWlVFVWdjM1puSUZCVlFreEpReUFpTFM4dlZ6TkRMeTlFVkVRZ1UxWkhJREV1TVM4dlJVNGlJQ0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTlIY21Gd2FHbGpjeTlUVmtjdk1TNHhMMFJVUkM5emRtY3hNUzVrZEdRaVBqeHpkbWNnZG1WeWMybHZiajBpTVM0eElpQnBaRDBpUTJGd1lWOHhJaUI0Yld4dWN6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY2lJSGh0Ykc1ek9uaHNhVzVyUFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eE9UazVMM2hzYVc1cklpQjRQU0l3Y0hnaUlIazlJakJ3ZUNJZ2QybGtkR2c5SWpNMUxqY3lOSEI0SWlCb1pXbG5hSFE5SWpVd2NIZ2lJSFpwWlhkQ2IzZzlJakl6T0M0eE16Z2dNak14SURNMUxqY3lOQ0ExTUNJZ1pXNWhZbXhsTFdKaFkydG5jbTkxYm1ROUltNWxkeUF5TXpndU1UTTRJREl6TVNBek5TNDNNalFnTlRBaUlIaHRiRHB6Y0dGalpUMGljSEpsYzJWeWRtVWlQanhuUGp4d1lYUm9JR1pwYkd3OUlpTkZSVE0wTWpJaUlHUTlJazB5TlRZdU5qTXNNak14TGpBeFl5MHhNQzR4TlRRdE1DNHpOREl0TVRndU5Ea3pMRGN1TnpnM0xURTRMalE1TXl3eE55NDROalJqTUN3eE1TNDBNellzTVRBdU9UYzFMREU1TGpjek5Td3hOeTR4TWpZc016RXVOamN4WXpBdU16RXlMREF1TmpBMkxERXVNVGcxTERBdU5qQTNMREV1TkRrNExEQXVNREF4WXpVdU5UWTFMVEV3TGpjMExERTFMakEzTlMweE55NDVOREVzTVRZdU9ETTRMVEk0TGpJNE9FTXlOelV1TkRJMUxESTBNUzQxTlRJc01qWTNMalE0TlN3eU16RXVNemMyTERJMU5pNDJNeXd5TXpFdU1ERjZJRTB5TlRZdU1ERXlMREkxT0M0eU16ZGpMVFV1TVRjeExEQXRPUzR6TmpJdE5DNHhPVEl0T1M0ek5qSXRPUzR6TmpOek5DNHhPVEl0T1M0ek5qTXNPUzR6TmpJdE9TNHpOak5qTlM0eE56RXNNQ3c1TGpNMk15dzBMakU1TWl3NUxqTTJNeXc1TGpNMk0xTXlOakV1TVRneUxESTFPQzR5TXpjc01qVTJMakF4TWl3eU5UZ3VNak0zZWlJdlBqd3ZaejQ4TDNOMlp6ND1cIixcbiAgICAgICAgICAgICAgICAgICAgLy8g0KDQsNC30LzQtdGA0Ysg0LzQtdGC0LrQuC5cbiAgICAgICAgICAgICAgICAgICAgaWNvbkltYWdlU2l6ZTogWzMyLCA0N10sXG4gICAgICAgICAgICAgICAgICAgIC8vINCh0LzQtdGJ0LXQvdC40LUg0LvQtdCy0L7Qs9C+INCy0LXRgNGF0L3QtdCz0L4g0YPQs9C70LAg0LjQutC+0L3QutC4INC+0YLQvdC+0YHQuNGC0LXQu9GM0L3QvlxuICAgICAgICAgICAgICAgICAgICAvLyDQtdGRIFwi0L3QvtC20LrQuFwiICjRgtC+0YfQutC4INC/0YDQuNCy0Y/Qt9C60LgpLlxuICAgICAgICAgICAgICAgICAgICBpY29uSW1hZ2VPZmZzZXQ6IFstMTYsIC00N11cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIG15TWFwLmdlb09iamVjdHMuYWRkKG15UGxhY2VtYXJrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vbXlNYXAuc2V0Qm91bmRzKG15TWFwLmdlb09iamVjdHMuZ2V0Qm91bmRzKCkpO1xuICAgICAgICAgICAgJCh3aW5kb3cpLm9uKCdyZXNpemUuWWFNYXAnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgbXlNYXAuc2V0Q2VudGVyKGRhdGFQbGFjZW1hcmtbMF0uY29vcmRpbmF0ZXMpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAgLy8g0KHQvtC30LTQsNC10Lwg0LvQvtC80LDQvdGD0Y4g0YEg0L/QvtC80L7RidGM0Y4g0LLRgdC/0L7QvNC+0LPQsNGC0LXQu9GM0L3QvtCz0L4g0LrQu9Cw0YHRgdCwIFBvbHlsaW5lLlxuICAgICAgICAgICAgIHZhciBteVBvbHlsaW5lID0gbmV3IHltYXBzLlBvbHlsaW5lKGFyckNvb3Jkcywge1xuICAgICAgICAgICAgIC8vINCe0L/QuNGB0YvQstCw0LXQvCDRgdCy0L7QudGB0YLQstCwINCz0LXQvtC+0LHRitC10LrRgtCwLlxuICAgICAgICAgICAgIC8vINCh0L7QtNC10YDQttC40LzQvtC1INCx0LDQu9GD0L3QsC5cbiAgICAgICAgICAgICBiYWxsb29uQ29udGVudDogXCJcIlxuICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAvLyDQl9Cw0LTQsNC10Lwg0L7Qv9GG0LjQuCDQs9C10L7QvtCx0YrQtdC60YLQsC5cbiAgICAgICAgICAgICAvLyDQntGC0LrQu9GO0YfQsNC10Lwg0LrQvdC+0L/QutGDINC30LDQutGA0YvRgtC40Y8g0LHQsNC70YPQvdCwLlxuICAgICAgICAgICAgIGJhbGxvb25DbG9zZUJ1dHRvbjogZmFsc2UsXG4gICAgICAgICAgICAgLy8g0KbQstC10YIg0LvQuNC90LjQuC5cbiAgICAgICAgICAgICBzdHJva2VDb2xvcjogXCIjZDQ0YzNmXCIsXG4gICAgICAgICAgICAgLy8g0KjQuNGA0LjQvdCwINC70LjQvdC40LguXG4gICAgICAgICAgICAgc3Ryb2tlV2lkdGg6IDIsXG4gICAgICAgICAgICAgLy8g0JrQvtGN0YTRhNC40YbQuNC10L3RgiDQv9GA0L7Qt9GA0LDRh9C90L7RgdGC0LguXG4gICAgICAgICAgICAgc3Ryb2tlT3BhY2l0eTogMVxuICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgIC8vINCU0L7QsdCw0LLQu9GP0LXQvCDQu9C40L3QuNC4INC90LAg0LrQsNGA0YLRgy5cbiAgICAgICAgICAgICBteU1hcC5nZW9PYmplY3RzLmFkZChteVBvbHlsaW5lKTsqL1xuICAgICAgICB9KTtcbiAgICB9KTtcbn0iLCIkKGZ1bmN0aW9uICgpIHtcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJy5zdGF0aW9uc19faXRlbScsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKCQoZS50YXJnZXQpLmF0dHIoJ2RhdGEtdG9nZ2xlJykgIT09ICdjbG9zZS1zdGF0aW9uLXBvcHVwJyAmJiAhJChlLnRhcmdldCkuY2xvc2VzdCgnLnN0YXRpb25zX19wb3B1cCcpLmxlbmd0aCkge1xuICAgICAgICAgICAgJCgnLnN0YXRpb25zX19pdGVtJykubm90KCQodGhpcykudG9nZ2xlQ2xhc3MoJ3N0YXRpb25zX19pdGVtX29wZW5lZCcpLmZpbmQoJy5zdGF0aW9uc19fcG9wdXAnKS5mYWRlVG9nZ2xlKDIwMCkuZW5kKCkpXG4gICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdzdGF0aW9uc19faXRlbV9vcGVuZWQnKS5maW5kKCcuc3RhdGlvbnNfX3BvcHVwJykuZmFkZU91dCgyMDApO1xuICAgICAgICB9XG4gICAgfSkub24oJ2NsaWNrJywgJ1tkYXRhLXRvZ2dsZT1cImNsb3NlLXN0YXRpb24tcG9wdXBcIl0nLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJy5zdGF0aW9uc19faXRlbScpLnJlbW92ZUNsYXNzKCdzdGF0aW9uc19faXRlbV9vcGVuZWQnKS5maW5kKCcuc3RhdGlvbnNfX3BvcHVwJykuZmFkZU91dCgyMDApO1xuICAgIH0pLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmICghJChlLnRhcmdldCkuY2xvc2VzdCgnLnN0YXRpb25zX19pdGVtJykubGVuZ3RoKSB7XG4gICAgICAgICAgICAkKCcuc3RhdGlvbnNfX2l0ZW0nKS5yZW1vdmVDbGFzcygnc3RhdGlvbnNfX2l0ZW1fb3BlbmVkJykuZmluZCgnLnN0YXRpb25zX19wb3B1cCcpLmZhZGVPdXQoMjAwKTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7IiwiJChmdW5jdGlvbiAoKSB7XG4gICAgdmFyICRmb3JtID0gJCgnLmZvcm0tb3JkZXItY2FsbC0yJyk7XG4gICAgaWYgKCRmb3JtLmxlbmd0aCkge1xuICAgICAgICAkZm9ybS5wYXJzbGV5KCkub24oJ2ZpZWxkOnZhbGlkYXRlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBvayA9ICQoJy5wYXJzbGV5LWVycm9yJykubGVuZ3RoID09PSAwO1xuICAgICAgICB9KS5vbignZm9ybTpzdWJtaXQnLCBmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICAgIHZhciAkZm9ybSA9IGVsLiRlbGVtZW50O1xuICAgICAgICAgICAgJGZvcm0uZmluZCgnW2RhdGEtdG9nZ2xlPVwic3VibWl0XCJdJykuYXR0cignZGlzYWJsZWQnLCB0cnVlKTtcbiAgICAgICAgICAgIHZhciBkYXRhID0gJGZvcm0uc2VyaWFsaXplKCk7XG4gICAgICAgICAgICB2YXIgcmVzcG9uc2VNc2cgPSAn0JLQsNGI0LUg0YHQvtC+0LHRidC10L3QuNC1INGD0YHQv9C10YjQvdC+INC+0YLQv9GA0LDQstC70LXQvdC+LCDQvNGLINCS0LDQvCDQv9C10YDQtdC30LLQvtC90LjQvCEnO1xuXG4gICAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICAgIHR5cGU6ICRmb3JtLmF0dHIoJ21ldGhvZCcpLFxuICAgICAgICAgICAgICAgIHVybDogJGZvcm0uYXR0cignYWN0aW9uJyksXG4gICAgICAgICAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSwgdGV4dFN0YXR1cywganFYSFIpIHtcblxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ9Cf0YDQuCDQvtGC0L/RgNCw0LLQutC1INCy0L7Qt9C90LjQutC70LAg0L7RiNC40LHQutCwOiAnICsganFYSFIuc3RhdHVzKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VNc2cgPSAn0J/RgNC4INC+0YLQv9GA0LDQstC60LUg0LLQvtC30L3QuNC60LvQsCDQvtGI0LjQsdC60LAhIFwiJyArIGpxWEhSLnN0YXR1c1RleHQgKyAnXCInO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cykge1xuICAgICAgICAgICAgICAgICAgICAkZm9ybS5maW5kKCdbZGF0YS10b2dnbGU9XCJzdWJtaXRcIl0nKS5hdHRyKCdkaXNhYmxlZCcsIGZhbHNlKS5lbmQoKS5maW5kKCcudGV4dC1maWVsZCcpLnZhbCgnJykuZW5kKCkuZmluZCgnLmNoZWNrYm94X19pbnB1dCcpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICQuZmFuY3lib3guY2xvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgJC5mYW5jeWJveC5vcGVuKCc8ZGl2IGNsYXNzPVwicG9wdXAgcG9wdXBfc2l6ZV82NTIgcG9wdXBfcmVzcG9uc2VfZmVlZGJhY2sgY29udGFpbmVyLWZsdWlkXCI+JyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cInBvcHVwX19oZWFkZXJcIj48aDIgY2xhc3M9XCJwb3B1cF9fdGl0bGVcIj4nICsgcmVzcG9uc2VNc2cgKyAnPC9oMj48L2Rpdj4nICtcbiAgICAgICAgICAgICAgICAgICAgICAgICc8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bl80XCIgZGF0YS1mYW5jeWJveC1jbG9zZT1cImRhdGEtZmFuY3lib3gtY2xvc2VcIj7Ql9Cw0LrRgNGL0YLRjDwvYnV0dG9uPicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJzwvZGl2PicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9XG59KTsiLCIkKGZ1bmN0aW9uICgpIHtcbiAgICAkKCcuc2xpZGVyLW1haW4nKS5zbGljayh7XG4gICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgc3BlZWQ6IDMwMCxcbiAgICAgICAgZmFkZTogdHJ1ZSxcbiAgICAgICAgY3NzRWFzZTogJ2xpbmVhcicsXG4gICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgIG1vYmlsZUZpcnN0OiB0cnVlLFxuICAgICAgICBwcmV2QXJyb3c6ICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInNsaWNrLXByZXYgZ2x5cGhpY29uIGdseXBoaWNvbi1hbmdsZS1sZWZ0XCI+PC9idXR0b24+JyxcbiAgICAgICAgbmV4dEFycm93OiAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1uZXh0IGdseXBoaWNvbiBnbHlwaGljb24tYW5nbGUtcmlnaHRcIj48L2J1dHRvbj4nLFxuICAgICAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICAgICAgYXV0b3BsYXlTcGVlZDogNTAwMCxcbiAgICAgICAgekluZGV4OiAxLFxuICAgICAgICBsYXp5TG9hZDogJ29uZGVtYW5kJyxcbiAgICAgICAgcGF1c2VPbkZvY3VzOiBmYWxzZSxcbiAgICAgICAgcGF1c2VPbkhvdmVyOiBmYWxzZSxcbiAgICAgICAgYWRhcHRpdmVIZWlnaHQ6IGZhbHNlLFxuICAgICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgICAgICAvKntcbiAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjgsXG4gICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgY2VudGVyTW9kZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogJzQwcHgnLFxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDNcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9Ki9cbiAgICAgICAgXVxuICAgIH0pLm9uKCdsYXp5TG9hZGVkJywgZnVuY3Rpb24gKGV2ZW50LCBzbGljaywgaW1hZ2UsIGltYWdlU291cmNlKSB7XG4gICAgICAgICQoaW1hZ2UpLmNsb3Nlc3QoJy5zbGljay1zbGlkZScpLnJlbW92ZUNsYXNzKCdsb2FkaW5nJyk7XG4gICAgfSk7XG59KTsiLCIkKGZ1bmN0aW9uICgpIHtcbiAgICAkKCcuc2xpZGVyLWNsaWVudHNfX2lubmVyJykuc2xpY2soe1xuICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgYXJyb3dzOiB0cnVlLFxuICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgc3BlZWQ6IDMwMCxcbiAgICAgICAgZmFkZTogZmFsc2UsXG4gICAgICAgIGNzc0Vhc2U6ICdsaW5lYXInLFxuICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICBtb2JpbGVGaXJzdDogdHJ1ZSxcbiAgICAgICAgcHJldkFycm93OiAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1wcmV2IGdseXBoaWNvbiBnbHlwaGljb24tbGVmdC1hbmdsZS1icmFja2V0XCI+PC9idXR0b24+JyxcbiAgICAgICAgbmV4dEFycm93OiAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1uZXh0IGdseXBoaWNvbiBnbHlwaGljb24tcmlnaHQtYW5nbGUtYnJhY2tldFwiPjwvYnV0dG9uPicsXG4gICAgICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgICAgICBhdXRvcGxheVNwZWVkOiA1MDAwLFxuICAgICAgICB6SW5kZXg6IDEsXG4gICAgICAgIGxhenlMb2FkOiAnb25kZW1hbmQnLFxuICAgICAgICBwYXVzZU9uRm9jdXM6IGZhbHNlLFxuICAgICAgICBwYXVzZU9uSG92ZXI6IGZhbHNlLFxuICAgICAgICBhZGFwdGl2ZUhlaWdodDogZmFsc2UsXG4gICAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNDc5LFxuICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyXG4gICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY3LFxuICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogM1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTAyMyxcbiAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEyNjksXG4gICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA1XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxNTk5LFxuICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH0pLm9uKCdsYXp5TG9hZGVkJywgZnVuY3Rpb24gKGV2ZW50LCBzbGljaywgaW1hZ2UsIGltYWdlU291cmNlKSB7XG4gICAgICAgICQoaW1hZ2UpLmNsb3Nlc3QoJy5zbGljay1zbGlkZScpLnJlbW92ZUNsYXNzKCdsb2FkaW5nJyk7XG4gICAgfSk7XG59KTsiLCIkKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgJGZvcm0gPSAkKCcuZm9ybS1mZWVkYmFjaycpO1xuICAgIGlmICgkZm9ybS5sZW5ndGgpIHtcbiAgICAgICAgJGZvcm0ucGFyc2xleSgpLm9uKCdmaWVsZDp2YWxpZGF0ZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgb2sgPSAkKCcucGFyc2xleS1lcnJvcicpLmxlbmd0aCA9PT0gMDtcbiAgICAgICAgfSkub24oJ2Zvcm06c3VibWl0JywgZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgICB2YXIgJGZvcm0gPSBlbC4kZWxlbWVudDtcbiAgICAgICAgICAgICRmb3JtLmZpbmQoJ1tkYXRhLXRvZ2dsZT1cInN1Ym1pdFwiXScpLmF0dHIoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgICAgICAgICB2YXIgZGF0YSA9ICRmb3JtLnNlcmlhbGl6ZSgpO1xuICAgICAgICAgICAgdmFyIHJlc3BvbnNlTXNnID0gJ9CS0LDRiNC1INGB0L7QvtCx0YnQtdC90LjQtSDRg9GB0L/QtdGI0L3QviDQvtGC0L/RgNCw0LLQu9C10L3Qviwg0LzRiyDRgSDQktCw0LzQuCDRgdCy0Y/QttC10LzRgdGPISc7XG5cbiAgICAgICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICAgICAgdHlwZTogJGZvcm0uYXR0cignbWV0aG9kJyksXG4gICAgICAgICAgICAgICAgdXJsOiAkZm9ybS5hdHRyKCdhY3Rpb24nKSxcbiAgICAgICAgICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhLCB0ZXh0U3RhdHVzLCBqcVhIUikge1xuXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn0J/RgNC4INC+0YLQv9GA0LDQstC60LUg0LLQvtC30L3QuNC60LvQsCDQvtGI0LjQsdC60LA6ICcgKyBqcVhIUi5zdGF0dXMpO1xuICAgICAgICAgICAgICAgICAgICByZXNwb25zZU1zZyA9ICfQn9GA0Lgg0L7RgtC/0YDQsNCy0LrQtSDQstC+0LfQvdC40LrQu9CwINC+0YjQuNCx0LrQsCEgXCInICsganFYSFIuc3RhdHVzVGV4dCArICdcIic7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgICAgICRmb3JtLmZpbmQoJ1tkYXRhLXRvZ2dsZT1cInN1Ym1pdFwiXScpLmF0dHIoJ2Rpc2FibGVkJywgZmFsc2UpLmVuZCgpLmZpbmQoJy50ZXh0LWZpZWxkJykudmFsKCcnKS5lbmQoKS5maW5kKCcuY2hlY2tib3hfX2lucHV0JykucHJvcCgnY2hlY2tlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgJC5mYW5jeWJveC5jbG9zZSgpO1xuICAgICAgICAgICAgICAgICAgICAkLmZhbmN5Ym94Lm9wZW4oJzxkaXYgY2xhc3M9XCJwb3B1cCBwb3B1cF9zaXplXzY1MiBwb3B1cF9yZXNwb25zZV9mZWVkYmFjayBjb250YWluZXItZmx1aWRcIj4nICtcbiAgICAgICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwicG9wdXBfX2hlYWRlclwiPjxoMiBjbGFzcz1cInBvcHVwX190aXRsZVwiPicgKyByZXNwb25zZU1zZyArICc8L2gyPjwvZGl2PicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJzxidXR0b24gY2xhc3M9XCJidG4gYnRuXzRcIiBkYXRhLWZhbmN5Ym94LWNsb3NlPVwiZGF0YS1mYW5jeWJveC1jbG9zZVwiPtCX0LDQutGA0YvRgtGMPC9idXR0b24+JyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnPC9kaXY+Jyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH1cbn0pOyIsIiQoZnVuY3Rpb24gKCkge1xuICAgIHZhciAkdGVhbUJveCA9ICQoJy50ZWFtYm94JyksICR0ZWFtTGlzdCA9ICQoJy50ZWFtYm94IC50ZWFtLWxpc3QnKSwgJHRlYW1WaWV3ID0gJCgnLnRlYW0tdmlldycpO1xuXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsICcudGVhbS1pdGVtX19pbm5lcicsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICB2YXIgJHRlYW1JdGVtID0gJCh0aGlzKS5jbG9zZXN0KCcudGVhbS1pdGVtJyk7XG5cbiAgICAgICAgdmFyICRpbWdTcmMgPSAkdGVhbUl0ZW0uZmluZCgnLnRlYW0taXRlbV9faW1nJykuY2xvbmUoKS50b2dnbGVDbGFzcygndGVhbS1pdGVtX19pbWcgdGVhbS12aWV3X19pbWcnKS5hdHRyKCdzdHlsZScsICcnKTtcbiAgICAgICAgdmFyIHRpdGxlID0gJHRlYW1JdGVtLmZpbmQoJy50ZWFtLWl0ZW1fX3RpdGxlJykuaHRtbCgpO1xuICAgICAgICB2YXIgcG9zaXRpb24gPSAkdGVhbUl0ZW0uZmluZCgnLnRlYW0taXRlbV9fcG9zaXRpb24nKS5odG1sKCk7XG4gICAgICAgIHZhciBjb250ZW50ID0gJHRlYW1JdGVtLmZpbmQoJy50ZWFtLWl0ZW1fX2NvbnRlbnQnKS5odG1sKCk7XG5cbiAgICAgICAgJHRlYW1WaWV3LmZpbmQoJy50ZWFtLXZpZXdfX2ltZycpLnJlbW92ZSgpXG4gICAgICAgICAgICAuZW5kKCkuZmluZCgnLnRlYW0tdmlld19fdGl0bGUnKS5odG1sKCcnKVxuICAgICAgICAgICAgLmVuZCgpLmZpbmQoJy50ZWFtLXZpZXdfX3Bvc2l0aW9uJykuaHRtbCgnJylcbiAgICAgICAgICAgIC5lbmQoKS5maW5kKCcudGVhbS12aWV3X19jb250ZW50JykuaHRtbCgnJyk7XG5cbiAgICAgICAgJHRlYW1WaWV3LmZpbmQoJy50ZWFtLXZpZXdfX2ltZy1yZXNwJykuYXBwZW5kKCRpbWdTcmMpXG4gICAgICAgICAgICAuZW5kKCkuZmluZCgnLnRlYW0tdmlld19fdGl0bGUnKS5odG1sKHRpdGxlKVxuICAgICAgICAgICAgLmVuZCgpLmZpbmQoJy50ZWFtLXZpZXdfX3Bvc2l0aW9uJykuaHRtbChwb3NpdGlvbilcbiAgICAgICAgICAgIC5lbmQoKS5maW5kKCcudGVhbS12aWV3X19jb250ZW50JykuaHRtbChjb250ZW50KTtcblxuICAgICAgICAkdGVhbUJveC5hZGRDbGFzcygndGVhbWJveF9vcGVuZWQnKTtcbiAgICAgICAgLy8kdGVhbVZpZXcuZmluZCgnLnRlYW0tdmlld19fYnRuLWNsb3NlJykuZm9jdXMoKTtcbiAgICB9KS5vbignY2xpY2snLCAnW2RhdGEtdG9nZ2xlPVwiY2xvc2UtdGVhbS12aWV3XCJdJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICR0ZWFtQm94LnJlbW92ZUNsYXNzKCd0ZWFtYm94X29wZW5lZCcpO1xuICAgICAgICAvLyR0ZWFtVmlldy5maW5kKCcudGVhbS12aWV3X19idG4tY2xvc2UnKS5ibHVyKCk7XG4gICAgfSk7XG5cbiAgICAkKHdpbmRvdykub24oJ3Jlc2l6ZS50ZWFtQm94JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkdGVhbVZpZXcuY3NzKCdtYXJnaW4tbGVmdCcsIC0kdGVhbVZpZXcub3V0ZXJXaWR0aCgpKS5zaG93KCk7XG4gICAgfSkudHJpZ2dlckhhbmRsZXIoJ3Jlc2l6ZS50ZWFtQm94Jyk7XG59KTsiXX0=
