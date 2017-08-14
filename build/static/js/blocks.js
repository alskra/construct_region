var $screenSm = 768, $screenMd = 1024, $screenLg = 1270;

var $fontSizeRoot = 16, $fontSizeRootComputed = parseInt($('html').css('fontSize'));

var $screenSmMin = $screenSm/$fontSizeRoot + 'em'; console.log('$screenSmMin = ' + $screenSmMin + ' (' + $screenSm + 'px)');
var $screenMdMin = $screenMd/$fontSizeRoot + 'em'; console.log('$screenMdMin = ' + $screenMdMin + ' (' + $screenMd + 'px)');
var $screenLgMin = $screenLg/$fontSizeRoot + 'em'; console.log('$screenLgMin = ' + $screenLgMin + ' (' + $screenLg + 'px)');

var $screenXsMax = ($screenSm - 1)/$fontSizeRoot + 'em'; console.log('$screenXsMax = ' + $screenXsMax);
var $screenSmMax = ($screenMd - 1)/$fontSizeRoot + 'em'; console.log('$screenSmMax = ' + $screenSmMax);
var $screenMdMax = ($screenLg - 1)/$fontSizeRoot + 'em'; console.log('$screenMdMax = ' + $screenMdMax);


$(function () {
    $('body').on('click', '[data-toggle="menu"]', function (e) {
        e.preventDefault();
        $(this).toggleClass('glyphicon-menu-lines glyphicon-cancel');
        $('.header__panel').toggle();
    });
});

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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2UuanMiLCJoZWFkZXIuanMiLCJtZW51LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJibG9ja3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgJHNjcmVlblNtID0gNzY4LCAkc2NyZWVuTWQgPSAxMDI0LCAkc2NyZWVuTGcgPSAxMjcwO1xuXG52YXIgJGZvbnRTaXplUm9vdCA9IDE2LCAkZm9udFNpemVSb290Q29tcHV0ZWQgPSBwYXJzZUludCgkKCdodG1sJykuY3NzKCdmb250U2l6ZScpKTtcblxudmFyICRzY3JlZW5TbU1pbiA9ICRzY3JlZW5TbS8kZm9udFNpemVSb290ICsgJ2VtJzsgY29uc29sZS5sb2coJyRzY3JlZW5TbU1pbiA9ICcgKyAkc2NyZWVuU21NaW4gKyAnICgnICsgJHNjcmVlblNtICsgJ3B4KScpO1xudmFyICRzY3JlZW5NZE1pbiA9ICRzY3JlZW5NZC8kZm9udFNpemVSb290ICsgJ2VtJzsgY29uc29sZS5sb2coJyRzY3JlZW5NZE1pbiA9ICcgKyAkc2NyZWVuTWRNaW4gKyAnICgnICsgJHNjcmVlbk1kICsgJ3B4KScpO1xudmFyICRzY3JlZW5MZ01pbiA9ICRzY3JlZW5MZy8kZm9udFNpemVSb290ICsgJ2VtJzsgY29uc29sZS5sb2coJyRzY3JlZW5MZ01pbiA9ICcgKyAkc2NyZWVuTGdNaW4gKyAnICgnICsgJHNjcmVlbkxnICsgJ3B4KScpO1xuXG52YXIgJHNjcmVlblhzTWF4ID0gKCRzY3JlZW5TbSAtIDEpLyRmb250U2l6ZVJvb3QgKyAnZW0nOyBjb25zb2xlLmxvZygnJHNjcmVlblhzTWF4ID0gJyArICRzY3JlZW5Yc01heCk7XG52YXIgJHNjcmVlblNtTWF4ID0gKCRzY3JlZW5NZCAtIDEpLyRmb250U2l6ZVJvb3QgKyAnZW0nOyBjb25zb2xlLmxvZygnJHNjcmVlblNtTWF4ID0gJyArICRzY3JlZW5TbU1heCk7XG52YXIgJHNjcmVlbk1kTWF4ID0gKCRzY3JlZW5MZyAtIDEpLyRmb250U2l6ZVJvb3QgKyAnZW0nOyBjb25zb2xlLmxvZygnJHNjcmVlbk1kTWF4ID0gJyArICRzY3JlZW5NZE1heCk7XG4iLCIkKGZ1bmN0aW9uICgpIHtcbiAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJ1tkYXRhLXRvZ2dsZT1cIm1lbnVcIl0nLCBmdW5jdGlvbiAoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoJ2dseXBoaWNvbi1tZW51LWxpbmVzIGdseXBoaWNvbi1jYW5jZWwnKTtcbiAgICAgICAgJCgnLmhlYWRlcl9fcGFuZWwnKS50b2dnbGUoKTtcbiAgICB9KTtcbn0pOyIsIiQoZnVuY3Rpb24gKCkge1xuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnW2RhdGEtdG9nZ2xlPVwic3VibWVudVwiXScsIGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgJCgnLm1lbnVfX3N1Ym1lbnUnKVxuICAgICAgICAgICAgLm5vdCgkKHRoaXMpLm5leHQoJy5tZW51X19zdWJtZW51JykudG9nZ2xlQ2xhc3MoJ21lbnVfX3N1Ym1lbnVfb3BlbmVkJykudG9nZ2xlKCkucGFyZW50KCkudG9nZ2xlQ2xhc3MoJ21lbnVfX2l0ZW1fb3BlbmVkJykuZW5kKCkpXG4gICAgICAgICAgICAubm90KCQodGhpcykucGFyZW50cygnLm1lbnVfX3N1Ym1lbnUnKSlcbiAgICAgICAgICAgIC5yZW1vdmVDbGFzcygnbWVudV9fc3VibWVudV9vcGVuZWQnKS5oaWRlKCkucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ21lbnVfX2l0ZW1fb3BlbmVkJyk7XG4gICAgfSkub24oJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKCEkKGUudGFyZ2V0KS5jbG9zZXN0KCcuaGVhZGVyX19wYW5lbCcpLmxlbmd0aCkge1xuICAgICAgICAgICAgJCgnLm1lbnVfX3N1Ym1lbnUnKS5yZW1vdmVDbGFzcygnbWVudV9fc3VibWVudV9vcGVuZWQnKS5oaWRlKCkucGFyZW50KCkucmVtb3ZlQ2xhc3MoJ21lbnVfX2l0ZW1fb3BlbmVkJyk7XG4gICAgICAgIH1cbiAgICB9KTtcbn0pOyJdfQ==
