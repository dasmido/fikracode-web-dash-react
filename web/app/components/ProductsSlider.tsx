'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

export default function ProductsGrid() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('https://fakestoreapi.com/products');
        const data: Product[] = await res.json();
        setProducts(data.slice(0, 10)); // 2 rows × 5 items
      } catch (err) {
        console.error('Failed to fetch products:', err);
      }
    };
    fetchProducts();
  }, []);

  if (products.length === 0) return <p style={{ textAlign: 'center' }}>جارٍ تحميل المنتجات...</p>;

  return (
    <section className="products-section">
      <div className="products-header">
        <h2>منتجات مميزة</h2>
        <p>أفضل المنتجات المختارة بعناية</p>
      </div>

      <div className="products-grid">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <Link href={`/products/${product.id}`}>
              <div className="product-image">
                <img src={product.image} alt={product.title} />
              </div>
            </Link>

            <h3 className="product-name">{product.title}</h3>

            <div className="product-price">
              {Math.floor(product.price * 1500).toLocaleString()} IQD
            </div>

            <Link href={`/products/${product.id}`}>
              <button className="product-btn">عرض التفاصيل</button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
