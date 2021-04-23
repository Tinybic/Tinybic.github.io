$(document).ready(function () {

    let year = new Date().getFullYear();
    $(".copyright-year").each(function(e){
        $(this).text('© '+ year + " Lovett")
    })

    $('#fullpage').fullpage({
        licenseKey: 'YOUR_KEY_HERE',
        scrollBar: true,
        scrollingSpeed: 500,
        touchSensitivity:10,
        normalScrollElements: ".sidebar",
        onLeave: function (origin, destination, direction) {
            if ((origin.index === 0 && destination.index === 1) || (origin.index === 2 && destination.index === 1)) {
                console.log(window.innerWidth);
                if(window.innerWidth>990){
                    setTimeout(function () {
                        $('#upperLogo').css('zIndex', 0);
                    }, 400);
                    //$('#upperLogo').hide();
                }
            }else {
                setTimeout(function () {
                    $('#upperLogo').css('zIndex', 2);
                }, 400);
            }
        }
    });


    var swiperNodes = "";
    var pagination = '<div class=swiper-pagination></div>';
    var next_prev_buttons = '<div class="swiper-button-prev"></div><div class="swiper-button-next"></div>';
    swiperNodes = swiperNodes.concat(pagination, next_prev_buttons);


    function closeSide() {
        let menu = $('#menu');
        let sidebar = $('#sidebar')
        if (menu.hasClass('menu-active')) {
            menu.removeClass('menu-active');
            sidebar.removeClass('sidebar-contain-active');
        } else {
            menu.addClass('menu-active');
            sidebar.addClass('sidebar-contain-active');
        }
    }
    $('#menu').click(function (e) {
        closeSide();
    })
    $('.sidebar-space').click(function (e) {
        closeSide();
    })


    function infoHover(){
        $('.info-title-hover').css('color','#c6e6ff');
        $('.info-learn-more-hover').css('color','#c6e6ff');
        $('.info-learn-text-sml').css('color','#c6e6ff');
        $('.info-image-layout1').addClass('info-img-hover');
    }
    function infoHoverOut(){
        $('.info-title-hover').css('color','#ffffff');
        $('.info-learn-more-hover').css('color','#ffffff');
        $('.info-learn-text-sml').css('color','#ffffff');
        $('.info-image-layout1').removeClass('info-img-hover');
    }
    $('.info-image-layout1').hover(()=>{
        infoHover();
    },()=>{
        infoHoverOut();
    })
    $('.info-title-hover').hover(()=>{
        infoHover();
    },()=>{
        infoHoverOut();
    })
    $('.info-learn-more-hover').hover(()=>{
        infoHover();
    },()=>{
        infoHoverOut();
    })



    $('.signup').each(function(){
        $(this).click(function (){
            let mail = $("#subscribe");
            mail.addClass('sidebar-contain-active');
        });
    })
    $('.close-mail').click(function(){
        $("#subscribe").removeClass('sidebar-contain-active');
    })



    /* loop throw all swipers on the page */
    $('.swiper-container').each(function (index) {
        $(this).append(swiperNodes);
    });
    const myGallerySwiper = new Swiper('.gallery-swiper-container', {
        // Optional parameters
        //spaceBetween: 30,
        freeMode: false,
        loop: false,
        centeredSlides: false,
        spaceBetween: 0,
        // Enable lazy loading
        lazy: true,
        //slidesPerView: 3,
        //slidesPerGroup: 3,
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
        breakpoints: {
            991:{
                spaceBetween: 30,
            },
            1280:{
                spaceBetween: 60,
            }
        },
    })
    const myNavSwiper = new Swiper('.nav-swiper-container', {
        // Optional parameters
        //spaceBetween: 30,
        freeMode: false,
        loop: false,
        centeredSlides: false,
        // Enable lazy loading
        lazy: true,
        slidesPerView: 2,
        slidesPerGroup: 2,
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
    const myNavSwiperSml = new Swiper('.nav-swiper-container-sml', {
        // Optional parameters
        //spaceBetween: 30,
        freeMode: false,
        loop: false,
        centeredSlides: false,
        // Enable lazy loading
        lazy: true,
        slidesPerView: 1,
        //slidesPerGroup: 2,
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
    const myNewsSwiper = new Swiper('.news-swiper-container', {
        // Optional parameters
        //spaceBetween: 30,
        freeMode: false,
        loop: false,
        centeredSlides: false,
        // Enable lazy loading
        lazy: true,
        slidesPerView: 3,
        slidesPerGroup: 3,
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
    const myNewsSwiperSml = new Swiper('.news-swiper-container-sml', {
        // Optional parameters
        //spaceBetween: 30,
        freeMode: false,
        loop: false,
        centeredSlides: false,
        // Enable lazy loading
        lazy: true,
        slidesPerView: 2,
        slidesPerGroup: 2,
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
    const myNewsSwiperXs = new Swiper('.news-swiper-container-xs', {
        // Optional parameters
        //spaceBetween: 30,
        freeMode: false,
        loop: false,
        centeredSlides: false,
        // Enable lazy loading
        lazy: true,
        slidesPerView: 1,
        //slidesPerGroup: 2,
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
    const myInfoSwiper = new Swiper('.infos-swiper-container', {
        // Optional parameters
        //spaceBetween: 30,
        freeMode: false,
        loop: false,
        centeredSlides: false,
        spaceBetween: 60,
        // Enable lazy loading
        lazy: true,
        //slidesPerView: 3,
        //slidesPerGroup: 3,
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
});