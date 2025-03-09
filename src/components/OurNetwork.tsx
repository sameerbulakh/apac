import React from 'react';
import { TrendingUp, Users, Globe, Building2, GraduationCap, Handshake, Globe2, Users2 } from 'lucide-react';

const OurNetwork = () => {
  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-600" />,
      title: "New Business Revenues",
      description: "Create additional revenue streams through education and training programs."
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Capacity Building & Career paths",
      description: "Develop your workforce and create clear progression pathways."
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-600" />,
      title: "Local & Regional Growth",
      description: "Expand your reach and influence across the Asia-Pacific region."
    }
  ];

  const regions = [
    { name: "Australia", count: 50 },
    { name: "New Zealand", count: 25 },
    { name: "Singapore", count: 30 },
    { name: "Malaysia", count: 35 },
    { name: "Indonesia", count: 40 },
    { name: "Thailand", count: 20 }
  ];

  return (
    <section className="py-24 bg-gray-50" id="network">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Network</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A thriving ecosystem of educational institutions, sports organizations, and industry partners working together to create opportunities in sports and education.
          </p>
        </div>

        {/* Global Presence */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-16">
          <div className="flex items-center justify-center mb-8">
            <Globe2 className="w-12 h-12 text-blue-600 mr-4" />
            <h3 className="text-2xl font-bold text-gray-900">Global Presence</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {regions.map((region, index) => (
              <div key={index} className="text-center p-4 rounded-lg bg-gray-50">
                <h4 className="text-lg font-semibold text-gray-900 mb-2">{region.name}</h4>
                <p className="text-3xl font-bold text-blue-600">{region.count}+</p>
                <p className="text-sm text-gray-600">Partners</p>
              </div>
            ))}
          </div>
        </div>

        {/* Network Categories */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-blue-50">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Partnership Benefits */}
        <div className="bg-blue-600 rounded-2xl p-12 text-white">
          <div className="text-center mb-12">
            <Handshake className="w-16 h-16 mx-auto mb-6" />
            <h3 className="text-2xl font-semibold mb-4">Partnership Benefits</h3>
            <p className="text-lg text-blue-100">
              Join our network to access world-class resources, expertise, and opportunities in sports education and development.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">20+</div>
              <p className="text-blue-100">Partner Organizations</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">5</div>
              <p className="text-blue-100">Countries</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">1000+</div>
              <p className="text-blue-100">Students Enrolled</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurNetwork;