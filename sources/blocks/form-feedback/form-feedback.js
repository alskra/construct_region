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