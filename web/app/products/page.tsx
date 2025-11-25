'use client'

import { useState } from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number; // Price in IQD
  img: string;
}

// Using Unsplash random images
const products: Product[] = [
  {
    id: 1,
    name: 'ساعة ذكية',
    description: 'ساعة ذكية بتصميم عصري',
    price: 225000,
    img: 'https://images.fizz.hu/api/image/dfca4fc0-6f58-479a-9904-33d99521ca4a.jpg?width=2000&height=2000&method=contain',
  },
  {
    id: 2,
    name: 'سماعات لاسلكية',
    description: 'سماعات بجودة صوت عالية',
    price: 300000,
    img: 'https://images.fizz.hu/api/image/4d054202-6e44-41c9-9c30-a3d9273e18b8.png?width=2000&height=2000&method=contain',
  },
  {
    id: 3,
    name: 'هاتف ذكي',
    description: 'هاتف بتقنية حديثة وكاميرا ممتازة',
    price: 1800000,
    img: 'https://source.unsplash.com/300x300/?smartphone',
  },
  {
    id: 4,
    name: 'حقيبة ظهر',
    description: 'حقيبة ظهر مقاومة للماء وعملية',
    price: 375000,
    img: 'https://source.unsplash.com/300x300/?backpack',
  },
  {
    id: 5,
    name: 'نظارات شمسية',
    description: 'نظارات شمسية أنيقة وعصرية',
    price: 150000,
    img: 'https://source.unsplash.com/300x300/?sunglasses',
  },
  {
    id: 6,
    name: 'كاميرا رقمية',
    description: 'كاميرا عالية الدقة لتصوير رائع',
    price: 1200000,
    img: 'https://source.unsplash.com/300x300/?camera',
  },
  {
    id: 7,
    name: 'سوار رياضي',
    description: 'سوار لمراقبة اللياقة البدنية',
    price: 95000,
    img: 'https://source.unsplash.com/300x300/?fitness',
  },
  {
    id: 8,
    name: 'ميكروفون',
    description: 'ميكروفون عالي الجودة للتسجيلات',
    price: 400000,
    img: 'https://source.unsplash.com/300x300/?microphone',
  },
  {
    id: 9,
    name: 'لوحة مفاتيح',
    description: 'لوحة مفاتيح ميكانيكية حديثة',
    price: 220000,
    img: 'https://source.unsplash.com/300x300/?keyboard',
  },
];

export default function ProductsPage() {
  const [search, setSearch] = useState('');

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar />

      <div className="products-page">
        <header className="products-header">
          <h1>منتجاتنا</h1>
          <p>اكتشف أحدث منتجاتنا المختارة بعناية لتلبية جميع احتياجاتك</p>

          <div className="products-search">
            <input
              type="text"
              placeholder="ابحث عن منتج..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </header>

        <main className="products-grid">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div key={product.id} className="product-card">
                <Link href={`/products/${product.id}`}>
                  <div className="product-image">
                    <img src={product.img} alt={product.name} />
                  </div>
                </Link>
                <div className="product-info">
                  <h3 className="product-name">
                    <Link href={`/products/${product.id}`}>{product.name}</Link>
                  </h3>
                  <p className="product-description">{product.description}</p>
                  <div className="product-footer">
                    <span className="product-price">{product.price.toLocaleString()} IQD</span>
                    <Link href={`/products/${product.id}`}>
                      <button className="product-btn">عرض التفاصيل</button>
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="no-results">لم يتم العثور على أي منتجات.</p>
          )}
        </main>
      </div>
    </>
  );
}
