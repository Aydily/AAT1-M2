class Carousel {
    constructor(container) {
        this.carouselContainer = document.querySelector(container);
        this.carousel = this.carouselContainer.querySelector('.carousel');
        this.slides = this.carouselContainer.querySelectorAll('.slide');
        this.nextButton = this.carouselContainer.querySelector('.next');
        this.prevButton = this.carouselContainer.querySelector('.prev');
        this.currentIndex = 0;

        this.showSlide(this.currentIndex);
        this.addEventListeners();
        this.startAutoSlide();
    }

    showSlide(index) {
        const totalSlides = this.slides.length;
        if (index >= totalSlides) {
            this.currentIndex = 0;
        } else if (index < 0) {
            this.currentIndex = totalSlides - 1;
        } else {
            this.currentIndex = index;
        }
        this.carousel.style.transform = `translateX(-${this.currentIndex * 100}%)`;
    }

    addEventListeners() {
        this.nextButton.addEventListener('click', () => {
            this.showSlide(this.currentIndex + 1);
        });

        this.prevButton.addEventListener('click', () => {
            this.showSlide(this.currentIndex - 1);
        });
    }

    startAutoSlide() {
        setInterval(() => {
            this.showSlide(this.currentIndex + 1);
        }, 5000); //delay de 5 segundos para las fotos 
    }
}
