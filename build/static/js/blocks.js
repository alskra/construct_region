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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2UuanMiLCJoZWFkZXIuanMiLCJtZW51LmpzIiwiY29udGFjdC1tYXAuanMiLCJzdGF0aW9ucy5qcyIsImZvcm0tb3JkZXItY2FsbC0yLmpzIiwidGV4dC1maWVsZC5qcyIsInNsaWRlci1tYWluLmpzIiwic2xpZGVyLWNsaWVudHMuanMiLCJmb3JtLWZlZWRiYWNrLmpzIiwicG9wdXAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNiQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJibG9ja3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgJHNjcmVlblNtID0gNzY4LCAkc2NyZWVuTWQgPSAxMDI0LCAkc2NyZWVuTGcgPSAxMjcwO1xuXG52YXIgJGZvbnRTaXplUm9vdCA9IDE2LCAkZm9udFNpemVSb290Q29tcHV0ZWQgPSBwYXJzZUludCgkKCdodG1sJykuY3NzKCdmb250U2l6ZScpKTtcblxudmFyICRzY3JlZW5TbU1pbiA9ICRzY3JlZW5TbS8kZm9udFNpemVSb290ICsgJ2VtJzsgY29uc29sZS5sb2coJyRzY3JlZW5TbU1pbiA9ICcgKyAkc2NyZWVuU21NaW4gKyAnICgnICsgJHNjcmVlblNtICsgJ3B4KScpO1xudmFyICRzY3JlZW5NZE1pbiA9ICRzY3JlZW5NZC8kZm9udFNpemVSb290ICsgJ2VtJzsgY29uc29sZS5sb2coJyRzY3JlZW5NZE1pbiA9ICcgKyAkc2NyZWVuTWRNaW4gKyAnICgnICsgJHNjcmVlbk1kICsgJ3B4KScpO1xudmFyICRzY3JlZW5MZ01pbiA9ICRzY3JlZW5MZy8kZm9udFNpemVSb290ICsgJ2VtJzsgY29uc29sZS5sb2coJyRzY3JlZW5MZ01pbiA9ICcgKyAkc2NyZWVuTGdNaW4gKyAnICgnICsgJHNjcmVlbkxnICsgJ3B4KScpO1xuXG52YXIgJHNjcmVlblhzTWF4ID0gKCRzY3JlZW5TbSAtIDEpLyRmb250U2l6ZVJvb3QgKyAnZW0nOyBjb25zb2xlLmxvZygnJHNjcmVlblhzTWF4ID0gJyArICRzY3JlZW5Yc01heCk7XG52YXIgJHNjcmVlblNtTWF4ID0gKCRzY3JlZW5NZCAtIDEpLyRmb250U2l6ZVJvb3QgKyAnZW0nOyBjb25zb2xlLmxvZygnJHNjcmVlblNtTWF4ID0gJyArICRzY3JlZW5TbU1heCk7XG52YXIgJHNjcmVlbk1kTWF4ID0gKCRzY3JlZW5MZyAtIDEpLyRmb250U2l6ZVJvb3QgKyAnZW0nOyBjb25zb2xlLmxvZygnJHNjcmVlbk1kTWF4ID0gJyArICRzY3JlZW5NZE1heCk7XG5cbiQoJy5sYXp5JykuTGF6eSgpO1xuIiwiJChmdW5jdGlvbiAoKSB7XG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsICdbZGF0YS10b2dnbGU9XCJtZW51XCJdJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAkKHRoaXMpLnRvZ2dsZUNsYXNzKCdnbHlwaGljb24tbWVudS1saW5lcyBnbHlwaGljb24tY2FuY2VsJyk7XG4gICAgICAgICQoJy5oZWFkZXJfX3BhbmVsJykuZmFkZVRvZ2dsZSgyMDApO1xuICAgICAgICAkKCdodG1sJykudG9nZ2xlQ2xhc3MoJ29wZW5lZC1wYW5lbCcpO1xuICAgIH0pO1xufSk7IiwiJChmdW5jdGlvbiAoKSB7XG4gICAgJCgnaHRtbC50b3VjaGV2ZW50cycpLm9uKCdjbGljaycsICcubWVudV9faXRlbV9zdWJtZW51Om5vdCgubWVudV9faXRlbV9vcGVuZWQpPi5tZW51X19idG4nLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICQoJy5tZW51X19zdWJtZW51JylcbiAgICAgICAgICAgIC5ub3QoJCh0aGlzKS5uZXh0KCcubWVudV9fc3VibWVudScpLmFkZENsYXNzKCdtZW51X19zdWJtZW51X29wZW5lZCcpLnNsaWRlRG93bigyMDApLnBhcmVudCgpLmFkZENsYXNzKCdtZW51X19pdGVtX29wZW5lZCcpLmVuZCgpKVxuICAgICAgICAgICAgLm5vdCgkKHRoaXMpLnBhcmVudHMoJy5tZW51X19zdWJtZW51JykpXG4gICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ21lbnVfX3N1Ym1lbnVfb3BlbmVkJykuc2xpZGVVcCgyMDApLnBhcmVudCgpLnJlbW92ZUNsYXNzKCdtZW51X19pdGVtX29wZW5lZCcpO1xuICAgIH0pLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmICghJChlLnRhcmdldCkuY2xvc2VzdCgnLm1lbnUnKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICQoJy5tZW51X19zdWJtZW51JykucmVtb3ZlQ2xhc3MoJ21lbnVfX3N1Ym1lbnVfb3BlbmVkJykuc2xpZGVVcCgyMDApLnBhcmVudCgpLnJlbW92ZUNsYXNzKCdtZW51X19pdGVtX29wZW5lZCcpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICB2YXIgdGltZXJIb3Zlck1lbnVJdGVtO1xuICAgICQoJ2h0bWwubm8tdG91Y2hldmVudHMgLm1lbnVfX2l0ZW1fc3VibWVudScpLmhvdmVyKGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZhciAkbWVudUl0ZW0gPSAkKHRoaXMpO1xuICAgICAgICB0aW1lckhvdmVyTWVudUl0ZW0gPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICRtZW51SXRlbS5jaGlsZHJlbignLm1lbnVfX3N1Ym1lbnUnKS5hZGRDbGFzcygnbWVudV9fc3VibWVudV9vcGVuZWQnKS5zbGlkZURvd24oMjAwKS5wYXJlbnQoKS5hZGRDbGFzcygnbWVudV9faXRlbV9vcGVuZWQnKTtcbiAgICAgICAgfSwgMTAwKTtcblxuICAgIH0sIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIHZhciAkbWVudUl0ZW0gPSAkKHRoaXMpO1xuICAgICAgICBjbGVhclRpbWVvdXQodGltZXJIb3Zlck1lbnVJdGVtKTtcbiAgICAgICAgJG1lbnVJdGVtLmNoaWxkcmVuKCcubWVudV9fc3VibWVudScpLnJlbW92ZUNsYXNzKCdtZW51X19zdWJtZW51X29wZW5lZCcpLnNsaWRlVXAoMjAwKS5wYXJlbnQoKS5yZW1vdmVDbGFzcygnbWVudV9faXRlbV9vcGVuZWQnKTtcbiAgICB9KTtcbn0pOyIsInltYXBzLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgeWFNYXBzID0gJCgnLnlhLW1hcCcpO1xuXG4gICAgeWFNYXBzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgZGF0YVBsYWNlbWFyayA9ICQodGhpcykuZGF0YSgncGxhY2VtYXJrJyk7XG5cbiAgICAgICAgdmFyIG15TWFwID0gbmV3IHltYXBzLk1hcCh0aGlzLCB7XG4gICAgICAgICAgICBjZW50ZXI6IGRhdGFQbGFjZW1hcmtbMF0uY29vcmRpbmF0ZXMsXG4gICAgICAgICAgICB6b29tOiAxNy8vLFxuICAgICAgICAgICAgLy9ib3VuZHM6ICQodGhpcykuaGFzQ2xhc3MoJ3lhLW1hcC1yb3V0ZScpID8gW2RhdGFQbGFjZW1hcmtbMF0uY29vcmRpbmF0ZXMsIGRhdGFQbGFjZW1hcmtbZGF0YVBsYWNlbWFyay5sZW5ndGgtMV0uY29vcmRpbmF0ZXNdIDogZmFsc2UsXG4gICAgICAgICAgICAvL2JlaGF2aW9yczogWydkYmxDbGlja1pvb20nLCAnbXVsdGlUb3VjaCcsICdyaWdodE1vdXNlQnV0dG9uTWFnbmlmaWVyJ11cbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFyIGFyckNvb3JkcyA9IFtdLCBteVBsYWNlbWFyaztcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkYXRhUGxhY2VtYXJrLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBhcnJDb29yZHMucHVzaChkYXRhUGxhY2VtYXJrW2ldLmNvb3JkaW5hdGVzKTtcbiAgICAgICAgICAgIG15UGxhY2VtYXJrID0gbmV3IHltYXBzLlBsYWNlbWFyayhkYXRhUGxhY2VtYXJrW2ldLmNvb3JkaW5hdGVzLCB7XG4gICAgICAgICAgICAgICAgaGludENvbnRlbnQ6IGRhdGFQbGFjZW1hcmtbaV0uaGludENvbnRlbnQsXG4gICAgICAgICAgICAgICAgYmFsbG9vbkNvbnRlbnQ6IGRhdGFQbGFjZW1hcmtbaV0uYmFsbG9vbkNvbnRlbnQsXG4gICAgICAgICAgICAgICAgaWNvbkNvbnRlbnQ6ICcnXG4gICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgLy8g0J7Qv9GG0LjQuC5cbiAgICAgICAgICAgICAgICAvLyDQndC10L7QsdGF0L7QtNC40LzQviDRg9C60LDQt9Cw0YLRjCDQtNCw0L3QvdGL0Lkg0YLQuNC/INC80LDQutC10YLQsC5cbiAgICAgICAgICAgICAgICBpY29uTGF5b3V0OiAnZGVmYXVsdCNpbWFnZVdpdGhDb250ZW50JyxcbiAgICAgICAgICAgICAgICAvLyDQodCy0L7RkSDQuNC30L7QsdGA0LDQttC10L3QuNC1INC40LrQvtC90LrQuCDQvNC10YLQutC4LlxuICAgICAgICAgICAgICAgIGljb25JbWFnZUhyZWY6IFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQRDk0Yld3Z2RtVnljMmx2YmowaU1TNHdJaUJsYm1OdlpHbHVaejBpZFhSbUxUZ2lQejQ4SVVSUFExUlpVRVVnYzNabklGQlZRa3hKUXlBaUxTOHZWek5ETHk5RVZFUWdVMVpISURFdU1TOHZSVTRpSUNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk5SGNtRndhR2xqY3k5VFZrY3ZNUzR4TDBSVVJDOXpkbWN4TVM1a2RHUWlQanh6ZG1jZ2RtVnljMmx2YmowaU1TNHhJaUJwWkQwaVEyRndZVjh4SWlCNGJXeHVjejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TWpBd01DOXpkbWNpSUhodGJHNXpPbmhzYVc1clBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHhPVGs1TDNoc2FXNXJJaUI0UFNJd2NIZ2lJSGs5SWpCd2VDSWdkMmxrZEdnOUlqTTFMamN5TkhCNElpQm9aV2xuYUhROUlqVXdjSGdpSUhacFpYZENiM2c5SWpJek9DNHhNemdnTWpNeElETTFMamN5TkNBMU1DSWdaVzVoWW14bExXSmhZMnRuY205MWJtUTlJbTVsZHlBeU16Z3VNVE00SURJek1TQXpOUzQzTWpRZ05UQWlJSGh0YkRwemNHRmpaVDBpY0hKbGMyVnlkbVVpUGp4blBqeHdZWFJvSUdacGJHdzlJaU5GUlRNME1qSWlJR1E5SWsweU5UWXVOak1zTWpNeExqQXhZeTB4TUM0eE5UUXRNQzR6TkRJdE1UZ3VORGt6TERjdU56ZzNMVEU0TGpRNU15d3hOeTQ0TmpSak1Dd3hNUzQwTXpZc01UQXVPVGMxTERFNUxqY3pOU3d4Tnk0eE1qWXNNekV1TmpjeFl6QXVNekV5TERBdU5qQTJMREV1TVRnMUxEQXVOakEzTERFdU5EazRMREF1TURBeFl6VXVOVFkxTFRFd0xqYzBMREUxTGpBM05TMHhOeTQ1TkRFc01UWXVPRE00TFRJNExqSTRPRU15TnpVdU5ESTFMREkwTVM0MU5USXNNalkzTGpRNE5Td3lNekV1TXpjMkxESTFOaTQyTXl3eU16RXVNREY2SUUweU5UWXVNREV5TERJMU9DNHlNemRqTFRVdU1UY3hMREF0T1M0ek5qSXROQzR4T1RJdE9TNHpOakl0T1M0ek5qTnpOQzR4T1RJdE9TNHpOak1zT1M0ek5qSXRPUzR6TmpOak5TNHhOekVzTUN3NUxqTTJNeXcwTGpFNU1pdzVMak0yTXl3NUxqTTJNMU15TmpFdU1UZ3lMREkxT0M0eU16Y3NNalUyTGpBeE1pd3lOVGd1TWpNM2VpSXZQand2Wno0OEwzTjJaejQ9XCIsXG4gICAgICAgICAgICAgICAgLy8g0KDQsNC30LzQtdGA0Ysg0LzQtdGC0LrQuC5cbiAgICAgICAgICAgICAgICBpY29uSW1hZ2VTaXplOiBbMzIsIDQ3XSxcbiAgICAgICAgICAgICAgICAvLyDQodC80LXRidC10L3QuNC1INC70LXQstC+0LPQviDQstC10YDRhdC90LXQs9C+INGD0LPQu9CwINC40LrQvtC90LrQuCDQvtGC0L3QvtGB0LjRgtC10LvRjNC90L5cbiAgICAgICAgICAgICAgICAvLyDQtdGRIFwi0L3QvtC20LrQuFwiICjRgtC+0YfQutC4INC/0YDQuNCy0Y/Qt9C60LgpLlxuICAgICAgICAgICAgICAgIGljb25JbWFnZU9mZnNldDogWy0xNiwgLTQ3XVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIG15TWFwLmdlb09iamVjdHMuYWRkKG15UGxhY2VtYXJrKTtcbiAgICAgICAgfVxuICAgICAgICAvL215TWFwLnNldEJvdW5kcyhteU1hcC5nZW9PYmplY3RzLmdldEJvdW5kcygpKTtcbiAgICAgICAgJCh3aW5kb3cpLm9uKCdyZXNpemUuWWFNYXAnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBteU1hcC5zZXRDZW50ZXIoZGF0YVBsYWNlbWFya1swXS5jb29yZGluYXRlcyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIC8qXG4gICAgICAgIC8vINCh0L7Qt9C00LDQtdC8INC70L7QvNCw0L3Rg9GOINGBINC/0L7QvNC+0YnRjNGOINCy0YHQv9C+0LzQvtCz0LDRgtC10LvRjNC90L7Qs9C+INC60LvQsNGB0YHQsCBQb2x5bGluZS5cbiAgICAgICAgdmFyIG15UG9seWxpbmUgPSBuZXcgeW1hcHMuUG9seWxpbmUoYXJyQ29vcmRzLCB7XG4gICAgICAgICAgICAvLyDQntC/0LjRgdGL0LLQsNC10Lwg0YHQstC+0LnRgdGC0LLQsCDQs9C10L7QvtCx0YrQtdC60YLQsC5cbiAgICAgICAgICAgIC8vINCh0L7QtNC10YDQttC40LzQvtC1INCx0LDQu9GD0L3QsC5cbiAgICAgICAgICAgIGJhbGxvb25Db250ZW50OiBcIlwiXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIC8vINCX0LDQtNCw0LXQvCDQvtC/0YbQuNC4INCz0LXQvtC+0LHRitC10LrRgtCwLlxuICAgICAgICAgICAgLy8g0J7RgtC60LvRjtGH0LDQtdC8INC60L3QvtC/0LrRgyDQt9Cw0LrRgNGL0YLQuNGPINCx0LDQu9GD0L3QsC5cbiAgICAgICAgICAgIGJhbGxvb25DbG9zZUJ1dHRvbjogZmFsc2UsXG4gICAgICAgICAgICAvLyDQptCy0LXRgiDQu9C40L3QuNC4LlxuICAgICAgICAgICAgc3Ryb2tlQ29sb3I6IFwiI2Q0NGMzZlwiLFxuICAgICAgICAgICAgLy8g0KjQuNGA0LjQvdCwINC70LjQvdC40LguXG4gICAgICAgICAgICBzdHJva2VXaWR0aDogMixcbiAgICAgICAgICAgIC8vINCa0L7RjdGE0YTQuNGG0LjQtdC90YIg0L/RgNC+0LfRgNCw0YfQvdC+0YHRgtC4LlxuICAgICAgICAgICAgc3Ryb2tlT3BhY2l0eTogMVxuICAgICAgICB9KTtcbiAgICAgICAgLy8g0JTQvtCx0LDQstC70Y/QtdC8INC70LjQvdC40Lgg0L3QsCDQutCw0YDRgtGDLlxuICAgICAgICBteU1hcC5nZW9PYmplY3RzLmFkZChteVBvbHlsaW5lKTsqL1xuICAgIH0pO1xufSk7IiwiJChmdW5jdGlvbiAoKSB7XG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsICcuc3RhdGlvbnNfX2l0ZW0nLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmICgkKGUudGFyZ2V0KS5hdHRyKCdkYXRhLXRvZ2dsZScpICE9PSAnY2xvc2Utc3RhdGlvbi1wb3B1cCcgJiYgISQoZS50YXJnZXQpLmNsb3Nlc3QoJy5zdGF0aW9uc19fcG9wdXAnKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICQoJy5zdGF0aW9uc19faXRlbScpLm5vdCgkKHRoaXMpLnRvZ2dsZUNsYXNzKCdzdGF0aW9uc19faXRlbV9vcGVuZWQnKS5maW5kKCcuc3RhdGlvbnNfX3BvcHVwJykuZmFkZVRvZ2dsZSgyMDApLmVuZCgpKVxuICAgICAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnc3RhdGlvbnNfX2l0ZW1fb3BlbmVkJykuZmluZCgnLnN0YXRpb25zX19wb3B1cCcpLmZhZGVPdXQoMjAwKTtcbiAgICAgICAgfVxuICAgIH0pLm9uKCdjbGljaycsICdbZGF0YS10b2dnbGU9XCJjbG9zZS1zdGF0aW9uLXBvcHVwXCJdJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgJCh0aGlzKS5jbG9zZXN0KCcuc3RhdGlvbnNfX2l0ZW0nKS5yZW1vdmVDbGFzcygnc3RhdGlvbnNfX2l0ZW1fb3BlbmVkJykuZmluZCgnLnN0YXRpb25zX19wb3B1cCcpLmZhZGVPdXQoMjAwKTtcbiAgICB9KS5vbignY2xpY2snLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoISQoZS50YXJnZXQpLmNsb3Nlc3QoJy5zdGF0aW9uc19faXRlbScpLmxlbmd0aCkge1xuICAgICAgICAgICAgJCgnLnN0YXRpb25zX19pdGVtJykucmVtb3ZlQ2xhc3MoJ3N0YXRpb25zX19pdGVtX29wZW5lZCcpLmZpbmQoJy5zdGF0aW9uc19fcG9wdXAnKS5mYWRlT3V0KDIwMCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn0pOyIsIiQoZnVuY3Rpb24gKCkge1xuICAgIHZhciAkZm9ybSA9ICQoJy5mb3JtLW9yZGVyLWNhbGwtMicpO1xuICAgIGlmICgkZm9ybS5sZW5ndGgpIHtcbiAgICAgICAgJGZvcm0ucGFyc2xleSgpLm9uKCdmaWVsZDp2YWxpZGF0ZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgb2sgPSAkKCcucGFyc2xleS1lcnJvcicpLmxlbmd0aCA9PT0gMDtcbiAgICAgICAgfSkub24oJ2Zvcm06c3VibWl0JywgZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgICB2YXIgJGZvcm0gPSBlbC4kZWxlbWVudDtcbiAgICAgICAgICAgICRmb3JtLmZpbmQoJ1tkYXRhLXRvZ2dsZT1cInN1Ym1pdFwiXScpLmF0dHIoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgICAgICAgICB2YXIgZGF0YSA9ICRmb3JtLnNlcmlhbGl6ZSgpO1xuICAgICAgICAgICAgdmFyIHJlc3BvbnNlTXNnID0gJ9CS0LDRiNC1INGB0L7QvtCx0YnQtdC90LjQtSDRg9GB0L/QtdGI0L3QviDQvtGC0L/RgNCw0LLQu9C10L3Qviwg0LzRiyDQktCw0Lwg0L/QtdGA0LXQt9Cy0L7QvdC40LwhJztcblxuICAgICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgICAgICB0eXBlOiAkZm9ybS5hdHRyKCdtZXRob2QnKSxcbiAgICAgICAgICAgICAgICB1cmw6ICRmb3JtLmF0dHIoJ2FjdGlvbicpLFxuICAgICAgICAgICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEsIHRleHRTdGF0dXMsIGpxWEhSKSB7XG5cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfQn9GA0Lgg0L7RgtC/0YDQsNCy0LrQtSDQstC+0LfQvdC40LrQu9CwINC+0YjQuNCx0LrQsDogJyArIGpxWEhSLnN0YXR1cyk7XG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlTXNnID0gJ9Cf0YDQuCDQvtGC0L/RgNCw0LLQutC1INCy0L7Qt9C90LjQutC70LAg0L7RiNC40LHQutCwISBcIicgKyBqcVhIUi5zdGF0dXNUZXh0ICsgJ1wiJztcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMpIHtcbiAgICAgICAgICAgICAgICAgICAgJGZvcm0uZmluZCgnW2RhdGEtdG9nZ2xlPVwic3VibWl0XCJdJykuYXR0cignZGlzYWJsZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICQuZmFuY3lib3guY2xvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgJC5mYW5jeWJveC5vcGVuKCc8ZGl2IGNsYXNzPVwicG9wdXAgcG9wdXBfc2l6ZV82NTIgcG9wdXBfcmVzcG9uc2VfZmVlZGJhY2sgY29udGFpbmVyLWZsdWlkXCI+JyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cInBvcHVwX19oZWFkZXJcIj48aDIgY2xhc3M9XCJwb3B1cF9fdGl0bGVcIj4nICsgcmVzcG9uc2VNc2cgKyAnPC9oMj48L2Rpdj4nICtcbiAgICAgICAgICAgICAgICAgICAgICAgICc8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bl80XCIgZGF0YS1mYW5jeWJveC1jbG9zZT1cImRhdGEtZmFuY3lib3gtY2xvc2VcIj7Ql9Cw0LrRgNGL0YLRjDwvYnV0dG9uPicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJzwvZGl2PicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9XG59KTsiLCJmdW5jdGlvbiBoYXNWYWwoKSB7XG4gICAgJCgnLnRleHQtZmllbGQnKS5vbignYmx1cicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCQodGhpcykudmFsKCkpIHtcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ3RleHQtZmllbGRfaGFzLXZhbCcpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygndGV4dC1maWVsZF9oYXMtdmFsJyk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuJChmdW5jdGlvbiAoKSB7XG4gICAgaGFzVmFsKCk7XG4gICAgJCgnW2RhdGEtbWFza10nKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnaW5pdC1tYXNrJyk7XG4gICAgfSk7XG59KTtcblxuJChkb2N1bWVudCkuYWpheENvbXBsZXRlKGZ1bmN0aW9uKCkge1xuICAgIGhhc1ZhbCgpO1xuICAgICQoJ1tkYXRhLW1hc2tdJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghJCh0aGlzKS5oYXNDbGFzcygnaW5pdC1tYXNrJykpIHtcbiAgICAgICAgICAgICQodGhpcykubWFzaygkKHRoaXMpLmRhdGEoJ21hc2snKSkuYWRkQ2xhc3MoJ2luaXQtbWFzaycpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgJCgnW2RhdGEtcGFyc2xleS12YWxpZGF0ZV0nKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5wYXJzbGV5KCk7XG4gICAgfSk7XG59KTsiLCIkKGZ1bmN0aW9uICgpIHtcbiAgICAkKCcuc2xpZGVyLW1haW4nKS5zbGljayh7XG4gICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgc3BlZWQ6IDMwMCxcbiAgICAgICAgZmFkZTogdHJ1ZSxcbiAgICAgICAgY3NzRWFzZTogJ2xpbmVhcicsXG4gICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgIG1vYmlsZUZpcnN0OiB0cnVlLFxuICAgICAgICBwcmV2QXJyb3c6ICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInNsaWNrLXByZXYgZ2x5cGhpY29uIGdseXBoaWNvbi1hbmdsZS1sZWZ0XCI+PC9idXR0b24+JyxcbiAgICAgICAgbmV4dEFycm93OiAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1uZXh0IGdseXBoaWNvbiBnbHlwaGljb24tYW5nbGUtcmlnaHRcIj48L2J1dHRvbj4nLFxuICAgICAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICAgICAgYXV0b3BsYXlTcGVlZDogNTAwMCxcbiAgICAgICAgekluZGV4OiAxLFxuICAgICAgICBsYXp5TG9hZDogJ29uZGVtYW5kJyxcbiAgICAgICAgcGF1c2VPbkZvY3VzOiBmYWxzZSxcbiAgICAgICAgcGF1c2VPbkhvdmVyOiBmYWxzZSxcbiAgICAgICAgYWRhcHRpdmVIZWlnaHQ6IGZhbHNlLFxuICAgICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgICAgICAvKntcbiAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjgsXG4gICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgY2VudGVyTW9kZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogJzQwcHgnLFxuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDNcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9Ki9cbiAgICAgICAgXVxuICAgIH0pLm9uKCdsYXp5TG9hZGVkJywgZnVuY3Rpb24gKGV2ZW50LCBzbGljaywgaW1hZ2UsIGltYWdlU291cmNlKSB7XG4gICAgICAgICQoaW1hZ2UpLmNsb3Nlc3QoJy5zbGljay1zbGlkZScpLnJlbW92ZUNsYXNzKCdsb2FkaW5nJyk7XG4gICAgfSk7XG59KTsiLCIkKGZ1bmN0aW9uICgpIHtcbiAgICAkKCcuc2xpZGVyLWNsaWVudHNfX2lubmVyJykuc2xpY2soe1xuICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgYXJyb3dzOiB0cnVlLFxuICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgc3BlZWQ6IDMwMCxcbiAgICAgICAgZmFkZTogZmFsc2UsXG4gICAgICAgIGNzc0Vhc2U6ICdsaW5lYXInLFxuICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICBtb2JpbGVGaXJzdDogdHJ1ZSxcbiAgICAgICAgcHJldkFycm93OiAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1wcmV2IGdseXBoaWNvbiBnbHlwaGljb24tbGVmdC1hbmdsZS1icmFja2V0XCI+PC9idXR0b24+JyxcbiAgICAgICAgbmV4dEFycm93OiAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1uZXh0IGdseXBoaWNvbiBnbHlwaGljb24tcmlnaHQtYW5nbGUtYnJhY2tldFwiPjwvYnV0dG9uPicsXG4gICAgICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgICAgICBhdXRvcGxheVNwZWVkOiA1MDAwLFxuICAgICAgICB6SW5kZXg6IDEsXG4gICAgICAgIGxhenlMb2FkOiAnb25kZW1hbmQnLFxuICAgICAgICBwYXVzZU9uRm9jdXM6IGZhbHNlLFxuICAgICAgICBwYXVzZU9uSG92ZXI6IGZhbHNlLFxuICAgICAgICBhZGFwdGl2ZUhlaWdodDogZmFsc2UsXG4gICAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNDc5LFxuICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyXG4gICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY3LFxuICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogM1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTAyMyxcbiAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEyNjksXG4gICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA1XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxNTk5LFxuICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgIH0pLm9uKCdsYXp5TG9hZGVkJywgZnVuY3Rpb24gKGV2ZW50LCBzbGljaywgaW1hZ2UsIGltYWdlU291cmNlKSB7XG4gICAgICAgICQoaW1hZ2UpLmNsb3Nlc3QoJy5zbGljay1zbGlkZScpLnJlbW92ZUNsYXNzKCdsb2FkaW5nJyk7XG4gICAgfSk7XG59KTsiLCIkKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgJGZvcm0gPSAkKCcuZm9ybS1mZWVkYmFjaycpO1xuICAgIGlmICgkZm9ybS5sZW5ndGgpIHtcbiAgICAgICAgJGZvcm0ucGFyc2xleSgpLm9uKCdmaWVsZDp2YWxpZGF0ZWQnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgb2sgPSAkKCcucGFyc2xleS1lcnJvcicpLmxlbmd0aCA9PT0gMDtcbiAgICAgICAgfSkub24oJ2Zvcm06c3VibWl0JywgZnVuY3Rpb24gKGVsKSB7XG4gICAgICAgICAgICB2YXIgJGZvcm0gPSBlbC4kZWxlbWVudDtcbiAgICAgICAgICAgICRmb3JtLmZpbmQoJ1tkYXRhLXRvZ2dsZT1cInN1Ym1pdFwiXScpLmF0dHIoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgICAgICAgICB2YXIgZGF0YSA9ICRmb3JtLnNlcmlhbGl6ZSgpO1xuICAgICAgICAgICAgdmFyIHJlc3BvbnNlTXNnID0gJ9CS0LDRiNC1INGB0L7QvtCx0YnQtdC90LjQtSDRg9GB0L/QtdGI0L3QviDQvtGC0L/RgNCw0LLQu9C10L3Qviwg0LzRiyDRgSDQktCw0LzQuCDRgdCy0Y/QttC10LzRgdGPISc7XG5cbiAgICAgICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICAgICAgdHlwZTogJGZvcm0uYXR0cignbWV0aG9kJyksXG4gICAgICAgICAgICAgICAgdXJsOiAkZm9ybS5hdHRyKCdhY3Rpb24nKSxcbiAgICAgICAgICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhLCB0ZXh0U3RhdHVzLCBqcVhIUikge1xuXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn0J/RgNC4INC+0YLQv9GA0LDQstC60LUg0LLQvtC30L3QuNC60LvQsCDQvtGI0LjQsdC60LA6ICcgKyBqcVhIUi5zdGF0dXMpO1xuICAgICAgICAgICAgICAgICAgICByZXNwb25zZU1zZyA9ICfQn9GA0Lgg0L7RgtC/0YDQsNCy0LrQtSDQstC+0LfQvdC40LrQu9CwINC+0YjQuNCx0LrQsCEgXCInICsganFYSFIuc3RhdHVzVGV4dCArICdcIic7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgICAgICRmb3JtLmZpbmQoJ1tkYXRhLXRvZ2dsZT1cInN1Ym1pdFwiXScpLmF0dHIoJ2Rpc2FibGVkJywgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAkLmZhbmN5Ym94LmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgICAgICQuZmFuY3lib3gub3BlbignPGRpdiBjbGFzcz1cInBvcHVwIHBvcHVwX3NpemVfNjUyIHBvcHVwX3Jlc3BvbnNlX2ZlZWRiYWNrIGNvbnRhaW5lci1mbHVpZFwiPicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJwb3B1cF9faGVhZGVyXCI+PGgyIGNsYXNzPVwicG9wdXBfX3RpdGxlXCI+JyArIHJlc3BvbnNlTXNnICsgJzwvaDI+PC9kaXY+JyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnPGJ1dHRvbiBjbGFzcz1cImJ0biBidG5fNFwiIGRhdGEtZmFuY3lib3gtY2xvc2U9XCJkYXRhLWZhbmN5Ym94LWNsb3NlXCI+0JfQsNC60YDRi9GC0Yw8L2J1dHRvbj4nICtcbiAgICAgICAgICAgICAgICAgICAgICAgICc8L2Rpdj4nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfVxufSk7IiwiJC5mYW5jeWJveC5kZWZhdWx0cy5oYXNoID0gZmFsc2U7XG4kLmZhbmN5Ym94LmRlZmF1bHRzLnRvdWNoID0gZmFsc2U7XG4kLmZhbmN5Ym94LmRlZmF1bHRzLmJ0blRwbC5zbWFsbEJ0biA9ICc8YnV0dG9uIGRhdGEtZmFuY3lib3gtY2xvc2UgY2xhc3M9XCJidG4gcG9wdXBfX2J0bi1jbG9zZSBnbHlwaGljb24gZ2x5cGhpY29uLWNhbmNlbFwiIHRpdGxlPVwi0JfQsNC60YDRi9GC0YxcIj48L2J1dHRvbj4nO1xuXG4kKGZ1bmN0aW9uICgpIHtcbiAgICAvLyQoXCJbZGF0YS1mYW5jeWJveF1cIikuZmFuY3lib3goKTtcblxuICAgICQoXCJbZGF0YS1mYW5jeWJveC0tc2luZ2xlXVwiKS5mYW5jeWJveCh7XG4gICAgICAgIHNtYWxsQnRuIDogZmFsc2UsXG4gICAgICAgIGF1dG9Gb2N1cyA6IGZhbHNlLFxuICAgICAgICBidG5UcGwgOiB7XG4gICAgICAgICAgICBzbGlkZVNob3cgIDogJzxidXR0b24gZGF0YS1mYW5jeWJveC1wbGF5IGNsYXNzPVwiZmFuY3lib3gtYnV0dG9uIGZhbmN5Ym94LWJ1dHRvbi0tcGxheSBoaWRlXCIgdGl0bGU9XCJ7e1BMQVlfU1RBUlR9fVwiPjwvYnV0dG9uPicsXG4gICAgICAgICAgICBmdWxsU2NyZWVuIDogJzxidXR0b24gZGF0YS1mYW5jeWJveC1mdWxsc2NyZWVuIGNsYXNzPVwiZmFuY3lib3gtYnV0dG9uIGZhbmN5Ym94LWJ1dHRvbi0tZnVsbHNjcmVlbiBoaWRlXCIgdGl0bGU9XCJ7e0ZVTExfU0NSRUVOfX1cIj48L2J1dHRvbj4nLFxuICAgICAgICAgICAgdGh1bWJzICAgICA6ICc8YnV0dG9uIGRhdGEtZmFuY3lib3gtdGh1bWJzIGNsYXNzPVwiZmFuY3lib3gtYnV0dG9uIGZhbmN5Ym94LWJ1dHRvbi0tdGh1bWJzIGhpZGVcIiB0aXRsZT1cInt7VEhVTUJTfX1cIj48L2J1dHRvbj4nLFxuICAgICAgICAgICAgY2xvc2UgICAgICA6ICc8YnV0dG9uIGRhdGEtZmFuY3lib3gtY2xvc2UgY2xhc3M9XCJmYW5jeWJveC1idXR0b24gZmFuY3lib3gtYnV0dG9uLS1jbG9zZVwiIHRpdGxlPVwie3tDTE9TRX19XCI+PC9idXR0b24+JyxcblxuICAgICAgICAgICAgLy8gVGhpcyBzbWFsbCBjbG9zZSBidXR0b24gd2lsbCBiZSBhcHBlbmRlZCB0byB5b3VyIGh0bWwvaW5saW5lL2FqYXggY29udGVudCBieSBkZWZhdWx0LFxuICAgICAgICAgICAgLy8gaWYgXCJzbWFsbEJ0blwiIG9wdGlvbiBpcyBub3Qgc2V0IHRvIGZhbHNlXG4gICAgICAgICAgICBzbWFsbEJ0biAgIDogJzxidXR0b24gZGF0YS1mYW5jeWJveC1jbG9zZSBjbGFzcz1cImZhbmN5Ym94LWNsb3NlLXNtYWxsIGdseXBoaWNvbiBnbHlwaGljb24tY2xvc2UtMlwiIHRpdGxlPVwie3tDTE9TRX19XCI+PC9idXR0b24+J1xuICAgICAgICB9LFxuICAgICAgICBrZXlib2FyZDogZmFsc2UsXG4gICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgIHRvdWNoOiBmYWxzZSxcbiAgICAgICAgb25Jbml0OiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgfSxcbiAgICAgICAgYmVmb3JlQ2xvc2U6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAkKFwiW2RhdGEtZmFuY3lib3gtLWdyb3VwXVwiKS5mYW5jeWJveCh7XG4gICAgICAgIHNtYWxsQnRuIDogZmFsc2UsXG4gICAgICAgIGF1dG9Gb2N1cyA6IGZhbHNlLFxuICAgICAgICBidG5UcGwgOiB7XG4gICAgICAgICAgICBzbGlkZVNob3cgIDogJzxidXR0b24gZGF0YS1mYW5jeWJveC1wbGF5IGNsYXNzPVwiZmFuY3lib3gtYnV0dG9uIGZhbmN5Ym94LWJ1dHRvbi0tcGxheSBoaWRlXCIgdGl0bGU9XCJ7e1BMQVlfU1RBUlR9fVwiPjwvYnV0dG9uPicsXG4gICAgICAgICAgICBmdWxsU2NyZWVuIDogJzxidXR0b24gZGF0YS1mYW5jeWJveC1mdWxsc2NyZWVuIGNsYXNzPVwiZmFuY3lib3gtYnV0dG9uIGZhbmN5Ym94LWJ1dHRvbi0tZnVsbHNjcmVlbiBoaWRlXCIgdGl0bGU9XCJ7e0ZVTExfU0NSRUVOfX1cIj48L2J1dHRvbj4nLFxuICAgICAgICAgICAgdGh1bWJzICAgICA6ICc8YnV0dG9uIGRhdGEtZmFuY3lib3gtdGh1bWJzIGNsYXNzPVwiZmFuY3lib3gtYnV0dG9uIGZhbmN5Ym94LWJ1dHRvbi0tdGh1bWJzIGhpZGVcIiB0aXRsZT1cInt7VEhVTUJTfX1cIj48L2J1dHRvbj4nLFxuICAgICAgICAgICAgY2xvc2UgICAgICA6ICc8YnV0dG9uIGRhdGEtZmFuY3lib3gtY2xvc2UgY2xhc3M9XCJmYW5jeWJveC1idXR0b24gZmFuY3lib3gtYnV0dG9uLS1jbG9zZVwiIHRpdGxlPVwie3tDTE9TRX19XCI+PC9idXR0b24+JyxcblxuICAgICAgICAgICAgLy8gVGhpcyBzbWFsbCBjbG9zZSBidXR0b24gd2lsbCBiZSBhcHBlbmRlZCB0byB5b3VyIGh0bWwvaW5saW5lL2FqYXggY29udGVudCBieSBkZWZhdWx0LFxuICAgICAgICAgICAgLy8gaWYgXCJzbWFsbEJ0blwiIG9wdGlvbiBpcyBub3Qgc2V0IHRvIGZhbHNlXG4gICAgICAgICAgICBzbWFsbEJ0biAgIDogJzxidXR0b24gZGF0YS1mYW5jeWJveC1jbG9zZSBjbGFzcz1cImZhbmN5Ym94LWNsb3NlLXNtYWxsIGdseXBoaWNvbiBnbHlwaGljb24tY2xvc2UtMlwiIHRpdGxlPVwie3tDTE9TRX19XCI+PC9idXR0b24+J1xuICAgICAgICB9LFxuICAgICAgICB0b3VjaDogZmFsc2UsXG4gICAgICAgIG9uSW5pdDogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIH0sXG4gICAgICAgIGJlZm9yZUNsb3NlOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgfSxcbiAgICAgICAgYWZ0ZXJDbG9zZTogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgICQoXCJbZGF0YS1mYW5jeWJveC0tZ2FsbGVyeV1cIikuZmFuY3lib3goe1xuICAgICAgICBzbWFsbEJ0biA6IGZhbHNlLFxuICAgICAgICBhdXRvRm9jdXMgOiBmYWxzZSxcbiAgICAgICAgYnRuVHBsIDoge1xuICAgICAgICAgICAgc2xpZGVTaG93ICA6ICc8YnV0dG9uIGRhdGEtZmFuY3lib3gtcGxheSBjbGFzcz1cImZhbmN5Ym94LWJ1dHRvbiBmYW5jeWJveC1idXR0b24tLXBsYXlcIiB0aXRsZT1cInt7UExBWV9TVEFSVH19XCI+PC9idXR0b24+JyxcbiAgICAgICAgICAgIGZ1bGxTY3JlZW4gOiAnPGJ1dHRvbiBkYXRhLWZhbmN5Ym94LWZ1bGxzY3JlZW4gY2xhc3M9XCJmYW5jeWJveC1idXR0b24gZmFuY3lib3gtYnV0dG9uLS1mdWxsc2NyZWVuXCIgdGl0bGU9XCJ7e0ZVTExfU0NSRUVOfX1cIj48L2J1dHRvbj4nLFxuICAgICAgICAgICAgdGh1bWJzICAgICA6ICc8YnV0dG9uIGRhdGEtZmFuY3lib3gtdGh1bWJzIGNsYXNzPVwiZmFuY3lib3gtYnV0dG9uIGZhbmN5Ym94LWJ1dHRvbi0tdGh1bWJzXCIgdGl0bGU9XCJ7e1RIVU1CU319XCI+PC9idXR0b24+JyxcbiAgICAgICAgICAgIGNsb3NlICAgICAgOiAnPGJ1dHRvbiBkYXRhLWZhbmN5Ym94LWNsb3NlIGNsYXNzPVwiZmFuY3lib3gtYnV0dG9uIGZhbmN5Ym94LWJ1dHRvbi0tY2xvc2VcIiB0aXRsZT1cInt7Q0xPU0V9fVwiPjwvYnV0dG9uPicsXG5cbiAgICAgICAgICAgIC8vIFRoaXMgc21hbGwgY2xvc2UgYnV0dG9uIHdpbGwgYmUgYXBwZW5kZWQgdG8geW91ciBodG1sL2lubGluZS9hamF4IGNvbnRlbnQgYnkgZGVmYXVsdCxcbiAgICAgICAgICAgIC8vIGlmIFwic21hbGxCdG5cIiBvcHRpb24gaXMgbm90IHNldCB0byBmYWxzZVxuICAgICAgICAgICAgc21hbGxCdG4gICA6ICc8YnV0dG9uIGRhdGEtZmFuY3lib3gtY2xvc2UgY2xhc3M9XCJmYW5jeWJveC1jbG9zZS1zbWFsbCBnbHlwaGljb24gZ2x5cGhpY29uLWNsb3NlLTJcIiB0aXRsZT1cInt7Q0xPU0V9fVwiPjwvYnV0dG9uPidcbiAgICAgICAgfSxcbiAgICAgICAgb25Jbml0OiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgfSxcbiAgICAgICAgYmVmb3JlQ2xvc2U6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICB9XG4gICAgfSk7XG59KTsiXX0=
