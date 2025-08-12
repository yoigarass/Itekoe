$(function() {
    // スクロールアニメーション
    const fadeIn = $('.fade-in-scroll');
    $(window).on('scroll', function() {
        fadeIn.each(function() {
            const offset = $(this).offset().top;
            const scroll = $(window).scrollTop();
            const windowHeight = $(window).height();
            if (scroll > offset - windowHeight + 150) {
                $(this).addClass('is-visible');
            }
        });
    });

    // ページ読み込み時に一度だけ実行
    $(window).trigger('scroll');

    // ハンバーガーメニュー
    $('.sp-nav-button').on('click', function() {
        $(this).toggleClass('active');
        $('.sp-nav').toggleClass('active');
    });
});
