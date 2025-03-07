import React from 'react';
import TeamMemberLayout from '../../components/TeamMemberLayout';

const KimonTaliadoros = () => {
  return (
    <TeamMemberLayout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <img
            src="/images/team/kimon.jpg"
            alt="Kimon Taliadoros"
            className="w-48 h-48 rounded-full mx-auto mb-8 object-cover"
          />
          <h1 className="text-4xl font-bold text-gray-900">Kimon Taliadoros</h1>
          <p className="mt-2 text-xl text-gray-600">Founder</p>
        </div>
        
        <div className="prose prose-lg mx-auto">
          <p>
            Kimon has occupied leadership roles throughout his life, most recently as Founder of
            GameChanger APAC, with a mission of sharing Australian sports education with our Asia Pacific
            friends.
          </p>
          <p>
            Kimon served as Chairman and CEO of Football Victoria, Co-founder of the Professional
            Footballers Australia and a Socceroo, as well as a coach, commentator and analyst.
          </p>
          <p>
            Kimon also brings a wealth of experience from a diverse career background in non-football
            sectors, spanning tenures as an executive, director and consultant.
          </p>
          <p>
            Kimon has been a strong advocate for the role of education in sport, having himself obtained an
            MBA (UNSW), Bachelor of Business (RMIT) and Graduate Certificate of the Australian Institute
            of Company Directors (AICD), amongst other post-graduate qualifications. The PFA
            acknowledges this awarding the annual Kimon Taliadoros Education Grant to aspirational young
            players committed to their education.
          </p>
        </div>
      </div>
    </TeamMemberLayout>
  );
};

export default KimonTaliadoros;
