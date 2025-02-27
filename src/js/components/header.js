export default function header() {
    $(window).on('scroll', function () {
        const header = $('.header');
        const header__container = $('.header__container');
        if ($(window).scrollTop() > 0) {
            header.addClass('header--fixed');
            header__container.addClass('header--mobile');
        } else {
            header.removeClass('header--fixed');
            header__container.remove('header--mobile');
        }
    });
}
