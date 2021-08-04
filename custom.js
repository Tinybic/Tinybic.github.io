let wWidth = window.innerWidth;

$(document).ready(function () {

    let year = new Date().getFullYear();
    $(".copyright-year").each(function (e) {
        $(this).text('© ' + year + " Lovett")
    })

    function closeSide() {
        let menu = $('#menu');
        let sidebar = $('#sidebar')
        let _search = $('.home-search')
        let _sContainer = $('.search-container')

        if (menu.hasClass('menu-active')) {
            menu.removeClass('menu-active');
            sidebar.removeClass('sidebar-contain-active');

            let $vidOverlay = $(".home-covervid-overlay");

            if($vidOverlay.length > 0 && $vidOverlay.css('display')==='flex'){
                $vidOverlay.css('display', 'none');
                $('iframe').attr('src', '');
            }

            let $musicVidOverlay = $(".page-overlay-copy")

            if($musicVidOverlay.length > 0 && $musicVidOverlay.css('display')==='flex'){
                $musicVidOverlay.css('display', 'none');
                $('iframe').attr('src', '');
            }

            //$(".page-overlay-copy").css('display','none')
            $('body').css('overflow', 'auto');
            $("#menu").css('transform', `translateX(0)`);


        } else {
            menu.addClass('menu-active');
            sidebar.addClass('sidebar-contain-active');
        }

        if(_search.hasClass('search-active')){
            _search.removeClass('search-active')
            _sContainer.fadeOut('fast')
            $('.search-ipt').val('')

            if($('.search-icon-svg').hasClass('icon-white')){
                $('.search-icon-svg').removeClass('icon-white')
                $('.main-search-ipt').val('')
            }
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

    let _search = $('.home-search')
    let _menu = $('#menu');
    let _sContainer = $('.search-container')
    let _searchSvg = $('.search-icon-svg')

    _search.click(function(){
        if(_search.hasClass('search-active')){
            //_search.removeClass('search-active')
            //_menu.removeClass('menu-active');
            //_sContainer.fadeOut('fast')
            $('#siteSearchBtn').click();
        }else{
            _searchSvg.addClass('icon-white')
            _search.addClass('search-active')
            _menu.addClass('menu-active');
            _sContainer.fadeIn('fast')
        }
    })

});