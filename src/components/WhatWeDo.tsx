import React from 'react';
import { Target, Lightbulb, Trophy, Network } from 'lucide-react';

const WhatWeDo = () => {
  const features = [
    {
      name: 'Mission Driven',
      description: 'Focussed on creating meaningful impacts through sport.',
      icon: Target
    },
    {
      name: 'Innovation',
      description: 'Combining valued workplace education and training with industry partnerships.',
      icon: Lightbulb
    },
    {
      name: 'Proven Results',
      description: 'Building on track record of success over many years in Australia.',
      icon: Trophy
    },
    {
      name: 'Network Ecosystem',
      description: 'Driving partnerships, trade and people-to-people links across Asia Pacific.',
      icon: Network
    }
  ];

  return (
    <>
      {/* What We Do Section */}
      <section className="py-16 bg-gray-50" id="what-we-do">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What We Do</h2>
            <p className="text-xl leading-relaxed text-gray-600">
              We embed world-class Australian education programs within leading sporting organisations, to produce graduates with confidence and differentiated skills, pathways and networks to succeed.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div key={feature.name} className="text-center">
                <div className="flex justify-center">
                  <div className="h-16 w-16 text-blue-600">
                    <feature.icon className="h-full w-full" />
                  </div>
                </div>
                <h3 className="mt-6 text-xl font-semibold text-gray-900">{feature.name}</h3>
                <p className="mt-4 text-base text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
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