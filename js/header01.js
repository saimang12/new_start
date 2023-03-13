$('h1').on('click', function () {
    console.log('작동함')
});

$(window).on('scroll', function () {
    console.log('스크롤 : ', $(window).scrollTop());
    // 스크롤된 양을 구해서 0보다 크면 클래스를 붙이고 아니면 클래스를 땐다.
    // if(스크롤양 > 0) {클래스를 붙이} else {클래스를 땐}
    // 스클롤량을 구하기 : $(window).scrollTop()

    if ($(window).scrollTop() > 0) {
        $('#haeder_scroll').addClass('on');
    } else {
        $('#haeder_scroll').removeClass('on');
    }

    // var sct = $(window).scrollTop();
    // sct > 0 ? $('#haeder_scroll').addClass('on')
    //     : $('#haeder_scroll').removeClass('on');
})

