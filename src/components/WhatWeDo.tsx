import React from 'react';
import { Target, Network, TrendingUp, Globe } from 'lucide-react';

const WhatWeDo = () => {
  return (
    <>
      {/* What We Do Section */}
      <section className="bg-white py-16" id="what-we-do">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-8">
            What We Do
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto text-center leading-relaxed">
            We transfer the unique model that has been successfully operating through Australia for two decades.
            We embed world-class Australian education programs within leading Asia Pacific sporting
            organisations, to produce graduates with differentiated skills, pathways and networks to succeed.
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Target className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Mission Driven</h4>
              <p className="text-gray-600">
                Focused on creating meaningful impact in sports education and career development.
              </p>
            </div>
            
            <div className="text-center">
              <Network className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Connected Network</h4>
              <p className="text-gray-600">
                Building bridges between education providers and sports organizations.
              </p>
            </div>
            
            <div className="text-center">
              <TrendingUp className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Proven Results</h4>
              <p className="text-gray-600">
                Track record of successful placements and career advancement.
              </p>
            </div>

            <div className="text-center">
              <Globe className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h4 className="text-xl font-semibold text-gray-900 mb-3">Network Ecosystem</h4>
              <p className="text-gray-600">
                Connecting educational institutions, sports organizations, and industry partners.
              </p>
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