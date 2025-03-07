import React from 'react';
import { Users, Award, Globe } from 'lucide-react';
import Kimon from '../assets/Kimon.png';
import Raul from '../assets/Raul.png';
import Judd from '../assets/Judd.png';
import Guy from '../assets/Guy.png';

const AboutUs = () => {
  const teamMembers = [
    {
      name: "Kimon Taliadoros",
      role: "Founder",
      image: Kimon,
      bio: "With a passion for Australian multicultural success, Kimon leads GameChanger APAC in leveraging world-class sport and educational programs."
    },
    {
      name: "Judd Dileshwar",
      role: "Co-Founder",
      image: Judd,
      bio: "Bringing extensive experience in sports management and education, Judd helps shape the future of sports education in the APAC region."
    },
    {
      name: "Raul V Hernandez",
      role: "Co-Founder",
      image: Raul,
      bio: "With a focus on international partnerships, Raul drives the expansion of GameChanger APAC's global network."
    },
    {
      name: "Guy Bracher",
      role: "Co-Founder",
      image: Guy,
      bio: "Guy is an experienced executive, corporate adviser, trainer and CFO with over 40 years' experience."
    }
  ];

  return (
    <section className="py-24 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Story Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Story</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Founded on the principles of excellence and innovation in sports education, GameChanger APAC has become a leading force in transforming the sports industry across the Asia-Pacific region.
          </p>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-12 mb-20">
          <div className="text-center">
            <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Global Vision</h3>
            <p className="text-gray-600">
              Connecting Australian excellence with international opportunities in sports education and development.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Community Focus</h3>
            <p className="text-gray-600">
              Building strong networks of educators, sports professionals, and industry partners.
            </p>
          </div>
          <div className="text-center">
            <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Excellence</h3>
            <p className="text-gray-600">
              Delivering world-class educational programs and career pathways in sports.
            </p>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-16">Our Leadership Team</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="aspect-w-3 aspect-h-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;