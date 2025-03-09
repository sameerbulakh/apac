import React from 'react';
import { Target, Users, Award, Network } from 'lucide-react';

const WhatWeDo = () => {
  const features = [
    {
      icon: <Target className="w-8 h-8 text-blue-600" />,
      title: "Our Mission",
      description: "To revolutionize career development in the Asia-Pacific by leveraging Australian sporting and educational expertise."
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Our Network",
      description: "We connect with leading sports organizations, educational institutions, and industry partners across the Asia-Pacific region."
    },
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: "Our Programs",
      description: "Internationally recognized qualifications that combine sports education with practical industry experience."
    },
    {
      icon: <Network className="w-8 h-8 text-blue-600" />,
      title: "Our Ecosystem",
      description: "A comprehensive support system that nurtures talent and facilitates seamless transitions into rewarding careers."
    }
  ];

  return (
    <>
      {/* What We Do Section */}
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

      {/* How We Do It Section */}
      <section className="bg-white py-16" id="how-we-do-it">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-8">
            How We Do It
          </h2>
          <div className="text-xl text-gray-600 max-w-4xl mx-auto text-center leading-relaxed space-y-8">
            <p>
              We observe a matching process based on criteria fundamental to the success of this program.
            </p>
            <p>
              We identify sporting organisations committed to developing their current and future workforce in their
              own environment, through their fans, communities, networks and sponsors.
            </p>
            <p>
              We match them with select Australian Vocational Educational & Training organisations that have
              strategically prioritised specific Asia-pacific markets and cities.
            </p>
            <p>
              We assist in building networks and protocols to activate the local ecosystem for performance and
              financial success.
            </p>
            <p>
              We craft the required governance, commercial and logistical agreements to facilitate implementation.
            </p>
            <p>
              We monitor and manage the agreement objectives, performance, compliance and accountability.
            </p>
            <p>
              We continue to build the network across Asia Pacific to add compound value to the qualifications,
              networks, and financial outcomes of all the stakeholders.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhatWeDo;