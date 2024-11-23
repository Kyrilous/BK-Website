document.addEventListener("DOMContentLoaded", () => {
    console.log("JavaScript loaded");

    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;

    // Function to change slides
    function changeSlide(direction) {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
        slides[currentSlide].classList.add('active');
    }

    // Set up auto-slide with interval
    let autoSlideInterval = setInterval(() => {
        changeSlide(1); // Move to the next slide automatically
    }, 5000); // Adjust the time interval as needed (5000 ms = 5 seconds)

    // Event listeners for manual controls
    document.querySelector('.next').addEventListener('click', () => {
        clearInterval(autoSlideInterval); // Stop auto-slide on manual click
        changeSlide(1); // Go to the next slide
        autoSlideInterval = setInterval(() => changeSlide(1), 5000); // Restart auto-slide
    });

    document.querySelector('.prev').addEventListener('click', () => {
        clearInterval(autoSlideInterval); // Stop auto-slide on manual click
        changeSlide(-1); // Go to the previous slide
        autoSlideInterval = setInterval(() => changeSlide(1), 5000); // Restart auto-slide
    });
});
