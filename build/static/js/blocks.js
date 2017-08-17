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
                    $form.find('[data-toggle="submit"]').attr('disabled', false);
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
                    $form.find('[data-toggle="submit"]').attr('disabled', false);
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2UuanMiLCJoZWFkZXIuanMiLCJtZW51LmpzIiwiY29udGFjdC1tYXAuanMiLCJzdGF0aW9ucy5qcyIsImZvcm0tb3JkZXItY2FsbC0yLmpzIiwidGV4dC1maWVsZC5qcyIsInNsaWRlci1tYWluLmpzIiwic2xpZGVyLWNsaWVudHMuanMiLCJmb3JtLWZlZWRiYWNrLmpzIiwicG9wdXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYmxvY2tzLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyICRzY3JlZW5TbSA9IDc2OCwgJHNjcmVlbk1kID0gMTAyNCwgJHNjcmVlbkxnID0gMTI3MDtcblxudmFyICRmb250U2l6ZVJvb3QgPSAxNiwgJGZvbnRTaXplUm9vdENvbXB1dGVkID0gcGFyc2VJbnQoJCgnaHRtbCcpLmNzcygnZm9udFNpemUnKSk7XG5cbnZhciAkc2NyZWVuU21NaW4gPSAkc2NyZWVuU20vJGZvbnRTaXplUm9vdCArICdlbSc7IGNvbnNvbGUubG9nKCckc2NyZWVuU21NaW4gPSAnICsgJHNjcmVlblNtTWluICsgJyAoJyArICRzY3JlZW5TbSArICdweCknKTtcbnZhciAkc2NyZWVuTWRNaW4gPSAkc2NyZWVuTWQvJGZvbnRTaXplUm9vdCArICdlbSc7IGNvbnNvbGUubG9nKCckc2NyZWVuTWRNaW4gPSAnICsgJHNjcmVlbk1kTWluICsgJyAoJyArICRzY3JlZW5NZCArICdweCknKTtcbnZhciAkc2NyZWVuTGdNaW4gPSAkc2NyZWVuTGcvJGZvbnRTaXplUm9vdCArICdlbSc7IGNvbnNvbGUubG9nKCckc2NyZWVuTGdNaW4gPSAnICsgJHNjcmVlbkxnTWluICsgJyAoJyArICRzY3JlZW5MZyArICdweCknKTtcblxudmFyICRzY3JlZW5Yc01heCA9ICgkc2NyZWVuU20gLSAxKS8kZm9udFNpemVSb290ICsgJ2VtJzsgY29uc29sZS5sb2coJyRzY3JlZW5Yc01heCA9ICcgKyAkc2NyZWVuWHNNYXgpO1xudmFyICRzY3JlZW5TbU1heCA9ICgkc2NyZWVuTWQgLSAxKS8kZm9udFNpemVSb290ICsgJ2VtJzsgY29uc29sZS5sb2coJyRzY3JlZW5TbU1heCA9ICcgKyAkc2NyZWVuU21NYXgpO1xudmFyICRzY3JlZW5NZE1heCA9ICgkc2NyZWVuTGcgLSAxKS8kZm9udFNpemVSb290ICsgJ2VtJzsgY29uc29sZS5sb2coJyRzY3JlZW5NZE1heCA9ICcgKyAkc2NyZWVuTWRNYXgpO1xuXG4kKCcubGF6eScpLkxhenkoKTtcbiIsIiQoZnVuY3Rpb24gKCkge1xuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnW2RhdGEtdG9nZ2xlPVwibWVudVwiXScsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgJCh0aGlzKS50b2dnbGVDbGFzcygnZ2x5cGhpY29uLW1lbnUtbGluZXMgZ2x5cGhpY29uLWNhbmNlbCcpO1xuICAgICAgICAkKCcuaGVhZGVyX19wYW5lbCcpLmZhZGVUb2dnbGUoMjAwKTtcbiAgICAgICAgJCgnaHRtbCcpLnRvZ2dsZUNsYXNzKCdvcGVuZWQtcGFuZWwnKTtcbiAgICB9KTtcbn0pOyIsIiQoZnVuY3Rpb24gKCkge1xuICAgICQoJ2h0bWwudG91Y2hldmVudHMnKS5vbignY2xpY2snLCAnLm1lbnVfX2l0ZW1fc3VibWVudTpub3QoLm1lbnVfX2l0ZW1fb3BlbmVkKT4ubWVudV9fYnRuJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAkKCcubWVudV9fc3VibWVudScpXG4gICAgICAgICAgICAubm90KCQodGhpcykubmV4dCgnLm1lbnVfX3N1Ym1lbnUnKS5hZGRDbGFzcygnbWVudV9fc3VibWVudV9vcGVuZWQnKS5zbGlkZURvd24oMjAwKS5wYXJlbnQoKS5hZGRDbGFzcygnbWVudV9faXRlbV9vcGVuZWQnKS5lbmQoKSlcbiAgICAgICAgICAgIC5ub3QoJCh0aGlzKS5wYXJlbnRzKCcubWVudV9fc3VibWVudScpKVxuICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdtZW51X19zdWJtZW51X29wZW5lZCcpLnNsaWRlVXAoMjAwKS5wYXJlbnQoKS5yZW1vdmVDbGFzcygnbWVudV9faXRlbV9vcGVuZWQnKTtcbiAgICB9KS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoISQoZS50YXJnZXQpLmNsb3Nlc3QoJy5tZW51JykubGVuZ3RoKSB7XG4gICAgICAgICAgICAkKCcubWVudV9fc3VibWVudScpLnJlbW92ZUNsYXNzKCdtZW51X19zdWJtZW51X29wZW5lZCcpLnNsaWRlVXAoMjAwKS5wYXJlbnQoKS5yZW1vdmVDbGFzcygnbWVudV9faXRlbV9vcGVuZWQnKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgdmFyIHRpbWVySG92ZXJNZW51SXRlbTtcbiAgICAkKCdodG1sLm5vLXRvdWNoZXZlbnRzIC5tZW51X19pdGVtX3N1Ym1lbnUnKS5ob3ZlcihmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgJG1lbnVJdGVtID0gJCh0aGlzKTtcbiAgICAgICAgdGltZXJIb3Zlck1lbnVJdGVtID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkbWVudUl0ZW0uY2hpbGRyZW4oJy5tZW51X19zdWJtZW51JykuYWRkQ2xhc3MoJ21lbnVfX3N1Ym1lbnVfb3BlbmVkJykuc2xpZGVEb3duKDIwMCkucGFyZW50KCkuYWRkQ2xhc3MoJ21lbnVfX2l0ZW1fb3BlbmVkJyk7XG4gICAgICAgIH0sIDEwMCk7XG5cbiAgICB9LCBmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgJG1lbnVJdGVtID0gJCh0aGlzKTtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVySG92ZXJNZW51SXRlbSk7XG4gICAgICAgICRtZW51SXRlbS5jaGlsZHJlbignLm1lbnVfX3N1Ym1lbnUnKS5yZW1vdmVDbGFzcygnbWVudV9fc3VibWVudV9vcGVuZWQnKS5zbGlkZVVwKDIwMCkucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ21lbnVfX2l0ZW1fb3BlbmVkJyk7XG4gICAgfSk7XG59KTsiLCJpZiAoJCgnLnlhLW1hcCcpLmxlbmd0aCkge1xuICAgIHltYXBzLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHlhTWFwcyA9ICQoJy55YS1tYXAnKTtcblxuICAgICAgICB5YU1hcHMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZGF0YVBsYWNlbWFyayA9ICQodGhpcykuZGF0YSgncGxhY2VtYXJrJyk7XG5cbiAgICAgICAgICAgIHZhciBteU1hcCA9IG5ldyB5bWFwcy5NYXAodGhpcywge1xuICAgICAgICAgICAgICAgIGNlbnRlcjogZGF0YVBsYWNlbWFya1swXS5jb29yZGluYXRlcyxcbiAgICAgICAgICAgICAgICB6b29tOiAxNy8vLFxuICAgICAgICAgICAgICAgIC8vYm91bmRzOiAkKHRoaXMpLmhhc0NsYXNzKCd5YS1tYXAtcm91dGUnKSA/IFtkYXRhUGxhY2VtYXJrWzBdLmNvb3JkaW5hdGVzLCBkYXRhUGxhY2VtYXJrW2RhdGFQbGFjZW1hcmsubGVuZ3RoLTFdLmNvb3JkaW5hdGVzXSA6IGZhbHNlLFxuICAgICAgICAgICAgICAgIC8vYmVoYXZpb3JzOiBbJ2RibENsaWNrWm9vbScsICdtdWx0aVRvdWNoJywgJ3JpZ2h0TW91c2VCdXR0b25NYWduaWZpZXInXVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHZhciBhcnJDb29yZHMgPSBbXSwgbXlQbGFjZW1hcms7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRhdGFQbGFjZW1hcmsubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBhcnJDb29yZHMucHVzaChkYXRhUGxhY2VtYXJrW2ldLmNvb3JkaW5hdGVzKTtcbiAgICAgICAgICAgICAgICBteVBsYWNlbWFyayA9IG5ldyB5bWFwcy5QbGFjZW1hcmsoZGF0YVBsYWNlbWFya1tpXS5jb29yZGluYXRlcywge1xuICAgICAgICAgICAgICAgICAgICBoaW50Q29udGVudDogZGF0YVBsYWNlbWFya1tpXS5oaW50Q29udGVudCxcbiAgICAgICAgICAgICAgICAgICAgYmFsbG9vbkNvbnRlbnQ6IGRhdGFQbGFjZW1hcmtbaV0uYmFsbG9vbkNvbnRlbnQsXG4gICAgICAgICAgICAgICAgICAgIGljb25Db250ZW50OiAnJ1xuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g0J7Qv9GG0LjQuC5cbiAgICAgICAgICAgICAgICAgICAgLy8g0J3QtdC+0LHRhdC+0LTQuNC80L4g0YPQutCw0LfQsNGC0Ywg0LTQsNC90L3Ri9C5INGC0LjQvyDQvNCw0LrQtdGC0LAuXG4gICAgICAgICAgICAgICAgICAgIGljb25MYXlvdXQ6ICdkZWZhdWx0I2ltYWdlV2l0aENvbnRlbnQnLFxuICAgICAgICAgICAgICAgICAgICAvLyDQodCy0L7RkSDQuNC30L7QsdGA0LDQttC10L3QuNC1INC40LrQvtC90LrQuCDQvNC10YLQutC4LlxuICAgICAgICAgICAgICAgICAgICBpY29uSW1hZ2VIcmVmOiBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEQ5NGJXd2dkbVZ5YzJsdmJqMGlNUzR3SWlCbGJtTnZaR2x1WnowaWRYUm1MVGdpUHo0OElVUlBRMVJaVUVVZ2MzWm5JRkJWUWt4SlF5QWlMUzh2VnpOREx5OUVWRVFnVTFaSElERXVNUzh2UlU0aUlDSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OUhjbUZ3YUdsamN5OVRWa2N2TVM0eEwwUlVSQzl6ZG1jeE1TNWtkR1FpUGp4emRtY2dkbVZ5YzJsdmJqMGlNUzR4SWlCcFpEMGlRMkZ3WVY4eElpQjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaUlIaHRiRzV6T25oc2FXNXJQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh4T1RrNUwzaHNhVzVySWlCNFBTSXdjSGdpSUhrOUlqQndlQ0lnZDJsa2RHZzlJak0xTGpjeU5IQjRJaUJvWldsbmFIUTlJalV3Y0hnaUlIWnBaWGRDYjNnOUlqSXpPQzR4TXpnZ01qTXhJRE0xTGpjeU5DQTFNQ0lnWlc1aFlteGxMV0poWTJ0bmNtOTFibVE5SW01bGR5QXlNemd1TVRNNElESXpNU0F6TlM0M01qUWdOVEFpSUhodGJEcHpjR0ZqWlQwaWNISmxjMlZ5ZG1VaVBqeG5Qanh3WVhSb0lHWnBiR3c5SWlORlJUTTBNaklpSUdROUlrMHlOVFl1TmpNc01qTXhMakF4WXkweE1DNHhOVFF0TUM0ek5ESXRNVGd1TkRrekxEY3VOemczTFRFNExqUTVNeXd4Tnk0NE5qUmpNQ3d4TVM0ME16WXNNVEF1T1RjMUxERTVMamN6TlN3eE55NHhNallzTXpFdU5qY3hZekF1TXpFeUxEQXVOakEyTERFdU1UZzFMREF1TmpBM0xERXVORGs0TERBdU1EQXhZelV1TlRZMUxURXdMamMwTERFMUxqQTNOUzB4Tnk0NU5ERXNNVFl1T0RNNExUSTRMakk0T0VNeU56VXVOREkxTERJME1TNDFOVElzTWpZM0xqUTROU3d5TXpFdU16YzJMREkxTmk0Mk15d3lNekV1TURGNklFMHlOVFl1TURFeUxESTFPQzR5TXpkakxUVXVNVGN4TERBdE9TNHpOakl0TkM0eE9USXRPUzR6TmpJdE9TNHpOak56TkM0eE9USXRPUzR6TmpNc09TNHpOakl0T1M0ek5qTmpOUzR4TnpFc01DdzVMak0yTXl3MExqRTVNaXc1TGpNMk15dzVMak0yTTFNeU5qRXVNVGd5TERJMU9DNHlNemNzTWpVMkxqQXhNaXd5TlRndU1qTTNlaUl2UGp3dlp6NDhMM04yWno0PVwiLFxuICAgICAgICAgICAgICAgICAgICAvLyDQoNCw0LfQvNC10YDRiyDQvNC10YLQutC4LlxuICAgICAgICAgICAgICAgICAgICBpY29uSW1hZ2VTaXplOiBbMzIsIDQ3XSxcbiAgICAgICAgICAgICAgICAgICAgLy8g0KHQvNC10YnQtdC90LjQtSDQu9C10LLQvtCz0L4g0LLQtdGA0YXQvdC10LPQviDRg9Cz0LvQsCDQuNC60L7QvdC60Lgg0L7RgtC90L7RgdC40YLQtdC70YzQvdC+XG4gICAgICAgICAgICAgICAgICAgIC8vINC10ZEgXCLQvdC+0LbQutC4XCIgKNGC0L7Rh9C60Lgg0L/RgNC40LLRj9C30LrQuCkuXG4gICAgICAgICAgICAgICAgICAgIGljb25JbWFnZU9mZnNldDogWy0xNiwgLTQ3XVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgbXlNYXAuZ2VvT2JqZWN0cy5hZGQobXlQbGFjZW1hcmspO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9teU1hcC5zZXRCb3VuZHMobXlNYXAuZ2VvT2JqZWN0cy5nZXRCb3VuZHMoKSk7XG4gICAgICAgICAgICAkKHdpbmRvdykub24oJ3Jlc2l6ZS5ZYU1hcCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBteU1hcC5zZXRDZW50ZXIoZGF0YVBsYWNlbWFya1swXS5jb29yZGluYXRlcyk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLypcbiAgICAgICAgICAgICAvLyDQodC+0LfQtNCw0LXQvCDQu9C+0LzQsNC90YPRjiDRgSDQv9C+0LzQvtGJ0YzRjiDQstGB0L/QvtC80L7Qs9Cw0YLQtdC70YzQvdC+0LPQviDQutC70LDRgdGB0LAgUG9seWxpbmUuXG4gICAgICAgICAgICAgdmFyIG15UG9seWxpbmUgPSBuZXcgeW1hcHMuUG9seWxpbmUoYXJyQ29vcmRzLCB7XG4gICAgICAgICAgICAgLy8g0J7Qv9C40YHRi9Cy0LDQtdC8INGB0LLQvtC50YHRgtCy0LAg0LPQtdC+0L7QsdGK0LXQutGC0LAuXG4gICAgICAgICAgICAgLy8g0KHQvtC00LXRgNC20LjQvNC+0LUg0LHQsNC70YPQvdCwLlxuICAgICAgICAgICAgIGJhbGxvb25Db250ZW50OiBcIlwiXG4gICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgIC8vINCX0LDQtNCw0LXQvCDQvtC/0YbQuNC4INCz0LXQvtC+0LHRitC10LrRgtCwLlxuICAgICAgICAgICAgIC8vINCe0YLQutC70Y7Rh9Cw0LXQvCDQutC90L7Qv9C60YMg0LfQsNC60YDRi9GC0LjRjyDQsdCw0LvRg9C90LAuXG4gICAgICAgICAgICAgYmFsbG9vbkNsb3NlQnV0dG9uOiBmYWxzZSxcbiAgICAgICAgICAgICAvLyDQptCy0LXRgiDQu9C40L3QuNC4LlxuICAgICAgICAgICAgIHN0cm9rZUNvbG9yOiBcIiNkNDRjM2ZcIixcbiAgICAgICAgICAgICAvLyDQqNC40YDQuNC90LAg0LvQuNC90LjQuC5cbiAgICAgICAgICAgICBzdHJva2VXaWR0aDogMixcbiAgICAgICAgICAgICAvLyDQmtC+0Y3RhNGE0LjRhtC40LXQvdGCINC/0YDQvtC30YDQsNGH0L3QvtGB0YLQuC5cbiAgICAgICAgICAgICBzdHJva2VPcGFjaXR5OiAxXG4gICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgLy8g0JTQvtCx0LDQstC70Y/QtdC8INC70LjQvdC40Lgg0L3QsCDQutCw0YDRgtGDLlxuICAgICAgICAgICAgIG15TWFwLmdlb09iamVjdHMuYWRkKG15UG9seWxpbmUpOyovXG4gICAgICAgIH0pO1xuICAgIH0pO1xufSIsIiQoZnVuY3Rpb24gKCkge1xuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnLnN0YXRpb25zX19pdGVtJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAoJChlLnRhcmdldCkuYXR0cignZGF0YS10b2dnbGUnKSAhPT0gJ2Nsb3NlLXN0YXRpb24tcG9wdXAnICYmICEkKGUudGFyZ2V0KS5jbG9zZXN0KCcuc3RhdGlvbnNfX3BvcHVwJykubGVuZ3RoKSB7XG4gICAgICAgICAgICAkKCcuc3RhdGlvbnNfX2l0ZW0nKS5ub3QoJCh0aGlzKS50b2dnbGVDbGFzcygnc3RhdGlvbnNfX2l0ZW1fb3BlbmVkJykuZmluZCgnLnN0YXRpb25zX19wb3B1cCcpLmZhZGVUb2dnbGUoMjAwKS5lbmQoKSlcbiAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3N0YXRpb25zX19pdGVtX29wZW5lZCcpLmZpbmQoJy5zdGF0aW9uc19fcG9wdXAnKS5mYWRlT3V0KDIwMCk7XG4gICAgICAgIH1cbiAgICB9KS5vbignY2xpY2snLCAnW2RhdGEtdG9nZ2xlPVwiY2xvc2Utc3RhdGlvbi1wb3B1cFwiXScsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICQodGhpcykuY2xvc2VzdCgnLnN0YXRpb25zX19pdGVtJykucmVtb3ZlQ2xhc3MoJ3N0YXRpb25zX19pdGVtX29wZW5lZCcpLmZpbmQoJy5zdGF0aW9uc19fcG9wdXAnKS5mYWRlT3V0KDIwMCk7XG4gICAgfSkub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKCEkKGUudGFyZ2V0KS5jbG9zZXN0KCcuc3RhdGlvbnNfX2l0ZW0nKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICQoJy5zdGF0aW9uc19faXRlbScpLnJlbW92ZUNsYXNzKCdzdGF0aW9uc19faXRlbV9vcGVuZWQnKS5maW5kKCcuc3RhdGlvbnNfX3BvcHVwJykuZmFkZU91dCgyMDApO1xuICAgICAgICB9XG4gICAgfSk7XG59KTsiLCIkKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgJGZvcm0gPSAkKCcuZm9ybS1vcmRlci1jYWxsLTInKTtcbiAgICBpZiAoJGZvcm0ubGVuZ3RoKSB7XG4gICAgICAgICRmb3JtLnBhcnNsZXkoKS5vbignZmllbGQ6dmFsaWRhdGVkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIG9rID0gJCgnLnBhcnNsZXktZXJyb3InKS5sZW5ndGggPT09IDA7XG4gICAgICAgIH0pLm9uKCdmb3JtOnN1Ym1pdCcsIGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgICAgdmFyICRmb3JtID0gZWwuJGVsZW1lbnQ7XG4gICAgICAgICAgICAkZm9ybS5maW5kKCdbZGF0YS10b2dnbGU9XCJzdWJtaXRcIl0nKS5hdHRyKCdkaXNhYmxlZCcsIHRydWUpO1xuICAgICAgICAgICAgdmFyIGRhdGEgPSAkZm9ybS5zZXJpYWxpemUoKTtcbiAgICAgICAgICAgIHZhciByZXNwb25zZU1zZyA9ICfQktCw0YjQtSDRgdC+0L7QsdGJ0LXQvdC40LUg0YPRgdC/0LXRiNC90L4g0L7RgtC/0YDQsNCy0LvQtdC90L4sINC80Ysg0JLQsNC8INC/0LXRgNC10LfQstC+0L3QuNC8ISc7XG5cbiAgICAgICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICAgICAgdHlwZTogJGZvcm0uYXR0cignbWV0aG9kJyksXG4gICAgICAgICAgICAgICAgdXJsOiAkZm9ybS5hdHRyKCdhY3Rpb24nKSxcbiAgICAgICAgICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhLCB0ZXh0U3RhdHVzLCBqcVhIUikge1xuXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn0J/RgNC4INC+0YLQv9GA0LDQstC60LUg0LLQvtC30L3QuNC60LvQsCDQvtGI0LjQsdC60LA6ICcgKyBqcVhIUi5zdGF0dXMpO1xuICAgICAgICAgICAgICAgICAgICByZXNwb25zZU1zZyA9ICfQn9GA0Lgg0L7RgtC/0YDQsNCy0LrQtSDQstC+0LfQvdC40LrQu9CwINC+0YjQuNCx0LrQsCEgXCInICsganFYSFIuc3RhdHVzVGV4dCArICdcIic7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgICAgICRmb3JtLmZpbmQoJ1tkYXRhLXRvZ2dsZT1cInN1Ym1pdFwiXScpLmF0dHIoJ2Rpc2FibGVkJywgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAkLmZhbmN5Ym94LmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgICAgICQuZmFuY3lib3gub3BlbignPGRpdiBjbGFzcz1cInBvcHVwIHBvcHVwX3NpemVfNjUyIHBvcHVwX3Jlc3BvbnNlX2ZlZWRiYWNrIGNvbnRhaW5lci1mbHVpZFwiPicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJwb3B1cF9faGVhZGVyXCI+PGgyIGNsYXNzPVwicG9wdXBfX3RpdGxlXCI+JyArIHJlc3BvbnNlTXNnICsgJzwvaDI+PC9kaXY+JyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnPGJ1dHRvbiBjbGFzcz1cImJ0biBidG5fNFwiIGRhdGEtZmFuY3lib3gtY2xvc2U9XCJkYXRhLWZhbmN5Ym94LWNsb3NlXCI+0JfQsNC60YDRi9GC0Yw8L2J1dHRvbj4nICtcbiAgICAgICAgICAgICAgICAgICAgICAgICc8L2Rpdj4nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfVxufSk7IiwiZnVuY3Rpb24gaGFzVmFsKCkge1xuICAgICQoJy50ZXh0LWZpZWxkJykub24oJ2JsdXInLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICgkKHRoaXMpLnZhbCgpKSB7XG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCd0ZXh0LWZpZWxkX2hhcy12YWwnKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ3RleHQtZmllbGRfaGFzLXZhbCcpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbiQoZnVuY3Rpb24gKCkge1xuICAgIGhhc1ZhbCgpO1xuICAgICQoJ1tkYXRhLW1hc2tdJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2luaXQtbWFzaycpO1xuICAgIH0pO1xufSk7XG5cbiQoZG9jdW1lbnQpLmFqYXhDb21wbGV0ZShmdW5jdGlvbigpIHtcbiAgICBoYXNWYWwoKTtcbiAgICAkKCdbZGF0YS1tYXNrXScpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoISQodGhpcykuaGFzQ2xhc3MoJ2luaXQtbWFzaycpKSB7XG4gICAgICAgICAgICAkKHRoaXMpLm1hc2soJCh0aGlzKS5kYXRhKCdtYXNrJykpLmFkZENsYXNzKCdpbml0LW1hc2snKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgICQoJ1tkYXRhLXBhcnNsZXktdmFsaWRhdGVdJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICQodGhpcykucGFyc2xleSgpO1xuICAgIH0pO1xufSk7IiwiJChmdW5jdGlvbiAoKSB7XG4gICAgJCgnLnNsaWRlci1tYWluJykuc2xpY2soe1xuICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgIHNwZWVkOiAzMDAsXG4gICAgICAgIGZhZGU6IHRydWUsXG4gICAgICAgIGNzc0Vhc2U6ICdsaW5lYXInLFxuICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICBtb2JpbGVGaXJzdDogdHJ1ZSxcbiAgICAgICAgcHJldkFycm93OiAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1wcmV2IGdseXBoaWNvbiBnbHlwaGljb24tYW5nbGUtbGVmdFwiPjwvYnV0dG9uPicsXG4gICAgICAgIG5leHRBcnJvdzogJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stbmV4dCBnbHlwaGljb24gZ2x5cGhpY29uLWFuZ2xlLXJpZ2h0XCI+PC9idXR0b24+JyxcbiAgICAgICAgYXV0b3BsYXk6IHRydWUsXG4gICAgICAgIGF1dG9wbGF5U3BlZWQ6IDUwMDAsXG4gICAgICAgIHpJbmRleDogMSxcbiAgICAgICAgbGF6eUxvYWQ6ICdvbmRlbWFuZCcsXG4gICAgICAgIHBhdXNlT25Gb2N1czogZmFsc2UsXG4gICAgICAgIHBhdXNlT25Ib3ZlcjogZmFsc2UsXG4gICAgICAgIGFkYXB0aXZlSGVpZ2h0OiBmYWxzZSxcbiAgICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICAgICAgLyp7XG4gICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY4LFxuICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6ICc0MHB4JyxcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSovXG4gICAgICAgIF1cbiAgICB9KS5vbignbGF6eUxvYWRlZCcsIGZ1bmN0aW9uIChldmVudCwgc2xpY2ssIGltYWdlLCBpbWFnZVNvdXJjZSkge1xuICAgICAgICAkKGltYWdlKS5jbG9zZXN0KCcuc2xpY2stc2xpZGUnKS5yZW1vdmVDbGFzcygnbG9hZGluZycpO1xuICAgIH0pO1xufSk7IiwiJChmdW5jdGlvbiAoKSB7XG4gICAgJCgnLnNsaWRlci1jbGllbnRzX19pbm5lcicpLnNsaWNrKHtcbiAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgIGFycm93czogdHJ1ZSxcbiAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgIHNwZWVkOiAzMDAsXG4gICAgICAgIGZhZGU6IGZhbHNlLFxuICAgICAgICBjc3NFYXNlOiAnbGluZWFyJyxcbiAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgbW9iaWxlRmlyc3Q6IHRydWUsXG4gICAgICAgIHByZXZBcnJvdzogJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stcHJldiBnbHlwaGljb24gZ2x5cGhpY29uLWxlZnQtYW5nbGUtYnJhY2tldFwiPjwvYnV0dG9uPicsXG4gICAgICAgIG5leHRBcnJvdzogJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stbmV4dCBnbHlwaGljb24gZ2x5cGhpY29uLXJpZ2h0LWFuZ2xlLWJyYWNrZXRcIj48L2J1dHRvbj4nLFxuICAgICAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICAgICAgYXV0b3BsYXlTcGVlZDogNTAwMCxcbiAgICAgICAgekluZGV4OiAxLFxuICAgICAgICBsYXp5TG9hZDogJ29uZGVtYW5kJyxcbiAgICAgICAgcGF1c2VPbkZvY3VzOiBmYWxzZSxcbiAgICAgICAgcGF1c2VPbkhvdmVyOiBmYWxzZSxcbiAgICAgICAgYWRhcHRpdmVIZWlnaHQ6IGZhbHNlLFxuICAgICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDQ3OSxcbiAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMlxuICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2NyxcbiAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDNcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEwMjMsXG4gICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA0XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxMjY5LFxuICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTU5OSxcbiAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDZcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICB9KS5vbignbGF6eUxvYWRlZCcsIGZ1bmN0aW9uIChldmVudCwgc2xpY2ssIGltYWdlLCBpbWFnZVNvdXJjZSkge1xuICAgICAgICAkKGltYWdlKS5jbG9zZXN0KCcuc2xpY2stc2xpZGUnKS5yZW1vdmVDbGFzcygnbG9hZGluZycpO1xuICAgIH0pO1xufSk7IiwiJChmdW5jdGlvbiAoKSB7XG4gICAgdmFyICRmb3JtID0gJCgnLmZvcm0tZmVlZGJhY2snKTtcbiAgICBpZiAoJGZvcm0ubGVuZ3RoKSB7XG4gICAgICAgICRmb3JtLnBhcnNsZXkoKS5vbignZmllbGQ6dmFsaWRhdGVkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIG9rID0gJCgnLnBhcnNsZXktZXJyb3InKS5sZW5ndGggPT09IDA7XG4gICAgICAgIH0pLm9uKCdmb3JtOnN1Ym1pdCcsIGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgICAgdmFyICRmb3JtID0gZWwuJGVsZW1lbnQ7XG4gICAgICAgICAgICAkZm9ybS5maW5kKCdbZGF0YS10b2dnbGU9XCJzdWJtaXRcIl0nKS5hdHRyKCdkaXNhYmxlZCcsIHRydWUpO1xuICAgICAgICAgICAgdmFyIGRhdGEgPSAkZm9ybS5zZXJpYWxpemUoKTtcbiAgICAgICAgICAgIHZhciByZXNwb25zZU1zZyA9ICfQktCw0YjQtSDRgdC+0L7QsdGJ0LXQvdC40LUg0YPRgdC/0LXRiNC90L4g0L7RgtC/0YDQsNCy0LvQtdC90L4sINC80Ysg0YEg0JLQsNC80Lgg0YHQstGP0LbQtdC80YHRjyEnO1xuXG4gICAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICAgIHR5cGU6ICRmb3JtLmF0dHIoJ21ldGhvZCcpLFxuICAgICAgICAgICAgICAgIHVybDogJGZvcm0uYXR0cignYWN0aW9uJyksXG4gICAgICAgICAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSwgdGV4dFN0YXR1cywganFYSFIpIHtcblxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ9Cf0YDQuCDQvtGC0L/RgNCw0LLQutC1INCy0L7Qt9C90LjQutC70LAg0L7RiNC40LHQutCwOiAnICsganFYSFIuc3RhdHVzKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VNc2cgPSAn0J/RgNC4INC+0YLQv9GA0LDQstC60LUg0LLQvtC30L3QuNC60LvQsCDQvtGI0LjQsdC60LAhIFwiJyArIGpxWEhSLnN0YXR1c1RleHQgKyAnXCInO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cykge1xuICAgICAgICAgICAgICAgICAgICAkZm9ybS5maW5kKCdbZGF0YS10b2dnbGU9XCJzdWJtaXRcIl0nKS5hdHRyKCdkaXNhYmxlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgJC5mYW5jeWJveC5jbG9zZSgpO1xuICAgICAgICAgICAgICAgICAgICAkLmZhbmN5Ym94Lm9wZW4oJzxkaXYgY2xhc3M9XCJwb3B1cCBwb3B1cF9zaXplXzY1MiBwb3B1cF9yZXNwb25zZV9mZWVkYmFjayBjb250YWluZXItZmx1aWRcIj4nICtcbiAgICAgICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwicG9wdXBfX2hlYWRlclwiPjxoMiBjbGFzcz1cInBvcHVwX190aXRsZVwiPicgKyByZXNwb25zZU1zZyArICc8L2gyPjwvZGl2PicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJzxidXR0b24gY2xhc3M9XCJidG4gYnRuXzRcIiBkYXRhLWZhbmN5Ym94LWNsb3NlPVwiZGF0YS1mYW5jeWJveC1jbG9zZVwiPtCX0LDQutGA0YvRgtGMPC9idXR0b24+JyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnPC9kaXY+Jyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH1cbn0pOyIsIiQuZmFuY3lib3guZGVmYXVsdHMuaGFzaCA9IGZhbHNlO1xuJC5mYW5jeWJveC5kZWZhdWx0cy50b3VjaCA9IGZhbHNlO1xuJC5mYW5jeWJveC5kZWZhdWx0cy5idG5UcGwuc21hbGxCdG4gPSAnPGJ1dHRvbiBkYXRhLWZhbmN5Ym94LWNsb3NlIGNsYXNzPVwiYnRuIHBvcHVwX19idG4tY2xvc2UgZ2x5cGhpY29uIGdseXBoaWNvbi1jYW5jZWxcIiB0aXRsZT1cItCX0LDQutGA0YvRgtGMXCI+PC9idXR0b24+JztcblxuJChmdW5jdGlvbiAoKSB7XG4gICAgLy8kKFwiW2RhdGEtZmFuY3lib3hdXCIpLmZhbmN5Ym94KCk7XG5cbiAgICAkKFwiW2RhdGEtZmFuY3lib3gtLXNpbmdsZV1cIikuZmFuY3lib3goe1xuICAgICAgICBzbWFsbEJ0biA6IGZhbHNlLFxuICAgICAgICBhdXRvRm9jdXMgOiBmYWxzZSxcbiAgICAgICAgYnRuVHBsIDoge1xuICAgICAgICAgICAgc2xpZGVTaG93ICA6ICc8YnV0dG9uIGRhdGEtZmFuY3lib3gtcGxheSBjbGFzcz1cImZhbmN5Ym94LWJ1dHRvbiBmYW5jeWJveC1idXR0b24tLXBsYXkgaGlkZVwiIHRpdGxlPVwie3tQTEFZX1NUQVJUfX1cIj48L2J1dHRvbj4nLFxuICAgICAgICAgICAgZnVsbFNjcmVlbiA6ICc8YnV0dG9uIGRhdGEtZmFuY3lib3gtZnVsbHNjcmVlbiBjbGFzcz1cImZhbmN5Ym94LWJ1dHRvbiBmYW5jeWJveC1idXR0b24tLWZ1bGxzY3JlZW4gaGlkZVwiIHRpdGxlPVwie3tGVUxMX1NDUkVFTn19XCI+PC9idXR0b24+JyxcbiAgICAgICAgICAgIHRodW1icyAgICAgOiAnPGJ1dHRvbiBkYXRhLWZhbmN5Ym94LXRodW1icyBjbGFzcz1cImZhbmN5Ym94LWJ1dHRvbiBmYW5jeWJveC1idXR0b24tLXRodW1icyBoaWRlXCIgdGl0bGU9XCJ7e1RIVU1CU319XCI+PC9idXR0b24+JyxcbiAgICAgICAgICAgIGNsb3NlICAgICAgOiAnPGJ1dHRvbiBkYXRhLWZhbmN5Ym94LWNsb3NlIGNsYXNzPVwiZmFuY3lib3gtYnV0dG9uIGZhbmN5Ym94LWJ1dHRvbi0tY2xvc2VcIiB0aXRsZT1cInt7Q0xPU0V9fVwiPjwvYnV0dG9uPicsXG5cbiAgICAgICAgICAgIC8vIFRoaXMgc21hbGwgY2xvc2UgYnV0dG9uIHdpbGwgYmUgYXBwZW5kZWQgdG8geW91ciBodG1sL2lubGluZS9hamF4IGNvbnRlbnQgYnkgZGVmYXVsdCxcbiAgICAgICAgICAgIC8vIGlmIFwic21hbGxCdG5cIiBvcHRpb24gaXMgbm90IHNldCB0byBmYWxzZVxuICAgICAgICAgICAgc21hbGxCdG4gICA6ICc8YnV0dG9uIGRhdGEtZmFuY3lib3gtY2xvc2UgY2xhc3M9XCJmYW5jeWJveC1jbG9zZS1zbWFsbCBnbHlwaGljb24gZ2x5cGhpY29uLWNsb3NlLTJcIiB0aXRsZT1cInt7Q0xPU0V9fVwiPjwvYnV0dG9uPidcbiAgICAgICAgfSxcbiAgICAgICAga2V5Ym9hcmQ6IGZhbHNlLFxuICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICB0b3VjaDogZmFsc2UsXG4gICAgICAgIG9uSW5pdDogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIH0sXG4gICAgICAgIGJlZm9yZUNsb3NlOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgJChcIltkYXRhLWZhbmN5Ym94LS1ncm91cF1cIikuZmFuY3lib3goe1xuICAgICAgICBzbWFsbEJ0biA6IGZhbHNlLFxuICAgICAgICBhdXRvRm9jdXMgOiBmYWxzZSxcbiAgICAgICAgYnRuVHBsIDoge1xuICAgICAgICAgICAgc2xpZGVTaG93ICA6ICc8YnV0dG9uIGRhdGEtZmFuY3lib3gtcGxheSBjbGFzcz1cImZhbmN5Ym94LWJ1dHRvbiBmYW5jeWJveC1idXR0b24tLXBsYXkgaGlkZVwiIHRpdGxlPVwie3tQTEFZX1NUQVJUfX1cIj48L2J1dHRvbj4nLFxuICAgICAgICAgICAgZnVsbFNjcmVlbiA6ICc8YnV0dG9uIGRhdGEtZmFuY3lib3gtZnVsbHNjcmVlbiBjbGFzcz1cImZhbmN5Ym94LWJ1dHRvbiBmYW5jeWJveC1idXR0b24tLWZ1bGxzY3JlZW4gaGlkZVwiIHRpdGxlPVwie3tGVUxMX1NDUkVFTn19XCI+PC9idXR0b24+JyxcbiAgICAgICAgICAgIHRodW1icyAgICAgOiAnPGJ1dHRvbiBkYXRhLWZhbmN5Ym94LXRodW1icyBjbGFzcz1cImZhbmN5Ym94LWJ1dHRvbiBmYW5jeWJveC1idXR0b24tLXRodW1icyBoaWRlXCIgdGl0bGU9XCJ7e1RIVU1CU319XCI+PC9idXR0b24+JyxcbiAgICAgICAgICAgIGNsb3NlICAgICAgOiAnPGJ1dHRvbiBkYXRhLWZhbmN5Ym94LWNsb3NlIGNsYXNzPVwiZmFuY3lib3gtYnV0dG9uIGZhbmN5Ym94LWJ1dHRvbi0tY2xvc2VcIiB0aXRsZT1cInt7Q0xPU0V9fVwiPjwvYnV0dG9uPicsXG5cbiAgICAgICAgICAgIC8vIFRoaXMgc21hbGwgY2xvc2UgYnV0dG9uIHdpbGwgYmUgYXBwZW5kZWQgdG8geW91ciBodG1sL2lubGluZS9hamF4IGNvbnRlbnQgYnkgZGVmYXVsdCxcbiAgICAgICAgICAgIC8vIGlmIFwic21hbGxCdG5cIiBvcHRpb24gaXMgbm90IHNldCB0byBmYWxzZVxuICAgICAgICAgICAgc21hbGxCdG4gICA6ICc8YnV0dG9uIGRhdGEtZmFuY3lib3gtY2xvc2UgY2xhc3M9XCJmYW5jeWJveC1jbG9zZS1zbWFsbCBnbHlwaGljb24gZ2x5cGhpY29uLWNsb3NlLTJcIiB0aXRsZT1cInt7Q0xPU0V9fVwiPjwvYnV0dG9uPidcbiAgICAgICAgfSxcbiAgICAgICAgdG91Y2g6IGZhbHNlLFxuICAgICAgICBvbkluaXQ6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICB9LFxuICAgICAgICBiZWZvcmVDbG9zZTogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIH0sXG4gICAgICAgIGFmdGVyQ2xvc2U6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAkKFwiW2RhdGEtZmFuY3lib3gtLWdhbGxlcnldXCIpLmZhbmN5Ym94KHtcbiAgICAgICAgc21hbGxCdG4gOiBmYWxzZSxcbiAgICAgICAgYXV0b0ZvY3VzIDogZmFsc2UsXG4gICAgICAgIGJ0blRwbCA6IHtcbiAgICAgICAgICAgIHNsaWRlU2hvdyAgOiAnPGJ1dHRvbiBkYXRhLWZhbmN5Ym94LXBsYXkgY2xhc3M9XCJmYW5jeWJveC1idXR0b24gZmFuY3lib3gtYnV0dG9uLS1wbGF5XCIgdGl0bGU9XCJ7e1BMQVlfU1RBUlR9fVwiPjwvYnV0dG9uPicsXG4gICAgICAgICAgICBmdWxsU2NyZWVuIDogJzxidXR0b24gZGF0YS1mYW5jeWJveC1mdWxsc2NyZWVuIGNsYXNzPVwiZmFuY3lib3gtYnV0dG9uIGZhbmN5Ym94LWJ1dHRvbi0tZnVsbHNjcmVlblwiIHRpdGxlPVwie3tGVUxMX1NDUkVFTn19XCI+PC9idXR0b24+JyxcbiAgICAgICAgICAgIHRodW1icyAgICAgOiAnPGJ1dHRvbiBkYXRhLWZhbmN5Ym94LXRodW1icyBjbGFzcz1cImZhbmN5Ym94LWJ1dHRvbiBmYW5jeWJveC1idXR0b24tLXRodW1ic1wiIHRpdGxlPVwie3tUSFVNQlN9fVwiPjwvYnV0dG9uPicsXG4gICAgICAgICAgICBjbG9zZSAgICAgIDogJzxidXR0b24gZGF0YS1mYW5jeWJveC1jbG9zZSBjbGFzcz1cImZhbmN5Ym94LWJ1dHRvbiBmYW5jeWJveC1idXR0b24tLWNsb3NlXCIgdGl0bGU9XCJ7e0NMT1NFfX1cIj48L2J1dHRvbj4nLFxuXG4gICAgICAgICAgICAvLyBUaGlzIHNtYWxsIGNsb3NlIGJ1dHRvbiB3aWxsIGJlIGFwcGVuZGVkIHRvIHlvdXIgaHRtbC9pbmxpbmUvYWpheCBjb250ZW50IGJ5IGRlZmF1bHQsXG4gICAgICAgICAgICAvLyBpZiBcInNtYWxsQnRuXCIgb3B0aW9uIGlzIG5vdCBzZXQgdG8gZmFsc2VcbiAgICAgICAgICAgIHNtYWxsQnRuICAgOiAnPGJ1dHRvbiBkYXRhLWZhbmN5Ym94LWNsb3NlIGNsYXNzPVwiZmFuY3lib3gtY2xvc2Utc21hbGwgZ2x5cGhpY29uIGdseXBoaWNvbi1jbG9zZS0yXCIgdGl0bGU9XCJ7e0NMT1NFfX1cIj48L2J1dHRvbj4nXG4gICAgICAgIH0sXG4gICAgICAgIG9uSW5pdDogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIH0sXG4gICAgICAgIGJlZm9yZUNsb3NlOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgfVxuICAgIH0pO1xufSk7Il19
