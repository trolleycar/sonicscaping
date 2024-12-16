const playPauseBtn = document.getElementById('playPauseBtn');
const moodSelect = document.getElementById('mood');

let isPlaying = false;
let currentMood = '';

const tracks = {
  unsettling: {
    track1: document.getElementById('track1'),
    track2: document.getElementById('track2'),
  },
  melancholic: {
    track4: document.getElementById('track4'),
  },
  happy: {
    track3: document.getElementById('track3'),
  }
};


function togglePlayPause() {
  if (isPlaying) {
    stopAudio();
    playPauseBtn.textContent = 'Play';
  } else {
    playAudio();
    playPauseBtn.textContent = 'Pause';
  }
  isPlaying = !isPlaying;
}


function stopAudio() {
  for (const mood in tracks) {
    for (const track in tracks[mood]) {
      tracks[mood][track].pause();
      tracks[mood][track].currentTime = 0;  // Reset time to the beginning
    }
  }
}

// Function to play audio based on selected mood
function playAudio() {
  const selectedMood = moodSelect.value;
  if (selectedMood === 'unsettling') {
    tracks.unsettling.track1.play();
    tracks.unsettling.track1.onended = () => {
      tracks.unsettling.track2.play();
      tracks.unsettling.track2.loop = true;
    };
  } else if (selectedMood === 'happy') {
    tracks.happy.track3.play();
    tracks.happy.track3.loop = true;
  } else if (selectedMood === 'melancholic') {
    tracks.melancholic.track4.play();
    tracks.melancholic.track4.loop = true;
  }
}

// Event listener for mood selection change
moodSelect.addEventListener('change', () => {
  if (isPlaying) {
    stopAudio();
    playAudio();
  }
});

// Event listener for play/pause button
playPauseBtn.addEventListener('click', togglePlayPause);