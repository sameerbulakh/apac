import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import WhatWeDo from './components/WhatWeDo';
import HowWeDoIt from './components/HowWeDoIt';
import OurMission from './components/OurMission';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <OurMission />
        <WhatWeDo />
        <HowWeDoIt />
        <AboutUs />
        <ContactUs />
      </main>
    </div>
  );
}

export default App;