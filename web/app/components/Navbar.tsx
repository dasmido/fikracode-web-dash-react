'use client'

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleUserDropdown = () => setDropdownOpen(!dropdownOpen);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const dropdown = document.getElementById('userDropdown');
      const userBtn = document.querySelector('.user-btn');
      if (!dropdown?.contains(event.target as Node) && !userBtn?.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setDropdownOpen(false);
    };

    document.addEventListener('click', handleClickOutside);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  return (
    <nav style={navStyle}>
      <div style={containerStyle}>
        <div style={logoStyle}>
          <i className="fas fa-store" style={{ marginRight: '0.5rem' }}></i>
          <span>فكرة كود</span>
        </div>

        <ul style={menuStyle}>
          <li><Link style={linkStyle} href="/">الرئيسية</Link></li>
          <li><Link style={linkStyle} href="/products">المنتجات</Link></li>
          <li><Link style={linkStyle} href="/contact">تواصل معنا</Link></li>
        </ul>

        <div style={actionsStyle}>
          <span dir='ltr' style={{ color: 'black', fontWeight: 500 }}>+964 780 123 2342 خدمة الزبائن</span>
        </div>
      </div>
    </nav>
  );
}

// Styles
const navStyle: React.CSSProperties = {
  backgroundColor: 'white',
  color: 'black',
  padding: '0.75rem 2rem',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  position: 'sticky',
  top: 0,
  zIndex: 50,
};

const containerStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  maxWidth: '1200px',
  margin: '0 auto',
};

const logoStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  fontWeight: 'bold',
  fontSize: '1.25rem',
  color: 'black',
};

const menuStyle: React.CSSProperties = {
  display: 'flex',
  gap: '1.5rem',
  listStyle: 'none',
  alignItems: 'center',
};

const linkStyle: React.CSSProperties = {
  textDecoration: 'none',
  color: 'black',
  fontWeight: 500,
};

const actionsStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
};
