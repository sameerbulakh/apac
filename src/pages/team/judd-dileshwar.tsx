import React from 'react';
import TeamMemberLayout from '../../components/TeamMemberLayout';

const JuddDileshwar = () => {
  return (
    <TeamMemberLayout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <img
            src="/images/team/placeholder.jpg"
            alt="Judd Dileshwar"
            className="w-48 h-48 rounded-full mx-auto mb-8 object-cover"
          />
          <h1 className="text-4xl font-bold text-gray-900">Judd Dileshwar</h1>
          <p className="mt-2 text-xl text-gray-600">Director</p>
        </div>
        
        <div className="prose prose-lg mx-auto">
          <p>
            Judd is qualified Accountant, experienced businessman, serial entrepreneur, educationist and
            business advisor. He has over 30 years local and international experience in Education and Training,
            Finance, Accounting, Tax, Auditing, Management, Business Advisory / Solutions, Mergers &amp;
            Acquisitions.
          </p>
          <p>
            Judd has owned and developed a portfolio of successful businesses in the field of Training and
            Education, Accounting, Hospitality and Food Manufacturing, along with over three decades of
            leadership and involvement in community-based programs.
          </p>
          <p>
            Judd has a deep interest in sports, social and educational development and is now part of a leading
            team establishing these opportunities throughout the Asia Pacific region, which will enable him to
            involve his robust local and international network of colleagues and professionals.
          </p>
        </div>
      </div>
    </TeamMemberLayout>
  );
};

export default JuddDileshwar;
