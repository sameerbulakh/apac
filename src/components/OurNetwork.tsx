import React from 'react';
import { TrendingUp, Users, Globe } from 'lucide-react';

const OurNetwork = () => {
  const countries = [
    { name: 'Singapore', code: 'SG' },
    { name: 'Malaysia', code: 'MY' },
    { name: 'India', code: 'IN' },
    { name: 'Indonesia', code: 'ID' },
    { name: 'Philippines', code: 'PH' },
    { name: 'Fiji', code: 'FJ' },
    { name: 'Sri Lanka', code: 'LK' },
    { name: 'Dubai/UAE', code: 'AE' }
  ];

  const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8 text-blue-600 group-hover:scale-110 transition-transform" />,
      title: "New Business Revenues",
      description: "Create additional revenue streams through education and training programs."
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600 group-hover:scale-110 transition-transform" />,
      title: "Capacity Building & Career paths",
      description: "Develop your workforce and create clear progression pathways."
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-600 group-hover:scale-110 transition-transform" />,
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
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {countries.map((country) => (
                <div 
                  key={country.code}
                  className="group flex items-center justify-center p-4 bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="flex items-center space-x-3">
                    <img
                      src={`https://flagcdn.com/48x36/${country.code.toLowerCase()}.png`}
                      alt={`${country.name} flag`}
                      className="w-8 h-6 rounded shadow-sm"
                    />
                    <span className="text-gray-900 font-medium group-hover:text-blue-600 transition-colors">
                      {country.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <p className="text-xl text-blue-600 hover:text-blue-700 transition-colors mt-8">
              <a href="#contact">Please contact us to enquire further.</a>
            </p>
          </div>
        </div>

        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-gray-900">Partnership Benefits</h3>
          </div>
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
      </div>
    </section>
  );
};

export default OurNetwork;