import React, { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  "Sport teaches the most sought-after universal skills for successful careers in all professions",
  "Sport qualifications teach Hard Skills - digital literacy, project management, financial and business acumen, marketing, branding and sales.",
  "Sport qualifications teach Soft Skills – communication skills, critical thinking and problem solving, adaptability and resilience and leadership and relationship building.",
  "Sport qualifications provide advanced entry into leading undergraduate programs in Australia.",
  "Sport creates friendships and networks that will flourish and endure over many years."
];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((current) => (current === slides.length - 1 ? 0 : current + 1));
  }, []);

  const prev = useCallback(() => {
    setCurrent((current) => (current === 0 ? slides.length - 1 : current - 1));
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prev}
            className="absolute -left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button
            onClick={next}
            className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Slide Content */}
          <div className="overflow-hidden px-16">
            <div
              className="transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              <div className="flex">
                {slides.map((text, index) => (
                  <div
                    key={index}
                    className="w-full flex-shrink-0 px-12"
                    style={{ flex: '0 0 100%' }}
                  >
                    <p className="text-xl md:text-2xl text-gray-600 text-center leading-relaxed">
                      {text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="flex justify-center space-x-2 mt-8">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === current ? 'bg-blue-600' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;