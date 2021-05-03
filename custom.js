$(document).ready(function () {

    let year = new Date().getFullYear();
    $(".copyright-year").each(function(e){
        $(this).text('© '+ year + " Lovett")
    })

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

$(document).ready(function () {
    const Day = {
        Monday:'Mon',
        Tuesday:'Tue',
        Wednesday:'Wed',
        Thursday:'Thur',
        Friday:'Fri',
        Saturday:'Sat',
        Sunday:'Sun'
    }

    let list = $('.trading-hour-list-item');
    let _list = [];
    let dayList=[];

    list.each(function(i,e){
        let _day = $(e)[0].firstChild.innerText;
        console.log($(e));
        _list.push({
            day:Day[_day],
            time:$(e)[0].lastChild.firstChild.innerHTML+'-'+$(e)[0].lastChild.lastChild.innerHTML
        })
    })

    tempList.each(function(i,e){
        if(e.time===tempList[i-1].time){
            tempDay = tempList[i-1].day.split('-')[0];
            dayList[i-1].day = tempDay + '-' + e.day;
        }else{
            dayList.push(e)
        }
    })

    dayList.forEach(function (value, index, array){
        $('#tradingHour').append(
            '<div>\n' +
            '    <span class="day">'+value.day+'</span>\n' +
            '    <span class="hour-time">\n' + value.time + '</span>\n' +
            '</div>')
    })



    console.log(_list)
    console.log(Daylist)
})