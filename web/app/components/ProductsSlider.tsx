import { useState } from 'react';

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  img: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'منتج 1',
    description: 'وصف المنتج 1',
    price: '100 ريال',
    img: '/images/product1.jpg',
  },
  {
    id: 2,
    name: 'منتج 2',
    description: 'وصف المنتج 2',
    price: '200 ريال',
    img: '/images/product2.jpg',
  },
  {
    id: 3,
    name: 'منتج 3',
    description: 'وصف المنتج 3',
    price: '300 ريال',
    img: '/images/product3.jpg',
  },
];

export default function ProductsSlider() {
  const [current, setCurrent] = useState(0);

  const prevSlide = () => setCurrent(current === 0 ? products.length - 1 : current - 1);
  const nextSlide = () => setCurrent(current === products.length - 1 ? 0 : current + 1);
  const goToSlide = (index: number) => setCurrent(index);

  return (
    <section className="products-slider" id="products">
      <div className="products-slider-container">
        <div className="products-slider-header">
          <h2 className="products-slider-title">منتجات مميزة</h2>
          <p className="products-slider-subtitle">
            اكتشف أفضل المنتجات المختارة بعناية لتلبية جميع احتياجاتك
          </p>
        </div>

        <div className="products-slider-wrapper">
          <div className="products-container">
            {products.map((product, index) => (
              <div
                key={product.id}
                className={`product-card ${current === index ? 'active' : ''}`}
              >
                <div className="product-image">
                  <img src={product.img} alt={product.name} />
                </div>
                <div className="product-info">
                  <h3 className="product-name">{product.name}</h3>
                  <p className="product-description">{product.description}</p>
                  <div className="product-price">{product.price}</div>
                  <div className="product-actions">
                    <button className="product-btn product-btn-primary">
                      <i className="fas fa-shopping-cart"></i> إضافة للسلة
                    </button>
                    <button className="product-btn product-btn-secondary">
                      <i className="fas fa-heart"></i>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="slider-nav">
            {products.map((_, index) => (
              <button
                key={index}
                className={`slider-dot ${current === index ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              ></button>
            ))}
          </div>

          <button className="slider-arrow prev" onClick={prevSlide}>
            <i className="fas fa-chevron-right"></i>
          </button>
          <button className="slider-arrow next" onClick={nextSlide}>
            <i className="fas fa-chevron-left"></i>
          </button>
        </div>
      </div>
    </section>
  );
}
