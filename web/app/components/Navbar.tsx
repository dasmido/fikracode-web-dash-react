'use client'

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

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

/* MOBILE MENU */
const mobileMenuStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: 'white',
  padding: '1rem 0',
  borderTop: '1px solid #eee',
  textAlign: 'center',
};

const mobileLinkStyle: React.CSSProperties = {
  padding: '0.75rem 0',
  textDecoration: 'none',
  color: 'black',
  fontSize: '1.1rem',
  fontWeight: 500,
  borderBottom: '1px solid #f0f0f0',
};

const hamburgerStyle: React.CSSProperties = {
  fontSize: '1.8rem',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  display: 'none',
};


  return (
    <nav style={navStyle}>
      <div style={containerStyle}>

        {/* LOGO */}
        <div style={logoStyle}>
          <i className="fas fa-store" style={{ marginRight: '0.5rem' }}></i>
          <span>فكرة كود</span>
        </div>

        {/* DESKTOP MENU */}
        <ul style={{ 
          ...menuStyle, 
          display: menuOpen ? 'none' : 'flex'  // hide on small screens
        }} className="desktop-menu">
          <li><Link style={linkStyle} href="/">الرئيسية</Link></li>
          <li><Link style={linkStyle} href="/products">المنتجات</Link></li>
          <li><Link style={linkStyle} href="/contact">تواصل معنا</Link></li>
        </ul>

        {/* ACTIONS (hide on mobile) */}
        <div style={actionsStyle} className="desktop-menu">
          <span dir='ltr' style={{ color: 'black', fontWeight: 500 }}>
            +964 780 123 2342 خدمة الزبائن
          </span>
        </div>

        {/* HAMBURGER ICON */}
        <button 
          onClick={() => setMenuOpen(!menuOpen)} 
          style={hamburgerStyle}
          className="mobile-menu-btn"
        >
          ☰
        </button>
      </div>

      {/* MOBILE DROPDOWN MENU */}
      {menuOpen && (
        <div style={mobileMenuStyle}>
          <Link style={mobileLinkStyle} href="/" onClick={() => setMenuOpen(false)}>الرئيسية</Link>
          <Link style={mobileLinkStyle} href="/products" onClick={() => setMenuOpen(false)}>المنتجات</Link>
          <Link style={mobileLinkStyle} href="/contact" onClick={() => setMenuOpen(false)}>تواصل معنا</Link>

          <span dir="ltr" style={{ marginTop: '1rem', fontWeight: 500, display: 'block' }}>
            +964 780 123 2342 خدمة الزبائن
          </span>
        </div>
      )}
    </nav>
  );
  
}
