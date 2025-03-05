import React from 'react';
import { Target, Network, TrendingUp } from 'lucide-react';

const WhatWeDo = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Do</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            To empower aspirational young people to launch successful livelihoods by developing their skills, qualifications, networks, and experience in a dynamic sporting environment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900">How We Do It</h3>
            <p className="text-lg text-gray-600">
              We activate a network ecosystem that produces qualified, job-ready graduates for the sports, recreation, and health industries. Our program provides advanced standing in tertiary courses, ensuring our graduates are well-prepared for their careers.
            </p>
          </div>
          <div className="bg-gray-50 rounded-2xl p-8">
            <Network className="w-16 h-16 text-blue-600 mb-4" />
            <h4 className="text-xl font-semibold text-gray-900 mb-2">Network Ecosystem</h4>
            <p className="text-gray-600">
              Our extensive network connects educational institutions, sports organizations, and industry partners to create meaningful career pathways.
            </p>
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-12 mb-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <Target className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Mission Driven</h4>
              <p className="text-gray-600">
                Focused on creating meaningful impact in sports education and career development.
              </p>
            </div>
            <div className="text-center">
              <Network className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Connected Network</h4>
              <p className="text-gray-600">
                Building bridges between education providers and sports organizations.
              </p>
            </div>
            <div className="text-center">
              <TrendingUp className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Proven Results</h4>
              <p className="text-gray-600">
                Track record of successful placements and career advancement.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-blue-600 rounded-2xl p-12 text-white">
          <h3 className="text-2xl font-semibold mb-8 text-center">Success Metrics</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">95%</div>
              <p className="text-blue-100">Graduate Employment Rate</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">500+</div>
              <p className="text-blue-100">Partner Organizations</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">1000+</div>
              <p className="text-blue-100">Success Stories</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;