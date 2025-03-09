import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhatWeDo from './components/WhatWeDo';
import HowWeDoIt from './components/HowWeDoIt';
import OurNetwork from './components/OurNetwork';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <WhatWeDo />
        <HowWeDoIt />
        <OurNetwork />
        <AboutUs />
        <ContactUs />
      </main>
      <Footer />
    </div>
  );
}

export default App;