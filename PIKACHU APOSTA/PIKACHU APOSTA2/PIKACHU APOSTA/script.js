const images = document.querySelectorAll('.carousel-image');

function showRandomImage() {
    const randomIndex = Math.floor(Math.random() * images.length);
    images.forEach((image, i) => {
        if (i === randomIndex) {
            image.classList.add('active');
        } else {
            image.classList.remove('active');
        }
    });
}

setInterval(showRandomImage, 1500); 
showRandomImage(); 

window.addEventListener('wheel', (e) => {
    window.scrollTo(0, window.scrollY + e.deltaY);
});


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
      audio.volume += 0.1;
    }
  }

  function decreaseVolume() {
    if (audio.volume > 0) {
      audio.volume -= 0.1;
    }
  }