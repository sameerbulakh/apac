import React from 'react';
import { Handshake, School, Settings, ClipboardList, Network, LineChart } from 'lucide-react';

const HowWeDoIt = () => {
  const steps = [
    {
      icon: Handshake,
      title: 'Step 1: Partnership',
      description: 'We partner with superior sporting organisations dedicated to supporting their fans, sponsors and networks in expanding their current and future opportunities.'
    },
    {
      icon: School,
      title: 'Step 2: Education Matching',
      description: 'We match the sporting organisation with suitable Australian Vocational Education and Training providers.'
    },
    {
      icon: Settings,
      title: 'Step 3: Customization',
      description: 'We customise the programs to meet the needs of the sporting organisation, local market and workforce skills requirements.'
    },
    {
      icon: ClipboardList,
      title: 'Step 4: Program Management',
      description: 'We administer and manage delivery of the qualifications.'
    },
    {
      icon: Network,
      title: 'Step 5: Network Connection',
      description: 'We collaborate with our local and international partners to link graduates with employers through our networks.'
    },
    {
      icon: LineChart,
      title: 'Step 6: Quality Assurance',
      description: 'We monitor performance, compliance and accountability to drive continual improvement and value creation for our partners and graduates.'
    }
  ];

  return (
    <section className="py-16 bg-white" id="how-we-do-it">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">How We Do It</h2>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-blue-200 -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div key={index} className="relative flex flex-col items-center">
                {/* Step number bubble with icon */}
                <div className="relative">
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white mb-4 relative z-10">
                    <step.icon className="w-8 h-8" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 text-center leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeDoIt;
