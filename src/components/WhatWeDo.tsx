import React from 'react';
import { Target, Lightbulb, Award, Network } from 'lucide-react';

const WhatWeDo = () => {
  const features = [
    {
      icon: <Target className="w-8 h-8 text-blue-600" />,
      title: "Mission Driven",
      description: "Focussed on creating meaningful impacts through sport."
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-blue-600" />,
      title: "Innovation",
      description: "Combining valued workplace education and training with industry partnerships."
    },
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: "Proven Results",
      description: "Building on track record of success over many years in Australia."
    },
    {
      icon: <Network className="w-8 h-8 text-blue-600" />,
      title: "Network Ecosystem",
      description: "Driving partnerships, trade and people-to-people links across Asia Pacific."
    }
  ];

  return (
    <section id="what-we-do" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">What We Do</h2>
          <p className="mt-4 text-xl text-gray-600">
            We embed world-class Australian education programs within leading sporting organisations, to produce graduates with confidence and differentiated skills, pathways and networks to succeed.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-2">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-blue-50">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;