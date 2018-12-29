const carousel = () => {
    let i;
    const carouselElements = document.querySelectorAll('.aboutPage__carouselItem');
    for (i = 0; i<carouselElements.length; i++) {
        carouselElements[i].style.opacity = "0";
    }
    currentSlide++;
    if(currentSlide > carouselElements.length) {currentSlide = 1}
    carouselElements[currentSlide-1].style.opacity = "1";
    setTimeout(carousel, 2000);
}

let currentSlide = 0;
carousel()
