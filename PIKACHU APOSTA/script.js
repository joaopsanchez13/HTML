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
