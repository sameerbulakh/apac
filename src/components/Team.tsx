import React from 'react';
import { Link } from 'react-router-dom';

const teamMembers = [
  {
    name: 'Kimon Taliadoros',
    role: 'Founder',
    image: '/images/team/kimon.jpg',
    bio: [
      'Kimon has occupied leadership roles throughout his life, most recently as Founder of GameChanger APAC, with a mission of sharing Australian sports education with our Asia Pacific friends.',
      'Kimon served as Chairman and CEO of Football Victoria, Co-founder of the Professional Footballers Australia and a Socceroo, as well as a coach, commentator and analyst.',
      'Kimon also brings a wealth of experience from a diverse career background in non-football sectors, spanning tenures as an executive, director and consultant.'
    ],
    path: '/team/kimon-taliadoros'
  },
  {
    name: 'Raul V Hernandez',
    role: 'Director',
    image: '/images/team/raul.jpg',
    bio: [
      'Raul V Hernandez has dedicated his career in Vocational Education.',
      'He has been CEO of various Vocation Education Providers in Australia referred to as RTO (Registered Training Organisations) for more than a decade.',
      'His advocacy is to promote the importance of Vocational Education specially in the Asia Pacific region.'
    ],
    path: '/team/raul-hernandez'
  },
  {
    name: 'Judd Dileshwar',
    role: 'Director',
    image: '/images/team/placeholder.jpg',
    bio: [
      'Judd is qualified Accountant, experienced businessman, serial entrepreneur, educationist and business advisor.',
      'He has over 30 years local and international experience in Education and Training, Finance, Accounting, Tax, Auditing, Management.',
      'Judd has owned and developed a portfolio of successful businesses in the field of Training and Education.'
    ],
    path: '/team/judd-dileshwar'
  },
  {
    name: 'Guy Bracher',
    role: 'Director',
    image: '/images/team/placeholder.jpg',
    bio: [
      'Guy specialises in Technology Commercialisation with over 40 years of experience.',
      'He has worked for the Australian Sports Technologies Network assisting and training sportstech startups and scale ups.',
      'Guy has a proven track record in working with seed, start-ups and small and medium sized businesses.'
    ],
    path: '/team/guy-bracher'
  }
];

const Team = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">Our Team</h2>
          <p className="mt-4 text-lg text-gray-600">
            Meet the experienced professionals behind GameChanger APAC
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <div key={member.name} className="text-center">
              <div className="relative group">
                <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-center object-cover group-hover:opacity-90 transition-opacity"
                  />
                </div>
                <div className="mt-4">
                  <h3 className="text-lg font-medium text-gray-900">{member.name}</h3>
                  <p className="text-sm text-gray-500">{member.role}</p>
                  <div className="mt-4 space-y-2">
                    {member.bio.map((line, index) => (
                      <p key={index} className="text-sm text-gray-600">
                        {line}
                      </p>
                    ))}
                  </div>
                  <Link
                    to={member.path}
                    className="mt-4 inline-block px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
                  >
                    Read more
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
