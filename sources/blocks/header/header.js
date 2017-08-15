$(function () {
    $('body').on('click', '[data-toggle="menu"]', function (e) {
        e.preventDefault();
        $(this).toggleClass('glyphicon-menu-lines glyphicon-cancel');
        $('.header__panel').fadeToggle(200);
    });
});