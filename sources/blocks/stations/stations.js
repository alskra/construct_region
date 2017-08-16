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