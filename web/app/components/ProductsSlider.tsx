'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number; // will convert to IQD
  image: string;
}

export default function ProductsSlider() {
  const [products, setProducts] = useState<Product[]>([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('https://fakestoreapi.com/products');
        const data: Product[] = await res.json();
        setProducts(data.slice(0, 6)); // only 6 products
      } catch (err) {
        console.error('Failed to fetch products:', err);
      }
    };
    fetchProducts();
  }, []);

  const prevSlide = () => setCurrent(current === 0 ? products.length - 1 : current - 1);
  const nextSlide = () => setCurrent(current === products.length - 1 ? 0 : current + 1);
  const goToSlide = (index: number) => setCurrent(index);

  if (products.length === 0) return <p style={{ textAlign: 'center' }}>جارٍ تحميل المنتجات...</p>;

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
                <Link href={`/products/${product.id}`}>
                  <div className="product-image">
                    <img src={product.image} alt={product.title} />
                  </div>
                </Link>
                <div className="product-info">
                  <h3 className="product-name">{product.title}</h3>
                 {/*} <p className="product-description">{product.description}</p>*/}
                  <div className="product-price">{Math.floor(product.price * 1500).toLocaleString()} IQD</div>
                  <div className="product-actions">
                    <Link href={`/products/${product.id}`}>
                      <button className="product-btn product-btn-primary">عرض التفاصيل</button>
                    </Link>
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
            ‹
          </button>
          <button className="slider-arrow next" onClick={nextSlide}>
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
