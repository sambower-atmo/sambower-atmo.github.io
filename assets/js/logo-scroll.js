document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(track.children);
    const slideWidth = slides[0].getBoundingClientRect().width;
    let position = 0;
    let scrollInterval = null; // Holds the interval for continuous scrolling

    // Function to start scrolling
    function startScrolling(shift) {
        if (scrollInterval !== null) clearInterval(scrollInterval); // Clear existing interval
        scrollInterval = setInterval(() => {
            position += shift;
            position = Math.max(position, -(slideWidth * (slides.length - 1))); 
            position = Math.min(position, 0); 
            track.style.transform = `translateX(${position}px)`;
        }, 20); // Adjust the interval time to control speed
    }

    // Function to stop scrolling
    function stopScrolling() {
        clearInterval(scrollInterval);
        scrollInterval = null;
    }

    document.querySelector('.carousel-control.left').addEventListener('mouseenter', () => startScrolling(2)); // Start scrolling left
    document.querySelector('.carousel-control.right').addEventListener('mouseenter', () => startScrolling(-2)); // Start scrolling right

    // Stop scrolling when mouse leaves the controls
    document.querySelector('.carousel-control.left').addEventListener('mouseleave', stopScrolling);
    document.querySelector('.carousel-control.right').addEventListener('mouseleave', stopScrolling);
});
