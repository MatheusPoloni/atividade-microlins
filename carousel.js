

let currentIndex = 0;

function moveCarousel(step) {
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;

    currentIndex = (currentIndex + step + totalItems) % totalItems;

    const newTransformValue = -currentIndex * 100;
    document.querySelector('.carousel-container').style.transform = `translateX(${newTransformValue}%)`;
}
