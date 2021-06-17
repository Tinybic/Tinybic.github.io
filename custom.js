let wWidth = window.innerWidth;

$(document).ready(function () {

    let year = new Date().getFullYear();
    $(".copyright-year").each(function (e) {
        $(this).text('© ' + year + " Lovett")
    })

    function closeSide() {
        let menu = $('#menu');
        let sidebar = $('#sidebar')
        if (menu.hasClass('menu-active')) {
            menu.removeClass('menu-active');
            sidebar.removeClass('sidebar-contain-active');


            $(".page-overlay-copy").css('display', 'none');
            $('body').css('overflow', 'auto');
            $("#menu").css('transform', `translateX(0)`);


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


    function infoHover() {
        $('.info-title-hover').css('color', '#c6e6ff');
        $('.info-learn-more-hover').css('color', '#c6e6ff');
        $('.info-learn-text-sml').css('color', '#c6e6ff');
        $('.info-image-layout1').addClass('info-img-hover');
    }

    function infoHoverOut() {
        $('.info-title-hover').css('color', '#ffffff');
        $('.info-learn-more-hover').css('color', '#ffffff');
        $('.info-learn-text-sml').css('color', '#ffffff');
        $('.info-image-layout1').removeClass('info-img-hover');
    }

    $('.info-image-layout1').hover(() => {
        infoHover();
    }, () => {
        infoHoverOut();
    })
    $('.info-title-hover').hover(() => {
        infoHover();
    }, () => {
        infoHoverOut();
    })
    $('.info-learn-more-hover').hover(() => {
        infoHover();
    }, () => {
        infoHoverOut();
    })


    $('.signup').each(function () {
        $(this).click(function () {
            let mail = $("#subscribe");
            mail.addClass('sidebar-contain-active');
        });
    })
    $('.close-mail').click(function () {
        $("#subscribe").removeClass('sidebar-contain-active');
    })

    window.addEventListener("resize", function () {
        wWidth = window.innerWidth;
        let vh = window.innerHeight;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    });

});