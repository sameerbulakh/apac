import React from 'react';
import TeamMemberLayout from '../../components/TeamMemberLayout';

const RaulHernandez = () => {
  return (
    <TeamMemberLayout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <img
            src="/images/team/raul.jpg"
            alt="Raul V Hernandez"
            className="w-48 h-48 rounded-full mx-auto mb-8 object-cover"
          />
          <h1 className="text-4xl font-bold text-gray-900">Raul V Hernandez</h1>
          <p className="mt-2 text-xl text-gray-600">Director</p>
        </div>
        
        <div className="prose prose-lg mx-auto">
          <p>
            Raul V Hernandez has dedicated his career in Vocational Education. He has been
            CEO of various Vocation Education Providers in Australia referred to as RTO
            (Registered Training Organisations) for more than a decade. His advocacy is to
            promote the importance of Vocational Education specially in the Asia Pacific region.
          </p>
          <p>
            He is also the Founder of Philippine Australian Committee on Education (PACE) as
            an informal platform of discussion between academes of the two countries, both in
            Higher Education and Vocational Education and Training. He also served as the
            Honorary Consul General of the Philippines to Victoria, Australia for six years.
          </p>
        </div>
      </div>
    </TeamMemberLayout>
  );
};

export default RaulHernandez;
