window.onload = function() {
    const sliders = document.querySelectorAll('.image-slider');

    sliders.forEach(slider => {
        const images = slider.querySelectorAll('img');
        let currentImageIndex = 0;

        function changeImage() {
            images[currentImageIndex].style.opacity = 0;
            currentImageIndex = (currentImageIndex + 1) % images.length;
            images[currentImageIndex].style.opacity = 1;
        }

        setInterval(changeImage, 5000); // Change image every 5 seconds
    });
}
