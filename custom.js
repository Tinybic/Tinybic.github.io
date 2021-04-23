$(document).ready(function () {

    let year = new Date().getFullYear();
    $(".copyright-year").each(function(e){
        $(this).text('© '+ year + " Lovett")
    })

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
});