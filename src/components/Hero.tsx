import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1517649763962-0c623066013b?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')"
        }}
      >
        <div className="absolute inset-0 bg-gray-900/70"></div>
      </div>
      
      <div className="relative h-full flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-8 leading-tight">
            GameChanger APAC
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 leading-relaxed">
            We embed world-class Australian education programs into innovative sporting organisations that produce career paths and thriving sport, recreation, and health industries.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;