'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Navbar from '../../components/Navbar';
import Image from 'next/image';
import Link from 'next/link';

interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  images: string[];
}

export default function ProductDetailsPage() {
  const params = useParams();
  const { id } = params;
  const [product, setProduct] = useState<Product | null>(null);
  const [relatedProducts, setRelatedProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`);
        if (!res.ok) throw new Error('فشل تحميل المنتج');
        const data = await res.json();

        const images = [
          data.image,
          data.image.replace('.png', '1.png'),
          data.image.replace('.png', '2.png'),
        ];

        const mappedProduct: Product = {
          id: data.id,
          name: data.title,
          description: data.description,
          price: Math.floor(data.price * 1500),
          images,
        };

        setProduct(mappedProduct);
        setLoading(false);

        // Fetch related products
        const relatedRes = await fetch(`https://fakestoreapi.com/products`);
        if (!relatedRes.ok) throw new Error('فشل تحميل المنتجات المرتبطة');
        const relatedData = await relatedRes.json();
        const filtered = relatedData
          .filter((p: any) => p.id !== data.id)
          .slice(0, 5)
          .map((p: any) => ({
            id: p.id,
            name: p.title,
            description: p.description,
            price: Math.floor(p.price * 1500),
            images: [p.image],
          }));
        setRelatedProducts(filtered);
      } catch (err: any) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handlePrev = () => {
    if (!product) return;
    setCurrentImage((prev) => (prev === 0 ? product.images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    if (!product) return;
    setCurrentImage((prev) => (prev === product.images.length - 1 ? 0 : prev + 1));
  };

  if (loading)
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '70vh' }}>
        <div className="spinner"></div>
      </div>
    );

  if (error) return <p style={{ textAlign: 'center', color: 'red' }}>{error}</p>;
  if (!product) return <p style={{ textAlign: 'center' }}>المنتج غير موجود</p>;

  return (
    <>
      <Navbar />
      <div style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto', fontFamily: 'Cairo, sans-serif' }}>
        <Link href="/products" style={{ marginBottom: '1rem', display: 'inline-block', color: '#2563eb' }}>
           العودة إلى المنتجات ← 
        </Link>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem' }}>
          {/* Image Slider */}
          <div style={{ flex: '1 1 400px', position: 'relative' }}>
            <div style={{ position: 'relative', width: '100%', height: '400px' }}>
              <Image
                src={product.images[currentImage]}
                alt={product.name}
                fill
                style={{ objectFit: 'contain' }}
              />
            </div>
            <button onClick={handlePrev} style={sliderButtonStyle('left')}>‹</button>
            <button onClick={handleNext} style={sliderButtonStyle('right')}>›</button>

            {/* Thumbnails */}
            <div style={{ display: 'flex', gap: '0.5rem', marginTop: '1rem' }}>
              {product.images.map((img, index) => (
                <div
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  style={{
                    border: currentImage === index ? '2px solid #2563eb' : '1px solid #ccc',
                    borderRadius: '4px',
                    width: '60px',
                    height: '60px',
                    cursor: 'pointer',
                    overflow: 'hidden',
                    position: 'relative',
                  }}
                >
                  <Image src={img} alt={`Thumbnail ${index}`} fill style={{ objectFit: 'cover' }} />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div style={{ flex: '1 1 400px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>{product.name}</h1>
            <p style={{ color: '#6b7280' }}>{product.description}</p>
            <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
              {product.price.toLocaleString()} IQD
            </span>
            <button
              style={{
                marginTop: '1rem',
                padding: '0.75rem 1.5rem',
                backgroundColor: '#2563eb',
                color: '#fff',
                borderRadius: '8px',
                border: 'none',
                cursor: 'pointer',
                fontSize: '1rem',
              }}
            >
اطلب المنتج            </button>
          </div>
        </div>

        {/* Related Products */}
        <div style={{ marginTop: '4rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '1rem' }}>منتجات ذات صلة</h2>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {relatedProducts.map((rp) => (
              <Link key={rp.id} href={`/products/${rp.id}`} style={relatedCardStyle}>
                <div style={{ position: 'relative', width: '100%', height: '150px', marginBottom: '0.5rem' }}>
                  <Image src={rp.images[0]} alt={rp.name} fill style={{ objectFit: 'contain' }} />
                </div>
                <span style={{ fontWeight: '500' }}>{rp.name}</span>
                <span style={{ color: '#020303ff', fontWeight: 'bold' }}>{rp.price.toLocaleString()} IQD</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .spinner {
          border: 6px solid #f3f3f3;
          border-top: 6px solid #2563eb;
          border-radius: 50%;
          width: 50px;
          height: 50px;
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          0% { transform: rotate(0deg);}
          100% { transform: rotate(360deg);}
        }
      `}</style>
    </>
  );
}

function sliderButtonStyle(position: 'left' | 'right'): React.CSSProperties {
  return {
    position: 'absolute',
    top: '50%',
    [position]: '0',
    transform: 'translateY(-50%)',
    background: 'rgba(0,0,0,0.3)',
    color: '#fff',
    border: 'none',
    borderRadius: '50%',
    width: '2rem',
    height: '2rem',
    cursor: 'pointer',
  };
}

const relatedCardStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.25rem',
  width: '200px',
  padding: '0.5rem',
  border: '1px solid #e5e7eb',
  borderRadius: '0px',
  textDecoration: 'none',
  color: 'black',
  transition: 'transform 0.2s',
  cursor: 'pointer',
};
