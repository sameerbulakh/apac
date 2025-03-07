import React from 'react';
import TeamMemberLayout from '../../components/TeamMemberLayout';

const GuyBracher = () => {
  return (
    <TeamMemberLayout>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <img
            src="/images/team/placeholder.jpg"
            alt="Guy Bracher"
            className="w-48 h-48 rounded-full mx-auto mb-8 object-cover"
          />
          <h1 className="text-4xl font-bold text-gray-900">Guy Bracher</h1>
          <p className="mt-2 text-xl text-gray-600">Director</p>
        </div>
        
        <div className="prose prose-lg mx-auto">
          <p>
            Guy specialises in Technology Commercialisation. Guy is an experienced executive, corporate 
            adviser, trainer and CFO with over 40 years' experience. He has a proven track record in 
            working with seed, start-ups and small and medium sized businesses, both as a consultant, 
            corporate finance adviser and as a Virtual Chief Financial Officer.
          </p>
          <p>
            Beginning with his service with the VECCI Business Angels Service, Guy has also had a 
            significant involvement in high growth technology companies and had success in developing 
            strategy, business development, capital raising/funding, as well as mentoring/coaching.
          </p>
          <p>
            Guy has worked for the Australian Sports Technologies Network assisting and training 
            sportstech startups and scale ups and has a strong network in the sports technology and 
            business community.
          </p>
          <p>
            Guy holds a Diploma of Business, Graduate Diploma of Law, and is a Fellow of Chartered 
            Accountants Australia and New Zealand. He also completed the Venture Capital Executive 
            Program at Haas Business School and Global Access Program for High Technologies at 
            Anderson Business School, UC.
          </p>
        </div>
      </div>
    </TeamMemberLayout>
  );
};

export default GuyBracher;
