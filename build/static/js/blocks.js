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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2UuanMiLCJoZWFkZXIuanMiLCJtZW51LmpzIiwicG9wdXAuanMiLCJmb3JtLW9yZGVyLWNhbGwuanMiLCJ0ZXh0LWZpZWxkLmpzIiwiY29udGFjdC1tYXAuanMiLCJzdGF0aW9ucy5qcyIsImZvcm0tb3JkZXItY2FsbC0yLmpzIiwic2xpZGVyLW1haW4uanMiLCJzbGlkZXItY2xpZW50cy5qcyIsImZvcm0tZmVlZGJhY2suanMiLCJ0ZWFtLWJveC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImJsb2Nrcy5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciAkc2NyZWVuU20gPSA3NjgsICRzY3JlZW5NZCA9IDEwMjQsICRzY3JlZW5MZyA9IDEyNzA7XG5cbnZhciAkZm9udFNpemVSb290ID0gMTYsICRmb250U2l6ZVJvb3RDb21wdXRlZCA9IHBhcnNlSW50KCQoJ2h0bWwnKS5jc3MoJ2ZvbnRTaXplJykpO1xuXG52YXIgJHNjcmVlblNtTWluID0gJHNjcmVlblNtLyRmb250U2l6ZVJvb3QgKyAnZW0nOyBjb25zb2xlLmxvZygnJHNjcmVlblNtTWluID0gJyArICRzY3JlZW5TbU1pbiArICcgKCcgKyAkc2NyZWVuU20gKyAncHgpJyk7XG52YXIgJHNjcmVlbk1kTWluID0gJHNjcmVlbk1kLyRmb250U2l6ZVJvb3QgKyAnZW0nOyBjb25zb2xlLmxvZygnJHNjcmVlbk1kTWluID0gJyArICRzY3JlZW5NZE1pbiArICcgKCcgKyAkc2NyZWVuTWQgKyAncHgpJyk7XG52YXIgJHNjcmVlbkxnTWluID0gJHNjcmVlbkxnLyRmb250U2l6ZVJvb3QgKyAnZW0nOyBjb25zb2xlLmxvZygnJHNjcmVlbkxnTWluID0gJyArICRzY3JlZW5MZ01pbiArICcgKCcgKyAkc2NyZWVuTGcgKyAncHgpJyk7XG5cbnZhciAkc2NyZWVuWHNNYXggPSAoJHNjcmVlblNtIC0gMSkvJGZvbnRTaXplUm9vdCArICdlbSc7IGNvbnNvbGUubG9nKCckc2NyZWVuWHNNYXggPSAnICsgJHNjcmVlblhzTWF4KTtcbnZhciAkc2NyZWVuU21NYXggPSAoJHNjcmVlbk1kIC0gMSkvJGZvbnRTaXplUm9vdCArICdlbSc7IGNvbnNvbGUubG9nKCckc2NyZWVuU21NYXggPSAnICsgJHNjcmVlblNtTWF4KTtcbnZhciAkc2NyZWVuTWRNYXggPSAoJHNjcmVlbkxnIC0gMSkvJGZvbnRTaXplUm9vdCArICdlbSc7IGNvbnNvbGUubG9nKCckc2NyZWVuTWRNYXggPSAnICsgJHNjcmVlbk1kTWF4KTtcblxuJCgnLmxhenknKS5MYXp5KCk7XG4iLCIkKGZ1bmN0aW9uICgpIHtcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJ1tkYXRhLXRvZ2dsZT1cIm1lbnVcIl0nLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2dseXBoaWNvbi1tZW51LWxpbmVzIGdseXBoaWNvbi1jYW5jZWwnKTtcbiAgICAgICAgJCgnLmhlYWRlcl9fcGFuZWwnKS5mYWRlVG9nZ2xlKDIwMCk7XG4gICAgICAgICQoJ2h0bWwnKS50b2dnbGVDbGFzcygnb3BlbmVkLXBhbmVsJyk7XG4gICAgfSk7XG59KTsiLCIkKGZ1bmN0aW9uICgpIHtcbiAgICAkKCdodG1sLnRvdWNoZXZlbnRzJykub24oJ2NsaWNrJywgJy5tZW51X19pdGVtX3N1Ym1lbnU6bm90KC5tZW51X19pdGVtX29wZW5lZCk+Lm1lbnVfX2J0bicsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgJCgnLm1lbnVfX3N1Ym1lbnUnKVxuICAgICAgICAgICAgLm5vdCgkKHRoaXMpLm5leHQoJy5tZW51X19zdWJtZW51JykuYWRkQ2xhc3MoJ21lbnVfX3N1Ym1lbnVfb3BlbmVkJykuc2xpZGVEb3duKDIwMCkucGFyZW50KCkuYWRkQ2xhc3MoJ21lbnVfX2l0ZW1fb3BlbmVkJykuZW5kKCkpXG4gICAgICAgICAgICAubm90KCQodGhpcykucGFyZW50cygnLm1lbnVfX3N1Ym1lbnUnKSlcbiAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnbWVudV9fc3VibWVudV9vcGVuZWQnKS5zbGlkZVVwKDIwMCkucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ21lbnVfX2l0ZW1fb3BlbmVkJyk7XG4gICAgfSkub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKCEkKGUudGFyZ2V0KS5jbG9zZXN0KCcubWVudScpLmxlbmd0aCkge1xuICAgICAgICAgICAgJCgnLm1lbnVfX3N1Ym1lbnUnKS5yZW1vdmVDbGFzcygnbWVudV9fc3VibWVudV9vcGVuZWQnKS5zbGlkZVVwKDIwMCkucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ21lbnVfX2l0ZW1fb3BlbmVkJyk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHZhciB0aW1lckhvdmVyTWVudUl0ZW07XG4gICAgJCgnaHRtbC5uby10b3VjaGV2ZW50cyAubWVudV9faXRlbV9zdWJtZW51JykuaG92ZXIoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyICRtZW51SXRlbSA9ICQodGhpcyk7XG4gICAgICAgIHRpbWVySG92ZXJNZW51SXRlbSA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJG1lbnVJdGVtLmNoaWxkcmVuKCcubWVudV9fc3VibWVudScpLmFkZENsYXNzKCdtZW51X19zdWJtZW51X29wZW5lZCcpLnNsaWRlRG93bigyMDApLnBhcmVudCgpLmFkZENsYXNzKCdtZW51X19pdGVtX29wZW5lZCcpO1xuICAgICAgICB9LCAxMDApO1xuXG4gICAgfSwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyICRtZW51SXRlbSA9ICQodGhpcyk7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lckhvdmVyTWVudUl0ZW0pO1xuICAgICAgICAkbWVudUl0ZW0uY2hpbGRyZW4oJy5tZW51X19zdWJtZW51JykucmVtb3ZlQ2xhc3MoJ21lbnVfX3N1Ym1lbnVfb3BlbmVkJykuc2xpZGVVcCgyMDApLnBhcmVudCgpLnJlbW92ZUNsYXNzKCdtZW51X19pdGVtX29wZW5lZCcpO1xuICAgIH0pO1xufSk7IiwiJC5mYW5jeWJveC5kZWZhdWx0cy5oYXNoID0gZmFsc2U7XG4kLmZhbmN5Ym94LmRlZmF1bHRzLnRvdWNoID0gZmFsc2U7XG4kLmZhbmN5Ym94LmRlZmF1bHRzLmJ0blRwbC5zbWFsbEJ0biA9ICc8YnV0dG9uIGRhdGEtZmFuY3lib3gtY2xvc2UgY2xhc3M9XCJidG4gcG9wdXBfX2J0bi1jbG9zZSBnbHlwaGljb24gZ2x5cGhpY29uLWNhbmNlbFwiIHRpdGxlPVwi0JfQsNC60YDRi9GC0YxcIj48L2J1dHRvbj4nO1xuXG4kKGZ1bmN0aW9uICgpIHtcbiAgICAvLyQoXCJbZGF0YS1mYW5jeWJveF1cIikuZmFuY3lib3goKTtcblxuICAgICQoXCJbZGF0YS1mYW5jeWJveC0tc2luZ2xlXVwiKS5mYW5jeWJveCh7XG4gICAgICAgIHNtYWxsQnRuIDogZmFsc2UsXG4gICAgICAgIGF1dG9Gb2N1cyA6IGZhbHNlLFxuICAgICAgICBidG5UcGwgOiB7XG4gICAgICAgICAgICBzbGlkZVNob3cgIDogJzxidXR0b24gZGF0YS1mYW5jeWJveC1wbGF5IGNsYXNzPVwiZmFuY3lib3gtYnV0dG9uIGZhbmN5Ym94LWJ1dHRvbi0tcGxheSBoaWRlXCIgdGl0bGU9XCJ7e1BMQVlfU1RBUlR9fVwiPjwvYnV0dG9uPicsXG4gICAgICAgICAgICBmdWxsU2NyZWVuIDogJzxidXR0b24gZGF0YS1mYW5jeWJveC1mdWxsc2NyZWVuIGNsYXNzPVwiZmFuY3lib3gtYnV0dG9uIGZhbmN5Ym94LWJ1dHRvbi0tZnVsbHNjcmVlbiBoaWRlXCIgdGl0bGU9XCJ7e0ZVTExfU0NSRUVOfX1cIj48L2J1dHRvbj4nLFxuICAgICAgICAgICAgdGh1bWJzICAgICA6ICc8YnV0dG9uIGRhdGEtZmFuY3lib3gtdGh1bWJzIGNsYXNzPVwiZmFuY3lib3gtYnV0dG9uIGZhbmN5Ym94LWJ1dHRvbi0tdGh1bWJzIGhpZGVcIiB0aXRsZT1cInt7VEhVTUJTfX1cIj48L2J1dHRvbj4nLFxuICAgICAgICAgICAgY2xvc2UgICAgICA6ICc8YnV0dG9uIGRhdGEtZmFuY3lib3gtY2xvc2UgY2xhc3M9XCJmYW5jeWJveC1idXR0b24gZmFuY3lib3gtYnV0dG9uLS1jbG9zZVwiIHRpdGxlPVwie3tDTE9TRX19XCI+PC9idXR0b24+JyxcblxuICAgICAgICAgICAgLy8gVGhpcyBzbWFsbCBjbG9zZSBidXR0b24gd2lsbCBiZSBhcHBlbmRlZCB0byB5b3VyIGh0bWwvaW5saW5lL2FqYXggY29udGVudCBieSBkZWZhdWx0LFxuICAgICAgICAgICAgLy8gaWYgXCJzbWFsbEJ0blwiIG9wdGlvbiBpcyBub3Qgc2V0IHRvIGZhbHNlXG4gICAgICAgICAgICBzbWFsbEJ0biAgIDogJzxidXR0b24gZGF0YS1mYW5jeWJveC1jbG9zZSBjbGFzcz1cImZhbmN5Ym94LWNsb3NlLXNtYWxsIGdseXBoaWNvbiBnbHlwaGljb24tY2xvc2UtMlwiIHRpdGxlPVwie3tDTE9TRX19XCI+PC9idXR0b24+J1xuICAgICAgICB9LFxuICAgICAgICBrZXlib2FyZDogZmFsc2UsXG4gICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgIHRvdWNoOiBmYWxzZSxcbiAgICAgICAgb25Jbml0OiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgfSxcbiAgICAgICAgYmVmb3JlQ2xvc2U6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAkKFwiW2RhdGEtZmFuY3lib3gtLWdyb3VwXVwiKS5mYW5jeWJveCh7XG4gICAgICAgIHNtYWxsQnRuIDogZmFsc2UsXG4gICAgICAgIGF1dG9Gb2N1cyA6IGZhbHNlLFxuICAgICAgICBidG5UcGwgOiB7XG4gICAgICAgICAgICBzbGlkZVNob3cgIDogJzxidXR0b24gZGF0YS1mYW5jeWJveC1wbGF5IGNsYXNzPVwiZmFuY3lib3gtYnV0dG9uIGZhbmN5Ym94LWJ1dHRvbi0tcGxheSBoaWRlXCIgdGl0bGU9XCJ7e1BMQVlfU1RBUlR9fVwiPjwvYnV0dG9uPicsXG4gICAgICAgICAgICBmdWxsU2NyZWVuIDogJzxidXR0b24gZGF0YS1mYW5jeWJveC1mdWxsc2NyZWVuIGNsYXNzPVwiZmFuY3lib3gtYnV0dG9uIGZhbmN5Ym94LWJ1dHRvbi0tZnVsbHNjcmVlbiBoaWRlXCIgdGl0bGU9XCJ7e0ZVTExfU0NSRUVOfX1cIj48L2J1dHRvbj4nLFxuICAgICAgICAgICAgdGh1bWJzICAgICA6ICc8YnV0dG9uIGRhdGEtZmFuY3lib3gtdGh1bWJzIGNsYXNzPVwiZmFuY3lib3gtYnV0dG9uIGZhbmN5Ym94LWJ1dHRvbi0tdGh1bWJzIGhpZGVcIiB0aXRsZT1cInt7VEhVTUJTfX1cIj48L2J1dHRvbj4nLFxuICAgICAgICAgICAgY2xvc2UgICAgICA6ICc8YnV0dG9uIGRhdGEtZmFuY3lib3gtY2xvc2UgY2xhc3M9XCJmYW5jeWJveC1idXR0b24gZmFuY3lib3gtYnV0dG9uLS1jbG9zZVwiIHRpdGxlPVwie3tDTE9TRX19XCI+PC9idXR0b24+JyxcblxuICAgICAgICAgICAgLy8gVGhpcyBzbWFsbCBjbG9zZSBidXR0b24gd2lsbCBiZSBhcHBlbmRlZCB0byB5b3VyIGh0bWwvaW5saW5lL2FqYXggY29udGVudCBieSBkZWZhdWx0LFxuICAgICAgICAgICAgLy8gaWYgXCJzbWFsbEJ0blwiIG9wdGlvbiBpcyBub3Qgc2V0IHRvIGZhbHNlXG4gICAgICAgICAgICBzbWFsbEJ0biAgIDogJzxidXR0b24gZGF0YS1mYW5jeWJveC1jbG9zZSBjbGFzcz1cImZhbmN5Ym94LWNsb3NlLXNtYWxsIGdseXBoaWNvbiBnbHlwaGljb24tY2xvc2UtMlwiIHRpdGxlPVwie3tDTE9TRX19XCI+PC9idXR0b24+J1xuICAgICAgICB9LFxuICAgICAgICB0b3VjaDogZmFsc2UsXG4gICAgICAgIG9uSW5pdDogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIH0sXG4gICAgICAgIGJlZm9yZUNsb3NlOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgfSxcbiAgICAgICAgYWZ0ZXJDbG9zZTogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgICQoXCJbZGF0YS1mYW5jeWJveC0tZ2FsbGVyeV1cIikuZmFuY3lib3goe1xuICAgICAgICBzbWFsbEJ0biA6IGZhbHNlLFxuICAgICAgICBhdXRvRm9jdXMgOiBmYWxzZSxcbiAgICAgICAgYnRuVHBsIDoge1xuICAgICAgICAgICAgc2xpZGVTaG93ICA6ICc8YnV0dG9uIGRhdGEtZmFuY3lib3gtcGxheSBjbGFzcz1cImZhbmN5Ym94LWJ1dHRvbiBmYW5jeWJveC1idXR0b24tLXBsYXlcIiB0aXRsZT1cInt7UExBWV9TVEFSVH19XCI+PC9idXR0b24+JyxcbiAgICAgICAgICAgIGZ1bGxTY3JlZW4gOiAnPGJ1dHRvbiBkYXRhLWZhbmN5Ym94LWZ1bGxzY3JlZW4gY2xhc3M9XCJmYW5jeWJveC1idXR0b24gZmFuY3lib3gtYnV0dG9uLS1mdWxsc2NyZWVuXCIgdGl0bGU9XCJ7e0ZVTExfU0NSRUVOfX1cIj48L2J1dHRvbj4nLFxuICAgICAgICAgICAgdGh1bWJzICAgICA6ICc8YnV0dG9uIGRhdGEtZmFuY3lib3gtdGh1bWJzIGNsYXNzPVwiZmFuY3lib3gtYnV0dG9uIGZhbmN5Ym94LWJ1dHRvbi0tdGh1bWJzXCIgdGl0bGU9XCJ7e1RIVU1CU319XCI+PC9idXR0b24+JyxcbiAgICAgICAgICAgIGNsb3NlICAgICAgOiAnPGJ1dHRvbiBkYXRhLWZhbmN5Ym94LWNsb3NlIGNsYXNzPVwiZmFuY3lib3gtYnV0dG9uIGZhbmN5Ym94LWJ1dHRvbi0tY2xvc2VcIiB0aXRsZT1cInt7Q0xPU0V9fVwiPjwvYnV0dG9uPicsXG5cbiAgICAgICAgICAgIC8vIFRoaXMgc21hbGwgY2xvc2UgYnV0dG9uIHdpbGwgYmUgYXBwZW5kZWQgdG8geW91ciBodG1sL2lubGluZS9hamF4IGNvbnRlbnQgYnkgZGVmYXVsdCxcbiAgICAgICAgICAgIC8vIGlmIFwic21hbGxCdG5cIiBvcHRpb24gaXMgbm90IHNldCB0byBmYWxzZVxuICAgICAgICAgICAgc21hbGxCdG4gICA6ICc8YnV0dG9uIGRhdGEtZmFuY3lib3gtY2xvc2UgY2xhc3M9XCJmYW5jeWJveC1jbG9zZS1zbWFsbCBnbHlwaGljb24gZ2x5cGhpY29uLWNsb3NlLTJcIiB0aXRsZT1cInt7Q0xPU0V9fVwiPjwvYnV0dG9uPidcbiAgICAgICAgfSxcbiAgICAgICAgb25Jbml0OiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgfSxcbiAgICAgICAgYmVmb3JlQ2xvc2U6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICB9XG4gICAgfSk7XG59KTsiLCIkKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgJGZvcm0gPSAkKCcuZm9ybS1vcmRlci1jYWxsJyk7XG4gICAgaWYgKCRmb3JtLmxlbmd0aCkge1xuICAgICAgICAkZm9ybS5wYXJzbGV5KCkub24oJ2ZpZWxkOnZhbGlkYXRlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBvayA9ICQoJy5wYXJzbGV5LWVycm9yJykubGVuZ3RoID09PSAwO1xuICAgICAgICB9KS5vbignZm9ybTpzdWJtaXQnLCBmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICAgIHZhciAkZm9ybSA9IGVsLiRlbGVtZW50O1xuICAgICAgICAgICAgJGZvcm0uZmluZCgnW2RhdGEtdG9nZ2xlPVwic3VibWl0XCJdJykuYXR0cignZGlzYWJsZWQnLCB0cnVlKTtcbiAgICAgICAgICAgIHZhciBkYXRhID0gJGZvcm0uc2VyaWFsaXplKCk7XG4gICAgICAgICAgICB2YXIgcmVzcG9uc2VNc2cgPSAn0JLQsNGI0LUg0YHQvtC+0LHRidC10L3QuNC1INGD0YHQv9C10YjQvdC+INC+0YLQv9GA0LDQstC70LXQvdC+LCDQvNGLINCS0LDQvCDQv9C10YDQtdC30LLQvtC90LjQvCEnO1xuXG4gICAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICAgIHR5cGU6ICRmb3JtLmF0dHIoJ21ldGhvZCcpLFxuICAgICAgICAgICAgICAgIHVybDogJGZvcm0uYXR0cignYWN0aW9uJyksXG4gICAgICAgICAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSwgdGV4dFN0YXR1cywganFYSFIpIHtcblxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ9Cf0YDQuCDQvtGC0L/RgNCw0LLQutC1INCy0L7Qt9C90LjQutC70LAg0L7RiNC40LHQutCwOiAnICsganFYSFIuc3RhdHVzKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VNc2cgPSAn0J/RgNC4INC+0YLQv9GA0LDQstC60LUg0LLQvtC30L3QuNC60LvQsCDQvtGI0LjQsdC60LAhIFwiJyArIGpxWEhSLnN0YXR1c1RleHQgKyAnXCInO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cykge1xuICAgICAgICAgICAgICAgICAgICAkZm9ybS5maW5kKCdbZGF0YS10b2dnbGU9XCJzdWJtaXRcIl0nKS5hdHRyKCdkaXNhYmxlZCcsIGZhbHNlKS5lbmQoKS5maW5kKCcudGV4dC1maWVsZCcpLnZhbCgnJykuZW5kKCkuZmluZCgnLmNoZWNrYm94X19pbnB1dCcpLnByb3AoJ2NoZWNrZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICQuZmFuY3lib3guY2xvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgJC5mYW5jeWJveC5vcGVuKCc8ZGl2IGNsYXNzPVwicG9wdXAgcG9wdXBfc2l6ZV82NTIgcG9wdXBfcmVzcG9uc2VfZmVlZGJhY2sgY29udGFpbmVyLWZsdWlkXCI+JyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cInBvcHVwX19oZWFkZXJcIj48aDIgY2xhc3M9XCJwb3B1cF9fdGl0bGVcIj4nICsgcmVzcG9uc2VNc2cgKyAnPC9oMj48L2Rpdj4nICtcbiAgICAgICAgICAgICAgICAgICAgICAgICc8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bl80XCIgZGF0YS1mYW5jeWJveC1jbG9zZT1cImRhdGEtZmFuY3lib3gtY2xvc2VcIj7Ql9Cw0LrRgNGL0YLRjDwvYnV0dG9uPicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJzwvZGl2PicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9XG59KTsiLCJmdW5jdGlvbiBoYXNWYWwoKSB7XG4gICAgJCgnLnRleHQtZmllbGQnKS5vbignYmx1cicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCQodGhpcykudmFsKCkpIHtcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ3RleHQtZmllbGRfaGFzLXZhbCcpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygndGV4dC1maWVsZF9oYXMtdmFsJyk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuJChmdW5jdGlvbiAoKSB7XG4gICAgaGFzVmFsKCk7XG4gICAgJCgnW2RhdGEtbWFza10nKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnaW5pdC1tYXNrJyk7XG4gICAgfSk7XG59KTtcblxuJChkb2N1bWVudCkuYWpheENvbXBsZXRlKGZ1bmN0aW9uKCkge1xuICAgIGhhc1ZhbCgpO1xuICAgICQoJ1tkYXRhLW1hc2tdJykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmICghJCh0aGlzKS5oYXNDbGFzcygnaW5pdC1tYXNrJykpIHtcbiAgICAgICAgICAgICQodGhpcykubWFzaygkKHRoaXMpLmRhdGEoJ21hc2snKSkuYWRkQ2xhc3MoJ2luaXQtbWFzaycpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgJCgnW2RhdGEtcGFyc2xleS12YWxpZGF0ZV0nKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5wYXJzbGV5KCk7XG4gICAgfSk7XG59KTsiLCJpZiAoJCgnLnlhLW1hcCcpLmxlbmd0aCkge1xuICAgIHltYXBzLnJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHlhTWFwcyA9ICQoJy55YS1tYXAnKTtcblxuICAgICAgICB5YU1hcHMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgZGF0YVBsYWNlbWFyayA9ICQodGhpcykuZGF0YSgncGxhY2VtYXJrJyk7XG5cbiAgICAgICAgICAgIHZhciBteU1hcCA9IG5ldyB5bWFwcy5NYXAodGhpcywge1xuICAgICAgICAgICAgICAgIGNlbnRlcjogZGF0YVBsYWNlbWFya1swXS5jb29yZGluYXRlcyxcbiAgICAgICAgICAgICAgICB6b29tOiAxNy8vLFxuICAgICAgICAgICAgICAgIC8vYm91bmRzOiAkKHRoaXMpLmhhc0NsYXNzKCd5YS1tYXAtcm91dGUnKSA/IFtkYXRhUGxhY2VtYXJrWzBdLmNvb3JkaW5hdGVzLCBkYXRhUGxhY2VtYXJrW2RhdGFQbGFjZW1hcmsubGVuZ3RoLTFdLmNvb3JkaW5hdGVzXSA6IGZhbHNlLFxuICAgICAgICAgICAgICAgIC8vYmVoYXZpb3JzOiBbJ2RibENsaWNrWm9vbScsICdtdWx0aVRvdWNoJywgJ3JpZ2h0TW91c2VCdXR0b25NYWduaWZpZXInXVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIHZhciBhcnJDb29yZHMgPSBbXSwgbXlQbGFjZW1hcms7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGRhdGFQbGFjZW1hcmsubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBhcnJDb29yZHMucHVzaChkYXRhUGxhY2VtYXJrW2ldLmNvb3JkaW5hdGVzKTtcbiAgICAgICAgICAgICAgICBteVBsYWNlbWFyayA9IG5ldyB5bWFwcy5QbGFjZW1hcmsoZGF0YVBsYWNlbWFya1tpXS5jb29yZGluYXRlcywge1xuICAgICAgICAgICAgICAgICAgICBoaW50Q29udGVudDogZGF0YVBsYWNlbWFya1tpXS5oaW50Q29udGVudCxcbiAgICAgICAgICAgICAgICAgICAgYmFsbG9vbkNvbnRlbnQ6IGRhdGFQbGFjZW1hcmtbaV0uYmFsbG9vbkNvbnRlbnQsXG4gICAgICAgICAgICAgICAgICAgIGljb25Db250ZW50OiAnJ1xuICAgICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g0J7Qv9GG0LjQuC5cbiAgICAgICAgICAgICAgICAgICAgLy8g0J3QtdC+0LHRhdC+0LTQuNC80L4g0YPQutCw0LfQsNGC0Ywg0LTQsNC90L3Ri9C5INGC0LjQvyDQvNCw0LrQtdGC0LAuXG4gICAgICAgICAgICAgICAgICAgIGljb25MYXlvdXQ6ICdkZWZhdWx0I2ltYWdlV2l0aENvbnRlbnQnLFxuICAgICAgICAgICAgICAgICAgICAvLyDQodCy0L7RkSDQuNC30L7QsdGA0LDQttC10L3QuNC1INC40LrQvtC90LrQuCDQvNC10YLQutC4LlxuICAgICAgICAgICAgICAgICAgICBpY29uSW1hZ2VIcmVmOiBcImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEQ5NGJXd2dkbVZ5YzJsdmJqMGlNUzR3SWlCbGJtTnZaR2x1WnowaWRYUm1MVGdpUHo0OElVUlBRMVJaVUVVZ2MzWm5JRkJWUWt4SlF5QWlMUzh2VnpOREx5OUVWRVFnVTFaSElERXVNUzh2UlU0aUlDSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OUhjbUZ3YUdsamN5OVRWa2N2TVM0eEwwUlVSQzl6ZG1jeE1TNWtkR1FpUGp4emRtY2dkbVZ5YzJsdmJqMGlNUzR4SWlCcFpEMGlRMkZ3WVY4eElpQjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaUlIaHRiRzV6T25oc2FXNXJQU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh4T1RrNUwzaHNhVzVySWlCNFBTSXdjSGdpSUhrOUlqQndlQ0lnZDJsa2RHZzlJak0xTGpjeU5IQjRJaUJvWldsbmFIUTlJalV3Y0hnaUlIWnBaWGRDYjNnOUlqSXpPQzR4TXpnZ01qTXhJRE0xTGpjeU5DQTFNQ0lnWlc1aFlteGxMV0poWTJ0bmNtOTFibVE5SW01bGR5QXlNemd1TVRNNElESXpNU0F6TlM0M01qUWdOVEFpSUhodGJEcHpjR0ZqWlQwaWNISmxjMlZ5ZG1VaVBqeG5Qanh3WVhSb0lHWnBiR3c5SWlORlJUTTBNaklpSUdROUlrMHlOVFl1TmpNc01qTXhMakF4WXkweE1DNHhOVFF0TUM0ek5ESXRNVGd1TkRrekxEY3VOemczTFRFNExqUTVNeXd4Tnk0NE5qUmpNQ3d4TVM0ME16WXNNVEF1T1RjMUxERTVMamN6TlN3eE55NHhNallzTXpFdU5qY3hZekF1TXpFeUxEQXVOakEyTERFdU1UZzFMREF1TmpBM0xERXVORGs0TERBdU1EQXhZelV1TlRZMUxURXdMamMwTERFMUxqQTNOUzB4Tnk0NU5ERXNNVFl1T0RNNExUSTRMakk0T0VNeU56VXVOREkxTERJME1TNDFOVElzTWpZM0xqUTROU3d5TXpFdU16YzJMREkxTmk0Mk15d3lNekV1TURGNklFMHlOVFl1TURFeUxESTFPQzR5TXpkakxUVXVNVGN4TERBdE9TNHpOakl0TkM0eE9USXRPUzR6TmpJdE9TNHpOak56TkM0eE9USXRPUzR6TmpNc09TNHpOakl0T1M0ek5qTmpOUzR4TnpFc01DdzVMak0yTXl3MExqRTVNaXc1TGpNMk15dzVMak0yTTFNeU5qRXVNVGd5TERJMU9DNHlNemNzTWpVMkxqQXhNaXd5TlRndU1qTTNlaUl2UGp3dlp6NDhMM04yWno0PVwiLFxuICAgICAgICAgICAgICAgICAgICAvLyDQoNCw0LfQvNC10YDRiyDQvNC10YLQutC4LlxuICAgICAgICAgICAgICAgICAgICBpY29uSW1hZ2VTaXplOiBbMzIsIDQ3XSxcbiAgICAgICAgICAgICAgICAgICAgLy8g0KHQvNC10YnQtdC90LjQtSDQu9C10LLQvtCz0L4g0LLQtdGA0YXQvdC10LPQviDRg9Cz0LvQsCDQuNC60L7QvdC60Lgg0L7RgtC90L7RgdC40YLQtdC70YzQvdC+XG4gICAgICAgICAgICAgICAgICAgIC8vINC10ZEgXCLQvdC+0LbQutC4XCIgKNGC0L7Rh9C60Lgg0L/RgNC40LLRj9C30LrQuCkuXG4gICAgICAgICAgICAgICAgICAgIGljb25JbWFnZU9mZnNldDogWy0xNiwgLTQ3XVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgbXlNYXAuZ2VvT2JqZWN0cy5hZGQobXlQbGFjZW1hcmspO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9teU1hcC5zZXRCb3VuZHMobXlNYXAuZ2VvT2JqZWN0cy5nZXRCb3VuZHMoKSk7XG4gICAgICAgICAgICAkKHdpbmRvdykub24oJ3Jlc2l6ZS5ZYU1hcCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBteU1hcC5zZXRDZW50ZXIoZGF0YVBsYWNlbWFya1swXS5jb29yZGluYXRlcyk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLypcbiAgICAgICAgICAgICAvLyDQodC+0LfQtNCw0LXQvCDQu9C+0LzQsNC90YPRjiDRgSDQv9C+0LzQvtGJ0YzRjiDQstGB0L/QvtC80L7Qs9Cw0YLQtdC70YzQvdC+0LPQviDQutC70LDRgdGB0LAgUG9seWxpbmUuXG4gICAgICAgICAgICAgdmFyIG15UG9seWxpbmUgPSBuZXcgeW1hcHMuUG9seWxpbmUoYXJyQ29vcmRzLCB7XG4gICAgICAgICAgICAgLy8g0J7Qv9C40YHRi9Cy0LDQtdC8INGB0LLQvtC50YHRgtCy0LAg0LPQtdC+0L7QsdGK0LXQutGC0LAuXG4gICAgICAgICAgICAgLy8g0KHQvtC00LXRgNC20LjQvNC+0LUg0LHQsNC70YPQvdCwLlxuICAgICAgICAgICAgIGJhbGxvb25Db250ZW50OiBcIlwiXG4gICAgICAgICAgICAgfSwge1xuICAgICAgICAgICAgIC8vINCX0LDQtNCw0LXQvCDQvtC/0YbQuNC4INCz0LXQvtC+0LHRitC10LrRgtCwLlxuICAgICAgICAgICAgIC8vINCe0YLQutC70Y7Rh9Cw0LXQvCDQutC90L7Qv9C60YMg0LfQsNC60YDRi9GC0LjRjyDQsdCw0LvRg9C90LAuXG4gICAgICAgICAgICAgYmFsbG9vbkNsb3NlQnV0dG9uOiBmYWxzZSxcbiAgICAgICAgICAgICAvLyDQptCy0LXRgiDQu9C40L3QuNC4LlxuICAgICAgICAgICAgIHN0cm9rZUNvbG9yOiBcIiNkNDRjM2ZcIixcbiAgICAgICAgICAgICAvLyDQqNC40YDQuNC90LAg0LvQuNC90LjQuC5cbiAgICAgICAgICAgICBzdHJva2VXaWR0aDogMixcbiAgICAgICAgICAgICAvLyDQmtC+0Y3RhNGE0LjRhtC40LXQvdGCINC/0YDQvtC30YDQsNGH0L3QvtGB0YLQuC5cbiAgICAgICAgICAgICBzdHJva2VPcGFjaXR5OiAxXG4gICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgLy8g0JTQvtCx0LDQstC70Y/QtdC8INC70LjQvdC40Lgg0L3QsCDQutCw0YDRgtGDLlxuICAgICAgICAgICAgIG15TWFwLmdlb09iamVjdHMuYWRkKG15UG9seWxpbmUpOyovXG4gICAgICAgIH0pO1xuICAgIH0pO1xufSIsIiQoZnVuY3Rpb24gKCkge1xuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnLnN0YXRpb25zX19pdGVtJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAoJChlLnRhcmdldCkuYXR0cignZGF0YS10b2dnbGUnKSAhPT0gJ2Nsb3NlLXN0YXRpb24tcG9wdXAnICYmICEkKGUudGFyZ2V0KS5jbG9zZXN0KCcuc3RhdGlvbnNfX3BvcHVwJykubGVuZ3RoKSB7XG4gICAgICAgICAgICAkKCcuc3RhdGlvbnNfX2l0ZW0nKS5ub3QoJCh0aGlzKS50b2dnbGVDbGFzcygnc3RhdGlvbnNfX2l0ZW1fb3BlbmVkJykuZmluZCgnLnN0YXRpb25zX19wb3B1cCcpLmZhZGVUb2dnbGUoMjAwKS5lbmQoKSlcbiAgICAgICAgICAgICAgICAucmVtb3ZlQ2xhc3MoJ3N0YXRpb25zX19pdGVtX29wZW5lZCcpLmZpbmQoJy5zdGF0aW9uc19fcG9wdXAnKS5mYWRlT3V0KDIwMCk7XG4gICAgICAgIH1cbiAgICB9KS5vbignY2xpY2snLCAnW2RhdGEtdG9nZ2xlPVwiY2xvc2Utc3RhdGlvbi1wb3B1cFwiXScsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgICQodGhpcykuY2xvc2VzdCgnLnN0YXRpb25zX19pdGVtJykucmVtb3ZlQ2xhc3MoJ3N0YXRpb25zX19pdGVtX29wZW5lZCcpLmZpbmQoJy5zdGF0aW9uc19fcG9wdXAnKS5mYWRlT3V0KDIwMCk7XG4gICAgfSkub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKCEkKGUudGFyZ2V0KS5jbG9zZXN0KCcuc3RhdGlvbnNfX2l0ZW0nKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICQoJy5zdGF0aW9uc19faXRlbScpLnJlbW92ZUNsYXNzKCdzdGF0aW9uc19faXRlbV9vcGVuZWQnKS5maW5kKCcuc3RhdGlvbnNfX3BvcHVwJykuZmFkZU91dCgyMDApO1xuICAgICAgICB9XG4gICAgfSk7XG59KTsiLCIkKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgJGZvcm0gPSAkKCcuZm9ybS1vcmRlci1jYWxsLTInKTtcbiAgICBpZiAoJGZvcm0ubGVuZ3RoKSB7XG4gICAgICAgICRmb3JtLnBhcnNsZXkoKS5vbignZmllbGQ6dmFsaWRhdGVkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIG9rID0gJCgnLnBhcnNsZXktZXJyb3InKS5sZW5ndGggPT09IDA7XG4gICAgICAgIH0pLm9uKCdmb3JtOnN1Ym1pdCcsIGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgICAgdmFyICRmb3JtID0gZWwuJGVsZW1lbnQ7XG4gICAgICAgICAgICAkZm9ybS5maW5kKCdbZGF0YS10b2dnbGU9XCJzdWJtaXRcIl0nKS5hdHRyKCdkaXNhYmxlZCcsIHRydWUpO1xuICAgICAgICAgICAgdmFyIGRhdGEgPSAkZm9ybS5zZXJpYWxpemUoKTtcbiAgICAgICAgICAgIHZhciByZXNwb25zZU1zZyA9ICfQktCw0YjQtSDRgdC+0L7QsdGJ0LXQvdC40LUg0YPRgdC/0LXRiNC90L4g0L7RgtC/0YDQsNCy0LvQtdC90L4sINC80Ysg0JLQsNC8INC/0LXRgNC10LfQstC+0L3QuNC8ISc7XG5cbiAgICAgICAgICAgICQuYWpheCh7XG4gICAgICAgICAgICAgICAgdHlwZTogJGZvcm0uYXR0cignbWV0aG9kJyksXG4gICAgICAgICAgICAgICAgdXJsOiAkZm9ybS5hdHRyKCdhY3Rpb24nKSxcbiAgICAgICAgICAgICAgICBkYXRhOiBkYXRhLFxuICAgICAgICAgICAgICAgIHN1Y2Nlc3M6IGZ1bmN0aW9uIChkYXRhLCB0ZXh0U3RhdHVzLCBqcVhIUikge1xuXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvcjogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzLCBlcnJvclRocm93bikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygn0J/RgNC4INC+0YLQv9GA0LDQstC60LUg0LLQvtC30L3QuNC60LvQsCDQvtGI0LjQsdC60LA6ICcgKyBqcVhIUi5zdGF0dXMpO1xuICAgICAgICAgICAgICAgICAgICByZXNwb25zZU1zZyA9ICfQn9GA0Lgg0L7RgtC/0YDQsNCy0LrQtSDQstC+0LfQvdC40LrQu9CwINC+0YjQuNCx0LrQsCEgXCInICsganFYSFIuc3RhdHVzVGV4dCArICdcIic7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBjb21wbGV0ZTogZnVuY3Rpb24gKGpxWEhSLCB0ZXh0U3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgICAgICRmb3JtLmZpbmQoJ1tkYXRhLXRvZ2dsZT1cInN1Ym1pdFwiXScpLmF0dHIoJ2Rpc2FibGVkJywgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAkLmZhbmN5Ym94LmNsb3NlKCk7XG4gICAgICAgICAgICAgICAgICAgICQuZmFuY3lib3gub3BlbignPGRpdiBjbGFzcz1cInBvcHVwIHBvcHVwX3NpemVfNjUyIHBvcHVwX3Jlc3BvbnNlX2ZlZWRiYWNrIGNvbnRhaW5lci1mbHVpZFwiPicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJzxkaXYgY2xhc3M9XCJwb3B1cF9faGVhZGVyXCI+PGgyIGNsYXNzPVwicG9wdXBfX3RpdGxlXCI+JyArIHJlc3BvbnNlTXNnICsgJzwvaDI+PC9kaXY+JyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnPGJ1dHRvbiBjbGFzcz1cImJ0biBidG5fNFwiIGRhdGEtZmFuY3lib3gtY2xvc2U9XCJkYXRhLWZhbmN5Ym94LWNsb3NlXCI+0JfQsNC60YDRi9GC0Yw8L2J1dHRvbj4nICtcbiAgICAgICAgICAgICAgICAgICAgICAgICc8L2Rpdj4nKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfVxufSk7IiwiJChmdW5jdGlvbiAoKSB7XG4gICAgJCgnLnNsaWRlci1tYWluJykuc2xpY2soe1xuICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgIHNwZWVkOiAzMDAsXG4gICAgICAgIGZhZGU6IHRydWUsXG4gICAgICAgIGNzc0Vhc2U6ICdsaW5lYXInLFxuICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICBtb2JpbGVGaXJzdDogdHJ1ZSxcbiAgICAgICAgcHJldkFycm93OiAnPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJzbGljay1wcmV2IGdseXBoaWNvbiBnbHlwaGljb24tYW5nbGUtbGVmdFwiPjwvYnV0dG9uPicsXG4gICAgICAgIG5leHRBcnJvdzogJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stbmV4dCBnbHlwaGljb24gZ2x5cGhpY29uLWFuZ2xlLXJpZ2h0XCI+PC9idXR0b24+JyxcbiAgICAgICAgYXV0b3BsYXk6IHRydWUsXG4gICAgICAgIGF1dG9wbGF5U3BlZWQ6IDUwMDAsXG4gICAgICAgIHpJbmRleDogMSxcbiAgICAgICAgbGF6eUxvYWQ6ICdvbmRlbWFuZCcsXG4gICAgICAgIHBhdXNlT25Gb2N1czogZmFsc2UsXG4gICAgICAgIHBhdXNlT25Ib3ZlcjogZmFsc2UsXG4gICAgICAgIGFkYXB0aXZlSGVpZ2h0OiBmYWxzZSxcbiAgICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICAgICAgLyp7XG4gICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY4LFxuICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6ICc0MHB4JyxcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSovXG4gICAgICAgIF1cbiAgICB9KS5vbignbGF6eUxvYWRlZCcsIGZ1bmN0aW9uIChldmVudCwgc2xpY2ssIGltYWdlLCBpbWFnZVNvdXJjZSkge1xuICAgICAgICAkKGltYWdlKS5jbG9zZXN0KCcuc2xpY2stc2xpZGUnKS5yZW1vdmVDbGFzcygnbG9hZGluZycpO1xuICAgIH0pO1xufSk7IiwiJChmdW5jdGlvbiAoKSB7XG4gICAgJCgnLnNsaWRlci1jbGllbnRzX19pbm5lcicpLnNsaWNrKHtcbiAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgIGFycm93czogdHJ1ZSxcbiAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgIHNwZWVkOiAzMDAsXG4gICAgICAgIGZhZGU6IGZhbHNlLFxuICAgICAgICBjc3NFYXNlOiAnbGluZWFyJyxcbiAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgbW9iaWxlRmlyc3Q6IHRydWUsXG4gICAgICAgIHByZXZBcnJvdzogJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stcHJldiBnbHlwaGljb24gZ2x5cGhpY29uLWxlZnQtYW5nbGUtYnJhY2tldFwiPjwvYnV0dG9uPicsXG4gICAgICAgIG5leHRBcnJvdzogJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stbmV4dCBnbHlwaGljb24gZ2x5cGhpY29uLXJpZ2h0LWFuZ2xlLWJyYWNrZXRcIj48L2J1dHRvbj4nLFxuICAgICAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICAgICAgYXV0b3BsYXlTcGVlZDogNTAwMCxcbiAgICAgICAgekluZGV4OiAxLFxuICAgICAgICBsYXp5TG9hZDogJ29uZGVtYW5kJyxcbiAgICAgICAgcGF1c2VPbkZvY3VzOiBmYWxzZSxcbiAgICAgICAgcGF1c2VPbkhvdmVyOiBmYWxzZSxcbiAgICAgICAgYWRhcHRpdmVIZWlnaHQ6IGZhbHNlLFxuICAgICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDQ3OSxcbiAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMlxuICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2NyxcbiAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDNcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDEwMjMsXG4gICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA0XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxMjY5LFxuICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTU5OSxcbiAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDZcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICB9KS5vbignbGF6eUxvYWRlZCcsIGZ1bmN0aW9uIChldmVudCwgc2xpY2ssIGltYWdlLCBpbWFnZVNvdXJjZSkge1xuICAgICAgICAkKGltYWdlKS5jbG9zZXN0KCcuc2xpY2stc2xpZGUnKS5yZW1vdmVDbGFzcygnbG9hZGluZycpO1xuICAgIH0pO1xufSk7IiwiJChmdW5jdGlvbiAoKSB7XG4gICAgdmFyICRmb3JtID0gJCgnLmZvcm0tZmVlZGJhY2snKTtcbiAgICBpZiAoJGZvcm0ubGVuZ3RoKSB7XG4gICAgICAgICRmb3JtLnBhcnNsZXkoKS5vbignZmllbGQ6dmFsaWRhdGVkJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIG9rID0gJCgnLnBhcnNsZXktZXJyb3InKS5sZW5ndGggPT09IDA7XG4gICAgICAgIH0pLm9uKCdmb3JtOnN1Ym1pdCcsIGZ1bmN0aW9uIChlbCkge1xuICAgICAgICAgICAgdmFyICRmb3JtID0gZWwuJGVsZW1lbnQ7XG4gICAgICAgICAgICAkZm9ybS5maW5kKCdbZGF0YS10b2dnbGU9XCJzdWJtaXRcIl0nKS5hdHRyKCdkaXNhYmxlZCcsIHRydWUpO1xuICAgICAgICAgICAgdmFyIGRhdGEgPSAkZm9ybS5zZXJpYWxpemUoKTtcbiAgICAgICAgICAgIHZhciByZXNwb25zZU1zZyA9ICfQktCw0YjQtSDRgdC+0L7QsdGJ0LXQvdC40LUg0YPRgdC/0LXRiNC90L4g0L7RgtC/0YDQsNCy0LvQtdC90L4sINC80Ysg0YEg0JLQsNC80Lgg0YHQstGP0LbQtdC80YHRjyEnO1xuXG4gICAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICAgIHR5cGU6ICRmb3JtLmF0dHIoJ21ldGhvZCcpLFxuICAgICAgICAgICAgICAgIHVybDogJGZvcm0uYXR0cignYWN0aW9uJyksXG4gICAgICAgICAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSwgdGV4dFN0YXR1cywganFYSFIpIHtcblxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ9Cf0YDQuCDQvtGC0L/RgNCw0LLQutC1INCy0L7Qt9C90LjQutC70LAg0L7RiNC40LHQutCwOiAnICsganFYSFIuc3RhdHVzKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VNc2cgPSAn0J/RgNC4INC+0YLQv9GA0LDQstC60LUg0LLQvtC30L3QuNC60LvQsCDQvtGI0LjQsdC60LAhIFwiJyArIGpxWEhSLnN0YXR1c1RleHQgKyAnXCInO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cykge1xuICAgICAgICAgICAgICAgICAgICAkZm9ybS5maW5kKCdbZGF0YS10b2dnbGU9XCJzdWJtaXRcIl0nKS5hdHRyKCdkaXNhYmxlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgJC5mYW5jeWJveC5jbG9zZSgpO1xuICAgICAgICAgICAgICAgICAgICAkLmZhbmN5Ym94Lm9wZW4oJzxkaXYgY2xhc3M9XCJwb3B1cCBwb3B1cF9zaXplXzY1MiBwb3B1cF9yZXNwb25zZV9mZWVkYmFjayBjb250YWluZXItZmx1aWRcIj4nICtcbiAgICAgICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwicG9wdXBfX2hlYWRlclwiPjxoMiBjbGFzcz1cInBvcHVwX190aXRsZVwiPicgKyByZXNwb25zZU1zZyArICc8L2gyPjwvZGl2PicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJzxidXR0b24gY2xhc3M9XCJidG4gYnRuXzRcIiBkYXRhLWZhbmN5Ym94LWNsb3NlPVwiZGF0YS1mYW5jeWJveC1jbG9zZVwiPtCX0LDQutGA0YvRgtGMPC9idXR0b24+JyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnPC9kaXY+Jyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH1cbn0pOyIsIiQoZnVuY3Rpb24gKCkge1xuICAgIHZhciAkdGVhbUJveCA9ICQoJy50ZWFtYm94JyksICR0ZWFtTGlzdCA9ICQoJy50ZWFtYm94IC50ZWFtLWxpc3QnKSwgJHRlYW1WaWV3ID0gJCgnLnRlYW0tdmlldycpO1xuXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsICcudGVhbS1pdGVtX19pbm5lcicsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICB2YXIgJHRlYW1JdGVtID0gJCh0aGlzKS5jbG9zZXN0KCcudGVhbS1pdGVtJyk7XG5cbiAgICAgICAgdmFyICRpbWdTcmMgPSAkdGVhbUl0ZW0uZmluZCgnLnRlYW0taXRlbV9faW1nJykuY2xvbmUoKS50b2dnbGVDbGFzcygndGVhbS1pdGVtX19pbWcgdGVhbS12aWV3X19pbWcnKS5hdHRyKCdzdHlsZScsICcnKTtcbiAgICAgICAgdmFyIHRpdGxlID0gJHRlYW1JdGVtLmZpbmQoJy50ZWFtLWl0ZW1fX3RpdGxlJykuaHRtbCgpO1xuICAgICAgICB2YXIgcG9zaXRpb24gPSAkdGVhbUl0ZW0uZmluZCgnLnRlYW0taXRlbV9fcG9zaXRpb24nKS5odG1sKCk7XG4gICAgICAgIHZhciBjb250ZW50ID0gJHRlYW1JdGVtLmZpbmQoJy50ZWFtLWl0ZW1fX2NvbnRlbnQnKS5odG1sKCk7XG5cbiAgICAgICAgJHRlYW1WaWV3LmZpbmQoJy50ZWFtLXZpZXdfX2ltZycpLnJlbW92ZSgpXG4gICAgICAgICAgICAuZW5kKCkuZmluZCgnLnRlYW0tdmlld19fdGl0bGUnKS5odG1sKCcnKVxuICAgICAgICAgICAgLmVuZCgpLmZpbmQoJy50ZWFtLXZpZXdfX3Bvc2l0aW9uJykuaHRtbCgnJylcbiAgICAgICAgICAgIC5lbmQoKS5maW5kKCcudGVhbS12aWV3X19jb250ZW50JykuaHRtbCgnJyk7XG5cbiAgICAgICAgJHRlYW1WaWV3LmZpbmQoJy50ZWFtLXZpZXdfX2ltZy1yZXNwJykuYXBwZW5kKCRpbWdTcmMpXG4gICAgICAgICAgICAuZW5kKCkuZmluZCgnLnRlYW0tdmlld19fdGl0bGUnKS5odG1sKHRpdGxlKVxuICAgICAgICAgICAgLmVuZCgpLmZpbmQoJy50ZWFtLXZpZXdfX3Bvc2l0aW9uJykuaHRtbChwb3NpdGlvbilcbiAgICAgICAgICAgIC5lbmQoKS5maW5kKCcudGVhbS12aWV3X19jb250ZW50JykuaHRtbChjb250ZW50KTtcblxuICAgICAgICAkdGVhbUJveC5hZGRDbGFzcygndGVhbWJveF9vcGVuZWQnKTtcbiAgICAgICAgLy8kdGVhbVZpZXcuZmluZCgnLnRlYW0tdmlld19fYnRuLWNsb3NlJykuZm9jdXMoKTtcbiAgICB9KS5vbignY2xpY2snLCAnW2RhdGEtdG9nZ2xlPVwiY2xvc2UtdGVhbS12aWV3XCJdJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICR0ZWFtQm94LnJlbW92ZUNsYXNzKCd0ZWFtYm94X29wZW5lZCcpO1xuICAgICAgICAvLyR0ZWFtVmlldy5maW5kKCcudGVhbS12aWV3X19idG4tY2xvc2UnKS5ibHVyKCk7XG4gICAgfSk7XG5cbiAgICAkKHdpbmRvdykub24oJ3Jlc2l6ZS50ZWFtQm94JywgZnVuY3Rpb24gKCkge1xuICAgICAgICAkdGVhbVZpZXcuY3NzKCdtYXJnaW4tbGVmdCcsIC0kdGVhbVZpZXcub3V0ZXJXaWR0aCgpKS5zaG93KCk7XG4gICAgfSkudHJpZ2dlckhhbmRsZXIoJ3Jlc2l6ZS50ZWFtQm94Jyk7XG59KTsiXX0=
