// var swc = true;
// $('.control').on('click', function () {
//     $(this).toggleClass('on');
//     if (swc) {
//         $('video').trigger('pause');
//     } else {
//         $('video').trigger('play');
//     }
//     // 스위치 만들기... 참거짓을 반복하기
//     swc = !swc;
// });


// $('.control').on('click', function () {
//     $(this).toggleClass('on');
//     if ($(this).hasClass('on')) {
//         $('video').trigger('pause');
//     } else {
//         $('video').trigger('play');
//     }
// });

$('.control').on('click', function () {
    $(this).toggleClass('on');
    $(this).hasClass('on') ?
        $('video').trigger('pause')
        : $('video').trigger('play');

});