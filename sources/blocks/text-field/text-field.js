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