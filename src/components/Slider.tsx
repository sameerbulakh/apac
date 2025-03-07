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
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const changeSlide = useCallback((newIndex: number) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide(newIndex);
    setTimeout(() => setIsAnimating(false), 500);
  }, [isAnimating]);

  const nextSlide = useCallback(() => {
    const newIndex = (currentSlide + 1) % slides.length;
    changeSlide(newIndex);
  }, [currentSlide, changeSlide]);

  const prevSlide = () => {
    const newIndex = (currentSlide - 1 + slides.length) % slides.length;
    changeSlide(newIndex);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <div className="relative bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative h-64 overflow-hidden rounded-xl bg-gradient-to-br from-blue-50 via-white to-blue-50 shadow-lg">
          {/* Slide content */}
          <div className="px-12">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 flex items-center justify-center p-8 transition-opacity duration-500 ${
                  currentSlide === index ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <p className="text-2xl text-center text-gray-800 font-medium">
                  {slide}
                </p>
              </div>
            ))}
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            disabled={isAnimating}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6 text-blue-600" />
          </button>
          <button
            onClick={nextSlide}
            disabled={isAnimating}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow-lg transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6 text-blue-600" />
          </button>

          {/* Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => changeSlide(index)}
                disabled={isAnimating}
                className={`w-2 h-2 rounded-full transition-colors disabled:opacity-50 ${
                  currentSlide === index ? 'bg-blue-600' : 'bg-gray-200 hover:bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;