'use client';

import { useState, FormEvent } from 'react';
import Navbar from '../components/Navbar';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    // For now just log the values
    console.log({ name, email, message });

    // Reset form and show success message
    setName('');
    setEmail('');
    setMessage('');
    setSubmitted(true);

    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <>
      <Navbar />

      <div className="contact-page" style={{ maxWidth: '800px', margin: '2rem auto', padding: '0 1rem', fontFamily: 'Cairo, sans-serif', direction: 'rtl' }}>
        <header className="contact-header" style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h1>تواصل معنا</h1>
        </header>

        <section className="contact-info" style={{ marginTop: '3rem', textAlign: 'center', color: '#6b7280' }}>
          <h2 style={{ marginBottom: '1rem' }}>معلومات التواصل</h2>
          <p><strong>العنوان:</strong> العراق، بغداد</p>
          <p><strong>الهاتف:</strong> +966 50 123 4567</p>
          <p><strong>البريد الإلكتروني:</strong> info@matjary.com</p>
          <p><strong>أوقات العمل:</strong> الأحد - الخميس: 8:00 ص - 10:00 م</p>
        </section>
      </div>
    </>
  );
}
