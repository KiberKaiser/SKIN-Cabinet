import React, { useState, useEffect } from 'react';
import './main-skin.css';
import Footer from '../components/Footer';

const MainSkin = () => {
  const HeroSection = () => (
    <section id="home" className="hero-section">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1><span className="typing">SKIN CABINET</span></h1>
        <p className="hero-subtitle">Професійна косметологія та комплексний догляд за шкірою</p>
        <p className="hero-description">Ваша краса - наш пріоритет</p>
        <div className="hero-buttons">
          <a href="#services" className="btn btn-primary">Наші послуги</a>
          <a href="#contact" className="btn btn-secondary">Записатися</a>
        </div>
      </div>
    </section>
  );

  const AboutSection = () => (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-header">
          <h2>Про нас</h2>
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
                    SKIN CABINET - це простір, де поєднуються професійність, інновації 
                    та індивідуальний підхід до кожної клієнтки. Ми працюємо з найкращими 
                    технологіями та сертифікованими косметичними засобами для досягнення 
                    максимального результату.
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
                    Ми забезпечуємо якісний та безпечний догляд за вашою шкірою. 
                    Наш спектр послуг включає від базового догляду до складних 
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
                    Сертифікований спеціаліст з багаторічним досвідом роботи в галузі 
                    косметології. Постійно вдосконалює свої навички, відвідуючи 
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
    const [hoveredService, setHoveredService] = useState(null);

  
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
      }
    ];

    return (
      <section id="services" className="services-section">
        <div className="container">
          <div className="section-header">
            <h2>Прайс-лист</h2>
            <div className="section-line"></div>
          </div>
          <div className="services-grid">
            {services.map((service) => (
              <div 
                key={service.id}
                className="service-card"
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
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
    return (
      <section id="booking" className="booking-section">
        <div className="container">
          <div className="booking-content">
            <div className="booking-text">
              <h2>Запишіться на консультацію</h2>
              <p>Оберіть зручний для вас час, і ми зв'яжемося з вами для підтвердження запису</p>
            </div>
            <div className="booking-form-wrapper">
              <form className="booking-form">
                <div className="form-row">
                  <input 
                    type="text" 
                    placeholder="Ваше ім'я" 
                    className="form-input"
                    required
                  />
                  <input 
                    type="tel" 
                    placeholder="Телефон" 
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-row">
                  <select className="form-input" required>
                    <option value="">Оберіть послугу</option>
                    <option value="hydrodiamond">Чистка HydroDiamond</option>
                    <option value="ultrasonic">Ультразвукова/Комбінована чистка</option>
                    <option value="electroporation">Електропорація</option>
                    <option value="electroporation-eye">Електропорація + зона під очима</option>
                    <option value="rf-lifting">RF Ліфтінг</option>
                    <option value="oxygen">Киснева мезотерапія</option>
                  </select>
                  <input 
                    type="date" 
                    className="form-input"
                    required
                  />
                </div>
                <textarea 
                  placeholder="Додаткові побажання (необов'язково)" 
                  className="form-input form-textarea"
                  rows="4"
                ></textarea>
                <button type="submit" className="btn-booking">Записатися</button>
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

  const GallerySection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    

    const getGalleryImage = (id) => {
      try {
        return require(`../assets/images/work-${id}.jpg`);
      } catch (err) {
        return null;
      }
    };
    
    const galleryImages = [
      { id: 1, src: getGalleryImage(1), alt: 'Робота 1' },
      { id: 2, src: getGalleryImage(2), alt: 'Робота 2' },
      { id: 3, src: getGalleryImage(3), alt: 'Робота 3' },
      { id: 4, src: getGalleryImage(4), alt: 'Робота 4' },
      { id: 5, src: getGalleryImage(5), alt: 'Робота 5' },
      { id: 6, src: getGalleryImage(6), alt: 'Робота 6' },
      { id: 7, src: getGalleryImage(7), alt: 'Робота 7' },
      { id: 8, src: getGalleryImage(8), alt: 'Робота 8' },
    ].filter(img => img.src !== null); 

    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
      }, 5000);
      return () => clearInterval(timer);
    }, [galleryImages.length]);

    const nextSlide = () => {
      setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
    };

    const prevSlide = () => {
      setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
    };

    const goToSlide = (index) => {
      setCurrentSlide(index);
    };

    return (
      <section id="gallery" className="gallery-section">
        <div className="container">
          <div className="section-header">
            <h2>Фотогалерея</h2>
            <div className="section-line"></div>
          </div>
          <div className="gallery-slider">
            <button className="slider-btn prev" onClick={prevSlide} aria-label="Попередній слайд">
              ‹
            </button>
            
            <div className="slider-container">
              <div 
                className="slider-track"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {galleryImages.map((image) => (
                  <div key={image.id} className="slide">
                    <img src={image.src} alt={image.alt} />
                  </div>
                ))}
              </div>
            </div>

            <button className="slider-btn next" onClick={nextSlide} aria-label="Наступний слайд">
              ›
            </button>

            <div className="slider-dots">
              {galleryImages.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === currentSlide ? 'active' : ''}`}
                  onClick={() => goToSlide(index)}
                  aria-label={`Перейти до слайду ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="gallery-thumbnails">
            {galleryImages.map((image, index) => (
              <div
                key={image.id}
                className={`thumbnail ${index === currentSlide ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              >
                <img src={image.src} alt={image.alt} />
              </div>
            ))}
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
      <GallerySection/>
      <Footer/>
    </main>
  );
};

export default MainSkin;

