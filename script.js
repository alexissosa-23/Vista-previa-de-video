
document.addEventListener("DOMContentLoaded", function() {
    var video = document.querySelector('.video-preview');

    function playVideo() {
        if (!video.paused) return; 
        video.play();
    }

    function pauseVideo() {
        video.pause();
    }

    video.addEventListener('mouseover', playVideo);
    video.addEventListener('mouseout', pauseVideo);
});