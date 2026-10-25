import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Ticker from './components/Ticker';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

// Dedicated Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import ITServices from './pages/ITServices';
import TaxServices from './pages/TaxServices';
import ContactPage from './pages/ContactPage';
import NotFound from './pages/NotFound';

export default function App() {
  return (
    <>
      <ScrollToTop />
      {/* 1. Slim Scrolling Service Ticker */}
      <Ticker />
      
      {/* 2. Premium Corporate Header with Nav & Dropdown */}
      <Header />

      {/* 3. Main View Routes */}
      <main id="main-content" style={{ flex: '1 0 auto' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/it-technology" element={<ITServices />} />
          <Route path="/services/tax-compliance" element={<TaxServices />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      {/* 4. Global Corporate Footer */}
      <Footer />
    </>
  );
}
