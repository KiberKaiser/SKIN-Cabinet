import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="contact">
      <div className="footer-container">
        <div className="footer-left">
          <h2 className="footer-title">SKIN Cabinet</h2>
          
          <div className="footer-contact-item">
            <span className="footer-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
            </span>
            <a href="tel:+380731705005" className="footer-link">+38 (073) 170 - 50 - 05</a>
          </div>

          <div className="footer-contact-item">
            <span className="footer-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
            </span>
            <div>
              <a href="https://maps.google.com/?q=вулиця Висоцького, 1, Нетішин, Хмельницька область, 30100" target="_blank" rel="noopener noreferrer" className="footer-link">
                вулиця Висоцького, 1<br />
                Нетішин, Хмельницька область, 30100
              </a>
            </div>
          </div>

          <div className="footer-social">
            <a href="#" className="footer-social-link" aria-label="Instagram">
              <span className="social-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </span> Instagram
            </a>
          </div>
        </div>

        <div className="footer-right">
          <div className="footer-map">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2578.7668!2d26.6399657!3d50.3366947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472effdadcac5d43%3A0x74994278d7c3dc70!2z0LLRg9C70LjRhtGPINCS0LjRgdC-0YbRjNC60L7Qs9C-LCAxLCDQndC10YLRltGI0LjQvSwg0KXQvNC10LvRjNC90LjRhtGM0LrQsCDQvtCx0LvQsNGB0YLRjCwgMzAxMDA!5e0!3m2!1suk!2sua!4v1234567890123!5m2!1suk!2sua" 
              width="100%" 
              height="100%" 
              style={{border: 0}} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="SKIN Cabinet Location"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; All rights reserved SKIN Cabinet, 2010–2025</p>
      </div>
    </footer>
  );
};

export default Footer;

