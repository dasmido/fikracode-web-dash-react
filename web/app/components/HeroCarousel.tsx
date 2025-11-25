import { useState } from 'react';

interface Slide {
  title: string;
  description: string;
  btnText: string;
  img: string;
}

const slides: Slide[] = [
  {
    title: 'اكتشف أحدث المنتجات',
    description: 'استمتع بتجربة تسوق فريدة مع أفضل المنتجات والعروض الحصرية',
    btnText: 'تسوق الآن',
    img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=center&q=80',
  },
  {
    title: 'عروض خاصة لك',
    description: 'احصل على خصومات تصل إلى 70% على جميع المنتجات المختارة',
    btnText: 'عرض العروض',
    img: '/images/hero2.jpg',
  },
  {
    title: 'شحن مجاني',
    description: 'استمتع بشحن مجاني لجميع الطلبات فوق 200 ريال',
    btnText: 'ابدأ التسوق',
    img: '/images/hero3.jpg',
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => setCurrent(current === 0 ? slides.length - 1 : current - 1);
  const nextSlide = () => setCurrent(current === slides.length - 1 ? 0 : current + 1);
  const goToSlide = (index: number) => setCurrent(index);

  return (
    <section className="hero-carousel">
      <div className="carousel-container">
        {slides.map((slide, index) => (
          <div key={index} className={`carousel-slide ${current === index ? 'active' : ''}`}>
            <div className="carousel-content">
              <div className="carousel-text">
                <h1 className="carousel-title">{slide.title}</h1>
                <p className="carousel-description">{slide.description}</p>
                <button className="carousel-btn">
                  {slide.btnText} <i className="fas fa-arrow-left"></i>
                </button>
              </div>
              <div className="carousel-image">
                <img src={slide.img} alt={slide.title} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="carousel-nav">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`carousel-dot ${current === index ? 'active' : ''}`}
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>

      <button className="carousel-arrow carousel-prev" onClick={prevSlide}>
        <i className="fas fa-chevron-right"></i>
      </button>
      <button className="carousel-arrow carousel-next" onClick={nextSlide}>
        <i className="fas fa-chevron-left"></i>
      </button>
    </section>
  );
}
