// window.onload = function() {
//     new fullpage('#fullpage', {
//         //options here
//         anchors: ['res', 'it', 'study', 'ad', 'lastPage'],
//         menu: '#myMenu'
//     });
// }

function startup() {

    if ($(window).width() === 375 && $(window).height() > 724 && window.devicePixelRatio === 3) {
        // $('.propertylist').css({
        //     'height': '32%',
        // });
    }
    // var listheight = $('.propertylist:nth-child(1)')[0].clientHeight;
    // var contentheight = $('.propertylist:nth-child(4) .listContent')[0].clientHeight;
    // var contentY = $('.propertylist:nth-child(4) .listContent')[0].offsetTop;
    // var top = (listheight - contentY - contentheight) / 2 + listheight * 0.05;

    // $('.listIcon').css({
    //     'margin-top': top,
    // });
}

$(document).ready(function () {

    $('#fullpage').fullpage({
        //options here
        anchors: ['app', 'mini', 'web'],
        verticalCentered: false,
        scrollOverflow: true,

        afterLoad(origin, destination, direction) {
            /* do nothing */
        },
        onLeave(origin, destination, direction) {
            /* do nothing */
        }
    });

    $('.header .back').on('click', function () {
        fullpage_api.moveTo(1);
    })


    // 构建元素img添加到section中
    var $img = $('<img src="../images/next.svg">');
    $img.addClass('z');
    $img.on('click', function () {
        fullpage_api.moveSectionDown();
    })
    // $('.section:nth-child(-n+4)').append($img);

});