ScrollReveal().reveal('.reveal', { 
    delay: 200,
    opacity: 0,
    duration: 1000,
    mobile: false,
    distance: '20%'
});

$(window).on('scroll', function() {
    let header = $('header');
    if (window.pageYOffset !== 0) {
        header.addClass('active');
    } else {
        header.removeClass('active');
    }
});

function toggleMobileMenu() {
    let burger = $('.burger__button');
    let menu = $('nav');
    let close = $('.menu__close');
    burger.on('click', function() {
        menu.addClass('active');
    });
    close.on('click', function() {
        menu.removeClass('active');
    });
}
toggleMobileMenu();