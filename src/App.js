import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import MainSkin from './page/main-skin';
import PrivacyPolicy from './page/privacy-policy';
import './App.css';
import logo from './assets/images/skin-logo.png';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <div className="App">
        {loading && (
          <div className="preloader">
            <div className="preloader-content">
              <img src={logo} alt="SKIN Cabinet Logo" className="preloader-logo" />
            </div>
          </div>
        )}
        <Navbar />
        <Routes>
          <Route path="/" element={<MainSkin />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
