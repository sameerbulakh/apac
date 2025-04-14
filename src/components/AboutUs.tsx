import React, { useState } from 'react';
import { Target, Users, Award, Globe } from 'lucide-react';
import Kimon from '../assets/Kimon.png';
import Modal from './Modal';

const AboutUs = () => {
  const [selectedMember, setSelectedMember] = useState<number | null>(null);

  const values = [
    {
      icon: <Target className="w-6 h-6 text-blue-600" />,
      title: "Vision",
      description: "To be the leading facilitator of sports education and career development in the Asia-Pacific region."
    },
    {
      icon: <Users className="w-6 h-6 text-blue-600" />,
      title: "Values",
      description: "Excellence, integrity, and innovation in everything we do to serve our partners and students."
    },
    {
      icon: <Award className="w-6 h-6 text-blue-600" />,
      title: "Impact",
      description: "Creating lasting positive change in the sports industry through education and career development."
    }
  ];

  const teamMembers = [
    {
      name: "Kimon Taliadoros",
      role: "Founder",
      image: Kimon,
      bio: "With a passion for Australian multicultural success, Kimon leads GameChanger APAC in leveraging world-class sport and educational programs.",
      fullBio: `Kimon has occupied leadership roles throughout his life, most recently as Founder of GameChanger APAC, with a mission of sharing Australian sports education with our Asia Pacific friends. Kimon served as Chairman and CEO of Football Victoria, Co-founder of the Professional Footballers Australia and a Socceroo, as well as a coach, commentator and analyst.

Kimon also brings a wealth of experience from a diverse career background in non-football sectors, spanning tenures as an executive, director and consultant. Kimon has been a strong advocate for the role of education in sport, having himself obtained an MBA (UNSW), Bachelor of Business (RMIT) and Graduate Certificate of the Australian Institute of Company Directors (AICD), amongst other post-graduate qualifications. The PFA acknowledges this awarding the annual Kimon Taliadoros Education Grant to aspirational young players committed to their education.`
    }
  ];

  return (
    <section className="py-24 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Story Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Story</h2>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Founded on the principles of sport being an exceptional teacher, GameChanger APAC leads the transformation of learning across the Asia Pacific sports industry.
          </p>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {values.map((value, index) => (
            <div key={index} className="text-center">
              <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                {value.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>

        {/* Team Section */}
        <div className="mt-24">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-16">Our Leadership Team</h2>
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3">
                <img
                  src={teamMembers[0].image}
                  alt={teamMembers[0].name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 md:w-2/3">
                <h3 className="text-2xl font-semibold text-gray-900 mb-2">{teamMembers[0].name}</h3>
                <p className="text-blue-600 font-medium mb-4">{teamMembers[0].role}</p>
                <div className="prose prose-blue max-w-none">
                  {teamMembers[0].fullBio.split('\n\n').map((paragraph, i) => (
                    <p key={i} className="text-gray-600 mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Profile Modal */}
      <Modal
        isOpen={selectedMember !== null}
        onClose={() => setSelectedMember(null)}
      >
        {selectedMember !== null && (
          <div className="space-y-4">
            <div className="flex items-center space-x-4 mb-6">
              <img
                src={teamMembers[selectedMember].image}
                alt={teamMembers[selectedMember].name}
                className="w-24 h-24 rounded-full object-cover"
              />
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {teamMembers[selectedMember].name}
                </h2>
                <p className="text-blue-600 font-medium">
                  {teamMembers[selectedMember].role}
                </p>
              </div>
            </div>
            <div className="prose prose-blue max-w-none">
              {teamMembers[selectedMember].fullBio.split('\n\n').map((paragraph, i) => (
                <p key={i} className="text-gray-600 mb-4">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
};

export default AboutUs;