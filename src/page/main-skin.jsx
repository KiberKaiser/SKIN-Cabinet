import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './main-skin.css';
import logo from '../assets/images/skin-logo-main.png';

const MainSkin = () => {
  const [formResult, setFormResult] = useState("");
  
  const HeroSection = () => {
    const heroTitleRef = useRef(null);
    const heroSubtitleRef = useRef(null);
    const heroDescriptionRef = useRef(null);
    const heroBtnPrimaryRef = useRef(null);
    const heroBtnSecondaryRef = useRef(null);

    const scrollToAbout = () => {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' });
      }
    };

    return (
      <section id="home" className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 ref={heroTitleRef}>SKIN CABINET</h1>
          <p ref={heroSubtitleRef} className="hero-subtitle">Професійна косметологія та комплексний догляд за шкірою у моєму кабінеті</p>
          <p ref={heroDescriptionRef} className="hero-description">Ваша краса - ваш пріоритет</p>
          <div className="hero-buttons">
            <a ref={heroBtnPrimaryRef} href="#services" className="btn btn-primary">Наші послуги</a>
            <a ref={heroBtnSecondaryRef} href="#booking" className="btn btn-secondary">Записатися</a>
          </div>
        </div>
        
        <div className="scroll-down-indicator" onClick={scrollToAbout}>
          <span className="scroll-text">Прокрутити вниз</span>
          <div className="scroll-arrow">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </div>
        </div>
      </section>
    );
  };

  const AboutSection = () => (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-header">
          <h2>Про кабінет та майстра</h2>
          <div className="section-line"></div>
        </div>
        
    
        <div className="about-block">
          <div className="about-image">
            <img src={require('../assets/images/photo-about-us-1.jpg')} alt="SKIN CABINET" />
          </div>
          <div className="about-text">
            <h3>SKIN CABINET</h3>
            <div className="about-feature-list">
              <div className="about-feature">
                <span className="feature-icon-circle">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </span>
                <div>
                  <h4>Сучасний косметологічний кабінет</h4>
                  <p>
                    SKIN CABINET — це косметологічний кабінет, який надає професійні процедури з використанням сучасного обладнання та сертифікованих засобів. 
                    Майстер працює за перевіреними методиками та підбирає процедури відповідно до індивідуальних потреб шкіри.
                  </p>
                </div>
              </div>
              
              <div className="about-feature">
                <span className="feature-icon-circle">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
                    <line x1="7" y1="7" x2="7.01" y2="7"></line>
                  </svg>
                </span>
                <div>
                  <h4>Індивідуальний підхід</h4>
                  <p>
                    Гарантується якісний та безпечний догляд за вашою шкірою. 
                    Спектр послуг включає від базового догляду до складних 
                    косметологічних процедур з використанням сучасного обладнання.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
        </div>

        <div className="about-block reverse">
          <div className="about-image">
            <img src={require('../assets/images/photo-ira.jpg')} alt="Ірина Гордєєва" />
          </div>
          <div className="about-text">
            <h3>Ірина Гордєєва</h3>
            <div className="about-feature-list">
              <div className="about-feature">
                <span className="feature-icon-circle">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                    <circle cx="9" cy="7" r="4"></circle>
                    <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                  </svg>
                </span>
                <div>
                  <h4>Засновниця та провідний косметолог</h4>
                  <p>
                    Сертифікований спеціаліст в галузі косметології. 
                    Постійно вдосконалює свої навички, відвідуючи 
                    професійні тренінги та майстер-класи провідних експертів.
                  </p>
                </div>
              </div>
              
              <div className="about-feature">
                <span className="feature-icon-circle">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                    <path d="M4 22h16"></path>
                    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
                  </svg>
                </span>
                <div>
                  <h4>Професійність та турбота</h4>
                  <p>
                    Індивідуально підбирає програми догляду для кожної клієнтки, 
                    враховуючи особливості шкіри та побажання. Використовує лише 
                    перевірені методики та якісні препарати провідних світових брендів.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const ServicesSection = () => {
    const getServiceImage = (id) => {
      try {
        return require(`../assets/images/service${id}.jpg`);
      } catch (err) {
        return null;
      }
    };

    const services = [
      { 
        id: 1, 
        name: 'Чистка HydroDiamond', 
        price: '1000', 
        image: getServiceImage(1),
        description: 'Інноваційна процедура глибокого очищення та зволоження шкіри. Видаляє забруднення, відмерлі клітини та звужує пори без травмування.'
      },
      { 
        id: 2, 
        name: 'Ультразвукова/Комбінована чистка обличчя', 
        price: '650/750', 
        image: getServiceImage(2),
        description: 'М\'яке очищення шкіри за допомогою ультразвуку. Комбінована чистка поєднує кілька методик для максимального ефекту.'
      },
      { 
        id: 3, 
        name: 'RF Ліфтінг', 
        price: '700', 
        image: getServiceImage(3),
        description: 'Радіочастотний ліфтинг для підтяжки шкіри. Стимулює вироблення колагену, покращує контур обличчя та зменшує зморшки.'
      },
      { 
        id: 4, 
        name: 'Електропорація', 
        price: '600', 
        image: getServiceImage(4),
        description: 'Безін\'єкційна мезотерапія. Глибоке проникнення активних компонентів у шкіру без голок для живлення та відновлення.'
      },
      { 
        id: 5, 
        name: 'Електропорація + зона під очима', 
        price: '700', 
        image: getServiceImage(5),
        description: 'Розширена процедура електропорації з особливою увагою до делікатної зони навколо очей. Зменшує набряки та темні кола.'
      },
      { 
        id: 6, 
        name: 'Киснева мезотерапія', 
        price: '600', 
        image: getServiceImage(6),
        description: 'Насичення шкіри киснем та активними компонентами. Освіжає, тонізує та покращує колір обличчя.'
      },
      { 
        id: 7, 
        name: 'HydroDiamond + Киснева мезотерапія + Зволожуюча альгінатна маска', 
        price: '1500', 
        image: getServiceImage(7),
        description: 'Комплексна процедура для глибокого очищення та інтенсивного зволоження. Поєднує переваги трьох методик для максимального ефекту сяяння та свіжості шкіри.'
      },
      { 
        id: 8, 
        name: 'Ультразвукова чистка + RF Ліфтінг', 
        price: '1200', 
        image: getServiceImage(8),
        description: 'Комплексний догляд: очищення та підтяжка. Ідеальне поєднання для боротьби з віковими змінами та покращення загального стану шкіри.'
      }
    ];

    return (
      <section id="services" className="services-section">
        <div className="container">
          <div className="section-header">
            <h2>Ціни на послуги майстера</h2>
            <div className="section-line"></div>
          </div>
          <div className="services-grid">
            {services.map((service) => (
              <div 
                key={service.id}
                className="service-card"
              >
                {service.image && (
                  <div className="service-card-image">
                    <img src={service.image} alt={service.name} />
                    <div className="service-card-overlay"></div>
                  </div>
                )}
                <div className="service-card-content">
                  <h3 className="service-card-name">{service.name}</h3>
                  <p className="service-card-description">{service.description}</p>
                  <div className="service-card-price">{service.price} грн</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };

  const BookingSection = () => {
    const onSubmit = async (event) => {
      event.preventDefault();
      setFormResult("Відправка...");
      
      const formData = new FormData(event.target);
      formData.append("access_key", "key");

      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        });

        const data = await response.json();
        
        if (data.success) {
          setFormResult("Дякуємо! Ваш запис успішно відправлено. Очікуйте дзвінок від майстра найближчим часом!");
          event.target.reset();
        } else {
          setFormResult("Помилка відправки. Спробуйте ще раз або зателефонуйте нам.");
        }
      } catch (error) {
        setFormResult("Помилка відправки. Спробуйте ще раз або зателефонуйте нам.");
      }
    };

    return (
      <section id="booking" className="booking-section">
        <div className="container">
          <div className="booking-content">
            <div className="booking-text">
              <h2>Запишіться на консультацію</h2>
              <p>Оберіть зручний для вас час, і майстер зв'яжеться з вами для підтвердження запису</p>
            </div>
            <div className="booking-form-wrapper">
              <form className="booking-form" onSubmit={onSubmit}>
                <div className="form-row">
                  <input 
                    type="text" 
                    name="name"
                    placeholder="Ваше ім'я" 
                    className="form-input"
                    required
                  />
                  <input 
                    type="tel" 
                    name="phone"
                    placeholder="Телефон" 
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-row">
                  <select className="form-input" name="service" required>
                    <option value="Чистка HydroDiamond">Чистка HydroDiamond</option>
                    <option value="Ультразвукова/Комбінована чистка">Ультразвукова/Комбінована чистка</option>
                    <option value="Електропорація">Електропорація</option>
                    <option value="Електропорація + зона під очима">Електропорація + зона під очима</option>
                    <option value="RF Ліфтінг">RF Ліфтінг</option>
                    <option value="Киснева мезотерапія">Киснева мезотерапія</option>
                    <option value="HydroDiamond + Киснева мезотерапія + Зволожуюча альгінатна маска">HydroDiamond + Киснева мезотерапія + Зволожуюча альгінатна маска</option>
                    <option value="Ультразвукова чистка + RF Ліфтінг">Ультразвукова чистка + RF Ліфтінг</option>
                  </select>
                  <input 
                    type="date" 
                    name="date"
                    className="form-input"
                    required
                  />
                </div>
                <textarea 
                  name="message"
                  placeholder="Додаткові побажання (необов'язково)" 
                  className="form-input form-textarea"
                  rows="4"
                ></textarea>
                <div className="privacy-checkbox">
                  <input 
                    type="checkbox" 
                    id="privacy-policy" 
                    name="privacy-policy"
                    required
                  />
                  <label htmlFor="privacy-policy">
                    Я погоджуюсь з <Link to="/privacy-policy" target="_blank" rel="noopener noreferrer">політикою конфіденційності</Link>
                  </label>
                </div>
                <button type="submit" className="btn-booking">Записатися</button>
                {formResult && <p className="form-result">{formResult}</p>}
              </form>
              
              <div className="call-alternative">
                <div className="divider">
                  <span>або</span>
                </div>
                <a href="tel:+380675471279" className="call-button">
                  <svg 
                    className="phone-icon" 
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <div className="call-info">
                    <span className="call-name">Ірина</span>
                    <span className="call-number">067 547 12 79</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  const ReviewsSection = () => {
    const getReviewImage = (id) => {
      try {
        return require(`../assets/images/review-${id}.PNG`);
      } catch (err) {
        return null;
      }
    };

    const reviews = [
      { id: 1, image: getReviewImage(1), name: 'Відгук клієнта 1' },
      { id: 2, image: getReviewImage(2), name: 'Відгук клієнта 2' },
      { id: 3, image: getReviewImage(3), name: 'Відгук клієнта 3' },
    ].filter(review => review.image !== null);

    return (
      <section id="reviews" className="reviews-section">
        <div className="container">
          <div className="section-header">
            <h2>Відгуки наших клієнтів</h2>
            <div className="section-line"></div>
          </div>
          <div className="reviews-grid">
            {reviews.map((review) => (
              <div key={review.id} className="review-card">
                <div className="review-image">
                  <img src={review.image} alt={review.name} />
                </div>
              </div>
            ))}
          </div>
          
        </div>
      </section>
    );
  };

  const LocationSection = () => {
    return (
      <section id="location" className="location-section">
        <div className="container">
          <div className="section-header">
            <h2>Розташування</h2>
            <div className="section-line"></div>
          </div>
          
          <div className="location-content">
            <div className="location-info">
              <div className="location-info-card">
                <div className="info-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <div className="info-content">
                  <h3>Адреса</h3>
                  <p>вул. Висоцького, 1, Нетішин, Хмельницька область</p>
                  <p>ЖК "Висоцький", другий поверх </p>
                </div>
              </div>

              <div className="location-info-card">
                <div className="info-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                </div>
                <div className="info-content">
                  <h3>Графік роботи</h3>
                  <div className="schedule">
                    <p><span>Понеділок - Неділя:  10:00 - 21:00</span></p>
                  </div>
                </div>
              </div>

              <div className="location-info-card">
                <div className="info-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </div>
                <div className="info-content">
                  <h3>Instagram</h3>
                  <a 
                    href="https://www.instagram.com/skin_cabinet/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="instagram-link"
                  >
                    @skin_cabinet
                  </a>
                </div>
              </div>
            </div>

            <div className="location-map">
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8944.953589691224!2d26.63437042787183!3d50.3369723805815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x472effdadcac5d43%3A0x74994278d7c3dc70!2sSKIN%20Cabinet!5e1!3m2!1sru!2sua!4v1765372744189!5m2!1sru!2sua"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="SKIN CABINET Location"
                ></iframe>
              </div>
            </div>
          </div>
          
          <div className="location-footer">
            <div className="location-footer-logo">
              <img src={logo} alt="SKIN Cabinet Logo" />
            </div>
            <div className="location-footer-text">
              <p>© 2026 рік. Права захищені</p>
            </div>
          </div>
        </div>
      </section>
    );
  };

  return (
    <main className="main-skin">
      <HeroSection/>
      <AboutSection/>
      <ServicesSection/>
      <BookingSection/>
      <ReviewsSection/>
      <LocationSection/>
    </main>
  );
};

export default MainSkin;

