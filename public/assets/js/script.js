// ドロワーメニュー開閉
$(function () {
    $('#js-drawer__btn').on('click', function () {
        $(this).toggleClass('open');
        $('#js-drawer__overlay, #js-drawer').toggleClass('open');
    });
    $('#js-drawer__overlay').on('click', function () {
        $(this).removeClass('open');
        $('#js-drawer__btn, #js-drawer').removeClass('open');
    });
    $('.drawer__link').on('click', function () {
        $('#js-drawer__btn, #js-drawer__overlay, #js-drawer').removeClass('open');
    });
});

// ヘッダーリストの選択時固定
$(function () {
    $('.nav__link').on('click', function () {
        $('.nav__link').removeClass('is-active');
        $(this).addClass('is-active');
        return false;
    });
});

// フェードイン
$(function () {
    $(window).on('scroll', function () {
        $(".fadeIn-up").each(function () {
            var targetElement = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight + 100) {
                $(this).css("opacity", "1");
                $(this).css("transform", "translateY(0)");
            }
        });
    });
});

// スムーススクロール
$(function () {
    $('a[href ^= "#"]').on('click', function () {
        var header = $('.header').innerHeight();
        var speed = 500;
        var id = $(this).attr('href');
        var target = $("#" == id ? 'html' : id);
        var position = $(target).offset().top - header;
        $('html, body').animate({ scrollTop: position }, speed);
        return false;
    });
});

// TOPのフローティング
$(function () {
    $('#js-toTop').hide();
    $(window).on('scroll', function () {
        if ($(this).scrollTop() > 400) {
            $('#js-toTop').fadeIn();
        } else {
            $('#js-toTop').fadeOut();
        }
    });

    $('#js-toTop').on('click', function () {
        $('body, html').animate({scrollTop: 0}, 500);
    });
    return false;
});
