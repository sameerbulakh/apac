import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhatWeDo from './components/WhatWeDo';
import Slider from './components/Slider';
import Services from './components/Services';
import OurCourses from './components/OurCourses';
import AboutUs from './components/AboutUs';
import OurNetwork from './components/OurNetwork';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <WhatWeDo />
        <Slider />
        <Services />
        <OurCourses />
        <AboutUs />
        <OurNetwork />
        <ContactUs />
      </main>
    </div>
  );
}

export default App;