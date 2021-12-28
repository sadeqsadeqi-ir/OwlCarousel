$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    dots: true,
    rtl: true,
    lazyLoad: true,
    autoplay: true,
    autoplayTimeout: 2500,
    autoplaySpeed: 1000,
    autoplayHoverPause: true,
    navText: [
        '<i class="bi bi-chevron-compact-right"></i>',
        '<i class="bi bi-chevron-compact-left"></i>'
    ],
    responsive: {
        0: {
            items: 1,
            nav: true
        }
    }
});