import React, { useState } from 'react';
import { Users, Award, Globe } from 'lucide-react';
import Kimon from '../assets/Kimon.png';
import Raul from '../assets/Raul.png';
import Judd from '../assets/Judd.png';
import Guy from '../assets/Guy.png';
import Modal from './Modal';

const AboutUs = () => {
  const [selectedMember, setSelectedMember] = useState<number | null>(null);

  const teamMembers = [
    {
      name: "Kimon Taliadoros",
      role: "Founder",
      image: Kimon,
      bio: "With a passion for Australian multicultural success, Kimon leads GameChanger APAC in leveraging world-class sport and educational programs.",
      fullBio: `Kimon has occupied leadership roles throughout his life, most recently as Founder of GameChanger APAC, with a mission of sharing Australian sports education with our Asia Pacific friends. Kimon served as Chairman and CEO of Football Victoria, Co-founder of the Professional Footballers Australia and a Socceroo, as well as a coach, commentator and analyst.

Kimon also brings a wealth of experience from a diverse career background in non-football sectors, spanning tenures as an executive, director and consultant. Kimon has been a strong advocate for the role of education in sport, having himself obtained an MBA (UNSW), Bachelor of Business (RMIT) and Graduate Certificate of the Australian Institute of Company Directors (AICD), amongst other post-graduate qualifications. The PFA acknowledges this awarding the annual Kimon Taliadoros Education Grant to aspirational young players committed to their education.`
    },
    {
      name: "Judd Dileshwar",
      role: "Co-Founder",
      image: Judd,
      bio: "Bringing extensive experience in sports management and education, Judd helps shape the future of sports education in the APAC region.",
      fullBio: `Judd is qualified Accountant, experienced businessman, serial entrepreneur, educationist and business advisor. He has over 30 years local and international experience in Education and Training, Finance, Accounting, Tax, Auditing, Management, Business Advisory / Solutions, Mergers & Acquisitions.

Judd has owned and developed a portfolio of successful businesses in the field of Training and Education, Accounting, Hospitality and Food Manufacturing, along with over three decades of leadership and involvement in community-based programs.

Judd has a deep interest in sports, social and educational development and is now part of a leading team establishing these opportunities throughout the Asia Pacific region, which will enable him to involve his robust local and international network of colleagues and professionals.`
    },
    {
      name: "Raul V Hernandez",
      role: "Co-Founder",
      image: Raul,
      bio: "With a focus on international partnerships, Raul drives the expansion of GameChanger APAC's global network.",
      fullBio: `Raul V Hernandez has dedicated his career in Vocational Education. He has been CEO of various Vocation Education Providers in Australia referred to as RTO (Registered Training Organisations) for more than a decade. His advocacy is to promote the importance of Vocational Education specially in the Asia Pacific region.

He is also the Founder of Philippine Australian Committee on Education (PACE) as an informal platform of discussion between academes of the two countries, both in Higher Education and Vocational Education and Training. He also served as the Honorary Consul General of the Philippines to Victoria, Australia for six years.`
    },
    {
      name: "Guy Bracher",
      role: "Co-Founder",
      image: Guy,
      bio: "Guy is an experienced executive, corporate adviser, trainer and CFO with over 40 years' experience.",
      fullBio: `Guy specialises in Technology Commercialisation. He is an experienced executive, corporate adviser, trainer and CFO with over 40 years' experience. He has a proven track record in working with seed, start-ups and small and medium sized businesses, both as a consultant, corporate finance adviser and as a Virtual Chief Financial Officer.

Beginning with his service with the VECCI Business Angels Service, Guy has also had a significant involvement in high growth technology companies and had success in developing strategy, business development, capital raising/funding, as well as mentoring/coaching.

Guy has worked for the Australian Sports Technologies Network assisting and training sportstech startups and scale ups and has a strong network in the sports technology and business community.

Guy holds a Diploma of Business, Graduate Diploma of Law, and is a Fellow of Chartered Accountants Australia and New Zealand. He also completed the Venture Capital Executive Program at Haas Business School and Global Access Program for High Technologies at Anderson Business School, UC.`
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
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-full">
                <div className="aspect-w-3 aspect-h-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-blue-600 font-medium mb-4">{member.role}</p>
                    <p className="text-gray-600">{member.bio}</p>
                  </div>
                  <button 
                    onClick={() => setSelectedMember(index)}
                    className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-200 mt-4"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            ))}
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