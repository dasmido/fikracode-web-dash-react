'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar';
import Image from 'next/image';
import Footer from '../components/Footer';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number; // Price in IQD
  img: string;
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Replace with your REST API URL
    const apiUrl = 'https://fakestoreapi.com/products';

    const fetchProducts = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error('فشل تحميل المنتجات');
        const data = await response.json();

        // Map API data to our Product interface
        const mappedProducts: Product[] = data.map((item: any) => ({
          id: item.id,
          name: item.title,
          description: item.description,
          price: Math.floor(item.price * 1500), // Example conversion to IQD
          img: item.image,
        }));

        setProducts(mappedProducts);
        setLoading(false);
      } catch (err: any) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar />

      <div className="products-page" style={{ padding: '2rem', fontFamily: 'Cairo, sans-serif' }}>
        <header className="products-header" style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h1>منتجاتنا</h1>
          <p>اكتشف أحدث منتجاتنا المختارة بعناية لتلبية جميع احتياجاتك</p>

          <div className="products-search" style={{ marginTop: '1rem' }}>
            <input
              type="text"
              placeholder="ابحث عن منتج..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                width: '100%',
                maxWidth: '400px',
                padding: '0.5rem 1rem',
                borderRadius: '8px',
                border: '1px solid #d1d5db',
                outline: 'none',
                textAlign: 'right',
              }}
            />
          </div>
        </header>

        {loading ? (
          <p style={{ textAlign: 'center' }}>جارٍ تحميل المنتجات...</p>
        ) : error ? (
          <p style={{ textAlign: 'center', color: 'red' }}>{error}</p>
        ) : (
          <main
            className="products-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '1.5rem',
            }}
          >
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                
                 <Link 
  href={`/products/${product.id}`} 
  key={product.id}
  style={{ textDecoration: 'none', color: 'inherit' }}
>
  <div
    className="product-card"
    style={{
      border: '1px solid #e5e7eb',
      borderRadius: '12px',
      overflow: 'hidden',
      boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: '#fff',
      cursor: 'pointer',
      transition: 'transform 0.2s',
    }}
  >
    <div className="product-image" style={{ width: '100%', height: '200px', position: 'relative' }}>
      <Image src={product.img} alt={product.name} fill style={{ objectFit: 'contain' }} />
    </div>

    <div className="product-info" style={{ padding: '1rem' }}>
      <h3 className="product-name" style={{ margin: '0 0 0.5rem 0' }}>
        {product.name}
      </h3>

      <div 
        className="product-footer" 
        style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center' 
        }}
      >
        <span className="product-price" style={{ fontWeight: 'bold' }}>
          {product.price.toLocaleString()} IQD
        </span>

        <button
          className="product-btn"
          style={{
            backgroundColor: '#2563eb',
            color: '#fff',
            border: 'none',
            padding: '0.5rem 1rem',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '0.9rem',
          }}
        >
          عرض التفاصيل
        </button>
      </div>
    </div>
  </div>
</Link>
              ))
            ) : (
              <p style={{ textAlign: 'center', gridColumn: '1/-1' }}>لم يتم العثور على أي منتجات.</p>
            )}
          </main>
        )}
      </div>
      <Footer />
    </>
  );
}
