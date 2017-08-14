$(function () {
    $('body').on('click', '[data-toggle="submenu"]', function (e) {
        e.preventDefault();
        $('.menu__submenu')
            .not($(this).next('.menu__submenu').toggleClass('menu__submenu_opened').toggle().parent().toggleClass('menu__item_opened').end())
            .not($(this).parents('.menu__submenu'))
            .removeClass('menu__submenu_opened').hide().parent().removeClass('menu__item_opened');
    }).on('click', function (e) {
        if (!$(e.target).closest('.header__panel').length) {
            $('.menu__submenu').removeClass('menu__submenu_opened').hide().parent().removeClass('menu__item_opened');
        }
    });
});