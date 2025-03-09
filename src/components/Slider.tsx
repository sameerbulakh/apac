import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Slider = () => {
  const slides = [
    {
      id: 1,
      text: "Sport teaches the most sought-after Universal Skills for successful careers in all professions."
    },
    {
      id: 2,
      text: "Sport qualifications teach Hard Skills - digital literacy, project management, financial and business acumen, marketing, branding and sales."
    },
    {
      id: 3,
      text: "Sport qualifications teach Soft Skills – communication skills, critical thinking and problem solving, adaptability and resilience and leadership and relationship building."
    },
    {
      id: 4,
      text: "Sport qualifications provide Advanced Entry into leading higher education & tertiary programs."
    },
    {
      id: 5,
      text: "Sport creates Friendships and Networks that will flourish and endure over many years."
    },
    {
      id: 6,
      text: "Qualifications through sport provide Pathways to careers in sport and business."
    }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Slide content */}
          <div className="min-h-[200px] flex items-center justify-center text-center">
            <p className="text-2xl md:text-3xl text-gray-900 max-w-4xl mx-auto transition-opacity duration-500">
              {slides[currentSlide].text}
            </p>
          </div>

          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-gray-900" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white transition-colors"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-gray-900" />
          </button>

          {/* Dots navigation */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex space-x-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  currentSlide === index ? 'bg-blue-600' : 'bg-gray-300'
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