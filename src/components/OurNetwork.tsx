import React from 'react';
import { Building2, GraduationCap, Handshake, Globe2, Users2 } from 'lucide-react';

const OurNetwork = () => {
  const networkCategories = [
    {
      title: "Educational Institutions",
      icon: <GraduationCap className="w-8 h-8 text-blue-600" />,
      partners: [
        "Australian Sports Academy",
        "Melbourne Institute of Sport",
        "Sydney Sports College",
        "Queensland Sports University"
      ]
    },
    {
      title: "Sports Organizations",
      icon: <Users2 className="w-8 h-8 text-blue-600" />,
      partners: [
        "National Sports Federation",
        "Regional Sports Councils",
        "Professional Sports Clubs",
        "Youth Sports Academies"
      ]
    },
    {
      title: "Industry Partners",
      icon: <Building2 className="w-8 h-8 text-blue-600" />,
      partners: [
        "Sports Technology Companies",
        "Health & Wellness Centers",
        "Sports Equipment Manufacturers",
        "Sports Medicine Clinics"
      ]
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
          {networkCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8">
              <div className="flex items-center mb-6">
                {category.icon}
                <h3 className="text-xl font-semibold text-gray-900 ml-4">{category.title}</h3>
              </div>
              <ul className="space-y-4">
                {category.partners.map((partner, pIndex) => (
                  <li key={pIndex} className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                    {partner}
                  </li>
                ))}
              </ul>
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
              <div className="text-4xl font-bold mb-2">200+</div>
              <p className="text-blue-100">Active Partners</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold mb-2">6</div>
              <p className="text-blue-100">Countries</p>
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

export default OurNetwork;