'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

export default function OrderPage() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        // Fetch the selected product
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await res.json();

        setProduct({
          id: data.id,
          name: data.title,
          price: Math.floor(data.price * 1500),
          image: data.image,
        });

        setLoading(false);
      } catch (err) {
        console.error(err);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // Here you can send to:
    // 1. backend API
    // 2. WhatsApp message generator
    // 3. Email order system
  };

  if (loading) return <p className="text-center p-8">Loading...</p>;
  if (!product) return <p>Product not found.</p>;

  return (
    <div style={{ padding: '2rem', maxWidth: '900px', margin: '0 auto' }}>
      <Link href={`/products`} style={{ color: '#2563eb', display: 'inline-block', marginBottom: '1rem' }}>
        ← العودة للمنتجات
      </Link>

      <h1 style={{ fontSize: '2rem', fontWeight: 'bold', marginBottom: '1.5rem' }}>
        طلب المنتج
      </h1>

      <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
        {/* Product Box */}
        <div
          style={{
            flex: '1 1 300px',
            padding: '1rem',
            border: '1px solid #ddd',
            borderRadius: '10px',
            background: '#fff',
          }}
        >
          <h2 style={{ marginBottom: '1rem', fontSize: '1.25rem', fontWeight: 'bold' }}>
            المنتج المختار
          </h2>

          <div style={{ width: '100%', height: '250px', position: 'relative' }}>
            <Image
              src={product.image}
              alt={product.name}
              fill
              style={{ objectFit: 'contain' }}
            />
          </div>

          <p style={{ marginTop: '1rem', fontWeight: 'bold' }}>{product.name}</p>
          <p>{product.price.toLocaleString()} IQD</p>
        </div>

        {/* Order Form */}
        <form
          onSubmit={handleSubmit}
          style={{
            flex: '1 1 300px',
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            padding: '1rem',
            border: '1px solid #ddd',
            borderRadius: '10px',
            background: '#fff',
          }}
        >
          <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}>معلومات الزبون</h2>

          <div>
            <label>الاسم الكامل</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              style={inputStyle}
              placeholder="أدخل اسمك الكامل"
            />
          </div>

          <div>
            <label>البريد الإلكتروني</label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              style={inputStyle}
              placeholder="example@email.com"
            />
          </div>

          <div>
            <label>رقم الهاتف</label>
            <input
              type="tel"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              style={inputStyle}
              placeholder="+964 770 000 0000"
            />
          </div>

          <button
            type="submit"
            style={{
              padding: '0.8rem 1.5rem',
              backgroundColor: '#2563eb',
              color: '#fff',
              borderRadius: '8px',
              border: 'none',
              cursor: 'pointer',
              fontSize: '1rem',
              fontWeight: 'bold',
            }}
          >
            إرسال الطلب
          </button>
        </form>
      </div>

      {submitted && (
        <p
          style={{
            marginTop: '2rem',
            padding: '1rem',
            background: '#d1fae5',
            color: '#065f46',
            borderRadius: '8px',
            textAlign: 'center',
            fontWeight: 'bold',
          }}
        >
          ✔ تم إرسال طلبك بنجاح، سنتواصل معك قريباً.
        </p>
      )}
    </div>
  );
}

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '0.7rem',
  marginTop: '0.3rem',
  borderRadius: '8px',
  border: '1px solid #ccc',
  fontSize: '1rem',
};
