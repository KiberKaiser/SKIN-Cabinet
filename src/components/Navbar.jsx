import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../assets/images/skin-logo.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="navbar-logo">
        <img src={logo} alt="Логотип Skin Cabinet"/>
        </div>
        <div className={`navbar-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <a href="#home" onClick={(e) => handleNavClick(e, 'home')}>Головна</a>
          <a href="#about" onClick={(e) => handleNavClick(e, 'about')}>Про нас</a>
          <a href="#services" onClick={(e) => handleNavClick(e, 'services')}>Послуги</a>
          <a href="#gallery" onClick={(e) => handleNavClick(e, 'gallery')}>Галерея</a>
          <a href="#reviews" onClick={(e) => handleNavClick(e, 'reviews')}>Відгуки</a>
          <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Контакти</a>
          <a
            href="https://www.instagram.com/skin_cabinet/"
            className="instagram-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            title="Instagram"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 6.5A4.5 4.5 0 1 0 16.5 13 4.5 4.5 0 0 0 12 8.5zm6.2-.9a1.1 1.1 0 1 1-1.1-1.1 1.1 1.1 0 0 1 1.1 1.1zM12 10.5A2 2 0 1 1 10 12.5 2 2 0 0 1 12 10.5z"/>
            </svg>
          </a>
        </div>

        <div 
          className={`navbar-toggle ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

