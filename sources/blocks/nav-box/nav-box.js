$(function () {
    $('body').on('click', '[data-toggle="menu"]', function () {
        $(this).toggleClass('glyphicon-menu-lines glyphicon-cancel');
        $navBox = $(this).closest('.nav-box');
        $navBox.find('[data-toggle="search"]').removeClass('glyphicon-cancel').addClass('glyphicon-icon-search');
        $navBox.find('.menu').slideToggle(200);
        $navBox.find('.form-search').fadeOut(200);
    }).on('click', '[data-toggle="search"]', function () {
        $(this).toggleClass('glyphicon-icon-search glyphicon-cancel');
        $navBox = $(this).closest('.nav-box');
        $navBox.find('[data-toggle="menu"]').removeClass('glyphicon-cancel').addClass('glyphicon-menu-lines');
        $navBox.find('.menu').slideUp(200);
        $navBox.find('.form-search').fadeToggle(200).find('.form-search__field').focus();
    });
});