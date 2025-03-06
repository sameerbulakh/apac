import React from 'react';
import stadium from '../assets/stadium.jpeg';

const Hero = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[800px]">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={stadium} 
            alt="Stadium" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Content */}
        <div className="relative h-full flex items-center justify-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Transforming Sports Education
              <br />
              in the Asia-Pacific
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Connecting Australian expertise with international opportunities in sports education and career development.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-blue-50 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-blue-600 rounded-2xl p-12 text-white">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-2xl font-semibold mb-6">Our Mission</h3>
              <p className="text-xl leading-relaxed">
                To revolutionize sports education and career development in the Asia-Pacific region by creating meaningful connections between Australian expertise and international opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;