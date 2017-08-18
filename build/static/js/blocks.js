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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2UuanMiLCJoZWFkZXIuanMiLCJtZW51LmpzIiwiY29udGFjdC1tYXAuanMiLCJzdGF0aW9ucy5qcyIsImZvcm0tb3JkZXItY2FsbC0yLmpzIiwidGV4dC1maWVsZC5qcyIsInNsaWRlci1tYWluLmpzIiwic2xpZGVyLWNsaWVudHMuanMiLCJmb3JtLWZlZWRiYWNrLmpzIiwidGVhbS1ib3guanMiLCJwb3B1cC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImJsb2Nrcy5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciAkc2NyZWVuU20gPSA3NjgsICRzY3JlZW5NZCA9IDEwMjQsICRzY3JlZW5MZyA9IDEyNzA7XG5cbnZhciAkZm9udFNpemVSb290ID0gMTYsICRmb250U2l6ZVJvb3RDb21wdXRlZCA9IHBhcnNlSW50KCQoJ2h0bWwnKS5jc3MoJ2ZvbnRTaXplJykpO1xuXG52YXIgJHNjcmVlblNtTWluID0gJHNjcmVlblNtLyRmb250U2l6ZVJvb3QgKyAnZW0nOyBjb25zb2xlLmxvZygnJHNjcmVlblNtTWluID0gJyArICRzY3JlZW5TbU1pbiArICcgKCcgKyAkc2NyZWVuU20gKyAncHgpJyk7XG52YXIgJHNjcmVlbk1kTWluID0gJHNjcmVlbk1kLyRmb250U2l6ZVJvb3QgKyAnZW0nOyBjb25zb2xlLmxvZygnJHNjcmVlbk1kTWluID0gJyArICRzY3JlZW5NZE1pbiArICcgKCcgKyAkc2NyZWVuTWQgKyAncHgpJyk7XG52YXIgJHNjcmVlbkxnTWluID0gJHNjcmVlbkxnLyRmb250U2l6ZVJvb3QgKyAnZW0nOyBjb25zb2xlLmxvZygnJHNjcmVlbkxnTWluID0gJyArICRzY3JlZW5MZ01pbiArICcgKCcgKyAkc2NyZWVuTGcgKyAncHgpJyk7XG5cbnZhciAkc2NyZWVuWHNNYXggPSAoJHNjcmVlblNtIC0gMSkvJGZvbnRTaXplUm9vdCArICdlbSc7IGNvbnNvbGUubG9nKCckc2NyZWVuWHNNYXggPSAnICsgJHNjcmVlblhzTWF4KTtcbnZhciAkc2NyZWVuU21NYXggPSAoJHNjcmVlbk1kIC0gMSkvJGZvbnRTaXplUm9vdCArICdlbSc7IGNvbnNvbGUubG9nKCckc2NyZWVuU21NYXggPSAnICsgJHNjcmVlblNtTWF4KTtcbnZhciAkc2NyZWVuTWRNYXggPSAoJHNjcmVlbkxnIC0gMSkvJGZvbnRTaXplUm9vdCArICdlbSc7IGNvbnNvbGUubG9nKCckc2NyZWVuTWRNYXggPSAnICsgJHNjcmVlbk1kTWF4KTtcblxuJCgnLmxhenknKS5MYXp5KCk7XG4iLCIkKGZ1bmN0aW9uICgpIHtcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJ1tkYXRhLXRvZ2dsZT1cIm1lbnVcIl0nLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2dseXBoaWNvbi1tZW51LWxpbmVzIGdseXBoaWNvbi1jYW5jZWwnKTtcbiAgICAgICAgJCgnLmhlYWRlcl9fcGFuZWwnKS5mYWRlVG9nZ2xlKDIwMCk7XG4gICAgICAgICQoJ2h0bWwnKS50b2dnbGVDbGFzcygnb3BlbmVkLXBhbmVsJyk7XG4gICAgfSk7XG59KTsiLCIkKGZ1bmN0aW9uICgpIHtcbiAgICAkKCdodG1sLnRvdWNoZXZlbnRzJykub24oJ2NsaWNrJywgJy5tZW51X19pdGVtX3N1Ym1lbnU6bm90KC5tZW51X19pdGVtX29wZW5lZCk+Lm1lbnVfX2J0bicsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgJCgnLm1lbnVfX3N1Ym1lbnUnKVxuICAgICAgICAgICAgLm5vdCgkKHRoaXMpLm5leHQoJy5tZW51X19zdWJtZW51JykuYWRkQ2xhc3MoJ21lbnVfX3N1Ym1lbnVfb3BlbmVkJykuc2xpZGVEb3duKDIwMCkucGFyZW50KCkuYWRkQ2xhc3MoJ21lbnVfX2l0ZW1fb3BlbmVkJykuZW5kKCkpXG4gICAgICAgICAgICAubm90KCQodGhpcykucGFyZW50cygnLm1lbnVfX3N1Ym1lbnUnKSlcbiAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnbWVudV9fc3VibWVudV9vcGVuZWQnKS5zbGlkZVVwKDIwMCkucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ21lbnVfX2l0ZW1fb3BlbmVkJyk7XG4gICAgfSkub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKCEkKGUudGFyZ2V0KS5jbG9zZXN0KCcubWVudScpLmxlbmd0aCkge1xuICAgICAgICAgICAgJCgnLm1lbnVfX3N1Ym1lbnUnKS5yZW1vdmVDbGFzcygnbWVudV9fc3VibWVudV9vcGVuZWQnKS5zbGlkZVVwKDIwMCkucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ21lbnVfX2l0ZW1fb3BlbmVkJyk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHZhciB0aW1lckhvdmVyTWVudUl0ZW07XG4gICAgJCgnaHRtbC5uby10b3VjaGV2ZW50cyAubWVudV9faXRlbV9zdWJtZW51JykuaG92ZXIoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyICRtZW51SXRlbSA9ICQodGhpcyk7XG4gICAgICAgIHRpbWVySG92ZXJNZW51SXRlbSA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgJG1lbnVJdGVtLmNoaWxkcmVuKCcubWVudV9fc3VibWVudScpLmFkZENsYXNzKCdtZW51X19zdWJtZW51X29wZW5lZCcpLnNsaWRlRG93bigyMDApLnBhcmVudCgpLmFkZENsYXNzKCdtZW51X19pdGVtX29wZW5lZCcpO1xuICAgICAgICB9LCAxMDApO1xuXG4gICAgfSwgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgdmFyICRtZW51SXRlbSA9ICQodGhpcyk7XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lckhvdmVyTWVudUl0ZW0pO1xuICAgICAgICAkbWVudUl0ZW0uY2hpbGRyZW4oJy5tZW51X19zdWJtZW51JykucmVtb3ZlQ2xhc3MoJ21lbnVfX3N1Ym1lbnVfb3BlbmVkJykuc2xpZGVVcCgyMDApLnBhcmVudCgpLnJlbW92ZUNsYXNzKCdtZW51X19pdGVtX29wZW5lZCcpO1xuICAgIH0pO1xufSk7IiwiaWYgKCQoJy55YS1tYXAnKS5sZW5ndGgpIHtcbiAgICB5bWFwcy5yZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB5YU1hcHMgPSAkKCcueWEtbWFwJyk7XG5cbiAgICAgICAgeWFNYXBzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGRhdGFQbGFjZW1hcmsgPSAkKHRoaXMpLmRhdGEoJ3BsYWNlbWFyaycpO1xuXG4gICAgICAgICAgICB2YXIgbXlNYXAgPSBuZXcgeW1hcHMuTWFwKHRoaXMsIHtcbiAgICAgICAgICAgICAgICBjZW50ZXI6IGRhdGFQbGFjZW1hcmtbMF0uY29vcmRpbmF0ZXMsXG4gICAgICAgICAgICAgICAgem9vbTogMTcvLyxcbiAgICAgICAgICAgICAgICAvL2JvdW5kczogJCh0aGlzKS5oYXNDbGFzcygneWEtbWFwLXJvdXRlJykgPyBbZGF0YVBsYWNlbWFya1swXS5jb29yZGluYXRlcywgZGF0YVBsYWNlbWFya1tkYXRhUGxhY2VtYXJrLmxlbmd0aC0xXS5jb29yZGluYXRlc10gOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAvL2JlaGF2aW9yczogWydkYmxDbGlja1pvb20nLCAnbXVsdGlUb3VjaCcsICdyaWdodE1vdXNlQnV0dG9uTWFnbmlmaWVyJ11cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB2YXIgYXJyQ29vcmRzID0gW10sIG15UGxhY2VtYXJrO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkYXRhUGxhY2VtYXJrLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgYXJyQ29vcmRzLnB1c2goZGF0YVBsYWNlbWFya1tpXS5jb29yZGluYXRlcyk7XG4gICAgICAgICAgICAgICAgbXlQbGFjZW1hcmsgPSBuZXcgeW1hcHMuUGxhY2VtYXJrKGRhdGFQbGFjZW1hcmtbaV0uY29vcmRpbmF0ZXMsIHtcbiAgICAgICAgICAgICAgICAgICAgaGludENvbnRlbnQ6IGRhdGFQbGFjZW1hcmtbaV0uaGludENvbnRlbnQsXG4gICAgICAgICAgICAgICAgICAgIGJhbGxvb25Db250ZW50OiBkYXRhUGxhY2VtYXJrW2ldLmJhbGxvb25Db250ZW50LFxuICAgICAgICAgICAgICAgICAgICBpY29uQ29udGVudDogJydcbiAgICAgICAgICAgICAgICB9LCB7XG4gICAgICAgICAgICAgICAgICAgIC8vINCe0L/RhtC40LguXG4gICAgICAgICAgICAgICAgICAgIC8vINCd0LXQvtCx0YXQvtC00LjQvNC+INGD0LrQsNC30LDRgtGMINC00LDQvdC90YvQuSDRgtC40L8g0LzQsNC60LXRgtCwLlxuICAgICAgICAgICAgICAgICAgICBpY29uTGF5b3V0OiAnZGVmYXVsdCNpbWFnZVdpdGhDb250ZW50JyxcbiAgICAgICAgICAgICAgICAgICAgLy8g0KHQstC+0ZEg0LjQt9C+0LHRgNCw0LbQtdC90LjQtSDQuNC60L7QvdC60Lgg0LzQtdGC0LrQuC5cbiAgICAgICAgICAgICAgICAgICAgaWNvbkltYWdlSHJlZjogXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBEOTRiV3dnZG1WeWMybHZiajBpTVM0d0lpQmxibU52WkdsdVp6MGlkWFJtTFRnaVB6NDhJVVJQUTFSWlVFVWdjM1puSUZCVlFreEpReUFpTFM4dlZ6TkRMeTlFVkVRZ1UxWkhJREV1TVM4dlJVNGlJQ0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTlIY21Gd2FHbGpjeTlUVmtjdk1TNHhMMFJVUkM5emRtY3hNUzVrZEdRaVBqeHpkbWNnZG1WeWMybHZiajBpTVM0eElpQnBaRDBpUTJGd1lWOHhJaUI0Yld4dWN6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY2lJSGh0Ykc1ek9uaHNhVzVyUFNKb2RIUndPaTh2ZDNkM0xuY3pMbTl5Wnk4eE9UazVMM2hzYVc1cklpQjRQU0l3Y0hnaUlIazlJakJ3ZUNJZ2QybGtkR2c5SWpNMUxqY3lOSEI0SWlCb1pXbG5hSFE5SWpVd2NIZ2lJSFpwWlhkQ2IzZzlJakl6T0M0eE16Z2dNak14SURNMUxqY3lOQ0ExTUNJZ1pXNWhZbXhsTFdKaFkydG5jbTkxYm1ROUltNWxkeUF5TXpndU1UTTRJREl6TVNBek5TNDNNalFnTlRBaUlIaHRiRHB6Y0dGalpUMGljSEpsYzJWeWRtVWlQanhuUGp4d1lYUm9JR1pwYkd3OUlpTkZSVE0wTWpJaUlHUTlJazB5TlRZdU5qTXNNak14TGpBeFl5MHhNQzR4TlRRdE1DNHpOREl0TVRndU5Ea3pMRGN1TnpnM0xURTRMalE1TXl3eE55NDROalJqTUN3eE1TNDBNellzTVRBdU9UYzFMREU1TGpjek5Td3hOeTR4TWpZc016RXVOamN4WXpBdU16RXlMREF1TmpBMkxERXVNVGcxTERBdU5qQTNMREV1TkRrNExEQXVNREF4WXpVdU5UWTFMVEV3TGpjMExERTFMakEzTlMweE55NDVOREVzTVRZdU9ETTRMVEk0TGpJNE9FTXlOelV1TkRJMUxESTBNUzQxTlRJc01qWTNMalE0TlN3eU16RXVNemMyTERJMU5pNDJNeXd5TXpFdU1ERjZJRTB5TlRZdU1ERXlMREkxT0M0eU16ZGpMVFV1TVRjeExEQXRPUzR6TmpJdE5DNHhPVEl0T1M0ek5qSXRPUzR6TmpOek5DNHhPVEl0T1M0ek5qTXNPUzR6TmpJdE9TNHpOak5qTlM0eE56RXNNQ3c1TGpNMk15dzBMakU1TWl3NUxqTTJNeXc1TGpNMk0xTXlOakV1TVRneUxESTFPQzR5TXpjc01qVTJMakF4TWl3eU5UZ3VNak0zZWlJdlBqd3ZaejQ4TDNOMlp6ND1cIixcbiAgICAgICAgICAgICAgICAgICAgLy8g0KDQsNC30LzQtdGA0Ysg0LzQtdGC0LrQuC5cbiAgICAgICAgICAgICAgICAgICAgaWNvbkltYWdlU2l6ZTogWzMyLCA0N10sXG4gICAgICAgICAgICAgICAgICAgIC8vINCh0LzQtdGJ0LXQvdC40LUg0LvQtdCy0L7Qs9C+INCy0LXRgNGF0L3QtdCz0L4g0YPQs9C70LAg0LjQutC+0L3QutC4INC+0YLQvdC+0YHQuNGC0LXQu9GM0L3QvlxuICAgICAgICAgICAgICAgICAgICAvLyDQtdGRIFwi0L3QvtC20LrQuFwiICjRgtC+0YfQutC4INC/0YDQuNCy0Y/Qt9C60LgpLlxuICAgICAgICAgICAgICAgICAgICBpY29uSW1hZ2VPZmZzZXQ6IFstMTYsIC00N11cbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIG15TWFwLmdlb09iamVjdHMuYWRkKG15UGxhY2VtYXJrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vbXlNYXAuc2V0Qm91bmRzKG15TWFwLmdlb09iamVjdHMuZ2V0Qm91bmRzKCkpO1xuICAgICAgICAgICAgJCh3aW5kb3cpLm9uKCdyZXNpemUuWWFNYXAnLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgbXlNYXAuc2V0Q2VudGVyKGRhdGFQbGFjZW1hcmtbMF0uY29vcmRpbmF0ZXMpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAgLy8g0KHQvtC30LTQsNC10Lwg0LvQvtC80LDQvdGD0Y4g0YEg0L/QvtC80L7RidGM0Y4g0LLRgdC/0L7QvNC+0LPQsNGC0LXQu9GM0L3QvtCz0L4g0LrQu9Cw0YHRgdCwIFBvbHlsaW5lLlxuICAgICAgICAgICAgIHZhciBteVBvbHlsaW5lID0gbmV3IHltYXBzLlBvbHlsaW5lKGFyckNvb3Jkcywge1xuICAgICAgICAgICAgIC8vINCe0L/QuNGB0YvQstCw0LXQvCDRgdCy0L7QudGB0YLQstCwINCz0LXQvtC+0LHRitC10LrRgtCwLlxuICAgICAgICAgICAgIC8vINCh0L7QtNC10YDQttC40LzQvtC1INCx0LDQu9GD0L3QsC5cbiAgICAgICAgICAgICBiYWxsb29uQ29udGVudDogXCJcIlxuICAgICAgICAgICAgIH0sIHtcbiAgICAgICAgICAgICAvLyDQl9Cw0LTQsNC10Lwg0L7Qv9GG0LjQuCDQs9C10L7QvtCx0YrQtdC60YLQsC5cbiAgICAgICAgICAgICAvLyDQntGC0LrQu9GO0YfQsNC10Lwg0LrQvdC+0L/QutGDINC30LDQutGA0YvRgtC40Y8g0LHQsNC70YPQvdCwLlxuICAgICAgICAgICAgIGJhbGxvb25DbG9zZUJ1dHRvbjogZmFsc2UsXG4gICAgICAgICAgICAgLy8g0KbQstC10YIg0LvQuNC90LjQuC5cbiAgICAgICAgICAgICBzdHJva2VDb2xvcjogXCIjZDQ0YzNmXCIsXG4gICAgICAgICAgICAgLy8g0KjQuNGA0LjQvdCwINC70LjQvdC40LguXG4gICAgICAgICAgICAgc3Ryb2tlV2lkdGg6IDIsXG4gICAgICAgICAgICAgLy8g0JrQvtGN0YTRhNC40YbQuNC10L3RgiDQv9GA0L7Qt9GA0LDRh9C90L7RgdGC0LguXG4gICAgICAgICAgICAgc3Ryb2tlT3BhY2l0eTogMVxuICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgIC8vINCU0L7QsdCw0LLQu9GP0LXQvCDQu9C40L3QuNC4INC90LAg0LrQsNGA0YLRgy5cbiAgICAgICAgICAgICBteU1hcC5nZW9PYmplY3RzLmFkZChteVBvbHlsaW5lKTsqL1xuICAgICAgICB9KTtcbiAgICB9KTtcbn0iLCIkKGZ1bmN0aW9uICgpIHtcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJy5zdGF0aW9uc19faXRlbScsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKCQoZS50YXJnZXQpLmF0dHIoJ2RhdGEtdG9nZ2xlJykgIT09ICdjbG9zZS1zdGF0aW9uLXBvcHVwJyAmJiAhJChlLnRhcmdldCkuY2xvc2VzdCgnLnN0YXRpb25zX19wb3B1cCcpLmxlbmd0aCkge1xuICAgICAgICAgICAgJCgnLnN0YXRpb25zX19pdGVtJykubm90KCQodGhpcykudG9nZ2xlQ2xhc3MoJ3N0YXRpb25zX19pdGVtX29wZW5lZCcpLmZpbmQoJy5zdGF0aW9uc19fcG9wdXAnKS5mYWRlVG9nZ2xlKDIwMCkuZW5kKCkpXG4gICAgICAgICAgICAgICAgLnJlbW92ZUNsYXNzKCdzdGF0aW9uc19faXRlbV9vcGVuZWQnKS5maW5kKCcuc3RhdGlvbnNfX3BvcHVwJykuZmFkZU91dCgyMDApO1xuICAgICAgICB9XG4gICAgfSkub24oJ2NsaWNrJywgJ1tkYXRhLXRvZ2dsZT1cImNsb3NlLXN0YXRpb24tcG9wdXBcIl0nLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICAkKHRoaXMpLmNsb3Nlc3QoJy5zdGF0aW9uc19faXRlbScpLnJlbW92ZUNsYXNzKCdzdGF0aW9uc19faXRlbV9vcGVuZWQnKS5maW5kKCcuc3RhdGlvbnNfX3BvcHVwJykuZmFkZU91dCgyMDApO1xuICAgIH0pLm9uKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmICghJChlLnRhcmdldCkuY2xvc2VzdCgnLnN0YXRpb25zX19pdGVtJykubGVuZ3RoKSB7XG4gICAgICAgICAgICAkKCcuc3RhdGlvbnNfX2l0ZW0nKS5yZW1vdmVDbGFzcygnc3RhdGlvbnNfX2l0ZW1fb3BlbmVkJykuZmluZCgnLnN0YXRpb25zX19wb3B1cCcpLmZhZGVPdXQoMjAwKTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7IiwiJChmdW5jdGlvbiAoKSB7XG4gICAgdmFyICRmb3JtID0gJCgnLmZvcm0tb3JkZXItY2FsbC0yJyk7XG4gICAgaWYgKCRmb3JtLmxlbmd0aCkge1xuICAgICAgICAkZm9ybS5wYXJzbGV5KCkub24oJ2ZpZWxkOnZhbGlkYXRlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBvayA9ICQoJy5wYXJzbGV5LWVycm9yJykubGVuZ3RoID09PSAwO1xuICAgICAgICB9KS5vbignZm9ybTpzdWJtaXQnLCBmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICAgIHZhciAkZm9ybSA9IGVsLiRlbGVtZW50O1xuICAgICAgICAgICAgJGZvcm0uZmluZCgnW2RhdGEtdG9nZ2xlPVwic3VibWl0XCJdJykuYXR0cignZGlzYWJsZWQnLCB0cnVlKTtcbiAgICAgICAgICAgIHZhciBkYXRhID0gJGZvcm0uc2VyaWFsaXplKCk7XG4gICAgICAgICAgICB2YXIgcmVzcG9uc2VNc2cgPSAn0JLQsNGI0LUg0YHQvtC+0LHRidC10L3QuNC1INGD0YHQv9C10YjQvdC+INC+0YLQv9GA0LDQstC70LXQvdC+LCDQvNGLINCS0LDQvCDQv9C10YDQtdC30LLQvtC90LjQvCEnO1xuXG4gICAgICAgICAgICAkLmFqYXgoe1xuICAgICAgICAgICAgICAgIHR5cGU6ICRmb3JtLmF0dHIoJ21ldGhvZCcpLFxuICAgICAgICAgICAgICAgIHVybDogJGZvcm0uYXR0cignYWN0aW9uJyksXG4gICAgICAgICAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgICAgICAgICBzdWNjZXNzOiBmdW5jdGlvbiAoZGF0YSwgdGV4dFN0YXR1cywganFYSFIpIHtcblxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3I6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cywgZXJyb3JUaHJvd24pIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ9Cf0YDQuCDQvtGC0L/RgNCw0LLQutC1INCy0L7Qt9C90LjQutC70LAg0L7RiNC40LHQutCwOiAnICsganFYSFIuc3RhdHVzKTtcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VNc2cgPSAn0J/RgNC4INC+0YLQv9GA0LDQstC60LUg0LLQvtC30L3QuNC60LvQsCDQvtGI0LjQsdC60LAhIFwiJyArIGpxWEhSLnN0YXR1c1RleHQgKyAnXCInO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY29tcGxldGU6IGZ1bmN0aW9uIChqcVhIUiwgdGV4dFN0YXR1cykge1xuICAgICAgICAgICAgICAgICAgICAkZm9ybS5maW5kKCdbZGF0YS10b2dnbGU9XCJzdWJtaXRcIl0nKS5hdHRyKCdkaXNhYmxlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgJC5mYW5jeWJveC5jbG9zZSgpO1xuICAgICAgICAgICAgICAgICAgICAkLmZhbmN5Ym94Lm9wZW4oJzxkaXYgY2xhc3M9XCJwb3B1cCBwb3B1cF9zaXplXzY1MiBwb3B1cF9yZXNwb25zZV9mZWVkYmFjayBjb250YWluZXItZmx1aWRcIj4nICtcbiAgICAgICAgICAgICAgICAgICAgICAgICc8ZGl2IGNsYXNzPVwicG9wdXBfX2hlYWRlclwiPjxoMiBjbGFzcz1cInBvcHVwX190aXRsZVwiPicgKyByZXNwb25zZU1zZyArICc8L2gyPjwvZGl2PicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJzxidXR0b24gY2xhc3M9XCJidG4gYnRuXzRcIiBkYXRhLWZhbmN5Ym94LWNsb3NlPVwiZGF0YS1mYW5jeWJveC1jbG9zZVwiPtCX0LDQutGA0YvRgtGMPC9idXR0b24+JyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnPC9kaXY+Jyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH1cbn0pOyIsImZ1bmN0aW9uIGhhc1ZhbCgpIHtcbiAgICAkKCcudGV4dC1maWVsZCcpLm9uKCdibHVyJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoJCh0aGlzKS52YWwoKSkge1xuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygndGV4dC1maWVsZF9oYXMtdmFsJyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCd0ZXh0LWZpZWxkX2hhcy12YWwnKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG4kKGZ1bmN0aW9uICgpIHtcbiAgICBoYXNWYWwoKTtcbiAgICAkKCdbZGF0YS1tYXNrXScpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdpbml0LW1hc2snKTtcbiAgICB9KTtcbn0pO1xuXG4kKGRvY3VtZW50KS5hamF4Q29tcGxldGUoZnVuY3Rpb24oKSB7XG4gICAgaGFzVmFsKCk7XG4gICAgJCgnW2RhdGEtbWFza10nKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCEkKHRoaXMpLmhhc0NsYXNzKCdpbml0LW1hc2snKSkge1xuICAgICAgICAgICAgJCh0aGlzKS5tYXNrKCQodGhpcykuZGF0YSgnbWFzaycpKS5hZGRDbGFzcygnaW5pdC1tYXNrJyk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAkKCdbZGF0YS1wYXJzbGV5LXZhbGlkYXRlXScpLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICAkKHRoaXMpLnBhcnNsZXkoKTtcbiAgICB9KTtcbn0pOyIsIiQoZnVuY3Rpb24gKCkge1xuICAgICQoJy5zbGlkZXItbWFpbicpLnNsaWNrKHtcbiAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgICBzcGVlZDogMzAwLFxuICAgICAgICBmYWRlOiB0cnVlLFxuICAgICAgICBjc3NFYXNlOiAnbGluZWFyJyxcbiAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgbW9iaWxlRmlyc3Q6IHRydWUsXG4gICAgICAgIHByZXZBcnJvdzogJzxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwic2xpY2stcHJldiBnbHlwaGljb24gZ2x5cGhpY29uLWFuZ2xlLWxlZnRcIj48L2J1dHRvbj4nLFxuICAgICAgICBuZXh0QXJyb3c6ICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInNsaWNrLW5leHQgZ2x5cGhpY29uIGdseXBoaWNvbi1hbmdsZS1yaWdodFwiPjwvYnV0dG9uPicsXG4gICAgICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgICAgICBhdXRvcGxheVNwZWVkOiA1MDAwLFxuICAgICAgICB6SW5kZXg6IDEsXG4gICAgICAgIGxhenlMb2FkOiAnb25kZW1hbmQnLFxuICAgICAgICBwYXVzZU9uRm9jdXM6IGZhbHNlLFxuICAgICAgICBwYXVzZU9uSG92ZXI6IGZhbHNlLFxuICAgICAgICBhZGFwdGl2ZUhlaWdodDogZmFsc2UsXG4gICAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAgICAgIC8qe1xuICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2OCxcbiAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBjZW50ZXJNb2RlOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiAnNDBweCcsXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogM1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0qL1xuICAgICAgICBdXG4gICAgfSkub24oJ2xhenlMb2FkZWQnLCBmdW5jdGlvbiAoZXZlbnQsIHNsaWNrLCBpbWFnZSwgaW1hZ2VTb3VyY2UpIHtcbiAgICAgICAgJChpbWFnZSkuY2xvc2VzdCgnLnNsaWNrLXNsaWRlJykucmVtb3ZlQ2xhc3MoJ2xvYWRpbmcnKTtcbiAgICB9KTtcbn0pOyIsIiQoZnVuY3Rpb24gKCkge1xuICAgICQoJy5zbGlkZXItY2xpZW50c19faW5uZXInKS5zbGljayh7XG4gICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICBhcnJvd3M6IHRydWUsXG4gICAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgICBzcGVlZDogMzAwLFxuICAgICAgICBmYWRlOiBmYWxzZSxcbiAgICAgICAgY3NzRWFzZTogJ2xpbmVhcicsXG4gICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgIG1vYmlsZUZpcnN0OiB0cnVlLFxuICAgICAgICBwcmV2QXJyb3c6ICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInNsaWNrLXByZXYgZ2x5cGhpY29uIGdseXBoaWNvbi1sZWZ0LWFuZ2xlLWJyYWNrZXRcIj48L2J1dHRvbj4nLFxuICAgICAgICBuZXh0QXJyb3c6ICc8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cInNsaWNrLW5leHQgZ2x5cGhpY29uIGdseXBoaWNvbi1yaWdodC1hbmdsZS1icmFja2V0XCI+PC9idXR0b24+JyxcbiAgICAgICAgYXV0b3BsYXk6IHRydWUsXG4gICAgICAgIGF1dG9wbGF5U3BlZWQ6IDUwMDAsXG4gICAgICAgIHpJbmRleDogMSxcbiAgICAgICAgbGF6eUxvYWQ6ICdvbmRlbWFuZCcsXG4gICAgICAgIHBhdXNlT25Gb2N1czogZmFsc2UsXG4gICAgICAgIHBhdXNlT25Ib3ZlcjogZmFsc2UsXG4gICAgICAgIGFkYXB0aXZlSGVpZ2h0OiBmYWxzZSxcbiAgICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA0NzksXG4gICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDJcbiAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjcsXG4gICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBicmVha3BvaW50OiAxMDIzLFxuICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYnJlYWtwb2ludDogMTI2OSxcbiAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDE1OTksXG4gICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA2XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICBdXG4gICAgfSkub24oJ2xhenlMb2FkZWQnLCBmdW5jdGlvbiAoZXZlbnQsIHNsaWNrLCBpbWFnZSwgaW1hZ2VTb3VyY2UpIHtcbiAgICAgICAgJChpbWFnZSkuY2xvc2VzdCgnLnNsaWNrLXNsaWRlJykucmVtb3ZlQ2xhc3MoJ2xvYWRpbmcnKTtcbiAgICB9KTtcbn0pOyIsIiQoZnVuY3Rpb24gKCkge1xuICAgIHZhciAkZm9ybSA9ICQoJy5mb3JtLWZlZWRiYWNrJyk7XG4gICAgaWYgKCRmb3JtLmxlbmd0aCkge1xuICAgICAgICAkZm9ybS5wYXJzbGV5KCkub24oJ2ZpZWxkOnZhbGlkYXRlZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBvayA9ICQoJy5wYXJzbGV5LWVycm9yJykubGVuZ3RoID09PSAwO1xuICAgICAgICB9KS5vbignZm9ybTpzdWJtaXQnLCBmdW5jdGlvbiAoZWwpIHtcbiAgICAgICAgICAgIHZhciAkZm9ybSA9IGVsLiRlbGVtZW50O1xuICAgICAgICAgICAgJGZvcm0uZmluZCgnW2RhdGEtdG9nZ2xlPVwic3VibWl0XCJdJykuYXR0cignZGlzYWJsZWQnLCB0cnVlKTtcbiAgICAgICAgICAgIHZhciBkYXRhID0gJGZvcm0uc2VyaWFsaXplKCk7XG4gICAgICAgICAgICB2YXIgcmVzcG9uc2VNc2cgPSAn0JLQsNGI0LUg0YHQvtC+0LHRidC10L3QuNC1INGD0YHQv9C10YjQvdC+INC+0YLQv9GA0LDQstC70LXQvdC+LCDQvNGLINGBINCS0LDQvNC4INGB0LLRj9C20LXQvNGB0Y8hJztcblxuICAgICAgICAgICAgJC5hamF4KHtcbiAgICAgICAgICAgICAgICB0eXBlOiAkZm9ybS5hdHRyKCdtZXRob2QnKSxcbiAgICAgICAgICAgICAgICB1cmw6ICRmb3JtLmF0dHIoJ2FjdGlvbicpLFxuICAgICAgICAgICAgICAgIGRhdGE6IGRhdGEsXG4gICAgICAgICAgICAgICAgc3VjY2VzczogZnVuY3Rpb24gKGRhdGEsIHRleHRTdGF0dXMsIGpxWEhSKSB7XG5cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGVycm9yOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMsIGVycm9yVGhyb3duKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfQn9GA0Lgg0L7RgtC/0YDQsNCy0LrQtSDQstC+0LfQvdC40LrQu9CwINC+0YjQuNCx0LrQsDogJyArIGpxWEhSLnN0YXR1cyk7XG4gICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlTXNnID0gJ9Cf0YDQuCDQvtGC0L/RgNCw0LLQutC1INCy0L7Qt9C90LjQutC70LAg0L7RiNC40LHQutCwISBcIicgKyBqcVhIUi5zdGF0dXNUZXh0ICsgJ1wiJztcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGNvbXBsZXRlOiBmdW5jdGlvbiAoanFYSFIsIHRleHRTdGF0dXMpIHtcbiAgICAgICAgICAgICAgICAgICAgJGZvcm0uZmluZCgnW2RhdGEtdG9nZ2xlPVwic3VibWl0XCJdJykuYXR0cignZGlzYWJsZWQnLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICQuZmFuY3lib3guY2xvc2UoKTtcbiAgICAgICAgICAgICAgICAgICAgJC5mYW5jeWJveC5vcGVuKCc8ZGl2IGNsYXNzPVwicG9wdXAgcG9wdXBfc2l6ZV82NTIgcG9wdXBfcmVzcG9uc2VfZmVlZGJhY2sgY29udGFpbmVyLWZsdWlkXCI+JyArXG4gICAgICAgICAgICAgICAgICAgICAgICAnPGRpdiBjbGFzcz1cInBvcHVwX19oZWFkZXJcIj48aDIgY2xhc3M9XCJwb3B1cF9fdGl0bGVcIj4nICsgcmVzcG9uc2VNc2cgKyAnPC9oMj48L2Rpdj4nICtcbiAgICAgICAgICAgICAgICAgICAgICAgICc8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bl80XCIgZGF0YS1mYW5jeWJveC1jbG9zZT1cImRhdGEtZmFuY3lib3gtY2xvc2VcIj7Ql9Cw0LrRgNGL0YLRjDwvYnV0dG9uPicgK1xuICAgICAgICAgICAgICAgICAgICAgICAgJzwvZGl2PicpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9XG59KTsiLCIkKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgJHRlYW1Cb3ggPSAkKCcudGVhbWJveCcpLCAkdGVhbUxpc3QgPSAkKCcudGVhbWJveCAudGVhbS1saXN0JyksICR0ZWFtVmlldyA9ICQoJy50ZWFtLXZpZXcnKTtcblxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnLnRlYW0taXRlbV9faW5uZXInLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgdmFyICR0ZWFtSXRlbSA9ICQodGhpcykuY2xvc2VzdCgnLnRlYW0taXRlbScpO1xuXG4gICAgICAgIHZhciAkaW1nU3JjID0gJHRlYW1JdGVtLmZpbmQoJy50ZWFtLWl0ZW1fX2ltZycpLmNsb25lKCkudG9nZ2xlQ2xhc3MoJ3RlYW0taXRlbV9faW1nIHRlYW0tdmlld19faW1nJykuYXR0cignc3R5bGUnLCAnJyk7XG4gICAgICAgIHZhciB0aXRsZSA9ICR0ZWFtSXRlbS5maW5kKCcudGVhbS1pdGVtX190aXRsZScpLmh0bWwoKTtcbiAgICAgICAgdmFyIHBvc2l0aW9uID0gJHRlYW1JdGVtLmZpbmQoJy50ZWFtLWl0ZW1fX3Bvc2l0aW9uJykuaHRtbCgpO1xuICAgICAgICB2YXIgY29udGVudCA9ICR0ZWFtSXRlbS5maW5kKCcudGVhbS1pdGVtX19jb250ZW50JykuaHRtbCgpO1xuXG4gICAgICAgICR0ZWFtVmlldy5maW5kKCcudGVhbS12aWV3X19pbWcnKS5yZW1vdmUoKVxuICAgICAgICAgICAgLmVuZCgpLmZpbmQoJy50ZWFtLXZpZXdfX3RpdGxlJykuaHRtbCgnJylcbiAgICAgICAgICAgIC5lbmQoKS5maW5kKCcudGVhbS12aWV3X19wb3NpdGlvbicpLmh0bWwoJycpXG4gICAgICAgICAgICAuZW5kKCkuZmluZCgnLnRlYW0tdmlld19fY29udGVudCcpLmh0bWwoJycpO1xuXG4gICAgICAgICR0ZWFtVmlldy5maW5kKCcudGVhbS12aWV3X19pbWctcmVzcCcpLmFwcGVuZCgkaW1nU3JjKVxuICAgICAgICAgICAgLmVuZCgpLmZpbmQoJy50ZWFtLXZpZXdfX3RpdGxlJykuaHRtbCh0aXRsZSlcbiAgICAgICAgICAgIC5lbmQoKS5maW5kKCcudGVhbS12aWV3X19wb3NpdGlvbicpLmh0bWwocG9zaXRpb24pXG4gICAgICAgICAgICAuZW5kKCkuZmluZCgnLnRlYW0tdmlld19fY29udGVudCcpLmh0bWwoY29udGVudCk7XG5cbiAgICAgICAgJHRlYW1Cb3guYWRkQ2xhc3MoJ3RlYW1ib3hfb3BlbmVkJyk7XG4gICAgICAgIC8vJHRlYW1WaWV3LmZpbmQoJy50ZWFtLXZpZXdfX2J0bi1jbG9zZScpLmZvY3VzKCk7XG4gICAgfSkub24oJ2NsaWNrJywgJ1tkYXRhLXRvZ2dsZT1cImNsb3NlLXRlYW0tdmlld1wiXScsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAkdGVhbUJveC5yZW1vdmVDbGFzcygndGVhbWJveF9vcGVuZWQnKTtcbiAgICAgICAgLy8kdGVhbVZpZXcuZmluZCgnLnRlYW0tdmlld19fYnRuLWNsb3NlJykuYmx1cigpO1xuICAgIH0pO1xuXG4gICAgJCh3aW5kb3cpLm9uKCdyZXNpemUudGVhbUJveCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJHRlYW1WaWV3LmNzcygnbWFyZ2luLWxlZnQnLCAtJHRlYW1WaWV3Lm91dGVyV2lkdGgoKSkuc2hvdygpO1xuICAgIH0pLnRyaWdnZXJIYW5kbGVyKCdyZXNpemUudGVhbUJveCcpO1xufSk7IiwiJC5mYW5jeWJveC5kZWZhdWx0cy5oYXNoID0gZmFsc2U7XG4kLmZhbmN5Ym94LmRlZmF1bHRzLnRvdWNoID0gZmFsc2U7XG4kLmZhbmN5Ym94LmRlZmF1bHRzLmJ0blRwbC5zbWFsbEJ0biA9ICc8YnV0dG9uIGRhdGEtZmFuY3lib3gtY2xvc2UgY2xhc3M9XCJidG4gcG9wdXBfX2J0bi1jbG9zZSBnbHlwaGljb24gZ2x5cGhpY29uLWNhbmNlbFwiIHRpdGxlPVwi0JfQsNC60YDRi9GC0YxcIj48L2J1dHRvbj4nO1xuXG4kKGZ1bmN0aW9uICgpIHtcbiAgICAvLyQoXCJbZGF0YS1mYW5jeWJveF1cIikuZmFuY3lib3goKTtcblxuICAgICQoXCJbZGF0YS1mYW5jeWJveC0tc2luZ2xlXVwiKS5mYW5jeWJveCh7XG4gICAgICAgIHNtYWxsQnRuIDogZmFsc2UsXG4gICAgICAgIGF1dG9Gb2N1cyA6IGZhbHNlLFxuICAgICAgICBidG5UcGwgOiB7XG4gICAgICAgICAgICBzbGlkZVNob3cgIDogJzxidXR0b24gZGF0YS1mYW5jeWJveC1wbGF5IGNsYXNzPVwiZmFuY3lib3gtYnV0dG9uIGZhbmN5Ym94LWJ1dHRvbi0tcGxheSBoaWRlXCIgdGl0bGU9XCJ7e1BMQVlfU1RBUlR9fVwiPjwvYnV0dG9uPicsXG4gICAgICAgICAgICBmdWxsU2NyZWVuIDogJzxidXR0b24gZGF0YS1mYW5jeWJveC1mdWxsc2NyZWVuIGNsYXNzPVwiZmFuY3lib3gtYnV0dG9uIGZhbmN5Ym94LWJ1dHRvbi0tZnVsbHNjcmVlbiBoaWRlXCIgdGl0bGU9XCJ7e0ZVTExfU0NSRUVOfX1cIj48L2J1dHRvbj4nLFxuICAgICAgICAgICAgdGh1bWJzICAgICA6ICc8YnV0dG9uIGRhdGEtZmFuY3lib3gtdGh1bWJzIGNsYXNzPVwiZmFuY3lib3gtYnV0dG9uIGZhbmN5Ym94LWJ1dHRvbi0tdGh1bWJzIGhpZGVcIiB0aXRsZT1cInt7VEhVTUJTfX1cIj48L2J1dHRvbj4nLFxuICAgICAgICAgICAgY2xvc2UgICAgICA6ICc8YnV0dG9uIGRhdGEtZmFuY3lib3gtY2xvc2UgY2xhc3M9XCJmYW5jeWJveC1idXR0b24gZmFuY3lib3gtYnV0dG9uLS1jbG9zZVwiIHRpdGxlPVwie3tDTE9TRX19XCI+PC9idXR0b24+JyxcblxuICAgICAgICAgICAgLy8gVGhpcyBzbWFsbCBjbG9zZSBidXR0b24gd2lsbCBiZSBhcHBlbmRlZCB0byB5b3VyIGh0bWwvaW5saW5lL2FqYXggY29udGVudCBieSBkZWZhdWx0LFxuICAgICAgICAgICAgLy8gaWYgXCJzbWFsbEJ0blwiIG9wdGlvbiBpcyBub3Qgc2V0IHRvIGZhbHNlXG4gICAgICAgICAgICBzbWFsbEJ0biAgIDogJzxidXR0b24gZGF0YS1mYW5jeWJveC1jbG9zZSBjbGFzcz1cImZhbmN5Ym94LWNsb3NlLXNtYWxsIGdseXBoaWNvbiBnbHlwaGljb24tY2xvc2UtMlwiIHRpdGxlPVwie3tDTE9TRX19XCI+PC9idXR0b24+J1xuICAgICAgICB9LFxuICAgICAgICBrZXlib2FyZDogZmFsc2UsXG4gICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgIHRvdWNoOiBmYWxzZSxcbiAgICAgICAgb25Jbml0OiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgfSxcbiAgICAgICAgYmVmb3JlQ2xvc2U6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAkKFwiW2RhdGEtZmFuY3lib3gtLWdyb3VwXVwiKS5mYW5jeWJveCh7XG4gICAgICAgIHNtYWxsQnRuIDogZmFsc2UsXG4gICAgICAgIGF1dG9Gb2N1cyA6IGZhbHNlLFxuICAgICAgICBidG5UcGwgOiB7XG4gICAgICAgICAgICBzbGlkZVNob3cgIDogJzxidXR0b24gZGF0YS1mYW5jeWJveC1wbGF5IGNsYXNzPVwiZmFuY3lib3gtYnV0dG9uIGZhbmN5Ym94LWJ1dHRvbi0tcGxheSBoaWRlXCIgdGl0bGU9XCJ7e1BMQVlfU1RBUlR9fVwiPjwvYnV0dG9uPicsXG4gICAgICAgICAgICBmdWxsU2NyZWVuIDogJzxidXR0b24gZGF0YS1mYW5jeWJveC1mdWxsc2NyZWVuIGNsYXNzPVwiZmFuY3lib3gtYnV0dG9uIGZhbmN5Ym94LWJ1dHRvbi0tZnVsbHNjcmVlbiBoaWRlXCIgdGl0bGU9XCJ7e0ZVTExfU0NSRUVOfX1cIj48L2J1dHRvbj4nLFxuICAgICAgICAgICAgdGh1bWJzICAgICA6ICc8YnV0dG9uIGRhdGEtZmFuY3lib3gtdGh1bWJzIGNsYXNzPVwiZmFuY3lib3gtYnV0dG9uIGZhbmN5Ym94LWJ1dHRvbi0tdGh1bWJzIGhpZGVcIiB0aXRsZT1cInt7VEhVTUJTfX1cIj48L2J1dHRvbj4nLFxuICAgICAgICAgICAgY2xvc2UgICAgICA6ICc8YnV0dG9uIGRhdGEtZmFuY3lib3gtY2xvc2UgY2xhc3M9XCJmYW5jeWJveC1idXR0b24gZmFuY3lib3gtYnV0dG9uLS1jbG9zZVwiIHRpdGxlPVwie3tDTE9TRX19XCI+PC9idXR0b24+JyxcblxuICAgICAgICAgICAgLy8gVGhpcyBzbWFsbCBjbG9zZSBidXR0b24gd2lsbCBiZSBhcHBlbmRlZCB0byB5b3VyIGh0bWwvaW5saW5lL2FqYXggY29udGVudCBieSBkZWZhdWx0LFxuICAgICAgICAgICAgLy8gaWYgXCJzbWFsbEJ0blwiIG9wdGlvbiBpcyBub3Qgc2V0IHRvIGZhbHNlXG4gICAgICAgICAgICBzbWFsbEJ0biAgIDogJzxidXR0b24gZGF0YS1mYW5jeWJveC1jbG9zZSBjbGFzcz1cImZhbmN5Ym94LWNsb3NlLXNtYWxsIGdseXBoaWNvbiBnbHlwaGljb24tY2xvc2UtMlwiIHRpdGxlPVwie3tDTE9TRX19XCI+PC9idXR0b24+J1xuICAgICAgICB9LFxuICAgICAgICB0b3VjaDogZmFsc2UsXG4gICAgICAgIG9uSW5pdDogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIH0sXG4gICAgICAgIGJlZm9yZUNsb3NlOiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgfSxcbiAgICAgICAgYWZ0ZXJDbG9zZTogZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgICQoXCJbZGF0YS1mYW5jeWJveC0tZ2FsbGVyeV1cIikuZmFuY3lib3goe1xuICAgICAgICBzbWFsbEJ0biA6IGZhbHNlLFxuICAgICAgICBhdXRvRm9jdXMgOiBmYWxzZSxcbiAgICAgICAgYnRuVHBsIDoge1xuICAgICAgICAgICAgc2xpZGVTaG93ICA6ICc8YnV0dG9uIGRhdGEtZmFuY3lib3gtcGxheSBjbGFzcz1cImZhbmN5Ym94LWJ1dHRvbiBmYW5jeWJveC1idXR0b24tLXBsYXlcIiB0aXRsZT1cInt7UExBWV9TVEFSVH19XCI+PC9idXR0b24+JyxcbiAgICAgICAgICAgIGZ1bGxTY3JlZW4gOiAnPGJ1dHRvbiBkYXRhLWZhbmN5Ym94LWZ1bGxzY3JlZW4gY2xhc3M9XCJmYW5jeWJveC1idXR0b24gZmFuY3lib3gtYnV0dG9uLS1mdWxsc2NyZWVuXCIgdGl0bGU9XCJ7e0ZVTExfU0NSRUVOfX1cIj48L2J1dHRvbj4nLFxuICAgICAgICAgICAgdGh1bWJzICAgICA6ICc8YnV0dG9uIGRhdGEtZmFuY3lib3gtdGh1bWJzIGNsYXNzPVwiZmFuY3lib3gtYnV0dG9uIGZhbmN5Ym94LWJ1dHRvbi0tdGh1bWJzXCIgdGl0bGU9XCJ7e1RIVU1CU319XCI+PC9idXR0b24+JyxcbiAgICAgICAgICAgIGNsb3NlICAgICAgOiAnPGJ1dHRvbiBkYXRhLWZhbmN5Ym94LWNsb3NlIGNsYXNzPVwiZmFuY3lib3gtYnV0dG9uIGZhbmN5Ym94LWJ1dHRvbi0tY2xvc2VcIiB0aXRsZT1cInt7Q0xPU0V9fVwiPjwvYnV0dG9uPicsXG5cbiAgICAgICAgICAgIC8vIFRoaXMgc21hbGwgY2xvc2UgYnV0dG9uIHdpbGwgYmUgYXBwZW5kZWQgdG8geW91ciBodG1sL2lubGluZS9hamF4IGNvbnRlbnQgYnkgZGVmYXVsdCxcbiAgICAgICAgICAgIC8vIGlmIFwic21hbGxCdG5cIiBvcHRpb24gaXMgbm90IHNldCB0byBmYWxzZVxuICAgICAgICAgICAgc21hbGxCdG4gICA6ICc8YnV0dG9uIGRhdGEtZmFuY3lib3gtY2xvc2UgY2xhc3M9XCJmYW5jeWJveC1jbG9zZS1zbWFsbCBnbHlwaGljb24gZ2x5cGhpY29uLWNsb3NlLTJcIiB0aXRsZT1cInt7Q0xPU0V9fVwiPjwvYnV0dG9uPidcbiAgICAgICAgfSxcbiAgICAgICAgb25Jbml0OiBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgfSxcbiAgICAgICAgYmVmb3JlQ2xvc2U6IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICB9XG4gICAgfSk7XG59KTsiXX0=
