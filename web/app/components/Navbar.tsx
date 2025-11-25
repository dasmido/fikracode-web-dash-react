'use_client'

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
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <i className="fas fa-store"></i>
          <span>فكرة كود</span>
        </div>

        <ul className="navbar-menu">
          <Link className="navbar-link" href={"/"}>الرئيسية</Link>
          <Link className="navbar-link" href={"/products"}>المنتجات</Link>
          <Link className="navbar-link" href={"/contact"}>تواصل معنا</Link>
        </ul>

        <div className="navbar-actions">
            <span dir='ltr' style={{"color": "white"}}>+964 780 123 2342 خدمةالزبائن</span>

        {/*  <div className="user-dropdown">
            <button className="user-btn" onClick={toggleUserDropdown}>
              <i className="fas fa-user"></i>
            </button>
            <div className={`dropdown-menu ${dropdownOpen ? 'show' : ''}`} id="userDropdown">
              <div className="dropdown-header">
                <span className="user-name">email@email.com</span>
              </div>
              <a href="/profile" className="dropdown-item">
                <i className="fas fa-user-circle"></i> الملف الشخصي
              </a>
              <a href="/logout" className="dropdown-item">
                <i className="fas fa-sign-out-alt"></i> تسجيل الخروج
              </a>
            </div>
          </div>*/}
        </div>
      </div>
    </nav>
  );
}
