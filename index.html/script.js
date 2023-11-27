var audio = document.getElementById("myAudio");

  function playAudio() {
    if (audio.paused) {
      audio.play();
    } else {
      audio.pause();
    }
  }

  function increaseVolume() {
    if (audio.volume < 1.0) {
      audio.volume += 0.2;
    }
  }

  function decreaseVolume() {
    if (audio.volume > 0) {
      audio.volume -= 0.2;
    }
  }
