$('#main_video').YTPlayer({
    videoURL: 'http://youtu.be/kO4n1YqCQfo',
    containment: '.video_wrap',
    autoPlay: true,
    mute: true,
    startAt: 0,
    opacity: 1,
    showControls: false,
    playOnlyiFVisible: true,
});

$('.pause').on('click', function () {
    $('#main_video').YTPPause()
});

$('.play').on('click', function () {
    $('#main_video').YTPPlay()
});
