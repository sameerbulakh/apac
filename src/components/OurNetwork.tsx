import React from 'react';
import { TrendingUp, Users, Globe } from 'lucide-react';

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

  return (
    <section id="network" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Network</h2>
          <div className="mt-4 space-y-4">
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              A thriving ecosystem of educational institutions, sports organizations, and industry partners working together to create opportunities in sports and education. Headquartered in Melbourne, Australia, our initial non-exclusive Asia Pacific partnerships provide in-market presence to the countries below. We are also seeking limited additional partners throughout the region.
            </p>
            <p className="text-xl text-blue-600 hover:text-blue-700 transition-colors">
              <a href="#contact-us">Please contact us to enquire further.</a>
            </p>
          </div>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-8"
              >
                <div className="flex items-center justify-center w-16 h-16 mb-6 rounded-full bg-blue-50">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Network Stats */}
        <div className="mt-20">
          <div className="bg-blue-600 rounded-2xl p-12 text-white">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">20+</div>
                <div className="text-blue-100">Partner Organizations</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">5</div>
                <div className="text-blue-100">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">1000+</div>
                <div className="text-blue-100">Students Enrolled</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurNetwork;