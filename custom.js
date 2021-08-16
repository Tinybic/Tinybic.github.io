let wWidth = window.innerWidth;

$(document).ready(function () {

    //search icon hover action
    $('.search-svg').hover(function () {
        $('.header').addClass('bg-white');
    }, function () {
        $('.header').removeClass('bg-white');
    })

    //generate copyright year
    let year = new Date().getFullYear();
    $(".copyright-year").each(function (e) {
        $(this).text('© ' + year + " Lovett")
    })

    //close side menu
    function closeSide() {
        let menu = $('#menu');
        let sidebar = $('#sidebar')
        let _search = $('.home-search')
        let _sContainer = $('.search-container')

        if (menu.hasClass('menu-active')) {
            enableScroll();
            menu.removeClass('menu-active');
            sidebar.removeClass('sidebar-contain-active');
            $('body').css('overflow', 'auto');
            $("#menu").css('transform', `translateX(0)`);

        } else {
            disableScroll();
            menu.addClass('menu-active');
            sidebar.addClass('sidebar-contain-active');
        }

        if (_search.hasClass('search-active')) {
            _search.removeClass('search-active')
            _sContainer.fadeOut('fast')
            $('.search-ipt').val('')

            if ($('.search-icon-svg').hasClass('icon-white')) {
                $('.search-icon-svg').removeClass('icon-white')
                $('.main-search-ipt').val('')
            }
        }
    }

    //menu click funciton
    $('#menu').click(function (e) {
        closeSide();
    })

    //side-space click, close side menu
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


    //click sign up show mail container
    $('.signup').each(function () {
        $(this).click(function () {
            disableScroll()
            let mail = $("#subscribe");
            mail.addClass('sidebar-contain-active');
        });
    })

    //close mail container
    $('.close-mail').click(function () {
        enableScroll()
        $('.success-message').hide()
        $('#email-form').show();
        $("#subscribe").removeClass('sidebar-contain-active');
        clearTimeout();
    })

    //submit email
    $('#emailSubmitBtn').click(function (e) {
        e.preventDefault();
        let email = $('#EMAIL-2').val();
        if (email.match(/@/ig)) {
            $.ajax({
                type: "GET",
                url: `https://intownhomes.com/getdata/savenewletter3.ashx?email=${email}&phone=&firstname=&lastname=&request=&leasingyn=0`,
                success: function (res) {
                    $('#email-form').hide();
                    $('.success-message').show()
                    setTimeout(function () {
                        if ($('#subscribe').hasClass('sidebar-contain-active')) {
                            $('.close-mail').click()
                        }
                    }, 3000)
                },
                error: function (err) {
                    console.log('error: ', JSON.stringify(err))
                }
            });
        }
    })


    // close sign up container
    $('#closeSignup').click(function () {
        $('.close-mail').click()
    })

    // resize listener when size, reset window height
    window.addEventListener("resize", function () {
        wWidth = window.innerWidth;
        let vh = window.innerHeight;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
    });


    /* search function start */
    let _search = $('.home-search')
    let _menu = $('#menu');
    let _sContainer = $('.search-container')
    let _searchSvg = $('.search-icon-svg')
    _search.click(function () {
        if (_search.hasClass('search-active')) {
            enableScroll()
            //_search.removeClass('search-active')
            //_menu.removeClass('menu-active');
            //_sContainer.fadeOut('fast')
            $('#siteSearchBtn').click();
        } else {
            disableScroll()
            _searchSvg.addClass('icon-white')
            _search.addClass('search-active')
            _menu.addClass('menu-active');
            _sContainer.fadeIn('fast')
        }
    })
    /* search function ends */


    /* enable scroll/ disable scroll function starts */
    var keys = {37: 1, 38: 1, 39: 1, 40: 1};    // left: 37, up: 38, right: 39, down: 40, spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36

    function preventDefault(e) {
        e.preventDefault();
    }

    function preventDefaultForScrollKeys(e) {
        if (keys[e.keyCode]) {
            preventDefault(e);
            return false;
        }
    }

    // modern Chrome requires { passive: false } when adding event
    var supportsPassive = false;
    try {
        window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
            get: function () {
                supportsPassive = true;
            }
        }));
    } catch (e) {
    }

    var wheelOpt = supportsPassive ? {passive: false} : false;
    var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

    // call this to Disable
    function disableScroll() {
        window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
        window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
        window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
        window.addEventListener('keydown', preventDefaultForScrollKeys, false);
    }

    // call this to Enable
    function enableScroll() {
        window.removeEventListener('DOMMouseScroll', preventDefault, false);
        window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
        window.removeEventListener('touchmove', preventDefault, wheelOpt);
        window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
    }
    /* enable scroll/ disable scroll function ends */

});