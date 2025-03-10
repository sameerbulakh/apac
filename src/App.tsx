import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import WhatWeDo from './components/WhatWeDo';
import HowWeDoIt from './components/HowWeDoIt';
import Slider from './components/Slider';
import Services from './components/Services';
import OurCourses from './components/OurCourses';
import AboutUs from './components/AboutUs';
import OurNetwork from './components/OurNetwork';
import ContactUs from './components/ContactUs';
import Privacy from './components/Privacy';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <div className="min-h-screen bg-white">
            <Header />
            <main>
              <Hero />
              <WhatWeDo />
              <HowWeDoIt />
              <Slider />
              <Services />
              <OurCourses />
              <AboutUs />
              <OurNetwork />
              <ContactUs />
            </main>
            <Footer />
          </div>
        } />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </Router>
  );
}

export default App;