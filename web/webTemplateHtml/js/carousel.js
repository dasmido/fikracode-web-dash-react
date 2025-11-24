// Simple Carousel JavaScript for RTL E-commerce Site

class Carousel {
    constructor() {
        this.currentSlide = 0;
        this.slides = document.querySelectorAll('.carousel-slide');
        this.dots = document.querySelectorAll('.carousel-dot');
        this.prevBtn = document.querySelector('.carousel-prev');
        this.nextBtn = document.querySelector('.carousel-next');

        this.init();
    }

    init() {
        // Add event listeners
        this.prevBtn?.addEventListener('click', () => this.prevSlide());
        this.nextBtn?.addEventListener('click', () => this.nextSlide());

        // Add dot navigation
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => this.goToSlide(index));
        });

        // Auto-play carousel
        this.startAutoPlay();

        // Pause on hover
        const carousel = document.querySelector('.hero-carousel');
        carousel?.addEventListener('mouseenter', () => this.stopAutoPlay());
        carousel?.addEventListener('mouseleave', () => this.startAutoPlay());
    }

    goToSlide(slideIndex) {
        // Remove active class from current slide and dot
        this.slides[this.currentSlide]?.classList.remove('active');
        this.dots[this.currentSlide]?.classList.remove('active');

        // Update current slide
        this.currentSlide = slideIndex;

        // Add active class to new slide and dot
        this.slides[this.currentSlide]?.classList.add('active');
        this.dots[this.currentSlide]?.classList.add('active');
    }

    nextSlide() {
        const nextIndex = (this.currentSlide + 1) % this.slides.length;
        this.goToSlide(nextIndex);
    }

    prevSlide() {
        const prevIndex = (this.currentSlide - 1 + this.slides.length) % this.slides.length;
        this.goToSlide(prevIndex);
    }

    startAutoPlay() {
        this.autoPlayInterval = setInterval(() => {
            this.nextSlide();
        }, 5000); // Change slide every 5 seconds
    }

    stopAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
        }
    }
}

// Products Slider JavaScript
class ProductsSlider {
    constructor() {
        this.currentSlide = 0;
        this.productsContainer = document.getElementById('productsContainer');
        this.dots = document.querySelectorAll('.products-slider .slider-dot');
        this.prevBtn = document.getElementById('productsPrev');
        this.nextBtn = document.getElementById('productsNext');
        this.products = document.querySelectorAll('.product-card');

        this.init();
    }

    init() {
        if (!this.productsContainer || this.products.length === 0) return;

        // Calculate how many products to show per slide
        this.productsPerSlide = this.getProductsPerSlide();
        this.totalSlides = Math.ceil(this.products.length / this.productsPerSlide);

        // Update dots if we have more than 1 slide
        if (this.totalSlides > 1) {
            this.updateDots();
        }

        // Add event listeners
        this.prevBtn?.addEventListener('click', () => this.prevSlide());
        this.nextBtn?.addEventListener('click', () => this.nextSlide());

        // Add dot navigation
        this.dots.forEach((dot, index) => {
            dot.addEventListener('click', () => this.goToSlide(index));
        });

        // Update container on window resize
        window.addEventListener('resize', () => {
            this.productsPerSlide = this.getProductsPerSlide();
            this.totalSlides = Math.ceil(this.products.length / this.productsPerSlide);
            this.updateDots();
            this.goToSlide(0);
        });

        // Initialize first slide
        this.goToSlide(0);
    }

    getProductsPerSlide() {
        const containerWidth = this.productsContainer?.parentElement?.offsetWidth || 1200;
        if (containerWidth >= 1200) return 4;
        if (containerWidth >= 900) return 3;
        if (containerWidth >= 600) return 2;
        return 1;
    }

    updateDots() {
        const dotsContainer = document.querySelector('.products-slider .slider-nav');
        if (!dotsContainer) return;

        dotsContainer.innerHTML = '';

        for (let i = 0; i < this.totalSlides; i++) {
            const dot = document.createElement('button');
            dot.className = `slider-dot ${i === 0 ? 'active' : ''}`;
            dot.setAttribute('data-slide', i);
            dot.addEventListener('click', () => this.goToSlide(i));
            dotsContainer.appendChild(dot);
        }

        this.dots = document.querySelectorAll('.products-slider .slider-dot');
    }

    goToSlide(slideIndex) {
        if (slideIndex >= this.totalSlides) return;

        // Remove active class from current dots
        this.dots.forEach(dot => dot.classList.remove('active'));

        // Update current slide
        this.currentSlide = slideIndex;

        // Calculate transform value
        const cardWidth = this.products[0]?.offsetWidth || 300;
        const gap = 16; // 1rem gap
        const translateX = -(this.currentSlide * (cardWidth + gap) * this.productsPerSlide);

        // Apply transform
        this.productsContainer.style.transform = `translateX(${translateX}px)`;

        // Add active class to current dot
        this.dots[this.currentSlide]?.classList.add('active');
    }

    nextSlide() {
        const nextIndex = (this.currentSlide + 1) % this.totalSlides;
        this.goToSlide(nextIndex);
    }

    prevSlide() {
        const prevIndex = (this.currentSlide - 1 + this.totalSlides) % this.totalSlides;
        this.goToSlide(prevIndex);
    }
}

// Navbar functionality
class Navbar {
    constructor() {
        this.init();
    }

    init() {
        // Add smooth scrolling to navbar links
        document.querySelectorAll('.navbar-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const href = link.getAttribute('href');
                if (href.startsWith('#')) {
                    const target = document.querySelector(href);
                    target?.scrollIntoView({ behavior: 'smooth' });
                }
            });
        });

        // Simple search functionality placeholder
        const searchBtn = document.querySelector('.search-btn');
        searchBtn?.addEventListener('click', () => {
            alert('البحث قيد التطوير');
        });

        // Cart functionality placeholder
        const cartBtn = document.querySelector('.cart-btn');
        cartBtn?.addEventListener('click', () => {
            alert('سلة التسوق قيد التطوير');
        });

        // User menu placeholder
       /* const userBtn = document.querySelector('.user-btn');
        userBtn?.addEventListener('click', () => {
            alert('قائمة المستخدم قيد التطوير');
        });*/
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new Carousel();
    new ProductsSlider();
    new Navbar();
});

// Add some utility functions for RTL support
const RTLUtils = {
    // Handle RTL-specific animations and interactions
    handleRTLAnimations() {
        // Ensure proper RTL behavior for animations
        document.querySelectorAll('.carousel-btn i').forEach(icon => {
            icon.style.transition = 'transform 0.3s ease';
        });
    }
};

// Initialize RTL utilities
document.addEventListener('DOMContentLoaded', () => {
    RTLUtils.handleRTLAnimations();
});
