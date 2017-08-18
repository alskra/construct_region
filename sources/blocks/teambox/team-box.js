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