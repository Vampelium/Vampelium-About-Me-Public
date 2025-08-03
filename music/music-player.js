document.addEventListener("DOMContentLoaded", () => {
    const audio = document.getElementById("audio");
    const playPauseBtn = document.getElementById("playPauseBtn");
    const playPauseIcon = document.getElementById("playPauseIcon");
    const nextBtn = document.getElementById("nextBtn");
    const prevBtn = document.getElementById("prevBtn");
    const trackInfo = document.getElementById("trackInfo");
    const volumeSlider = document.getElementById("volumeSlider");

    // Playlist
    const playlist = [
        { src: "/POKERFACE FUNK![music+vocals].mp3", name: "POKERFACE" },
        { src: "/RVNGE.mp3", name: "RVNGE" },
        { src: "/track3.mp3", name: "Track 3" }
    ];

    let currentTrack = 0;

    function loadTrack(index) {
        audio.src = playlist[index].src;
        trackInfo.textContent = `Track: ${playlist[index].name}`;
    }

    function playPause() {
        if (audio.paused) {
            audio.play();
            playPauseIcon.className = "pause-icon";
            playPauseIcon.innerHTML = "<span></span><span></span>";
        } else {
            audio.pause();
            playPauseIcon.className = "play-icon";
            playPauseIcon.innerHTML = "";
        }
    }

    function nextTrack() {
        currentTrack = (currentTrack + 1) % playlist.length;
        loadTrack(currentTrack);
        audio.play();
    }

    function prevTrack() {
        currentTrack = (currentTrack - 1 + playlist.length) % playlist.length;
        loadTrack(currentTrack);
        audio.play();
    }

    volumeSlider.addEventListener("input", () => {
        audio.volume = volumeSlider.value;
    });

    playPauseBtn.addEventListener("click", playPause);
    nextBtn.addEventListener("click", nextTrack);
    prevBtn.addEventListener("click", prevTrack);

    loadTrack(currentTrack);
});
