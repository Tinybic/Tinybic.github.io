





const myInfoSwiper = new Swiper('.infos-swiper-container', {
    // Optional parameters
    //spaceBetween: 30,
    freeMode: false,
    loop: false,
    centeredSlides: false,
    // Enable lazy loading
    lazy: true,
    slidesPerView: 1,
    //idesPerGroup: 2,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    keyboard: {
        enabled: true,
    },
})