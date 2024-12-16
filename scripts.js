const track1 = document.getElementById('track1');
const track2 = document.getElementById('track2');
const playButton = document.getElementById('play');
const pauseButton = document.getElementById('pause');

// Event listener to start playback
playButton.addEventListener('click', () => {
    track1.play(); // Start playing track 1
});

// Pause button for both tracks
pauseButton.addEventListener('click', () => {
    track1.pause();
    track2.pause();
});

// When track 1 ends, start track 2
track1.addEventListener('ended', () => {
    track2.play();
});

// Loop track 2
track2.addEventListener('ended', () => {
    track2.currentTime = 0; // Reset to the beginning of track 2
    track2.play(); // Play track 2 again
});
